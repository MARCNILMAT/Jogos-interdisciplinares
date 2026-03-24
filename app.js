import { QUESTIONS_DB } from './questions.js';

// --- CONFIGURAÇÃO SUPABASE ---
// PREENCHA ESTAS VARIÁVEIS COM SUA CONTA SUPABASE
const SUPABASE_URL = 'https://thjrggyochdirwnhrwzr.supabase.co'; 
const SUPABASE_KEY = ''; // Vocé deve colar a ANON KEY aqui

let supabaseClient = null;

if (SUPABASE_URL && SUPABASE_KEY) {
    try {
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
        console.log("Supabase inicializado com sucesso!");
    } catch (e) {
        console.error("Erro ao inicializar Supabase:", e);
    }
} else {
    console.warn("Supabase não configurado. Os dados serão salvos APENAS no LocalStorage (Navegador).");
}

// --- ESTADO DA APLICAÇÃO ---
const state = {
    view: 'login', // 'login', 'dashboard', 'game', 'admin'
    currentStudent: null, // { name, grade, class, discipline, score, medals }
    adminFilter: 'all', // 'all' ou 'Disciplina'
    game: {
        questions: [],
        currentIndex: 0,
        score: 0,
        lives: 3,
        combo: 1,
        consecutiveCorrect: 0
    }
};

// --- SELETORES DOM ---
const screens = {
    login: document.getElementById('screen-login'),
    dashboard: document.getElementById('screen-dashboard'),
    game: document.getElementById('screen-game'),
    admin: document.getElementById('screen-admin')
};

// Componentes Login
const loginForm = document.getElementById('login-form');
const disciplineButtons = document.querySelectorAll('.discipline-btn');
const studentGrade = document.getElementById('student-grade');
const studentTopic = document.getElementById('student-topic');
const topicContainer = document.getElementById('topic-container');
let selectedDiscipline = null;

// Componentes Dashboard
const dashGreeting = document.getElementById('dash-greeting');
const dashSubtitle = document.getElementById('dash-subtitle');
const dashScore = document.getElementById('dash-score');
const dashMedals = document.getElementById('dash-medals');
const dashDisciplineName = document.getElementById('dash-discipline-name');
const dashProgress = document.getElementById('dash-progress');
const dashProgressText = document.getElementById('dash-progress-text');
const btnStartGame = document.getElementById('btn-start-game');
const btnLogout = document.getElementById('dash-logout');

// Componentes Jogo
const gameLives = document.getElementById('game-lives');
const gameCombo = document.getElementById('game-combo');
const currentScore = document.getElementById('current-score');
const questionSkill = document.getElementById('question-skill');
const questionText = document.getElementById('question-text');
const optionsGrid = document.getElementById('options-grid');
const feedbackOverlay = document.getElementById('feedback-overlay');
const fbIcon = document.getElementById('fb-icon');
const fbTitle = document.getElementById('fb-title');
const fbExplanation = document.getElementById('fb-explanation');
const btnNextQuestion = document.getElementById('btn-next-question');

// Componentes Admin
const gotoAdminBtn = document.getElementById('goto-admin');
const adminBackBtn = document.getElementById('admin-back');
const adminTableBody = document.querySelector('#admin-table tbody');
const admTotalStudents = document.getElementById('adm-total-students');
const admAvgSuccess = document.getElementById('adm-avg-success');

// Componentes Modal Admin Auth
const modalAdminAuth = document.getElementById('modal-admin-auth');
const adminAuthForm = document.getElementById('admin-auth-form');
const btnModalAdminClose = document.getElementById('modal-admin-close');
const adminActiveFilterText = document.getElementById('admin-active-filter');

// Novos Botões Admin
const btnExportPdf = document.getElementById('btn-export-pdf');
const btnClearResults = document.getElementById('btn-clear-results');


// --- ÁUDIO (Web Audio API) ---
let audioCtx = null;

function playSound(type) {
    if (!audioCtx) {
        try {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log("Erro ao iniciar áudio:", e);
            return;
        }
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'success') {
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(523.25, now);
        oscillator.frequency.setValueAtTime(659.25, now + 0.1);
        oscillator.frequency.setValueAtTime(783.99, now + 0.2);
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.1, now + 0.05);
        gainNode.gain.linearRampToValueAtTime(0, now + 0.3);
        oscillator.start(now);
        oscillator.stop(now + 0.3);
    } else if (type === 'error') {
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(220, now);
        oscillator.frequency.linearRampToValueAtTime(110, now + 0.2);
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.08, now + 0.05);
        gainNode.gain.linearRampToValueAtTime(0, now + 0.2);
        oscillator.start(now);
        oscillator.stop(now + 0.2);
    } else if (type === 'victory') {
        oscillator.type = 'triangle';
        const notes = [523.25, 523.25, 659.25, 783.99, 1046.50];
        const dur = 0.12;
        notes.forEach((f, i) => {
            oscillator.frequency.setValueAtTime(f, now + i * dur);
        });
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.12, now + 0.05);
        gainNode.gain.linearRampToValueAtTime(0, now + dur * notes.length);
        oscillator.start(now);
        oscillator.stop(now + dur * notes.length);
    }
}

// --- INICIALIZAÇÃO ---
function init() {
    setupEventListeners();
    checkExistingSession();
}

function setupEventListeners() {
    // Atualiza tópicos disponíveis
    function updateTopics() {
        const grade = studentGrade.value;
        if (!grade || !selectedDiscipline) {
            topicContainer.classList.add('hidden');
            return;
        }

        const filteredQuestions = QUESTIONS_DB.filter(q => q.grade === grade && q.discipline === selectedDiscipline);
        const rawTopics = filteredQuestions.map(q => q.skill ? q.skill.replace(/\s*\([^)]*\)/g, '').trim() : '');
        const uniqueTopics = [...new Set(rawTopics.filter(Boolean))].sort();

        // Verificar aluno existente para bloquear tópicos
        const name = document.getElementById('student-name').value;
        let completedTopics = [];
        if (name) {
            const students = JSON.parse(localStorage.getItem('sabermg_students')) || [];
            const found = students.find(s => s.name.toLowerCase() === name.toLowerCase() && s.grade === grade);
            if (found && found.completedTopics) {
                completedTopics = found.completedTopics;
            }
        }

        studentTopic.innerHTML = '<option value="">Misturar todos os Tópicos</option>';
        uniqueTopics.forEach(topic => {
            const option = document.createElement('option');
            option.value = topic;
            
            const isCompleted = completedTopics.includes(topic);
            option.innerText = isCompleted ? `${topic} (Concluído ✔)` : topic;
            
            if (isCompleted) {
                option.disabled = true;
                option.style.backgroundColor = '#f3f4f6'; // Estilo para indicar bloqueio
                option.style.color = '#9ca3af';
            }
            studentTopic.appendChild(option);
        });

        if (uniqueTopics.length > 0) {
            topicContainer.classList.remove('hidden');
        } else {
            topicContainer.classList.add('hidden');
        }
    }

    studentGrade.addEventListener('change', updateTopics);
    document.getElementById('student-name').addEventListener('input', updateTopics);

    // Seleção de Disciplina no Login
    disciplineButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            disciplineButtons.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedDiscipline = btn.getAttribute('data-discipline');
            updateTopics();
        });
    });

    // Submissão do Login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('student-name').value;
        const grade = document.getElementById('student-grade').value;
        const classStr = document.getElementById('student-class').value;

        if (!selectedDiscipline) {
            alert("Por favor, selecione uma disciplina!");
            return;
        }

        // Recuperar dados de aluno existente para não zerar pontos
        const students = JSON.parse(localStorage.getItem('sabermg_students')) || [];
        const found = students.find(s => s.name.toLowerCase() === name.toLowerCase() && s.grade === grade);

        const student = found ? {
            ...found,
            class: classStr,
            discipline: selectedDiscipline,
            topic: studentTopic.value || null
        } : {
            id: Date.now().toString(),
            name,
            grade,
            class: classStr,
            discipline: selectedDiscipline,
            topic: studentTopic.value || null,
            score: 0,
            medals: 0,
            correctAnswers: 0,
            totalAnswers: 0,
            completedTopics: []
        };

        state.currentStudent = student;
        saveStudent(student);
        switchScreen('dashboard');
        loadDashboard();
    });

    // Dashboard
    btnStartGame.addEventListener('click', startNewGame);
    btnLogout.addEventListener('click', () => {
        state.currentStudent = null;
        switchScreen('login');
    });

    // Botão Voltar do Jogo
    const btnGameBack = document.getElementById('btn-game-back');
    if (btnGameBack) {
        btnGameBack.addEventListener('click', () => {
            if (confirm("Tem certeza que quer encerrar a batalha?")) {
                switchScreen('dashboard');
                loadDashboard(); // Recarrega dados atualizados
            }
        });
    }

    // Jogo
    btnNextQuestion.addEventListener('click', handleNextQuestion);

    // Admin
    gotoAdminBtn.addEventListener('click', () => {
        // Agora exibe o Modal em vez de mudar de tela
        modalAdminAuth.classList.remove('hidden');
    });

    adminBackBtn.addEventListener('click', () => switchScreen('login'));

    // Modal Admin Auth (Fechar)
    btnModalAdminClose.addEventListener('click', () => {
        modalAdminAuth.classList.add('hidden');
        document.getElementById('admin-password').value = ''; // Limpa senha
    });

    // Submissão do Formulário de Auth Admin
    adminAuthForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const content = document.getElementById('admin-content').value;
        const password = document.getElementById('admin-password').value;

        if (password === '8840') {
            state.adminFilter = content;
            adminActiveFilterText.innerText = content === 'all' ? 'Todas as Disciplinas' : content;
            
            modalAdminAuth.classList.add('hidden');
            document.getElementById('admin-password').value = ''; // Limpa senha
            
            switchScreen('admin');
            loadAdminData();
        } else {
            alert("Senha Incorreta!");
        }
    });

    // Novos Botões Admin
    if (btnExportPdf) btnExportPdf.addEventListener('click', exportToPDF);
    if (btnClearResults) btnClearResults.addEventListener('click', clearResults);
}

// --- NAVEGAÇÃO ---
function switchScreen(screenId) {
    Object.keys(screens).forEach(key => {
        screens[key].classList.remove('active');
    });
    screens[screenId].classList.add('active');
    state.view = screenId;
}

// --- LÓGICA DO DASHBOARD ---
function checkExistingSession() {
    // Poderia carregar o último usuário, mas para o protótipo vamos manter limpo
}

function loadDashboard() {
    const s = state.currentStudent;
    dashGreeting.innerText = `Olá, ${s.name}!`;
    dashSubtitle.innerText = `${s.grade} Ano - Turma ${s.class}`;
    dashScore.innerText = s.score;
    dashMedals.innerText = s.medals;
    dashDisciplineName.innerText = s.topic ? `${s.discipline} (${s.topic})` : s.discipline;
    
    const getBaseTopic = (skill) => skill ? skill.replace(/\s*\([^)]*\)/g, '').trim() : '';
    
    // Progresso baseado nas questões disponíveis
    const totalQuestions = QUESTIONS_DB.filter(q => 
        q.grade === s.grade && 
        q.discipline === s.discipline &&
        (!s.topic || getBaseTopic(q.skill) === s.topic)
    ).length;
    dashProgressText.innerText = `Você tem ${totalQuestions} desafios disponíveis!`;
    dashProgress.style.width = "0%";
}

// --- LÓGICA DO JOGO ---
function startNewGame() {
    const s = state.currentStudent;
    if (!s.answeredQuestions) s.answeredQuestions = [];
    if (!s.completedTopics) s.completedTopics = [];

    const getBaseTopic = (skill) => skill ? skill.replace(/\s*\([^)]*\)/g, '').trim() : '';

    // 1. Filtrar questões livres (não respondidas) e de tópicos não concluídos
    let questions = QUESTIONS_DB.filter(q => 
        q.grade === s.grade && 
        q.discipline === s.discipline && 
        (!s.topic || getBaseTopic(q.skill) === s.topic) &&
        !s.completedTopics.includes(getBaseTopic(q.skill)) && // <-- NOVO: Exclui já completados
        !s.answeredQuestions.includes(q.id)
    );

    // 2. Fallback: Se acabaram as perguntas novas, avisa e reinicia o ciclo
    if (questions.length === 0) {
        const totalAvail = QUESTIONS_DB.filter(q => 
            q.grade === s.grade && 
            q.discipline === s.discipline &&
            (!s.topic || getBaseTopic(q.skill) === s.topic)
        ).length;
        if (totalAvail > 0) {
            alert("🎉 Você respondeu todos os desafios deste tópico! Reiniciando o ciclo para você treinar mais!");
            s.answeredQuestions = []; // Limpa histórico para recomeçar
            saveStudent(s); // Salva a limpeza
            questions = QUESTIONS_DB.filter(q => 
                q.grade === s.grade && 
                q.discipline === s.discipline &&
                (!s.topic || getBaseTopic(q.skill) === s.topic)
            );
        } else {
            alert("Desculpe, ainda não temos questões para essa matéria/série.");
            return;
        }
    }

    // 3. Limitar a 15 questões (NOVO)
    questions = shuffleArray([...questions]).slice(0, 15);

    state.game = {
        questions: [...questions], // Já está embaralhado e limitado
        currentIndex: 0,
        score: s.score,
        lives: 3,
        combo: 1,
        consecutiveCorrect: 0
    };

    switchScreen('game');
    updateHUD();
    renderQuestion();
}

function renderQuestion() {
    const q = state.game.questions[state.game.currentIndex];
    
    questionSkill.innerText = q.skill || "Habilidade CBC";
    questionText.innerText = q.text;
    optionsGrid.innerHTML = '';

    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerHTML = `
            <span class="option-label">${String.fromCharCode(65 + index)}</span>
            <span>${opt}</span>
        `;
        btn.addEventListener('click', () => checkAnswer(opt, q.answer, q.explanation));
        optionsGrid.appendChild(btn);
    });
}

function checkAnswer(selected, correct, explanation) {
    state.currentStudent.totalAnswers = (state.currentStudent.totalAnswers || 0) + 1;

    const q = state.game.questions[state.game.currentIndex];
    
    // Adiciona ID da questão aos respondidos (Não repetir)
    if (!state.currentStudent.answeredQuestions) {
        state.currentStudent.answeredQuestions = [];
    }
    if (!state.currentStudent.answeredQuestions.includes(q.id)) {
        state.currentStudent.answeredQuestions.push(q.id);
    }

    if (selected === correct) {
        // Acerto
        state.game.consecutiveCorrect++;
        if (state.game.consecutiveCorrect >= 3) {
            state.game.combo = 2; // Combo!
        }
        
        const pointsGained = 10 * state.game.combo;
        state.game.score += pointsGained;
        state.currentStudent.score = state.game.score;
        state.currentStudent.correctAnswers = (state.currentStudent.correctAnswers || 0) + 1;

        // Bonificação Medalha (Bronze: 100, Prata: 300, Ouro: 500)
        const currentMedals = state.currentStudent.medals || 0;
        if (state.game.score >= 500 && currentMedals < 3) {
            state.currentStudent.medals = 3;
        } else if (state.game.score >= 300 && currentMedals < 2) {
            state.currentStudent.medals = 2;
        } else if (state.game.score >= 100 && currentMedals < 1) {
            state.currentStudent.medals = 1;
        }

        showFeedback(true, "Incrível! 🎉", `+${pointsGained} pontos. ${explanation}`);
    } else {
        // Erro
        state.game.lives--;
        state.game.combo = 1;
        state.game.consecutiveCorrect = 0;

        showFeedback(false, "Quase lá... 💡", `Resposta certa: ${correct}. ${explanation}`);
    }

    updateHUD();
    saveStudent(state.currentStudent); // Atualiza no localStorage
}

function showFeedback(isCorrect, title, message) {
    playSound(isCorrect ? 'success' : 'error');
    fbIcon.innerText = isCorrect ? "🎉" : "💡";
    fbTitle.innerText = title;
    fbExplanation.innerText = message;
    feedbackOverlay.classList.remove('hidden');
}

function handleNextQuestion() {
    feedbackOverlay.classList.add('hidden');

    if (state.game.lives <= 0) {
        playSound('error');
        alert("Fim de Jogo! Suas vidas acabaram. Mas você acumulou pontos!");
        switchScreen('dashboard');
        loadDashboard();
        return;
    }

    state.game.currentIndex++;

    if (state.game.currentIndex >= state.game.questions.length) {
        playSound('victory');
        
        const s = state.currentStudent;
        if (s.topic) {
            if (!s.completedTopics) s.completedTopics = [];
            if (!s.completedTopics.includes(s.topic)) {
                s.completedTopics.push(s.topic);
            }
        }

        alert("Parabéns! Você concluiu todos os desafios desta fase! 🏆");
        state.currentStudent.medals = (state.currentStudent.medals || 0) + 1; // Medalha extra
        saveStudent(state.currentStudent);
        switchScreen('dashboard');
        loadDashboard();
    } else {
        renderQuestion();
    }
}

function updateHUD() {
    gameLives.innerText = state.game.lives;
    gameCombo.innerText = `${state.game.combo}x`;
    currentScore.innerText = state.game.score;
}

// --- LÓGICA DE PERSISTÊNCIA (LOCALSTORAGE) ---
// --- LÓGICA DE PERSISTÊNCIA (SUPABASE / LOCALSTORAGE) ---
async function saveStudent(student) {
    // 1. Salvar no LocalStorage (Sempre como Fallback/Cache)
    let students = JSON.parse(localStorage.getItem('sabermg_students')) || [];
    const index = students.findIndex(s => s.name === student.name && s.grade === student.grade);
    
    if (index !== -1) {
        students[index] = { ...students[index], ...student };
    } else {
        students.push(student);
    }
    localStorage.setItem('sabermg_students', JSON.stringify(students));

    // 2. Salvar no Supabase
    if (supabaseClient) {
        try {
            const { error } = await supabaseClient
                .from('results')
                .upsert({
                    name: student.name,
                    grade: student.grade,
                    class: student.class,
                    discipline: student.discipline,
                    score: student.score,
                    medals: student.medals,
                    correct_answers: student.correctAnswers || 0,
                    total_answers: student.totalAnswers || 0,
                    answered_questions: student.answeredQuestions || [] // NOVO
                }, { onConflict: 'name,grade' });

            if (error) console.error("Erro ao salvar no Supabase:", error);
            else console.log("Dados sincronizados com Supabase!");
        } catch (e) {
            console.error("Erro na requisição Supabase:", e);
        }
    }
}

// --- LÓGICA DO ADMIN ---
async function loadAdminData() {
    let students = [];

    // 1. Carregar Dados
    if (supabaseClient) {
        try {
            const { data, error } = await supabaseClient
                .from('results')
                .select('*');

            if (error) {
                console.error("Erro ao buscar dados do Supabase:", error);
                // Fallback
                students = JSON.parse(localStorage.getItem('sabermg_students')) || [];
            } else {
                // Mapear campos do Supabase para o formato do State
                students = data.map(d => ({
                    name: d.name,
                    grade: d.grade,
                    class: d.class,
                    discipline: d.discipline,
                    score: d.score,
                    medals: d.medals,
                    correctAnswers: d.correct_answers || 0,
                    totalAnswers: d.total_answers || 0,
                    answeredQuestions: d.answered_questions || [] // NOVO
                }));
            }
        } catch (e) {
            console.error("Erro Supabase Fetch:", e);
            students = JSON.parse(localStorage.getItem('sabermg_students')) || [];
        }
    } else {
        students = JSON.parse(localStorage.getItem('sabermg_students')) || [];
    }

    // 2. Filtrar Dados (Se houver filtro ativo)
    if (state.adminFilter !== 'all') {
        students = students.filter(s => s.discipline === state.adminFilter);
    }

    // 3. Renderizar Tabela
    adminTableBody.innerHTML = '';
    let totalCorrect = 0;
    let totalAttempts = 0;

    students.forEach(s => {
        const row = document.createElement('tr');
        const correct = s.correctAnswers || 0;
        const total = s.totalAnswers || 0;
        const rate = total > 0 ? Math.round((correct / total) * 100) : 0;

        totalCorrect += correct;
        totalAttempts += total;

        row.innerHTML = `
            <td><strong>${s.name}</strong></td>
            <td>${s.grade} - ${s.class}</td>
            <td>${s.discipline}</td>
            <td>${s.score} pts</td>
            <td>${correct}</td>
            <td>${total - correct}</td>
        `;
        adminTableBody.appendChild(row);
    });

    admTotalStudents.innerText = students.length;
    const avgRate = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
    admAvgSuccess.innerText = `${avgRate}%`;
}

// --- NOVAS FUNÇÕES ADMIN ---

function exportToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Título
    doc.setFontSize(18);
    doc.text("SaberMG - Relatório de Desempenho", 14, 20);
    
    doc.setFontSize(12);
    doc.text(`Filtro Aplicado: ${state.adminFilter === 'all' ? 'Todas as Disciplinas' : state.adminFilter}`, 14, 30);
    doc.text(`Data: ${new Date().toLocaleDateString('pt-BR')}`, 14, 38);

    // Pegar dados da tabela Renderizada
    const rows = [];
    const trs = adminTableBody.querySelectorAll('tr');
    
    trs.forEach(tr => {
        const tds = tr.querySelectorAll('td');
        rows.push([
            tds[0].innerText, // Aluno
            tds[1].innerText, // Série/Turma
            tds[2].innerText, // Matéria
            tds[3].innerText, // Pontos
            tds[4].innerText, // Acertos
            tds[5].innerText  // Erros
        ]);
    });

    if (rows.length === 0) {
        alert("Não há dados para exportar!");
        return;
    }

    doc.autoTable({
        startY: 45,
        head: [['Aluno', 'Série/Turma', 'Matéria', 'Pontos', 'Acertos', 'Erros']],
        body: rows,
        theme: 'striped',
        headStyles: { fillColor: [99, 102, 241] } // Cor primária do app (Indigo)
    });

    doc.save(`Relatorio_SaberMG_${state.adminFilter}_${Date.now()}.pdf`);
}

async function clearResults() {
    const confirmation = confirm("⚠️ ATENÇÃO: Tem certeza que deseja LIMPAR TODOS os resultados? Esta ação não pode ser desfeita!");
    if (!confirmation) return;

    // 1. Limpar LocalStorage
    localStorage.removeItem('sabermg_students');

    // 2. Limpar Supabase
    if (supabaseClient) {
        const passwordCheck = prompt("Digite a senha de admin para confirmar a limpeza:");
        if (passwordCheck !== '8840') {
            alert("Senha incorreta! Operação cancelada.");
            return;
        }

        try {
            // Deleta tudo da tabela results
            const { error } = await supabaseClient
                .from('results')
                .delete()
                .neq('name', '___'); // Truque para deletar tudo sem filtro exacto

            if (error) {
                console.error("Erro ao limpar Supabase:", error);
                alert("Erro ao limpar no Supabase, mas os dados locais foram limpos.");
            } else {
                alert("Resultados limpos no Supabase e Local!");
            }
        } catch (e) {
            console.error("Erro na requisição de limpeza:", e);
        }
    } else {
        alert("Resultados locais limpos!");
    }

    loadAdminData(); // Atualiza painel
}

// --- UTILS ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Iniciar
init();

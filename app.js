import { QUESTIONS_DB } from './questions.js';

// --- CONFIGURAÇÃO SUPABASE ---
// PREENCHA ESTAS VARIÁVEIS COM SUA CONTA SUPABASE
const SUPABASE_URL = 'https://pflundnuohxzbonynafh.supabase.co'; 
const SUPABASE_KEY = 'sb_publishable_XgnCUrYDbp351eeMpH76tw_RXtS_bo8'; // Você deve colar a ANON KEY aqui

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
    adminGradeFilter: 'all',
    adminClassFilter: 'all',
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
const btnChangeTopic = document.getElementById('btn-change-topic');
const topicsSelectionArea = document.getElementById('topics-selection-area');

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
const btnApplyFilters = document.getElementById('btn-apply-filters');
const btnToggleChart = document.getElementById('btn-toggle-chart');
const btnToggleTopics = document.getElementById('btn-toggle-topics');
const adminFilterGrade = document.getElementById('admin-filter-grade');
const adminFilterClass = document.getElementById('admin-filter-class');
const chartSection = document.getElementById('chart-section');
const topicsSection = document.getElementById('topics-section');
const topicsReportContent = document.getElementById('topics-report-content');
let performanceChart = null; // Instância do Chart.js
let cachedAdminStudents = []; // Cache dos dados carregados


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

// --- ATUALIZAÇÃO DE CONTAGEM DE QUESTÕES ---
function updateSubjectQuestionCounts() {
    const grade = studentGrade.value;
    
    disciplineButtons.forEach(btn => {
        const discipline = btn.getAttribute('data-discipline');
        if (!discipline) return;

        const count = QUESTIONS_DB.filter(q => 
            q.discipline === discipline && 
            (!grade || q.grade === grade)
        ).length;

        let badge = btn.querySelector('.question-count-badge');
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'question-count-badge';
            btn.appendChild(badge);
        }
        
        badge.innerText = count;
        badge.style.display = count > 0 ? 'inline-block' : 'none';
    });
}

// --- INICIALIZAÇÃO ---
function init() {
    setupEventListeners();
    checkExistingSession();
    updateSubjectQuestionCounts(); // Atualiza contagem inicial
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

    studentGrade.addEventListener('change', () => {
        updateTopics();
        updateSubjectQuestionCounts();
    });
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

    // Botão de Trocar Tópico (Dashboard)
    if (btnChangeTopic) {
        btnChangeTopic.addEventListener('click', () => {
            btnChangeTopic.classList.add('hidden');
            topicsSelectionArea.classList.remove('hidden');
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
    if (btnApplyFilters) btnApplyFilters.addEventListener('click', () => {
        state.adminGradeFilter = adminFilterGrade.value;
        state.adminClassFilter = adminFilterClass.value;
        loadAdminData();
    });
    if (btnToggleChart) btnToggleChart.addEventListener('click', () => {
        chartSection.classList.toggle('hidden');
        if (!chartSection.classList.contains('hidden')) renderPerformanceChart();
    });
    if (btnToggleTopics) btnToggleTopics.addEventListener('click', () => {
        topicsSection.classList.toggle('hidden');
        if (!topicsSection.classList.contains('hidden')) renderTopicsReport();
    });
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
    
    // 1. Total de questões disponíveis para este tópico/disciplina
    const filteredDB = QUESTIONS_DB.filter(q => 
        q.grade === s.grade && 
        q.discipline === s.discipline &&
        (!s.topic || getBaseTopic(q.skill) === s.topic)
    );
    const totalQuestions = filteredDB.length;

    // 2. Quantas dessas o aluno já respondeu (ID está no answeredQuestions)
    const answeredInThisTopic = filteredDB.filter(q => 
        s.answeredQuestions && s.answeredQuestions.includes(q.id)
    ).length;

    // 3. Limpar área de tópicos
    topicsSelectionArea.innerHTML = '<p style="font-size: 0.9rem; color: #6366f1; font-weight: bold; margin-bottom: 5px;">Selecione o próximo desafio:</p>';
    topicsSelectionArea.classList.add('hidden');

    // 4. Atualizar UI
    if (totalQuestions > 0) {
        const percent = Math.round((answeredInThisTopic / totalQuestions) * 100);
        dashProgressText.innerText = `Progresso: ${answeredInThisTopic} de ${totalQuestions} desafios concluídos!`;
        dashProgress.style.width = `${percent}%`;
        
        if (answeredInThisTopic >= totalQuestions) {
            btnStartGame.innerText = "Tópico Concluído! ✅";
            btnStartGame.style.opacity = "0.7";
            btnChangeTopic.classList.remove('hidden');
            
            // Gerar botões para outros tópicos restantes
            const otherQuestions = QUESTIONS_DB.filter(q => q.grade === s.grade && q.discipline === s.discipline);
            const allTopics = [...new Set(otherQuestions.map(q => getBaseTopic(q.skill)))].filter(Boolean).sort();
            
            let topicsFound = 0;
            allTopics.forEach(t => {
                if (t === s.topic) return;

                const qInTopic = otherQuestions.filter(q => getBaseTopic(q.skill) === t);
                const ansInTopic = qInTopic.filter(q => s.answeredQuestions && s.answeredQuestions.includes(q.id)).length;
                
                if (ansInTopic < qInTopic.length) {
                    const btn = document.createElement('button');
                    btn.className = "btn btn-secondary btn-small";
                    btn.style.width = "100%";
                    btn.style.textAlign = "left";
                    btn.innerHTML = `<span>${t}</span> <span style="font-size: 0.7rem; float: right;">${qInTopic.length - ansInTopic} restam</span>`;
                    btn.onclick = () => {
                        s.topic = t;
                        saveStudent(s);
                        loadDashboard();
                    };
                    topicsSelectionArea.appendChild(btn);
                    topicsFound++;
                }
            });

            if (topicsFound === 0) {
                const msg = document.createElement('p');
                msg.style.fontSize = "0.8rem";
                msg.style.color = "#6b7280";
                msg.innerText = "Você completou todas as atividades desta matéria! 🎓";
                topicsSelectionArea.appendChild(msg);
                topicsSelectionArea.classList.remove('hidden');
                btnChangeTopic.classList.add('hidden');
            }
        } else {
            btnStartGame.innerText = "Jogar Agora";
            btnStartGame.style.opacity = "1";
            btnChangeTopic.classList.add('hidden');
        }
    } else {
        dashProgressText.innerText = `Ainda não temos desafios para este tópico.`;
        dashProgress.style.width = "0%";
    }
}

// --- LÓGICA DO JOGO ---
function startNewGame() {
    const s = state.currentStudent;
    if (!s.answeredQuestions) s.answeredQuestions = [];
    if (!s.completedTopics) s.completedTopics = [];

    const getBaseTopic = (skill) => skill ? skill.replace(/\s*\([^)]*\)/g, '').trim() : '';

    // 1. Filtrar questões livres (não respondidas)
    let questions = QUESTIONS_DB.filter(q => 
        q.grade === s.grade && 
        q.discipline === s.discipline && 
        (!s.topic || getBaseTopic(q.skill) === s.topic) &&
        !s.answeredQuestions.includes(q.id)
    );

    // 2. Se não houver mais questões, avisa para escolher outro tópico
    if (questions.length === 0) {
        alert("🎉 Você já resolveu todos os desafios deste tópico! Por favor, escolha outro tópico ou disciplina para continuar sua aventura.");
        return;
    }

    // 3. Limitar a 15 questões por sessão (ou o que sobrar)
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
    let allStudentsRaw = [];

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

    allStudentsRaw = [...students];

    // 2. Filtrar Dados (Disciplina)
    if (state.adminFilter !== 'all') {
        students = students.filter(s => s.discipline === state.adminFilter);
    }
    // 2b. Filtrar por Série
    if (state.adminGradeFilter !== 'all') {
        students = students.filter(s => s.grade === state.adminGradeFilter);
    }
    // 2c. Filtrar por Turma
    if (state.adminClassFilter !== 'all') {
        students = students.filter(s => s.class && s.class.toUpperCase() === state.adminClassFilter.toUpperCase());
    }

    // 2d. Popular dropdown de turmas com as turmas disponíveis nos dados brutos
    const allClasses = [...new Set(allStudentsRaw.map(s => s.class).filter(Boolean))].sort();
    const currentClassVal = adminFilterClass.value;
    adminFilterClass.innerHTML = '<option value="all">Todas</option>';
    allClasses.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = `Turma ${c}`;
        if (c === currentClassVal) opt.selected = true;
        adminFilterClass.appendChild(opt);
    });

    // Guardar dados filtrados no cache para gráfico/tópicos
    cachedAdminStudents = students;

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

    // Atualizar gráfico e tópicos se visíveis
    if (!chartSection.classList.contains('hidden')) renderPerformanceChart();
    if (!topicsSection.classList.contains('hidden')) renderTopicsReport();
}

// --- NOVAS FUNÇÕES ADMIN ---

function exportToPDF() {
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Título Principal
        doc.setFontSize(18);
        doc.setTextColor(0, 0, 0);
        doc.text("SaberMG - Relatório de Desempenho", 14, 20);
        
        doc.setFontSize(11);
        doc.setTextColor(100, 100, 100);
        doc.text(`Filtro Aplicado: ${state.adminFilter === 'all' ? 'Todas as Disciplinas' : state.adminFilter}`, 14, 28);
        doc.text(`Data do Relatório: ${new Date().toLocaleDateString('pt-BR')} ${new Date().toLocaleTimeString('pt-BR')}`, 14, 34);

        // 1. Agrupar dados por Série/Turma
        const groups = {};
        const trs = adminTableBody.querySelectorAll('tr');
        
        trs.forEach(tr => {
            const tds = tr.querySelectorAll('td');
            if (tds.length >= 6) {
                const groupKey = tds[1].innerText; // Ex: "6º Ano - A"
                if (!groups[groupKey]) groups[groupKey] = [];
                groups[groupKey].push([
                    tds[0].innerText, // Aluno
                    tds[1].innerText, // Série/Turma
                    tds[2].innerText, // Matéria
                    tds[3].innerText, // Pontos
                    tds[4].innerText, // Acertos
                    tds[5].innerText  // Erros
                ]);
            }
        });

        const sortedGroupKeys = Object.keys(groups).sort();

        if (sortedGroupKeys.length === 0) {
            alert("Não há dados para exportar!");
            return;
        }

        // 2. Renderizar cada grupo no PDF
        let currentY = 45;

        sortedGroupKeys.forEach((groupKey, index) => {
            // Verificar se precisa de nova página antes do título do grupo
            if (currentY > 240) {
                doc.addPage();
                currentY = 20;
            }

            // Título do Grupo (Série/Turma)
            doc.setFontSize(14);
            doc.setTextColor(99, 102, 241); // Indigo
            doc.text(`Turma: ${groupKey}`, 14, currentY);
            
            doc.autoTable({
                startY: currentY + 4,
                head: [['Aluno', 'Série/Turma', 'Matéria', 'Pontos', 'Acertos', 'Erros']],
                body: groups[groupKey],
                theme: 'striped',
                headStyles: { fillColor: [99, 102, 241] },
                styles: { fontSize: 10 },
                margin: { left: 14, right: 14 }
            });

            // Atualiza o Y para o próximo grupo baseado no fim da tabela anterior
            currentY = doc.lastAutoTable.finalY + 15;
        });

        doc.save(`Relatorio_SaberMG_${state.adminFilter}_${Date.now()}.pdf`);
    } catch (error) {
        console.error("Erro na exportação para PDF:", error);
        alert("Ocorreu um erro ao gerar o PDF. Verifique se as bibliotecas foram carregadas corretamente.");
    }
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

// --- NOVAS FUNÇÕES: GRÁFICOS E TÓPICOS ---

function renderPerformanceChart() {
    const ctx = document.getElementById('performance-chart');
    if (!ctx) return;

    if (performanceChart) {
        performanceChart.destroy();
    }

    if (!cachedAdminStudents || cachedAdminStudents.length === 0) {
        // Se não houver dados
        performanceChart = new Chart(ctx, {
            type: 'bar',
            data: { labels: ['Sem dados'], datasets: [{ label: 'Tentativas', data: [0] }] },
            options: { responsive: true, maintainAspectRatio: false }
        });
        return;
    }

    // Calcular média de acertos por disciplina
    const disciplineStats = {};
    cachedAdminStudents.forEach(s => {
        if (!disciplineStats[s.discipline]) {
            disciplineStats[s.discipline] = { totalQuestions: 0, correctAnswers: 0 };
        }
        disciplineStats[s.discipline].totalQuestions += (s.totalAnswers || 0);
        disciplineStats[s.discipline].correctAnswers += (s.correctAnswers || 0);
    });

    const labels = Object.keys(disciplineStats);
    const successRates = labels.map(disc => {
        const stats = disciplineStats[disc];
        return stats.totalQuestions > 0 ? Math.round((stats.correctAnswers / stats.totalQuestions) * 100) : 0;
    });

    performanceChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Taxa de Acerto Média (%)',
                data: successRates,
                backgroundColor: 'rgba(99, 102, 241, 0.6)',
                borderColor: 'rgba(99, 102, 241, 1)',
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { callback: function(value) { return value + "%" } }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

function renderTopicsReport() {
    if (!topicsReportContent) return;

    if (!cachedAdminStudents || cachedAdminStudents.length === 0) {
        topicsReportContent.innerHTML = '<p>Nenhum dado disponível com os filtros atuais.</p>';
        return;
    }

    const topicsStats = {};

    // Agregar respostas corretas e totais por tópico a partir de todas as interações?
    // Observação: o student object (s) atualmente armazena apenas correctAnswers totais
    // e answeredQuestions (IDs). Para saber taxa de acerto por TÓPICO, precisaríamos ter
    // guardado histórico mais granular. 
    // Como simplificação (visto a estrutura de dados atual), vamos listar quantos alunos concluíram quais tópicos.

    cachedAdminStudents.forEach(s => {
        // Obter os tópicos das questões que o aluno respondeu
        if (s.answeredQuestions && s.answeredQuestions.length > 0) {
            const answeredInTopic = {}; // Contador de questões respondidas por tópico para este aluno
            s.answeredQuestions.forEach(qId => {
                const q = QUESTIONS_DB.find(x => x.id === qId);
                if (q && q.skill) {
                    const skill = q.skill.replace(/\s*\([^)]*\)/g, '').trim();
                    const key = `${s.discipline} - ${skill}`;
                    if (!answeredInTopic[key]) answeredInTopic[key] = 0;
                    answeredInTopic[key]++;
                }
            });

            // Agregar para o geral
            for (const key in answeredInTopic) {
                if (!topicsStats[key]) {
                    topicsStats[key] = { studentsTried: 0, totalAnswersGiven: 0 };
                }
                topicsStats[key].studentsTried += 1;
                topicsStats[key].totalAnswersGiven += answeredInTopic[key];
            }
        }
    });

    if (Object.keys(topicsStats).length === 0) {
        topicsReportContent.innerHTML = '<p>Nenhum dado de Tópico/Habilidade encontrado.</p>';
        return;
    }

    let html = '<ul style="list-style-type: none; padding: 0;">';
    Object.keys(topicsStats).sort().forEach(key => {
        const stats = topicsStats[key];
        html += `
            <li style="margin-bottom: 8px; padding: 10px; background: rgba(0,0,0,0.05); border-radius: 8px;">
                <strong>${key}</strong><br>
                <span style="font-size: 0.9em; color: #555;">
                    Alunos que treinaram: ${stats.studentsTried} | Total de respostas dadas: ${stats.totalAnswersGiven}
                </span>
            </li>
        `;
    });
    html += '</ul>';
    topicsReportContent.innerHTML = html;
}

// Iniciar
init();

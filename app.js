import { QUESTIONS_DB } from './questions.js';

// --- ESTADO DA APLICAÇÃO ---
const state = {
    view: 'login', // 'login', 'dashboard', 'game', 'admin'
    currentStudent: null, // { name, grade, class, discipline, score, medals }
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
    // Seleção de Disciplina no Login
    disciplineButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            disciplineButtons.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedDiscipline = btn.getAttribute('data-discipline');
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

        const student = {
            id: Date.now().toString(),
            name,
            grade,
            class: classStr,
            discipline: selectedDiscipline,
            score: 0,
            medals: 0,
            correctAnswers: 0,
            totalAnswers: 0
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

    // Jogo
    btnNextQuestion.addEventListener('click', handleNextQuestion);

    // Admin
    gotoAdminBtn.addEventListener('click', () => {
        switchScreen('admin');
        loadAdminData();
    });
    adminBackBtn.addEventListener('click', () => switchScreen('login'));
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
    dashDisciplineName.innerText = s.discipline;
    
    // Progresso baseado nas questões disponíveis
    const totalQuestions = QUESTIONS_DB.filter(q => q.grade === s.grade && q.discipline === s.discipline).length;
    dashProgressText.innerText = `Você tem ${totalQuestions} desafios disponíveis!`;
    dashProgress.style.width = "0%";
}

// --- LÓGICA DO JOGO ---
function startNewGame() {
    const s = state.currentStudent;
    // Filtrar questões pela série e disciplina do aluno
    const questions = QUESTIONS_DB.filter(q => q.grade === s.grade && q.discipline === s.discipline);

    if (questions.length === 0) {
        alert("Desculpe, ainda não temos questões para essa matéria/série.");
        return;
    }

    state.game = {
        questions: shuffleArray([...questions]),
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
function saveStudent(student) {
    let students = JSON.parse(localStorage.getItem('sabermg_students')) || [];
    // Atualiza se existir, senão adiciona
    const index = students.findIndex(s => s.name === student.name && s.grade === student.grade);
    
    if (index !== -1) {
        students[index] = { ...students[index], ...student };
    } else {
        students.push(student);
    }

    localStorage.setItem('sabermg_students', JSON.stringify(students));
}

// --- LÓGICA DO ADMIN ---
function loadAdminData() {
    const students = JSON.parse(localStorage.getItem('sabermg_students')) || [];
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

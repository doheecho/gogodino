// ===================== 고고다이노 캐릭터 맞추기 =====================
// 이미지 파일: images/{시리즈}_{캐릭터명}.webp (유형 구분 없음)
var GOGODINO_DATA = [
    { name: '로키', gen: '공룡탐험대 시즌1', file: '공룡탐험대 시즌1_로키.webp' },
    { name: '미오', gen: '공룡탐험대 시즌1', file: '공룡탐험대 시즌1_미오.webp' },
    { name: '털보박사', gen: '공룡탐험대 시즌1', file: '공룡탐험대 시즌1_털보박사.webp' },
    { name: '포키', gen: '공룡탐험대 시즌1', file: '공룡탐험대 시즌1_포키.webp' },
    { name: '맥스', gen: '공룡탐험대 시즌2', file: '공룡탐험대 시즌2_맥스.webp' },
    { name: '스톰', gen: '공룡탐험대 시즌2', file: '공룡탐험대 시즌2_스톰.webp' },
    { name: '안키', gen: '공룡탐험대 시즌2', file: '공룡탐험대 시즌2_안키.webp' },
    { name: '페리', gen: '공룡탐험대 시즌2', file: '공룡탐험대 시즌2_페리.webp' },
    { name: '루카스', gen: '공룡탐험대 시즌3', file: '공룡탐험대 시즌3_루카스.webp' },
    { name: '스피노', gen: '공룡탐험대 시즌3', file: '공룡탐험대 시즌3_스피노.webp' },
    { name: '앤디', gen: '공룡탐험대 시즌3', file: '공룡탐험대 시즌3_앤디.webp' },
    { name: '조이', gen: '공룡탐험대 시즌3', file: '공룡탐험대 시즌3_조이.webp' },
    { name: '케루', gen: '공룡탐험대 시즌3', file: '공룡탐험대 시즌3_케루.webp' },
    { name: '플레오', gen: '공룡탐험대 시즌3', file: '공룡탐험대 시즌3_플레오.webp' },
    { name: '고고타이탄', gen: '공룡탐험대 시즌4', file: '공룡탐험대 시즌4_고고타이탄.webp' },
    { name: '지니', gen: '공룡탐험대 시즌4', file: '공룡탐험대 시즌4_지니.webp' },
    { name: '트록', gen: '공룡탐험대 시즌4', file: '공룡탐험대 시즌4_트록.webp' },
    { name: '티록', gen: '공룡탐험대 시즌4', file: '공룡탐험대 시즌4_티록.webp' },
    { name: '렉스', gen: '다이노팀', file: '다이노팀_렉스.webp' },
    { name: '비키', gen: '다이노팀', file: '다이노팀_비키.webp' },
    { name: '토모', gen: '다이노팀', file: '다이노팀_토모.webp' },
    { name: '핑', gen: '다이노팀', file: '다이노팀_핑.webp' },
    { name: '다니', gen: '우리동네공룡 시즌1', file: '우리동네공룡 시즌1_다니.webp' },
    { name: '벨리', gen: '우리동네공룡 시즌1', file: '우리동네공룡 시즌1_벨리.webp' },
    { name: '주니', gen: '우리동네공룡 시즌1', file: '우리동네공룡 시즌1_주니.webp' },
    { name: '헬리', gen: '우리동네공룡 시즌1', file: '우리동네공룡 시즌1_헬리.webp' },
    { name: '고고자이언트', gen: '우리동네공룡 시즌2', file: '우리동네공룡 시즌2_고고자이언트.webp' },
    { name: '도로시', gen: '우리동네공룡 시즌2', file: '우리동네공룡 시즌2_도로시.webp' },
    { name: '럭키', gen: '우리동네공룡 시즌2', file: '우리동네공룡 시즌2_럭키.webp' },
    { name: '코니', gen: '우리동네공룡 시즌2', file: '우리동네공룡 시즌2_코니.webp' },
    { name: '트릭시', gen: '우리동네공룡 시즌2', file: '우리동네공룡 시즌2_트릭시.webp' },
    { name: '펀치', gen: '우리동네공룡 시즌2', file: '우리동네공룡 시즌2_펀치.webp' },
    { name: '픽시', gen: '우리동네공룡 시즌2', file: '우리동네공룡 시즌2_픽시.webp' }
];

var GOGODINO_GEN_ORDER = ['공룡탐험대 시즌1', '공룡탐험대 시즌2', '공룡탐험대 시즌3', '공룡탐험대 시즌4', '다이노팀', '우리동네공룡 시즌1', '우리동네공룡 시즌2'];
var GOGODINO_TIME_OPTIONS = [{ v: 10, l: '10초' }, { v: 15, l: '15초' }, { v: 20, l: '20초' }, { v: 0, l: '무제한' }];
var GOGODINO_TITLE = '🦖 고고다이노 맞히기!';

// 한글 초성 분해 (공백은 그대로 유지)
var GD_CHO_LIST = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
function gdGetChosung(ch) {
    if (ch === ' ') return ' ';
    var code = ch.charCodeAt(0) - 0xAC00;
    if (code < 0 || code > 11171) return ch;
    return GD_CHO_LIST[Math.floor(code / (21 * 28))];
}
function gdGetWordChosung(word) {
    return word.split('').map(gdGetChosung).join('');
}

var gogodinoSettings = {
    gens: GOGODINO_GEN_ORDER.slice(),
    timeLimit: 10
};
var gogodinoState = {};
var GD_SPEECH_SUPPORTED = !!(window.SpeechRecognition || window.webkitSpeechRecognition);
var gdVoiceRecognition = null;

// ===== 정답을 음성으로 읽어주기 (TTS, 팝업 설정에서 목소리/방식 선택 가능) =====
// 기본값은 기기의 시스템 설정을 그대로 따른다 (voice/lang을 아예 지정하지 않음).
// PC는 한국어 음성이 깔려있어 잘 되지만, 안드로이드 기기는 한국어 음성이 따로 설치되어
// 있지 않은 경우가 많아서 'ko-KR'을 강제로 지정하면 아예 소리가 안 나는 경우가 있다.
// 그래서 사용자가 직접 고르지 않으면 언어/목소리를 강제하지 않고, 설정 팝업에서는
// 기기에 설치된 모든 목소리 중에서 원하는 것을 선택할 수 있게 한다.
var GD_SPEECH_SYNTH_SUPPORTED = !!window.speechSynthesis;
var GD_VOICE_STORAGE_KEY = 'gogodinoVoiceURI';
var GD_ANSWER_STYLE_KEY = 'gogodinoAnswerStyle';
var gdVoicesList = [];
function gdLoadVoices() {
    if (!GD_SPEECH_SYNTH_SUPPORTED) return;
    gdVoicesList = window.speechSynthesis.getVoices();
}
if (GD_SPEECH_SYNTH_SUPPORTED) {
    gdLoadVoices();
    // 목소리 목록은 비동기로 늦게 채워지는 브라우저가 많아서, 준비되면 다시 읽어오고
    // 설정 팝업이 열려있으면 새로 그려서 목록에 반영한다.
    window.speechSynthesis.onvoiceschanged = function () {
        gdLoadVoices();
        if (document.getElementById('gdSettingsOverlay')) { renderGogodinoSettingsModal(); }
    };
}
function getGogodinoKoreanVoices() {
    // 'ko'로 "시작하기만" 하면 통과시키면 'kok'(인도 콘칸어) 같은 언어 코드까지 한국어로
    // 잘못 걸러져서 인도어 목소리가 섞여 들어온다. 'ko' 단독이거나 'ko-KR'처럼 'ko-'로
    // 시작하는 경우만 한국어로 인정한다.
    return gdVoicesList.filter(function (v) {
        var lang = (v.lang || '').toLowerCase();
        return lang === 'ko' || lang.indexOf('ko-') === 0;
    });
}
function gdGetSavedVoiceURI() {
    try { return localStorage.getItem(GD_VOICE_STORAGE_KEY) || ''; } catch (e) { return ''; }
}
// null을 반환하면 "기본값" 상태를 뜻하며, 이때는 utter.voice/utter.lang을 아예 지정하지 않고
// 기기의 시스템 설정(기본 언어·기본 목소리)을 그대로 따르게 둔다.
function getGogodinoSelectedVoice() {
    if (!GD_SPEECH_SYNTH_SUPPORTED) return null;
    var uri = gdGetSavedVoiceURI();
    if (!uri) return null; // 직접 고른 적 없음 → 기본값(시스템 설정)
    return gdVoicesList.filter(function (v) { return v.voiceURI === uri; })[0] || null;
}
function setGogodinoVoice(uri) {
    try { localStorage.setItem(GD_VOICE_STORAGE_KEY, uri || ''); } catch (e) { }
    renderGogodinoSettingsModal();
}
// 설치된 TTS 목소리 이름에서 남/여를 대략적으로 추정한다 (완벽하지 않은 보조 정보용).
function gdGuessVoiceGender(name) {
    var n = (name || '').toLowerCase();
    var femaleHints = ['female', '여성', 'heami', 'yuna', 'sora', 'woman'];
    var maleHints = ['male', '남성', 'injoon', 'man'];
    for (var i = 0; i < femaleHints.length; i++) { if (n.indexOf(femaleHints[i]) > -1) return '여자'; }
    for (var i = 0; i < maleHints.length; i++) { if (n.indexOf(maleHints[i]) > -1) return '남자'; }
    return '';
}
// 한국어 음성들을 여자/남자/기타(구분 불가)로 묶는다. 같은 성별이 여러 개면 첫 번째만 대표로 쓴다.
function gdBuildVoiceGenderGroups(koreanVoices) {
    var groups = { female: null, male: null, other: [] };
    koreanVoices.forEach(function (v) {
        var g = gdGuessVoiceGender(v.name);
        if (g === '여자' && !groups.female) { groups.female = v; }
        else if (g === '남자' && !groups.male) { groups.male = v; }
        else if (!g) { groups.other.push(v); }
    });
    return groups;
}
function gdGetAnswerStyle() {
    try { return localStorage.getItem(GD_ANSWER_STYLE_KEY) || 'nameOnly'; } catch (e) { return 'nameOnly'; }
}
function setGogodinoAnswerStyle(style) {
    try { localStorage.setItem(GD_ANSWER_STYLE_KEY, style); } catch (e) { }
    renderGogodinoSettingsModal();
}
function speakGogodinoAnswer(text, isCorrect, onEnd) {
    if (!GD_SPEECH_SYNTH_SUPPORTED) { if (onEnd) onEnd(); return; }
    try {
        window.speechSynthesis.cancel(); // 이전에 읽던 말이 남아있으면 정리하고 새로 읽는다.
        var style = gdGetAnswerStyle();
        var spoken = (isCorrect && style === 'correctPrefix') ? ('정답! ' + text) : text;
        var utter = new SpeechSynthesisUtterance(spoken);
        var voice = getGogodinoSelectedVoice();
        if (voice) {
            // 사용자가 직접 고른 목소리가 있을 때만 voice/lang을 지정한다.
            utter.voice = voice;
            utter.lang = voice.lang;
        }
        // voice가 없으면(기본값) lang도 지정하지 않는다 — 'ko-KR'을 강제하면 한국어 음성이
        // 없는 기기(일부 안드로이드 등)에서는 아예 아무 소리도 안 나기 때문에, 그냥 기기의
        // 시스템 기본 설정 그대로 읽게 둔다.
        if (onEnd) { utter.onend = onEnd; utter.onerror = onEnd; }
        window.speechSynthesis.speak(utter);
    } catch (e) { if (onEnd) onEnd(); }
}
// ===== 설정 팝업 (목소리 / 정답 방식, 메인 설정 화면과 별도의 모달) =====
var gogodinoUiState = { settingsTab: 'voice' };
function openGogodinoSettings() {
    gogodinoUiState.settingsTab = 'voice';
    renderGogodinoSettingsModal();
}
function closeGogodinoSettings() {
    var el = document.getElementById('gdSettingsOverlay');
    if (el) el.parentNode.removeChild(el);
}
function setGogodinoSettingsTab(tab) {
    gogodinoUiState.settingsTab = tab;
    renderGogodinoSettingsModal();
}
function gdVoiceSetupBtnHtml(voice, label, savedUri) {
    var active = savedUri === voice.voiceURI;
    var safeUri = voice.voiceURI.replace(/'/g, "\\'");
    return '<button class="setup-btn' + (active ? ' active' : '') + '" onclick="setGogodinoVoice(\'' + safeUri + '\')">' + label + '</button>';
}
function buildGogodinoVoiceTabHtml() {
    if (!GD_SPEECH_SYNTH_SUPPORTED) {
        return '<div class="gogodino-voice-status">이 기기/브라우저는 음성 읽어주기를 지원하지 않아요.</div>';
    }
    var savedUri = gdGetSavedVoiceURI();
    // 선택창에는 "기본값"과 한국어 음성만 보여준다 — 다른 언어 목소리(힌디어 등)가
    // 섞여 들어가는 걸 막기 위해 한국어가 아닌 목소리는 아예 목록에 넣지 않는다.
    var koreanVoices = getGogodinoKoreanVoices();

    var html = '<div class="setup-section-label">정답을 읽어주는 목소리</div>';
    html += '<div class="gogodino-voice-status">기본값은 기기의 시스템 설정(기본 언어·목소리)을 그대로 따라요.</div>';
    html += '<div class="gogodino-option-grid">';
    html += '<button class="setup-btn' + (savedUri === '' ? ' active' : '') + '" onclick="setGogodinoVoice(\'\')">⚙️ 기본값 (시스템 설정)</button>';

    if (koreanVoices.length) {
        var groups = gdBuildVoiceGenderGroups(koreanVoices);
        if (groups.female) { html += gdVoiceSetupBtnHtml(groups.female, '👩 여자 목소리', savedUri); }
        if (groups.male) { html += gdVoiceSetupBtnHtml(groups.male, '👨 남자 목소리', savedUri); }
        groups.other.forEach(function (v) { html += gdVoiceSetupBtnHtml(v, v.name, savedUri); });
    }
    html += '</div>';

    if (koreanVoices.length === 0) {
        html += '<div class="gogodino-voice-status">이 기기에는 한국어 음성이 따로 설치돼 있지 않아요. "기본값"을 쓰면 기기의 시스템 설정대로 읽어줘요.</div>';
    }
    html += '<button class="action-btn secondary" style="font-size:0.85rem; padding:0.5rem 0.8rem;" onclick="speakGogodinoAnswer(\'안녕하세요\', false)">🔊 미리 듣기</button>';
    return html;
}
function buildGogodinoAnswerStyleTabHtml() {
    var style = gdGetAnswerStyle();
    var html = '<div class="setup-section-label">정답을 맞췄을 때 읽어주는 방식</div><div class="gogodino-option-grid">';
    html += '<button class="setup-btn' + (style === 'nameOnly' ? ' active' : '') + '" onclick="setGogodinoAnswerStyle(\'nameOnly\')">이름만 (예: "맥스")</button>';
    html += '<button class="setup-btn' + (style === 'correctPrefix' ? ' active' : '') + '" onclick="setGogodinoAnswerStyle(\'correctPrefix\')">정답! + 이름 (예: "정답! 맥스")</button>';
    html += '</div><div class="gogodino-voice-status">오답이거나 시간이 끝났을 땐 항상 이름만 말해줘요.</div>';
    return html;
}
function renderGogodinoSettingsModal() {
    var tab = gogodinoUiState.settingsTab;
    var html = '<div class="gd-modal-overlay" id="gdSettingsOverlay" onclick="if(event.target===this){closeGogodinoSettings();}">';
    html += '<div class="gd-modal-box">';
    html += '<div class="gd-modal-header"><div class="gd-modal-title">⚙️ 설정</div><button class="gd-modal-close" onclick="closeGogodinoSettings()">✕</button></div>';
    html += '<div class="gd-modal-tabs">';
    html += '<button class="gd-modal-tab' + (tab === 'voice' ? ' active' : '') + '" onclick="setGogodinoSettingsTab(\'voice\')">🔊 목소리</button>';
    html += '<button class="gd-modal-tab' + (tab === 'style' ? ' active' : '') + '" onclick="setGogodinoSettingsTab(\'style\')">🗣️ 정답 방식</button>';
    html += '</div>';
    html += '<div class="gd-modal-body">' + (tab === 'voice' ? buildGogodinoVoiceTabHtml() : buildGogodinoAnswerStyleTabHtml()) + '</div>';
    html += '</div></div>';

    var existing = document.getElementById('gdSettingsOverlay');
    if (existing) { existing.outerHTML = html; } else { document.body.insertAdjacentHTML('beforeend', html); }
}

function initGogodinoQuiz() {
    clearAllGameTimers();
    stopVoiceRecognition();
    document.getElementById('homeBtn').style.display = 'none';
    renderGogodinoSetup();
}

function getGogodinoPool() {
    return GOGODINO_DATA.filter(function (d) {
        return gogodinoSettings.gens.indexOf(d.gen) > -1;
    });
}

function renderGogodinoSetup() {
    var pool = getGogodinoPool();
    var allGens = gogodinoSettings.gens.length === GOGODINO_GEN_ORDER.length;

    var html = '<div class="game-title-box">' + GOGODINO_TITLE + '</div>';
    html += '<div class="game-sub-desc">캐릭터 사진을 보고 이름을 소리 내어 맞혀보세요!</div>';

    html += '<div class="setup-section-label">시리즈</div><div class="gogodino-gen-grid">';
    html += '<button class="setup-btn gogodino-gen-all' + (allGens ? ' active' : '') + '" onclick="toggleGogodinoGenAll()">전체</button>';
    GOGODINO_GEN_ORDER.forEach(function (g) {
        var active = gogodinoSettings.gens.indexOf(g) > -1;
        html += '<button class="setup-btn' + (active ? ' active' : '') + '" onclick="toggleGogodinoGen(\'' + g + '\')">' + g + '</button>';
    });
    html += '</div>';

    html += '<div class="setup-section-label">제한 시간</div><div class="gogodino-option-grid">';
    GOGODINO_TIME_OPTIONS.forEach(function (t) {
        html += '<button class="setup-btn' + (gogodinoSettings.timeLimit === t.v ? ' active' : '') + '" onclick="setGogodinoTimeLimit(' + t.v + ')">' + t.l + '</button>';
    });
    html += '</div>';

    html += '<button class="action-btn secondary" style="margin-bottom:1.2rem;" onclick="openGogodinoSettings()">⚙️ 목소리 · 정답 방식 설정</button>';

    html += '<button class="action-btn" ' + (pool.length === 0 ? 'disabled' : '') + ' onclick="startGogodinoSession()">시작하기 🚀 (' + pool.length + '개 중에서)</button>';
    document.getElementById('mainArea').innerHTML = html;
}

function toggleGogodinoGenAll() {
    gogodinoSettings.gens = (gogodinoSettings.gens.length === GOGODINO_GEN_ORDER.length) ? [] : GOGODINO_GEN_ORDER.slice();
    renderGogodinoSetup();
}
function toggleGogodinoGen(g) {
    var idx = gogodinoSettings.gens.indexOf(g);
    if (idx > -1) { gogodinoSettings.gens.splice(idx, 1); } else { gogodinoSettings.gens.push(g); }
    renderGogodinoSetup();
}
function setGogodinoTimeLimit(t) { gogodinoSettings.timeLimit = t; renderGogodinoSetup(); }

function startGogodinoSession() {
    var pool = getGogodinoPool();
    if (pool.length === 0) return;
    stopVoiceRecognition();
    clearAllGameTimers();
    gogodinoState = { pool: pool, correctCount: 0, totalCount: 0, current: null };
    document.getElementById('homeBtn').style.display = 'inline-block';
    nextGogodinoQuestion();
}

function nextGogodinoQuestion() {
    stopVoiceRecognition();
    clearAllGameTimers();

    var pool = gogodinoState.pool;
    var next = pickRandom(pool);
    if (pool.length > 1 && gogodinoState.current) {
        while (next.name === gogodinoState.current.name) { next = pickRandom(pool); }
    }
    gogodinoState.current = next;
    resetGogodinoRoundState();
    renderGogodino();
    startGogodinoTimer();
    if (GD_SPEECH_SUPPORTED) { startVoiceAnswer(); }
}

function retryGogodinoQuestion() {
    stopVoiceRecognition();
    clearAllGameTimers();
    resetGogodinoRoundState();
    renderGogodino();
    startGogodinoTimer();
    if (GD_SPEECH_SUPPORTED) { startVoiceAnswer(); }
}

function resetGogodinoRoundState() {
    gogodinoState.revealed = false;
    gogodinoState.voiceSaid = undefined;
    gogodinoState.voiceMatched = undefined;
    gogodinoState.timedOut = false;
    gogodinoState.showSuccess = false;
    gogodinoState.answerSpoken = false;
    gogodinoState.wrongAttempts = 0;
    gogodinoState.timeLeft = gogodinoSettings.timeLimit;
    gogodinoState.timerId = null;
}

function startGogodinoTimer() {
    if (gogodinoSettings.timeLimit <= 0) return; // 무제한: 타이머 없음
    var bar = document.getElementById('gogodinoTimerBar');
    if (bar) bar.style.width = '100%';
    gogodinoState.timerId = setInterval(function () {
        gogodinoState.timeLeft -= 0.1;
        var pct = Math.max(0, (gogodinoState.timeLeft / gogodinoSettings.timeLimit) * 100);
        var b = document.getElementById('gogodinoTimerBar');
        if (b) b.style.width = pct + '%';
        if (gogodinoState.timeLeft <= 0) {
            clearInterval(gogodinoState.timerId);
            gogodinoState.timerId = null;
            gogodinoState.timedOut = true;
            revealGogodino(false);
        }
    }, 100);
    activeTimers.push(gogodinoState.timerId);
}

// 초성 힌트는 문제가 나오자마자 바로 보여준다.
function buildGogodinoHintHtml() {
    if (gogodinoState.revealed) {
        return '<div class="gogodino-hint-box gogodino-hint-answer">' + gogodinoState.current.name + '</div>';
    }
    return '<div class="gogodino-hint-box">' + gdGetWordChosung(gogodinoState.current.name) + '</div>';
}

function renderGogodino() {
    var c = gogodinoState.current;
    var html = '<div class="game-title-box">' + GOGODINO_TITLE + '</div>';
    html += '<div class="game-sub-desc">사진 속 캐릭터의 이름을 소리 내어 말해보세요!' + (GD_SPEECH_SUPPORTED ? ' 마이크 버튼을 누르고 말해보세요.' : ' 다 말했으면 눌러서 확인해요.') + '</div>';

    if (!gogodinoState.revealed && gogodinoSettings.timeLimit > 0) {
        html += '<div class="timer-container"><div class="timer-bar" id="gogodinoTimerBar"></div></div>';
    }

    html += '<div class="status-row"><div class="gogodino-badge-group">' +
        '<span class="gogodino-badge">' + c.gen + '</span>' +
        '</div><div>맞춘 개수: ' + gogodinoState.correctCount + ' / ' + gogodinoState.totalCount + '</div></div>';

    html += '<div class="gogodino-image-box"><img src="images/' + encodeURIComponent(c.file) + '" alt="고고다이노 캐릭터"></div>';

    html += '<div id="gogodinoHintArea">' + buildGogodinoHintHtml() + '</div>';

    if (!gogodinoState.revealed) {
        if (GD_SPEECH_SUPPORTED) {
            html += '<button class="action-btn" style="background:#3f7d51;" onclick="startVoiceAnswer()">🎤 음성으로 답하기</button>';
            html += '<div id="gdVoiceStatus" class="gogodino-voice-status"></div>';
            html += '<button class="action-btn secondary" onclick="revealGogodino(true)">그냥 정답 보기 👀</button>';
        } else {
            html += '<button class="action-btn" onclick="revealGogodino(true)">정답 확인하기 👀</button>';
        }
    } else {
        if (gogodinoState.timedOut) {
            html += '<div class="msg-box bad" style="display:block;">⏰ 시간이 다 됐어요!</div>';
            html += buildStandardResultButtons('nextGogodinoQuestion()', 'retryGogodinoQuestion()', 'initGogodinoQuiz()');
        } else if (gogodinoState.showSuccess) {
            if (gogodinoState.voiceSaid !== undefined) {
                html += '<div class="game-sub-desc">내가 말한 것: "' + gogodinoState.voiceSaid + '"</div>';
            }
            html += '<div class="msg-box good" style="display:block;">🎉 ' + (gogodinoState.voiceSaid !== undefined ? '정답을 정확히 말했어요!' : '정답이에요!') + '</div>';
            if (GD_SPEECH_SUPPORTED) { html += '<div class="gogodino-voice-status">🎤 "다음" 또는 "다음 문제"라고 말해도 넘어가요</div>'; }
            html += buildStandardResultButtons('nextGogodinoQuestion()', 'retryGogodinoQuestion()', 'initGogodinoQuiz()');
        } else if (gogodinoState.voiceSaid !== undefined) {
            html += '<div class="game-sub-desc">내가 말한 것: "' + gogodinoState.voiceSaid + '"</div>';
            html += '<div class="msg-box bad" style="display:block;">음... 다르게 들렸어요. 잘 말했는데 못 알아들었을 수도 있어요!</div>';
            html += '<div class="options-grid">';
            html += '<button class="action-btn" onclick="overrideGogodinoCorrect()">그래도 맞았어요! 🙋</button>';
            html += '<button class="action-btn secondary" onclick="nextGogodinoQuestion()">다음 문제 ▶</button>';
            html += '</div>';
        } else {
            html += '<div class="options-grid">';
            html += '<button class="action-btn" onclick="gogodinoResult(true)">맞았어요! 🎉</button>';
            html += '<button class="action-btn secondary" onclick="gogodinoResult(false)">아쉬워요</button>';
            html += '</div>';
        }
    }
    html += '<div style="margin-top:1.5rem;"><button class="action-btn secondary" onclick="initGogodinoQuiz()" style="font-size:0.85rem; padding:0.5rem 0.8rem;">설정으로 돌아가기 ⚙️</button></div>';
    document.getElementById('mainArea').innerHTML = html;

    // 정답이 화면에 뜨는 순간, 이번 라운드에서 딱 한 번만 음성으로 읽어준다.
    // 정답을 맞춘 경우엔 TTS가 끝난 뒤에 "다음" 음성 명령을 듣기 시작한다 (말하는 도중 마이크가
    // 같이 켜져 있으면 TTS 소리를 마이크가 주워듣고 오작동할 수 있어서).
    if (gogodinoState.revealed && !gogodinoState.answerSpoken) {
        gogodinoState.answerSpoken = true;
        speakGogodinoAnswer(c.name, gogodinoState.showSuccess, function () {
            if (gogodinoState.showSuccess && GD_SPEECH_SUPPORTED) { startGogodinoNextVoiceListener(); }
        });
    }
}

function revealGogodino(manual) {
    stopVoiceRecognition();
    if (gogodinoState.timerId) { clearInterval(gogodinoState.timerId); gogodinoState.timerId = null; }
    gogodinoState.revealed = true;
    if (manual === false) {
        gogodinoState.timedOut = true;
        gogodinoState.totalCount++;
    } else if (gogodinoState.voiceSaid !== undefined) {
        // 음성으로 몇 번 시도했지만 못 맞히고 "그냥 정답 보기"를 누른 경우도 한 번의 시도로 집계한다.
        gogodinoState.totalCount++;
    }
    renderGogodino();
}

function gogodinoResult(correct) {
    gogodinoState.totalCount++;
    if (correct) {
        gogodinoState.correctCount++;
        gogodinoState.showSuccess = true;
        renderGogodino();
    } else {
        nextGogodinoQuestion();
    }
}
function overrideGogodinoCorrect() {
    gogodinoState.correctCount++;
    gogodinoState.showSuccess = true;
    renderGogodino();
    // 이 경로는 이미 한 번 이름을 읽어준 뒤라 다시 TTS를 틀지 않으므로, 여기서 바로 "다음" 듣기를 시작한다.
    if (GD_SPEECH_SUPPORTED) { startGogodinoNextVoiceListener(); }
}

function stopVoiceRecognition() {
    if (gdVoiceRecognition) {
        try { gdVoiceRecognition.onresult = null; gdVoiceRecognition.onerror = null; gdVoiceRecognition.onend = null; gdVoiceRecognition.stop(); } catch (e) { }
        gdVoiceRecognition = null;
    }
}
// 음성 인식은 한 번 말하면 끝나버리는 단발성이라, 정답을 못 맞히면 onend에서
// (이 문제가 아직 진행 중일 때만) 스스로 다시 시작해서 타이머가 끝날 때까지 마이크가 계속 켜져있게 한다.
function startVoiceAnswer() {
    var SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognitionAPI) return;
    stopVoiceRecognition();
    var statusEl = document.getElementById('gdVoiceStatus');
    if (statusEl) statusEl.innerText = '🎙️ 듣고 있어요... 캐릭터 이름을 말해보세요!';

    var recognition = new SpeechRecognitionAPI();
    recognition.lang = 'ko-KR';
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;
    recognition.continuous = true; // 중간에 끊기고 다시 시작하는 횟수를 줄여서 마이크 시작음이 덜 울리게 한다.

    recognition.onresult = function (event) {
        // continuous 모드에서는 event.results에 이전 발화까지 계속 쌓이므로,
        // 항상 가장 마지막(이번에 새로 들어온) 결과만 읽어야 한다.
        var last = event.results[event.results.length - 1];
        var transcripts = [];
        for (var i = 0; i < last.length; i++) {
            transcripts.push(last[i].transcript);
        }
        handleGogodinoVoiceResult(transcripts);
    };
    recognition.onerror = function () {
        var st = document.getElementById('gdVoiceStatus');
        if (st && gdVoiceRecognition === recognition) st.innerText = '🎙️ 아직 듣고 있어요... 다시 한 번 말해볼까요?';
    };
    recognition.onend = function () {
        // 인식이 끝나자마자 바로 start()를 다시 부르면 브라우저가 무시하거나 조용히 실패해서
        // (특히 무음이 몇 초 이어져 자동 종료된 경우) 마이크가 영영 안 켜질 수 있다.
        // 살짝 텀을 두고 다시 시작하면 훨씬 안정적으로 계속 듣게 된다.
        if (gdVoiceRecognition === recognition && !gogodinoState.revealed) {
            setTimeout(function () {
                if (gdVoiceRecognition === recognition && !gogodinoState.revealed) {
                    try { recognition.start(); } catch (e) { }
                }
            }, 300);
        }
    };

    gdVoiceRecognition = recognition;
    try { recognition.start(); } catch (e) { }
}
function gdNormalizeSpeechText(s) {
    return String(s).replace(/\s+/g, '').trim();
}

// ===== 발음 유사도 비교 (아이들 발음이 정확하지 않아도 정답으로 인정하기 위함) =====
// 음절을 초성/중성/종성 자모로 풀어서 비교하면, 음절 단위 비교보다 훨씬 촘촘하게
// "얼마나 비슷하게 말했는지"를 잴 수 있다.
var GD_JAMO_CHO = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
var GD_JAMO_JUNG = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
var GD_JAMO_JONG = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
function gdDecomposeSyllable(ch) {
    var code = ch.charCodeAt(0) - 0xAC00;
    if (code < 0 || code > 11171) return [ch];
    var cho = Math.floor(code / (21 * 28));
    var jung = Math.floor((code % (21 * 28)) / 28);
    var jong = code % 28;
    var out = [GD_JAMO_CHO[cho], GD_JAMO_JUNG[jung]];
    if (jong > 0) out.push(GD_JAMO_JONG[jong]);
    return out;
}
function gdToJamoArray(str) {
    var out = [];
    for (var i = 0; i < str.length; i++) { out = out.concat(gdDecomposeSyllable(str[i])); }
    return out;
}
function gdLevenshtein(a, b) {
    var m = a.length, n = b.length;
    var dp = [];
    for (var i = 0; i <= m; i++) { dp.push([i]); }
    for (var j = 1; j <= n; j++) { dp[0][j] = j; }
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            dp[i][j] = (a[i - 1] === b[j - 1]) ? dp[i - 1][j - 1] :
                1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        }
    }
    return dp[m][n];
}
function gdSpeechSimilarity(a, b) {
    var ja = gdToJamoArray(a), jb = gdToJamoArray(b);
    var maxLen = Math.max(ja.length, jb.length);
    if (maxLen === 0) return 1;
    return 1 - gdLevenshtein(ja, jb) / maxLen;
}
var GD_VOICE_MATCH_THRESHOLD = 0.5; // 정확도 50% 이상이면 정답으로 인정

// 정답 화면에서 "다음" 또는 "다음 문제"라고 말하면 다음 문제로 넘어간다 (정답을 맞춘 뒤에만 켜짐).
// 알아듣지 못하거나 다른 말이면 onend에서 이 인스턴스가 여전히 유효한지(아직 정답 화면인지)
// 확인한 뒤 다시 듣기를 반복한다.
function startGogodinoNextVoiceListener() {
    var SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognitionAPI) return;
    stopVoiceRecognition();

    var recognition = new SpeechRecognitionAPI();
    recognition.lang = 'ko-KR';
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;
    recognition.continuous = true;

    recognition.onresult = function (event) {
        var last = event.results[event.results.length - 1];
        var isNext = false;
        for (var i = 0; i < last.length; i++) {
            if (gdNormalizeSpeechText(last[i].transcript).indexOf('다음') > -1) { isNext = true; }
        }
        if (isNext) { nextGogodinoQuestion(); }
    };
    recognition.onerror = function () { };
    recognition.onend = function () {
        if (gdVoiceRecognition === recognition && gogodinoState.showSuccess) {
            setTimeout(function () {
                if (gdVoiceRecognition === recognition && gogodinoState.showSuccess) {
                    try { recognition.start(); } catch (e) { }
                }
            }, 300);
        }
    };

    gdVoiceRecognition = recognition;
    try { recognition.start(); } catch (e) { }
}

function handleGogodinoVoiceResult(transcripts) {
    var target = gdNormalizeSpeechText(gogodinoState.current.name);
    var matched = transcripts.some(function (t) {
        var n = gdNormalizeSpeechText(t);
        if (n === target || n.indexOf(target) > -1 || target.indexOf(n) > -1) return true;
        return gdSpeechSimilarity(n, target) >= GD_VOICE_MATCH_THRESHOLD;
    });
    gogodinoState.voiceSaid = transcripts[0] || '(인식된 말이 없어요)';
    gogodinoState.voiceMatched = matched;

    if (!matched) {
        gogodinoState.wrongAttempts++;
        if (gogodinoState.wrongAttempts >= 2) {
            // 한 번 더 기회를 줬는데도 또 틀리면, 더 듣지 않고 바로 정답을 보여준다.
            revealGogodino(true);
            return;
        }
        // 처음 틀렸을 때는 라운드를 끝내지 않고 한 번 더 들어본다.
        // 마이크는 onend에서 자동으로 다시 듣기 시작한다.
        var st = document.getElementById('gdVoiceStatus');
        if (st) st.innerText = '🎙️ "' + gogodinoState.voiceSaid + '"라고 들었어요. 다시 말해볼까요?';
        return;
    }

    stopVoiceRecognition();
    if (gogodinoState.timerId) { clearInterval(gogodinoState.timerId); gogodinoState.timerId = null; }
    gogodinoState.revealed = true;
    gogodinoState.totalCount++;
    gogodinoState.correctCount++;
    gogodinoState.showSuccess = true;
    renderGogodino();
}

// ===================== 공통 유틸 =====================
function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function pickRandom(arr) { return arr[getRandomInt(0, arr.length - 1)]; }
function vibrateShort() {
    if (navigator.vibrate) { navigator.vibrate(30); }
}

// ===================== 결과 버튼 공통 =====================
function buildStandardResultButtons(nextCall, retryCall, homeCall) {
    return '<button class="action-btn" onclick="' + nextCall + '">다음 문제 ▶</button>' +
        '<div class="options-grid">' +
        '<button class="action-btn secondary" onclick="' + retryCall + '">이 문제 다시 🔁</button>' +
        '<button class="action-btn secondary" onclick="' + homeCall + '">설정으로 ⏮</button>' +
        '</div>';
}

// ===================== 타이머 관리 =====================
var activeTimers = [];
function clearAllGameTimers() {
    activeTimers.forEach(function (t) { clearTimeout(t); clearInterval(t); });
    activeTimers = [];
}

function goHome() {
    clearAllGameTimers();
    if (typeof stopVoiceRecognition === 'function') stopVoiceRecognition();
    document.getElementById('homeBtn').style.display = 'none';
    initGogodinoQuiz();
}

// ===================== 앱 시작점 =====================
// 하이브리드 웹뷰(Cordova/Capacitor)에서 DOM 초기화 전에 스크립트가 실행되는 것을 막기 위해
// DOMContentLoaded 이후에 진입 화면을 그린다.
document.addEventListener('DOMContentLoaded', function () {
    initGogodinoQuiz();
});

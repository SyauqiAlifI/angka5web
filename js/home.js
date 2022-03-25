// Variables
var theLoader = document.getElementById('loader');
var loadingText = document.getElementById('loading-page-text');

// Functions
function loadingFun() {
    myVar = setTimeout(showPage, 5000);
}
function showPage() {
    theLoader.style.display = 'none';
    theLoader.style.animationPlayState = 'running';
    document.getElementById('main-screen').style.display = 'flex';
}
// Function 'goToMyPage'
function goToMyPage() {
    window.location.href = '/';
}

// Tooltips
// $(function () {
//     $('[data-toggle="tooltip"]').tooltip()
// });
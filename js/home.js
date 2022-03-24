// Variables
var theLoader = document.getElementById('loader');
var loadingText = document.getElementById('loading-page-text');

// Functions
function loadingFun() {
    myVar = setTimeout(showPage, 3000);
}
function showPage() {
    theLoader.style.display = 'none';
    document.getElementById('main-screen').style.display = 'block';
}
// 
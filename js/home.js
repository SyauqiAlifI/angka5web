var theLoader = document.getElementById('loader');
function loadingFun() {
    myVar = setTimeout(showPage, 3000);
}
function showPage() {
    theLoader.style.display = 'none';
    document.getElementById('main-screen').style.display = 'block';
}
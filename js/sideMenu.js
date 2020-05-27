document.querySelector("#iconeMenu").addEventListener("click",function (event) {
    openSideMenu();
});
document.querySelector("#close-side-menu").addEventListener("click",function (event) {
    closeSideMenu();
});
document.querySelector("main").addEventListener("click",function (event) {
    closeSideMenu();
});
function openSideMenu() {
    let menu = document.querySelector("#sideMenu");
    menu.style.display = "block";
}
function closeSideMenu() {
    let menu = document.querySelector("#sideMenu");
    menu.style.display = "none";
}
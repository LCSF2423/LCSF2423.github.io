function hamburger() {
    var menu = document.getElementById("menu-links");
    var company_name = document.getElementById("company_name");
    if (menu.style.display === "block") {
        company_name.style.display = "block";
        menu.style.display = "none";
    } else {
        company_name.style.display = "none";
        menu.style.display = "block";
    }
}
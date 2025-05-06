//Burger-Menu

    const burgerButton = document.querySelector("[data-burger-menu]");
    const linkMenu = document.querySelector("[data-link-menu]");
    const linksShadow = document.querySelector("[data-link-shadow]");
    const menuCloseButton = document.querySelector("[data-burger-close]");
    const navLinks = document.querySelectorAll("[data-link]");

    const showMenu = (view) =>{
        view ? linkMenu.classList.add("nav-link-menu-open") : linkMenu.classList.remove("nav-link-menu-open");
    }

    burgerButton?.addEventListener("click", (e) => {
        showMenu(true)
    })

    linksShadow?.addEventListener("click", (e) => {
        showMenu(false)
    })

    menuCloseButton?.addEventListener("click", (e) => {
        showMenu(false)
    })

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            showMenu(false)
        })
    })


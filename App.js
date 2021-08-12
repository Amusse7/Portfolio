window.onload=()=>{
    const e_mainNav=document.getElementById("main-nav");
    const e_navItems=document.querySelectorAll("#main-nav nav a");
    const e_headerHeight = 100;

    window.addEventListener("scroll",(e)=>{
        if(window.pageYOffset >= window.innerHeight - e_headerHeight)
            e_mainNav.style.background="black";
        else
            e_mainNav.style.background="transparent";
    });

    e_navItems.forEach((navItem)=>{
        navItem.addEventListener("click",(e)=>{
            e.preventDefault();
            const e_target=document.getElementById(e.target.dataset.target);
            window.scrollTo(0, e_target.offsetTop - 70);
        });
    });
}
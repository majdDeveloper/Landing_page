let landing_page = document.querySelector(".landing_page");
let load_page = document.querySelector(".load_page");
let bottom = document.querySelector(".scroll");
let chat = document.querySelector(".chat");
let whatsUp = document.querySelector(".whatsUp");
let hide = document.querySelector(".hide");
let phone = document.querySelector(".phone");
let num_load = document.querySelector(".number span");
let number = document.querySelector(".number");
let progress = document.querySelector(".load_page .progress");
let bar_icon = document.querySelector(".bar-icon");
let bar = document.querySelector(".main_list");
let hidden_element = document.querySelectorAll(".hidden"); 
bar_icon.addEventListener("click", () => {
    bar.classList.toggle("navActive");
})
let stander = false;
number.classList.add("text-blink")
let progress_num = setInterval(() => {
    num_load.innerHTML++;
    progress.style.width = `${num_load.innerHTML}%`;
    if(num_load.innerHTML == "100") {
        clearInterval(progress_num);
        landing_page.style.display = "block";
        load_page.style.display = "none";
    }
}, 50)
function scrollTop() {
    if (window.scrollY >= 600) {
    bottom.style.display = "block"
    } else {
    bottom.style.display = "none"
    }
}
bottom.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

chat.onclick = function() {
    whatsUp.style.cssText = "bottom: 100px";
    phone.style.cssText = "bottom: 160px";
    chat.style.cssText = "z-index: 1";
    hide.style.cssText = "transform: rotate(-180deg);"
}
hide.onclick = function() {
    whatsUp.style.cssText = "bottom: 5%";
    phone.style.cssText = "bottom: 5%";
    chat.style.cssText = "z-index: 10";
    chat.style.cssText = "transform: rotate(360deg);"
    hide.style.cssText = "transform: rotate(0);"
}
let scroll1 = window.pageYOffset;
window.onscroll = () => {
    scrollTop();
    let scroll2 = window.pageYOffset;
    if(scroll1 > scroll2) {
        document.querySelector(".header").style.top = "0";
    } else {
        document.querySelector(".header").style.top = "-100px";
    }
    scroll1 = scroll2;
}


// scroll animations 

let observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    })
})

hidden_element.forEach((el) => {
    observer.observe(el);
})
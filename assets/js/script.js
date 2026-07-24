emailjs.init({
    publicKey: "gnCe_qmy0n66GbqxG",
});
const heroImage = document.querySelector(".hero-image-box");

document.addEventListener("mousemove", (e) => {

    const x = (e.clientX - window.innerWidth / 2) / 40;
    const y = (e.clientY - window.innerHeight / 2) / 40;

    heroImage.style.transform =
        `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;

});

document.addEventListener("mouseleave", () => {

    heroImage.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg)";

});const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_415n9iq",
        "template_btl60y1",
        this
    ).then(function () {
        alert("Message Sent Successfully!");
        contactForm.reset();
    }, function (error) {
        alert("Failed to send message.");
        console.log(error);
    });
});
window.addEventListener("load", function () {

    setTimeout(() => {
        document.getElementById("preloader").classList.add("hide");
    }, 1200);

});
// ===== AOS =====
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

if (window.scrollY > 100) {
    header.classList.add("scrolled");
} else {
    header.classList.remove("scrolled");
}

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
const progressBar = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";

});
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
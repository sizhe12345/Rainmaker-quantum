//First transition
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('animate__animated', 'animate__fadeIn');
        }
    });
});

const hiddenelements = document.querySelectorAll(".trading-content");
hiddenelements.forEach((el) => observer.observe(el));

//Second transition
const observer1 = new IntersectionObserver((entries1) => {
    entries1.forEach((entry1)=>{
        console.log(entry1)
        if (entry1.isIntersecting){
            entry1.target.classList.add('animate__animated', 'animate__backInUp');
        }
    });
});

const hiddenelements1 = document.querySelectorAll(".layout_fi");
hiddenelements1.forEach((el1) => observer1.observe(el1));

//Third transition
const observer2 = new IntersectionObserver((entries2) => {
    entries2.forEach((entry2)=>{
        console.log(entry2)
        if (entry2.isIntersecting){
            entry2.target.classList.add('animate__animated', 'animate__backInUp');
        }
    });
});

const hiddenelements2 = document.querySelectorAll(".layout_ie");
hiddenelements2.forEach((el2) => observer2.observe(el2));


//Fourth transition
const observer3 = new IntersectionObserver((entries3) => {
    entries3.forEach((entry3)=>{
        console.log(entry3)
        if (entry3.isIntersecting){
            entry3.target.classList.add('animate__animated', 'animate__fadeInDown');
        }
    });
});

const hiddenelements3 = document.querySelectorAll(".layout_steps img");
hiddenelements3.forEach((el3) => observer3.observe(el3));

//Fifth transition
const observer4 = new IntersectionObserver((entries4) => {
    entries4.forEach((entry4)=>{
        console.log(entry4)
        if (entry4.isIntersecting){
            entry4.target.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
});

const hiddenelements4 = document.querySelectorAll(".layout_steps p");
hiddenelements4.forEach((el4) => observer4.observe(el4));

//Sixth transition
const observer5 = new IntersectionObserver((entries5) => {
    entries5.forEach((entry5)=>{
        console.log(entry5)
        if (entry5.isIntersecting){
            entry5.target.classList.add('animate__animated', 'animate__flipInY');
        }
    });
});

const hiddenelements5 = document.querySelectorAll(".app-ele img");
hiddenelements5.forEach((el5) => observer5.observe(el5));

//Seventh transition
/*const observer6 = new IntersectionObserver((entries6) => {
    entries6.forEach((entry6)=>{
        console.log(entry6)
        if (entry6.isIntersecting){
            entry6.target.classList.add('animate__animated', 'animate__slideInRight');
        }
    });
});

const hiddenelements6 = document.querySelectorAll(".simg-2");
hiddenelements6.forEach((el6) => observer6.observe(el6));

//Eighth transition
const observer7 = new IntersectionObserver((entries7) => {
    entries7.forEach((entry7)=>{
        console.log(entry7)
        if (entry7.isIntersecting){
            entry7.target.classList.add('animate__animated', 'animate__slideInUp');
        }
    });
});

const hiddenelements7 = document.querySelectorAll(".simg-3");
hiddenelements7.forEach((el7) => observer7.observe(el7));

//Nineth transition
/*const observer8 = new IntersectionObserver((entries8) => {
    entries8.forEach((entry8)=>{
        console.log(entry8)
        if (entry8.isIntersecting){
            entry8.target.classList.add('animate__animated', 'animate__zoomIn');
        }
    });
});

const hiddenelements8 = document.querySelectorAll(".ratio video");
hiddenelements8.forEach((el8) => observer8.observe(el8));*/

//Tenth transition
/*const observer9 = new IntersectionObserver((entries9) => {
    entries9.forEach((entry9)=>{
        console.log(entry9)
        if (entry9.isIntersecting){
            entry9.target.classList.add('animate__animated', 'animate__fadeInDownBig');
        }
    });
});

const hiddenelements9 = document.querySelectorAll(".robot-img");
hiddenelements9.forEach((el9) => observer9.observe(el9));*/

//Eleventh transition
const observer10 = new IntersectionObserver((entries10) => {
    entries10.forEach((entry10)=>{
        console.log(entry10)
        if (entry10.isIntersecting){
            entry10.target.classList.add('animate__animated', 'animate__slideInUp');
        }
    });
});

const hiddenelements10 = document.querySelectorAll(".how-ib-container");
hiddenelements10.forEach((el10) => observer10.observe(el10));

//Modal
document.addEventListener("click",function(e){
    if(e.target.classList.contains("stats-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('stats-modal'));
        myModal.show();
    }
});
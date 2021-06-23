// Adding a side bar to the moblle ersion of the portfolio:

let hamIcon = document.querySelector("#ham");
let navBar = document.querySelector("#navbar");
let close = document.querySelector("#close1");
let homeContainer = document.querySelector("#welcomehome");
let aboutContainer = document.querySelector("#about");
let projectContainer = document.querySelector("#projects");
let contactContainer = document.querySelector("#contacts");

// Click events:

hamIcon.addEventListener('click', ()=>{
    if(navBar.classList.contains('show'))
    {
        navBar.classList.remove('show');
        navBar.classList.add('hidden');
    } else {
        navBar.classList.add('show');
        navBar.classList.remove('hidden');
    }
})
homeContainer.addEventListener('click', ()=>{
    navBar.classList.add('hidden');
    navBar.classList.remove('show');
})
aboutContainer.addEventListener('click', ()=>{
    navBar.classList.add('hidden');
    navBar.classList.remove('show');
})
projectContainer.addEventListener('click', ()=>{
    navBar.classList.add('hidden');
    navBar.classList.remove('show');
})
contactContainer.addEventListener('click', ()=>{
    navBar.classList.add('hidden');
    navBar.classList.remove('show');
})

let menuBtn = document.querySelector('#menu');
let showMenuIcon = document.querySelector('#menu i.fa-bars');
let closeMenuIcon = document.querySelector('#menu i.fa-times');
let navLinks = document.querySelector('#navlinks');

// open or close menu
let open = false;

menuBtn.addEventListener('click', function() {
    open = !open;

    if (open) {
        showMenuIcon.classList.remove('fa-bars');
        showMenuIcon.classList.add('fa-times');
        navLinks.classList.remove('hidden');
        navLinks.classList.add('flex');
    } else {
        showMenuIcon.classList.remove('fa-times');
        showMenuIcon.classList.add('fa-bars');
        navLinks.classList.remove('flex');
        navLinks.classList.add('hidden');
    }
});
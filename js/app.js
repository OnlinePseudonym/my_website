const projects = document.querySelectorAll('.project');
const github = document.querySelector('.header__github');
const codepen = document.querySelector('.header__projects');
const resume = document.querySelector('.header__resume');

function openLink(e) {
    e.preventDefault();
    const url = this.href;
    console.log(this, url);
    window.open(url, '_blank');
}

function toggleOpen() {
    if(this.classList.contains('open')) {
        projects.forEach(project => project.classList.remove('open'));
    }
    else {
        projects.forEach(project => project.classList.remove('open'));
        this.classList.toggle('open');
    }
}

function toggleActive(e) {
    if(e.propertyName.includes('flex-grow')) {
        this.classList.toggle('open-active');
    }
}

projects.forEach(project => project.addEventListener('click', toggleOpen));
projects.forEach(project => project.addEventListener('transitionend', toggleActive));

github.addEventListener('click', openLink);
codepen.addEventListener('click', openLink);
resume.addEventListener('click', openLink);
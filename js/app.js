const projects = document.querySelectorAll('.project');
const links = document.querySelectorAll('.link');

function openLink(e) {
    e.preventDefault();
    e.stopPropagation();
    window.open(this.href, '_blank');
}

function pageLink() {
    window.open(url, '')
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
links.forEach(link => link.addEventListener('click', openLink));

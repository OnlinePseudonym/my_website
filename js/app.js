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
    const title = this.children[0];
    const titleSmall = this.children[1];
    const details = this.children[2];
    const source = this.children[3];

    if(this.classList.contains('open')) {
        title.classList.toggle('active');
        source.classList.toggle('active');
        titleSmall.classList.toggle('shrink');
        details.classList.toggle('slide-in');
        this.classList.toggle('open');
    }
    else {
        projects.forEach(project => {
            project.classList.remove('open');
            project.children[1].classList.remove('shrink');
            project.children[2].classList.remove('slide-in');
            project.children[0].classList.remove('active');
            project.children[3].classList.remove('active');
        });
        this.classList.toggle('open');
        title.classList.toggle('active');
        source.classList.toggle('active');
        titleSmall.classList.toggle('shrink');
        details.classList.toggle('slide-in');
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

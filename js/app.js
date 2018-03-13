const projects = document.querySelectorAll('.project');
const links = document.querySelectorAll('.link');
const toggles = document.querySelectorAll('.project--details-toggle');

let isOpen = false;

function openLink(e) {
    e.preventDefault();
    e.stopPropagation();
    window.open(this.href, '_blank');
}

function closeAll() {
    projects.forEach(project => {
        project.classList.remove('open');
        project.querySelector('.project--title-small').classList.remove('shrink');
        project.querySelector('.project--details-toggle').classList.remove('appear');
        project.querySelector('.project--details--container').classList.remove('slide-in');
        setTimeout(() => project.querySelector('.project--details--container').querySelector('.project--details').classList.remove('increase-font'), 800);
        project.querySelector('.project--title').classList.remove('active');
        project.querySelector('.project--link').classList.remove('active');
    });
    toggles.forEach(toggle => {
        toggle.style.transform = 'translateX(0px)';
        toggle.children[0].style.transform = 'rotate(0deg)';
    });

    isOpen = false;
}

function toggleOpen() {
    const title = this.querySelector('.project--title');
    const titleSmall = this.querySelector('.project--title-small');
    const toggle = this.querySelector('.project--details-toggle');
    const details = this.querySelector('.project--details--container');
    const source = this.querySelector('.project--link');

    this.classList.toggle('disable-pointer');
    setTimeout(() => this.classList.toggle('disable-pointer'), 1000);
    
    if(!this.classList.contains('open')) {
        closeAll();
    }
    
    details.classList.remove('slide-in');
    setTimeout(() => details.querySelector('.project--details').classList.remove('increase-font'), 800);
    
    this.classList.toggle('open');
    title.classList.toggle('active');
    source.classList.toggle('active');
    titleSmall.classList.toggle('shrink');
    toggle.classList.toggle('appear');
}

function openDetails(e) {
    e.stopPropagation();
    
    const slider = this.nextElementSibling;
    const details = slider.querySelector('.project--details');
    const width = details.offsetWidth;
    const icon = this.querySelector('.fa-chevron-circle-left');
    
    slider.classList.toggle('slide-in');
    if (details.classList.contains('increase-font')) {
        setTimeout(() => details.classList.remove('increase-font'), 800);
    } else {
        details.classList.add('increase-font');
    }
    
    if(!isOpen) {
        this.style.transform = `translateX(-${width}px)`;
        icon.style.transform = 'rotate(180deg)';
    } else {
        this.style.transform = 'translateX(0px)';
        icon.style.transform = 'rotate(0deg)';
    }
    
    isOpen = !isOpen;
}

function toggleActive(e) {
    if(e.propertyName.includes('flex-grow') && e.target.classList.contains('open')) {
        this.classList.add('open-active');
    } else if (e.propertyName.includes('flex-grow')) {
        this.classList.remove('open-active');
    }
}

projects.forEach(project => project.addEventListener('click', toggleOpen));
projects.forEach(project => project.addEventListener('transitionend', toggleActive));
links.forEach(link => link.addEventListener('click', openLink));
toggles.forEach(toggle => toggle.addEventListener('click', openDetails));

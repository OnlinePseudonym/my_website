const projects = document.querySelectorAll('.project');
const links = document.querySelectorAll('.link');
const toggles = document.querySelectorAll('.project--details-toggle');

let isOpen = false;

function openLink(e) {
    e.preventDefault();
    e.stopPropagation();
    window.open(this.href, '_blank');
}

function pageLink() {
    window.open(url, '')
}

function closeAll() {
    projects.forEach(project => {
        project.classList.remove('open');
        project.children[1].classList.remove('shrink');
        project.children[2].classList.remove('appear');
        project.children[3].classList.remove('slide-in');
        project.children[0].classList.remove('active');
        project.children[4].classList.remove('active');
    });
    toggles.forEach(toggle => {
        toggle.style.transform = 'translateX(0px)';
        toggle.children[0].style.transform = 'rotate(0deg)';
    });

    isOpen = false;
}

function toggleOpen() {
    const title = this.children[0];
    const titleSmall = this.children[1];
    const toggle = this.children[2];
    const details = this.children[3];
    const source = this.children[4];
    
    console.log(details.children[0].offsetWidth);

    this.classList.toggle('disable-pointer');
    setTimeout(() => this.classList.toggle('disable-pointer'), 1000);
    
    if(!this.classList.contains('open')) {
        closeAll();
    }
    
    this.classList.toggle('open');
    title.classList.toggle('active');
    source.classList.toggle('active');
    titleSmall.classList.toggle('shrink');
    toggle.classList.toggle('appear');
}

function openDetails(e) {
    e.stopPropagation();
    
    const details = this.nextElementSibling;
    const width = details.children[0].offsetWidth;
    const icon = this.children[0];
    
    details.classList.toggle('slide-in');
    
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
    if(e.propertyName.includes('flex-grow')) {
        this.classList.toggle('open-active');
    }
}

projects.forEach(project => project.addEventListener('click', toggleOpen));
projects.forEach(project => project.addEventListener('transitionend', toggleActive));
links.forEach(link => link.addEventListener('click', openLink));
toggles.forEach(toggle => toggle.addEventListener('click', openDetails));

function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length) {
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        };

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            })
        })
    }
}


function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');

    if (accordionList.length) {
        function activeAccordion(event) {
            this.classList.toggle('ativo')
            this.nextElementSibling.classList.toggle('ativo')
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        })

    }

}

initTabNav()
initAccordion()

function initScrollSuave(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

    function scrollToSection(event){
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        
        
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        
        
    /*     const topo = section.offsetTop;
    */    /* window.scrollTo({
            top: topo,
            behavior: 'smooth'
        }) */


    }

    linksInternos.forEach((link)=>{
        link.addEventListener('click', scrollToSection)
    })    
}

initScrollSuave()
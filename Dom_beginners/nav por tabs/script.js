const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabMenu.length){
    function activeTab(index){
        tabContent.forEach((section)=>{
            section.classList.remove('ativo');
        });
        tabContent[index].classList.add('ativo');
    };

    tabMenu.forEach((itemMenu, index)=>{
        itemMenu.addEventListener('click', ()=>{
            activeTab(index);
        })
    })   
}


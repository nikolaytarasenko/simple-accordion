const tabsTitle = document.querySelectorAll('.tab__title');

for (let i = 0; i < tabsTitle.length; i++) {
    tabsTitle[i].addEventListener('click', tabClickHandler);
}

function tabClickHandler(e) {
    this.parentElement.classList.toggle('js-active');    

    let currentTabContent = this.parentElement.querySelector('.tab__content');

    currentTabContent.style.maxHeight ? currentTabContent.style.maxHeight = null : currentTabContent.style.maxHeight = currentTabContent.scrollHeight + 'px';
}
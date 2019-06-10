const tabsTitle = document.querySelectorAll('.tab__title');

for (let i = 0; i < tabsTitle.length; i++) {
    tabsTitle[i].addEventListener('click', tabClickHandler);
}

function tabClickHandler(e) {
    this.parentElement.classList.toggle('js-active');

    let tabs = document.querySelectorAll('.tab');
    let tabsContent = document.querySelectorAll('.tab__content');

    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i] !== this.parentElement) {
            tabs[i].classList.remove('js-active');
            tabsContent[i].style.maxHeight = null
        }
    }

    let currentTabContent = this.parentElement.querySelector('.tab__content');

    currentTabContent.style.maxHeight ? currentTabContent.style.maxHeight = null : currentTabContent.style.maxHeight = currentTabContent.scrollHeight + 'px';
}
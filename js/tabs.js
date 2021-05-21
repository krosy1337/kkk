function startTabs() {
	const tabs = document.querySelector('.tabs')
	const tabsBtns = document.querySelectorAll('.tabs__btn')
	const tabsContentItems = document.querySelectorAll('.tabs__content-item')

	function tabsHandler(path) {
		tabsBtns.forEach(el => el.classList.remove('tabs__btn_active'))
		tabsContentItems.forEach(el => el.classList.remove('tabs__content-item_active'))
		tabs.querySelector(`[data-tabs-path=${path}]`).classList.add('tabs__btn_active')
		tabs.querySelector(`[data-tabs-target=${path}]`).classList.add('tabs__content-item_active')
	}

	if (tabs) {
		tabs.addEventListener('click', event => {
			if (event.target.classList.contains('tabs__btn')) {
				const tabsPath = event.target.dataset.tabsPath
				tabsHandler(tabsPath)
			}
		})
	}
}

export default startTabs
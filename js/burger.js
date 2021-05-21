function startBurger() {
	const burger = document.querySelector('.header__burger')

	if (burger) {
		const headerList = document.querySelector('.header__list')
		burger.addEventListener('click', () => {
			burger.classList.toggle('active')
			headerList.classList.toggle('active')
			document.body.classList.toggle('lock')
		})

		document.body.addEventListener('click', event => {
			if(!event.target.closest('.header')) {
				headerList.classList.remove('active')
				burger.classList.remove('active')
				document.body.classList.remove('lock')
			}
		})
	}
}

export default startBurger
function startAccordion() {
	const accordions = document.querySelectorAll('.accordion')

	if (accordions) {
		accordions.forEach(accordion => {
			accordion.addEventListener('click', event => {
				if (event.target.closest('.accordion__header')) {
					const accordionItems = accordion.querySelectorAll('.accordion__item')
					const isOpened = event.target.closest('.accordion__header')
						.querySelector('.accordion__icon')
						.classList.contains('active')

					accordionItems.forEach(el => {
						el.querySelector('.accordion__icon').classList.remove('active')
						el.querySelector('.accordion__title').classList.remove('active')
						el.querySelector('.accordion__content').style.height = '0px'
					})

					if (!isOpened) {
						const accordionActive = event.target.closest('.accordion__item')
						accordionActive.querySelector('.accordion__icon').classList.add('active')
						accordionActive.querySelector('.accordion__title').classList.add('active')
						accordionActive.querySelector('.accordion__content').style.height =
							`${accordionActive.querySelector('.accordion__content').scrollHeight}px`
						console.dir(accordionActive.querySelector('.accordion__content'))
					}

				}
			})
		})
	}
}

export default startAccordion
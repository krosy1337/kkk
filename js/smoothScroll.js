function startScroll() {
	const linkElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])')

	linkElems.forEach(el => {
		el.addEventListener('click', event => {
			const target = document.querySelector(`.${el.getAttribute('href').slice(1)}`)

			target.scrollIntoView({
				behavior: 'smooth'
			})

			event.preventDefault()
		})
	})
}

export default startScroll


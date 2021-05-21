function startMain() {
	const swiper = new Swiper('.swiper-container', {
		// Optional parameters
		loop: true,

		spaceBetween: 20,

		// Navigation arrows
		navigation: {
			nextEl: '.arrow__btn_next',
			prevEl: '.arrow__btn_prev',
		},

		slidesPerView: 1,

		breakpoints: {
			768: {
				slidesPerView: 2,
			}
		}
	});
}

export default startMain
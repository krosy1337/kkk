function startModal() {
	const modal = document.querySelector('.modal')

	if (modal) {
		const path = modal.dataset.modalTarget
		const modalOpenBtn = document.querySelector(`[data-modal-path=${path}]`)
		modal.addEventListener('click', event => {
			if (event.target.closest('.modal__close') || event.target.classList.contains('modal')) {
				modal.classList.remove('active')
			}
		})

		modalOpenBtn.addEventListener('click', () => {
			modal.classList.add('active')
		})
	}
}

export default startModal
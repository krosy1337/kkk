function startMask() {
	const element = document.querySelector('.phone-input')
	const mask = IMask(element, {mask: '+{3}(000)000-00-00'})
}


export default startMask

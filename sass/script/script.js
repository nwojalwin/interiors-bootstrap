document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

    window.addEventListener('scroll', addShadow)
})

const link = document.querySelectorAll('.nav-link');
const navBack = document.querySelector('.navbar-collapse')

link.forEach(item => item.addEventListener('click', () => {
	navBack.classList.remove('show')
}))

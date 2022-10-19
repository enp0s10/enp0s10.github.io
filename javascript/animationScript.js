// Variables
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
const introSection = document.querySelector('.intro');
const navigationBar = document.getElementById("nav-bar");

const appearOptions = {
	threshold: 0,
	rootMargin: "0px 0px -200px 0px"
};

const introOptions = {
	threshold: 0,
	rootMargin: "-500px 0px 0px 0px"
}

const introSectionObserver = new IntersectionObserver
	(function (entries, introSectionOberver) {
		entries.forEach(entry => {
			if (!entry.isIntersecting) {
				navigationBar.classList.add('nav-scrolled');
			} else {
				navigationBar.classList.remove('nav-scrolled');
			}
		});
	}, 
	introOptions);

const appearOnScroll = new IntersectionObserver
	(function(entries, appearOnScroll) {
		entries.forEach(entry => {
			if (!entry.isIntersecting) {
				return;
			} else {
				entry.target.classList.add("appear");
				appearOnScroll.unobserve(entry.target);
			}
		});
	}, 
	appearOptions);


faders.forEach(fader => {
	appearOnScroll.observe(fader);
});
sliders.forEach(slider => {
	appearOnScroll.observe(slider);
});
introSectionObserver.observe(introSection);


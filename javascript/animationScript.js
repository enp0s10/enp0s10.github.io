const faders = document.querySelectorAll('.fade-in');


const appearOptions = {
	threshold: .75,
	rootMargin: "0px 0px 0px 0px"
};

const appearOnScroll = new IntersectionObserver
	(function(entries, appearOnScroll) {
		entries.forEach(entry => {
			if (!entry.isIntersecting) {
				return;
			} else {
				console.log(entry);
				entry.target.classList.add("appear");
				appearOnScroll.unobserve(entry.target);
			}
		});
	}, 
	appearOptions);


faders.forEach(fader => {
	appearOnScroll.observe(fader);
});
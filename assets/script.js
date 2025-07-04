const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


	//HTML nécessaires pour le carrousel.
	const bannerImage = document.querySelector('.banner-img');
	const bannerTagline = document.querySelector('#banner p');
	const leftArrow = document.querySelector('.arrow_left');
	const rightArrow = document.querySelector('.arrow_right');
	const dotsContainer = document.querySelector('.dots');
	//Valeur initiale de 0.
	let currentSlide = 0;

	// Fonction pour générer les points dynamiquement
    function createDots(numberOfDots) {
      for (let i = 0; i < numberOfDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);
      }

      // Sélection premier point et ajoutez-y la classe "dot_selected"
      const dots = document.querySelectorAll('.dot');
      dots[currentSlide].classList.add('dot_selected');
    }

    //logique pour changer le point sélectionné
    function updateCarousel() {
      const selectedDot = document.querySelector('.dot_selected');
      if (selectedDot) {
        selectedDot.classList.remove('dot_selected');
      }

      //récupère tous les éléments HTML des points (dots).
      const dots = document.querySelectorAll('.dot');
      dots[currentSlide].classList.add('dot_selected');
      showSlide(currentSlide);
    }

    //affiche le contenu en fonction de l'index de diapositive actuel
    function showSlide(slideIndex) {
      if (slideIndex >= 0 && slideIndex < slides.length) {
        bannerImage.src = './assets/images/slideshow/' + slides[slideIndex].image;
        bannerTagline.innerHTML = slides[slideIndex].tagLine;
      }
    }

    //Génére les points dynamiquement
    const numberOfSlides = slides.length;
    createDots(numberOfSlides);

	// Event Listeners pour les fleches
    leftArrow.addEventListener('click', () => {
      console.log('Left arrow clicked!');
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateCarousel();
    });

    rightArrow.addEventListener('click', () => {
      console.log('Right arrow clicked!');
      currentSlide = (currentSlide + 1) % slides.length;
      updateCarousel();
    });


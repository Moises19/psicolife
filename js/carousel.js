document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".carousel-track");

    const slides = document.querySelectorAll(".about-photo");

    const dots = document.querySelectorAll(".dot");

    let currentIndex = 0;

    let interval;

    function updateCarousel(index){

        track.style.transform = `translateX(-${index * 100}%)`;

        dots.forEach(dot => dot.classList.remove("active"));

        dots[index].classList.add("active");

        currentIndex = index;

    }

    function nextSlide(){

        let next = currentIndex + 1;

        if(next >= slides.length){

            next = 0;

        }

        updateCarousel(next);

    }

    function startCarousel(){

        interval = setInterval(nextSlide,5000);

    }

    function resetCarousel(){

        clearInterval(interval);

        startCarousel();

    }

    dots.forEach((dot,index)=>{

        dot.addEventListener("click",()=>{

            updateCarousel(index);

            resetCarousel();

        });

    });

    updateCarousel(0);

    startCarousel();

});

    var stagesPrev = document.querySelector('.stages-prev');
    var stagesNext = document.querySelector('.stages-next');
    var stagesWrapper = document.querySelector('.stages__wrapper');
    var stagesSlides = document.querySelectorAll('.stages__slide');
    var stagesSlidesCount = stagesSlides.length;
    var stagesSlideMoveCounter = 1;
    var dots = document.querySelector('.dots');
    var dotsArray = [];
    var slideWidth = stagesSlides[0].offsetWidth;
    for(i=0; i<=stagesSlides.length-1; i++) {
        dotsArray.push('<div class="dot"></div>');
    }
    dots.innerHTML = dotsArray.join('');
    var dot = document.querySelectorAll('.dot');
    
    dot[0].classList.add('active');

    var stagesCurrentOffset = 0;

    function slideFront() {
        if (stagesSlideMoveCounter < stagesSlidesCount) {
            stagesCurrentOffset -= slideWidth + 20;
            stagesWrapper.style.transform = 'translateX(' + stagesCurrentOffset + 'px)';
            dot[stagesSlideMoveCounter-1].classList.remove('active');
            dot[stagesSlideMoveCounter].classList.add('active');
            ++stagesSlideMoveCounter;
            
            if ( stagesSlideMoveCounter == stagesSlidesCount ) {
                stagesNext.classList.add('disabled');
            }
            if ( stagesSlideMoveCounter == 2 ) {
                stagesPrev.classList.remove('disabled')
            }
        }
    }

    function slideBack() {
        if (stagesSlideMoveCounter > 1) {
            stagesCurrentOffset += slideWidth + 20;
            stagesWrapper.style.transform = 'translateX(' + stagesCurrentOffset + 'px)';
            dot[stagesSlideMoveCounter-1].classList.remove('active');
            dot[stagesSlideMoveCounter-2].classList.add('active');

            --stagesSlideMoveCounter;
            if ( stagesSlideMoveCounter == stagesSlidesCount - 1 ) {
                stagesNext.classList.remove('disabled');
            }
            if ( stagesSlideMoveCounter == 1 ) {
                stagesPrev.classList.add('disabled')
            }
        }
    }


    stagesNext.addEventListener('click', function() {
        slideFront();
    })

    stagesPrev.addEventListener('click', function() {
        slideBack()
    })


      
    // slider 2

    let leftButton = document.querySelector('.members-prev');
    let rightButton = document.querySelector('.members-next');
    let sliderWrapper = document.querySelector('.members-slider__wrapper');
    let slides = document.querySelectorAll('.members-slide');
    let slidesCountEl = document.querySelector('.total-count');
    let slidesCurrEl = document.querySelector('.current-slide');
    let slidesCount = slides.length;
    let slideMoveCounter = 1;
    let intervalId; 
    let currentOffset = 0;
    slidesCountEl.innerHTML = slidesCount;

    function slideForward() {
        leftButton.classList.remove('disabled');
        currentOffset -= slides[0].offsetWidth;
        sliderWrapper.style.transform = 'translateX(' + currentOffset + 'px)';
        ++slideMoveCounter;
        slidesCurrEl.innerHTML = slideMoveCounter;
        if (slideMoveCounter > 6) {
        currentOffset += slides[0].offsetWidth*6;
        sliderWrapper.style.transform = 'translateX(' + currentOffset + 'px)';
        slideMoveCounter = 1;
        slidesCurrEl.innerHTML = slideMoveCounter;
        leftButton.classList.add('disabled');
    }
}

    function slideBackward() {

        if (slideMoveCounter > 1) {
            currentOffset += slides[0].offsetWidth;
            sliderWrapper.style.transform = 'translateX(' + currentOffset + 'px)';
            --slideMoveCounter;
            slidesCurrEl.innerHTML = slideMoveCounter;
     
        }
    }

     intervalId = setInterval(slideForward, 4000);

    rightButton.addEventListener('click', function() {
        slideForward();
    })

   leftButton.addEventListener('click', function() {
        slideBackward()
    })



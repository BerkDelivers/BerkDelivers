(function () {

    let targetElements = {
        contact: document.querySelector('.modal'),
        mobileNav: document.querySelector('#mobileNav'),
        mobileNavList: document.querySelector('#mobile-nav-list'),
        covid: document.querySelector('#covid'),
    }

    let slideShowImages = [
        'media/stock2.jpeg',
        'media/stock3.jpeg',
        'media/stock1.png',
        'media/stock4.jpeg',
        'media/stock5.jpeg',
    ]
    let slideCount = 1;

    let isMobileNavVisible = false;

    window.onload = () => {
        setupEvents();
        document.querySelector(".landing").style.backgroundImage = `url("${slideShowImages[0]}")`
        setInterval(createSlideShow, 5000);
    }

    let createSlideShow = () => {
        document.querySelector(".landing").style.backgroundImage = `url("${slideShowImages[slideCount]}")`
        slideCount++;
        if(slideCount > slideShowImages.length-1) slideCount = 0;
    }

    let load = (section) => {
        toggleMobileNav(false);
        document.getElementById(section).scrollIntoView({behavior: "smooth"});
    };

    let toggleMobileNav = (isEnabled) => {
        if(isEnabled) {
            targetElements.mobileNav.style.width = '100%';
            targetElements.mobileNavList.style.display = 'initial';
            isMobileNavVisible = true;
        } else {
            targetElements.mobileNav.style.width = '0';
            targetElements.mobileNavList.style.display = 'none';
            isMobileNavVisible = false;
        }
    };

    let setupEvents = () => {
        document.querySelector('#covid-close').addEventListener('click', (e) => {
            toggleModal(targetElements.covid, false);
        })
        document.querySelector('#covid-modal-close').addEventListener('click', (e) => {
            document.querySelector('#covid-modal').style.display = 'none';
        })
        document.querySelector('#nav-contact').addEventListener('click', (e) => {
            toggleModal(targetElements.contact, true);
        })
        document.querySelector('#ham').addEventListener('click', (e) => {
            toggleMobileNav(true);
        })
        document.querySelector('#nav-close').addEventListener('click', (e) => {
            targetElements.mobileNav.style.width = '0';
            targetElements.mobileNavList.style.display = 'none';
            isMobileNavVisible = false;
        })
        document.querySelector('#mobile-nav-contact').addEventListener('click', (e) => {
            toggleMobileNav(false);
            toggleModal(targetElements.contact, true);
        })
        document.querySelector('#intouch-button').addEventListener('click', (e) => {
            toggleModal(targetElements.contact, true);
        })
        document.querySelector('#modal-close').addEventListener('click', (e) => {
            toggleModal(targetElements.contact, false);  
        })

        document.querySelector('#mobile-nav-partners').addEventListener('click', (e) => {
            load('partner');
        })
        document.querySelector('#mobile-nav-who').addEventListener('click', (e) => {
            load('who');
        })
        document.querySelector('#covid-lm').addEventListener('click', () => {
            document.querySelector('#covid-modal').style.display = 'block';
        })

    }

    function toggleModal(e, isVisible) {
        isVisible ? e.style.display = 'block' 
            : e.style.display = 'none';
    }


})();
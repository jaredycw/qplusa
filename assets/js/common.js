    const body = document.body;    
    const navItems = document.querySelectorAll('[id^="ir-item-"]');
    const closeBtns = document.querySelectorAll('.close-btn');
    

    navItems.forEach(navItem => {
        navItem.addEventListener('click', function() {
            navItem.classList.add('clicked');
            body.classList.add("bodyOverflow");
        });
    });

    closeBtns.forEach(closeBtn => {
    closeBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Stop the event propagation here
        const parentNavItem = event.target.closest('[id^="ir-item-"]');
        if (parentNavItem) {
            parentNavItem.classList.remove('clicked');
            body.classList.remove("bodyOverflow");
        }
    });
});

     

    const heroGalleries = document.querySelectorAll('.hero-gallery');
    const triggerOffset = 50; // When the scroll reaches 50px

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        heroGalleries.forEach(heroGallery => {
            if (scrollPosition > triggerOffset) {
                // Scroll down, apply the transformation
                heroGallery.classList.add("cloudfloat");
            } else {
                // Back to the default scroll position, reset the transformation
                heroGallery.classList.remove("cloudfloat");
            }
        });
    });

    /** Loading **/
    document.onreadystatechange = function() {
            if (document.readyState !== "complete") {
            document.querySelector(".loader-wrapper").style.visibility = "visible";
        } else {
            document.querySelector(".loader-wrapper").style.visibility = "hidden";
        }
    };    

    window.addEventListener('load', () => {
    const scalingElement = document.querySelector('.hero-section-scaled');

    // Triggering the scale effect after a small delay to allow the transition to take effect

    setTimeout(() => {
        scalingElement.style.transform = "scale(1)";
        scalingElement.style.opacity = "1";
        
    }, 100); // Delay in milliseconds
    });

 
    function validateForm() {
        let email = document.getElementById('email').value;
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.match(emailPattern)) {
            alert('Please enter a valid email address.');
            return false; // Prevent form submission
        }

        // Show overlay if desired
        document.getElementById('overlay').style.visibility = 'visible';
        document.getElementById('overlay').style.opacity = '1';

        // Redirect after 3 seconds
        setTimeout(function(){
            window.location.assign("https://drive.google.com/drive/folders/1Vi9cYaQbnxfBjd2YJQiJ3pl99vqkeUfy");
        }, 3000);

        return true; // Allow form submission
    }
var isMobile = window.innerWidth < 768; // Adjust the value as needed for your mobile breakpoint
var isTablet = window.innerWidth < 900;

        var scene1 = document.getElementById('scene1');
        var scene2 = document.getElementById('scene2');
        
        if(!isMobile && !isTablet){
            var parallaxInstance = new Parallax(scene1);
            var parallaxInstance2 = new Parallax(scene2);

        } 
    
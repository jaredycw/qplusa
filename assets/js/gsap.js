var isMobile = window.innerWidth < 768; // Adjust the value as needed for your mobile breakpoint
var isTablet = window.innerWidth < 900;

    gsap.registerPlugin(ScrollTrigger);
    if (!isMobile && !isTablet) {
        const navA = gsap.timeline({
            scrollTrigger: {
                trigger: ".nav-ir-1",
                start: "top 90%",
                duration:1,
                //end: "bottom 20%",
                scrub: true
            }
        });
        navA.from(".nav-ir-1", { x: 100});
        navA.to(".nav-ir-1", { x: 0});

        const navB = gsap.timeline({
            scrollTrigger: {
                trigger: ".nav-ir-1",
                start: "top 30%",
                duration:1,
                //end: "bottom 10%",
                scrub: true,
            }
        });
        navA.from(".nav-ir-2", { x: 100, y:10});
        navA.to(".nav-ir-2", { x: 0, y:0});

        const navC = gsap.timeline({
            scrollTrigger: {
                trigger: ".nav-ir-2",
                start: "top 80%",
                //end: "bottom 10%",
                scrub: true,
            }
        });
        navC.from(".nav-ir-3", { x: 100, y:30});
        navC.to(".nav-ir-3", { x: 0, y:0});

        const navD = gsap.timeline({
            scrollTrigger: {
                trigger: ".nav-ir-1",
                start: "top 50%",
                duration:1,
                //end: "bottom 10%",
                scrub: true,
            }
        });
        navD.from(".nav-ir-4", {y:120});
        navD.to(".nav-ir-4", {y:0});



        const lineA = gsap.timeline({
            scrollTrigger: {
                trigger: ".nav-ir-1",
                start: "top 50%",
                duration:1,
                scrub: true,
            }
        });
        lineA.from(".line-1", {opacity:0});
        lineA.to(".line-1", {opacity:1});

        const lineB = gsap.timeline({
            scrollTrigger: {
                trigger: ".nav-ir-2",
                start: "top 30%",
                duration:1,
                scrub: true,
            }
        });
        lineB.from(".line-2", {opacity:0});
        lineB.to(".line-2", {opacity:1});

        const lineC = gsap.timeline({
            scrollTrigger: {
                trigger: ".nav-ir-2",
                start: "top 30%",
                duration:1,
                scrub: true,
            }
        });
        lineC.from(".line-3", {opacity:0});
        lineC.to(".line-3", {opacity:1});


        

    } else
    {
        const parallaxA = gsap.timeline({
            scrollTrigger:{
                trigger: ".parallax-bg-1",
                start: "top-=300",
                end: "+=700",
                duration:3,
                scrub: true,
                //markers: {startColor: "black", endColor: "black", fontSize: "18px", fontWeight: "bold", indent: 20}
            }
        })

        parallaxA.from(".parallax-bg-1", {x:0, y:0});
        parallaxA.to(".parallax-bg-1", {x:-300, y:100});

        const parallaxB = gsap.timeline({
            scrollTrigger:{
                trigger: ".parallax-bg-1",
                start: "bottom bottom",
                end: "bottom+=400",
                duration:3,
                scrub: true,
                //markers: {startColor: "red", endColor: "red", fontSize: "18px", fontWeight: "bold", indent: 20}
            }
        })

        parallaxB.from(".parallax-bg-2", {x:0, y:0});
        parallaxB.to(".parallax-bg-2", {x:-300, y:100});


        const mlineA = gsap.timeline({
            scrollTrigger: {
                trigger: ".nav-ir-1",
                start: "top 50%",
                duration:1,
                scrub: true,
            }
        });
        mlineA.from(".m-line-1", {opacity:0});
        mlineA.to(".m-line-1", {opacity:1});

        const mlineB = gsap.timeline({
            scrollTrigger: {
                trigger: ".nav-ir-2",
                start: "top 30%",
                duration:1,
                scrub: true,
            }
        });
        mlineB.from(".m-line-2", {opacity:0});
        mlineB.to(".m-line-2", {opacity:1});

        const mlineC = gsap.timeline({
            scrollTrigger: {
                trigger: ".nav-ir-3",
                start: "top 30%",
                duration:1,
                scrub: true,
            }
        });
        mlineC.from(".m-line-3", {opacity:0});
        mlineC.to(".m-line-3", {opacity:1});
    }



    
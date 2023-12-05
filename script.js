const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function movingcircle() {
    window.addEventListener('mousemove', (e) => {
        document.querySelector('#minicircle').style.transform = `translate(${e.clientX}px, ${e.clientY}px) `
    })
}


function firstpageanim() {
    let tl = gsap.timeline();
    tl.from('#nav', {
            y: '-10',
            opacity: 0,
            duration: 1.5,
            ease: Expo.easeInOut
        })
        .to('.binding-elm', {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            stagger: .2
        })
    tl.from('#bottom', {
        opacity: 0,
        y: -10,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut

    })
}
// second page animation
document.querySelectorAll('.elms').forEach((element) => {
    let rotate = 0;
    let diff = 0;
    element.addEventListener('mouseleave', () => {
        gsap.to(element.querySelector("img"), {
            opacity: 0,
            ease: Power3,

        })
        gsap.to(element.querySelector('.h'), {
            scale: 1,
            ease: Power3,
            opacity: 1,
        })
    })
    element.addEventListener('mousemove', (e) => {


        diff = e.clientX - rotate;
        rotate = e.clientX;




        gsap.to(element.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: e.clientY - element.getBoundingClientRect().top,
            left: e.clientX,
            rotate: gsap.utils.clamp(-20, 20, diff),


        })
        gsap.to(element.querySelector('.h'), {
            scale: 0.8,
            ease: Power3,
            opacity: .6,

        })
    })
})

firstpageanim();
movingcircle();
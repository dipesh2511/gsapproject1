let timeline = gsap.timeline();

timeline.from(".nav-text", {
    opacity: 0.1,
    y: -100,
    duration: 1.5,
    stagger: 0.3,
    delay: 0.4
})

timeline.from(".hero-text", {
    opacity: 0,
    left: '-1000px',
    duration: 1.5,
    stagger: 0.5,
    fontSize: '5vw',
    delay: 0.4
})

timeline.from(".img", {
    left: '80%',
    rotate: 45,
    stagger: 0.5,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    scale: 1.5
})

timeline.from(".footer-text", {
    opacity: 0,
    y: -100,
    duration: 1.5,
    scale: 0.5,
});
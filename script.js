var tl=gsap.timeline()

tl.from(".nav img,.nav h3,.nav h4,.nav button",{
    y:-100,
    opacity:0,
    duration:1,
    deley:1,
    stagger:0.2,
    // repeat:-1,
})
tl.from(".main h1",{
    opacity:0,
    y:100,
    stagger:0.3,
})
tl.from(".main>img",{
    opacity:0,
    scale:0,
    stagger:0.3,
})
tl.from("h5",{
    scale:0,
    opacity:0
})
tl.to("h5",{
    y:30,
    repeat:-1,
    duration:0.7,
    yoyo:true,
})
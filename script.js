var crsr = document.querySelector("#cursor");
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x - 10 + "px";
    crsr.style.top = dets.y - 10 + "px";
});

var crsrblur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dets){
    crsrblur.style.left = dets.x - 150 + "px";
    crsrblur.style.top = dets.y - 150 + "px";
});

gsap.to("#nav",{
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    scrollTrigger: {
        trigger: "#nav",
        scroll: "body",
        start: "top - 10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main", {
    backgroundColor: "#000", 
    duration: 0.5,
    scrollTrigger: {
        trigger: "#main",
        scroll: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    }
});


// Mouse Circle
const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");

const mouseCircleFn = (x,y) => {
mouseCircle.style.cssText = `top:${y}px;left:${x}px;opacity:1`;
mouseDot.style.cssText = `top:${y}px;left:${x}px;opacity:1`;
}
// End of Mouse Circle



document.body.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    mouseCircleFn(x,y);
    animateCircles(e,x,y);
})

document.body.addEventListener("mouseleave", () => {
    mouseCircle.style.opacity = "0";
    mouseDot.style.opacity = "0";
})

// Main Button
const mainBtns = document.querySelectorAll('.main-btn');

mainBtns.forEach(btn => {
    let ripple;

    btn.addEventListener('mouseenter', e => {
    //   console.log(e.target.getBoundingClientRect());
        const left = e.clientX - e.target.getBoundingClientRect().left;
        const top = e.clientY - e.target.getBoundingClientRect().top;
    
        ripple = document.createElement("div");
        ripple.classList.add("ripple");
        ripple.style.left = `${left}px`;
        ripple.style.top = `${top}px`;
        btn.prepend(ripple);
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.removeChild(ripple);
    });
})


// End of Main Button



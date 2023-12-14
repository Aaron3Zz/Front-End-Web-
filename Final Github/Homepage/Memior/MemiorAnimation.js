
import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"

const scrollTracker = document.querySelector('.scroll-tracker');
const firstHiddenElements = document.querySelectorAll('#hidOpening');
const firstAnimatedIElements = document.querySelectorAll('#firstMemiorElements');
const secondAnimatedIElements = document.querySelectorAll('#secondMemiorElements');
const thirdAnimatedIElements = document.querySelectorAll('#thirdMemiorElements');
const fourthAnimatedIElements = document.querySelectorAll('#fourthMemiorElements');
const fifthAnimatedIElements = document.querySelectorAll('#fifthMemiorElements');
const finalAnimatedIElements = document.querySelectorAll('#finalMemiorElements');


const scrollTrackingTimeline = new ScrollTimeline({
        source: document.scrollingElement,
        orientation: "block",
        scrollOffsets:[CSS.percent(0), CSS.percent(95)]
});

firstHiddenElements.forEach((image) => {
    image.animate(
        {
            opacity: ["1", "0"],
        },
        {
            fill: 'both',
            rangeStart: 'entry 0%',
            rangeEnd: 'entry 10%',
            easing: "linear",
            timeline: new ScrollTimeline,
        },
    );
});

firstAnimatedIElements.forEach((image) => {
    image.animate(
        {
            opacity: ["0", "1"],
        },
        {
            fill: 'both',
            rangeStart: 'entry 0%',
            rangeEnd: 'entry 15%',
            easing: "linear",
            timeline: new ScrollTimeline,
        },
    );
});

secondAnimatedIElements.forEach((image) => {
    image.animate(
        {
            opacity: ["0", "1"],
        },
        {
            fill: 'both',
            rangeStart: 'entry 20%',
            rangeEnd: 'entry 35%',
            easing: "linear",
            timeline: new ScrollTimeline,
        },
    );
});

thirdAnimatedIElements.forEach((image) => {
    image.animate(
        {
            opacity: ["0", "1"],
        },
        {
            fill: 'both',
            rangeStart: 'entry 40%',
            rangeEnd: 'entry 55%',
            easing: "linear",
            timeline: new ScrollTimeline,
        },
    );
});

fourthAnimatedIElements.forEach((image) => {
    image.animate(
        {
            opacity: ["0", "1"],
        },
        {
            fill: 'both',
            rangeStart: 'entry 60%',
            rangeEnd: 'entry 75%',
            easing: "linear",
            timeline: new ScrollTimeline,
        },
    );
});

fifthAnimatedIElements.forEach((image) => {
    image.animate(
        {
            opacity: ["0", "1"],
        },
        {
            fill: 'both',
            rangeStart: 'entry 80%',
            rangeEnd: 'entry 95%',
            easing: "linear",
            timeline: new ScrollTimeline,
        },
    );
});

finalAnimatedIElements.forEach((image) => {
    image.animate(
        {
            opacity: ["0", "1"],
        },
        {
            fill: 'both',
            rangeStart: 'entry 95%',
            rangeEnd: 'entry 100%',
            easing: "linear",
            timeline: new ScrollTimeline,
        },
    );
});

scrollTracker.animate(
    {
        transform: ['scaleX(0)', 'scaleX(1)']
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeline,
    }
);




// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.idList.add('#show');
//         } else {
//             entry.target.idList.remove('#show');
//         }
//     });
// });

// const animatedElement = document.querySelectorAll('#hidOpening');

// animatedElement.forEach((entries) => {
//     observer.observe(entries);
// });




document.addEventListener('mousemove', (e) => {

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const anchor = document.getElementById('anchor');
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width * 3;
    const anchorY = rekt.top + rekt.height * 3;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
    const angleDegTwo = angleTwo(mouseX, mouseY, anchorX, anchorY);
    const angleDegThree = angleThree(mouseX, mouseY, anchorX, anchorY);
    const angleDegFour = angleFour(mouseX, mouseY, anchorX, anchorY);

    console.log (angleDeg);

    const clipsFour = document.querySelector('.ClipFour')
    clipsFour.style.transform = `rotate(${angleDeg - 320}deg)`;
    clipsFour.style.transformOrigin = "bottom left";

    const clipsThree = document.querySelector('.ClipThree')
    clipsThree.style.transform = `rotate(${angleDegTwo - 210}deg)`;
    clipsThree.style.transformOrigin = "bottom left";

    const clipsTwo = document.querySelector('.ClipTwo')
    clipsTwo.style.transform = `rotate(${angleDegThree - 180}deg)`;
    clipsTwo.style.transformOrigin = "bottom left";

    const clipsOne = document.querySelector('.ClipOne')
    clipsOne.style.transform = `rotate(${angleDegFour - 20}deg)`;
    clipsOne.style.transformOrigin = "bottom left";
});

function angle(cx, cy, ex, ey){
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 30) * 18 ;
    return deg;
};

function angleTwo(cx, cy, ex, ey){
    const dyTwo = ey - cy;
    const dxTwo = ex - cx;
    const radTwo = Math.atan2(dyTwo, dxTwo);
    const degTwo = (radTwo * 30) * 12 ;
    return degTwo;
};

function angleThree(cx, cy, ex, ey){
    const dyThree = ey - cy;
    const dxThree = ex - cx;
    const radThree = Math.atan2(dyThree, dxThree);
    const degThree = (radThree * 30) * 10;
    return degThree;
};

function angleFour(cx, cy, ex, ey){
    const dyFour = ey - cy;
    const dxFour = ex - cx;
    const radFour = Math.atan2(dyFour, dxFour);
    const degFour = (radFour * 30) * 2;
    return degFour;
};




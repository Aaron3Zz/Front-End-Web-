import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"

const scrollTracker = document.querySelector('.scroll-tracker');

const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets:[CSS.percent(0), CSS.percent(95)]
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

const firstHiddenElements = document.querySelectorAll('.ManuscriptImgOne');
const firstShowElements = document.querySelectorAll('.ManuscriptImgTwo');
const secondShowElements = document.querySelectorAll('.footerText');

firstHiddenElements.forEach((image) => {
    image.animate(
        {
            opacity: ["1", "0"],
        },
        {
            fill: 'both',
            rangeStart: 'entry 30%',
            rangeEnd: 'entry 40%',
            easing: "linear",
            timeline: new ScrollTimeline,
        },
    );
});

firstShowElements.forEach((image) => {
    image.animate(
        {
            opacity: ["0", "1"],
        },
        {
            fill: 'both',
            rangeStart: 'entry 40%',
            rangeEnd: 'entry 50%',
            easing: "linear",
            timeline: new ScrollTimeline,
        },
    );
});

secondShowElements.forEach((image) => {
    image.animate(
        {
            opacity: ["0", "1"],
        },
        {
            fill: 'both',
            rangeStart: 'entry 98%',
            rangeEnd: 'entry 100%',
            easing: "linear",
            timeline: new ScrollTimeline,
        },
    );
});
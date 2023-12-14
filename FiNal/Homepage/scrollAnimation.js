import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"

const scrollTracker = document.querySelector('.scroll-tracker');
const firstHiddenElements = document.querySelectorAll('#hidden');
const secondHiddenElements = document.querySelectorAll('#secondHidden');
const firstAnimatedIElements = document.querySelectorAll('#firstHomeElements');
const secondAnimatedIElements = document.querySelectorAll('#secondHomeElements');
const thirdAnimatedIElements = document.querySelectorAll('#thirdHomeElements');
const finalAnimatedIElements = document.querySelectorAll('#finalHomeElements');

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

secondHiddenElements.forEach((image) => {
    image.animate(
        {
            opacity: ["1", "0"],
        },
        {
            fill: 'both',
            rangeStart: 'entry 10%',
            rangeEnd: 'entry 20%',
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
            rangeStart: 'entry 20%',
            rangeEnd: 'entry 28%',
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
            rangeStart: 'entry 50%',
            rangeEnd: 'entry 58%',
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
            rangeStart: 'entry 80%',
            rangeEnd: 'entry 88%',
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


fetch("http://localhost:3000/WorksBrief")
    .then(res=> res.json())
    .then(json=> {
        json.map(data=> {
            console.log(data);
        })
    })
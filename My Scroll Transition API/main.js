import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"

const scrollTracker = document.querySelector('.scroll-tracker');
const animatedImages = document.querySelectorAll('.capyImg');

const scrollTrackingTimeline = new ScrollTimeline({
        source: document.scrollingElement,
        orientation: "block",
        scrollOffsets:[CSS.percent(0), CSS.percent(95)]
});

animatedImages.forEach((image) => {
    const animatedImageTimeline = new ScrollTimeline({
        scrollOffsets: [
            {target: image, edge:"end", threshold: "0"},
            {target: image, edge:"start", threshold: "1"}
        ],
    });

    image.animate(
        {
            opacity: ["0", "1"],
        },
        {
            easing: "linear",
            timeline: animatedImageTimeline,
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

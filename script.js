// using d3 for convenience
var main1 = d3.select("main");
var scrolly1 = main1.select("#scrolly1");
var figure1 = scrolly1.select("figure");
var article1 = scrolly1.select("article");
var step1 = article1.selectAll(".step");


// initialize the scrollama
var scroller1 = scrollama();

// using d3 for convenience
var main2 = d3.select("main");
var scrolly2 = main2.select("#scrolly2");
var figure2 = scrolly2.select("figure");
var article2 = scrolly2.select("article");
var step2 = article2.selectAll(".step");


// initialize the scrollama
var scroller2 = scrollama();

// generic window resize listener event
function handleResize(step, figure, scroller) {
    // 1. update height of step elements
    var stepH = Math.floor(step.innerHeight * 0.5);
    var stepMargin = (window.innerHeight * 0.4);
    step
        .style("height", stepH + "px")
        .style("margin-bottom", stepMargin + "px")
        .style("margin-top", stepMargin + "px");

    var figureHeight = window.innerHeight / 2;
    var figureMarginTop = (window.innerHeight - figureHeight) / 2;

    figure
        .style("height", figureHeight + "px")
        .style("top", figureMarginTop + "px");

    // 3. tell scrollama to update new element dimensions
    scroller.resize();
}

// scrollama event handlers
function handleStepEnter1(response) {
    console.log(response);
    // response = { element, direction, index }

    // add color to current step only
    step1.classed("is-active", function (d, i) {
        return i === response.index;
    });

    // update graphic based on step
    // figure.select("p").text(response.index + 1);
}

// scrollama event handlers
function handleStepEnter2(response) {
    console.log(response);
    // response = { element, direction, index }

    // add color to current step only
    step2.classed("is-active", function (d, i) {
        return i === response.index;
    });

    // update graphic based on step
    // figure.select("p").text(response.index + 1);
}

function init() {

    // 1. force a resize on load to ensure proper dimensions are sent to scrollama
    handleResize(step1, figure1, scroller1);

    // 2. setup the scroller passing options
    // 		this will also initialize trigger observations
    // 3. bind scrollama event handlers (this can be chained like below)
    scroller1
        .setup({
            step: "#scrolly1 article .step",
            offset: 0.7,
            debug: false
        })
        .onStepEnter(handleStepEnter1);

    // 1. force a resize on load to ensure proper dimensions are sent to scrollama
    handleResize(step2, figure2, scroller2);

    scroller2
        .setup({
            step: "#scrolly2 article .step",
            offset: 0.7,
            debug: false
        })
        .onStepEnter(handleStepEnter2);
}

// kick things off
init();
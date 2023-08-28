const graph1Btn = document.getElementById('graph1Btn');
const graph2Btn = document.getElementById('graph2Btn');
const graph1 = document.getElementById('graph1');
const graph2 = document.getElementById('graph2');

graph1Btn.addEventListener('click', () => {
    graph1.classList.add('active');
    graph2.classList.remove('active');
    graph1Btn.classList.add('active');
    graph2Btn.classList.remove('active');
});

graph2Btn.addEventListener('click', () => {
    graph2.classList.add('active');
    graph1.classList.remove('active');
    graph2Btn.classList.add('active');
    graph1Btn.classList.remove('active');
});

// Dropdown stuff
// Get the dropdown button and dropdown content
const dropdownButton = document.getElementById('dropdown-button');
const dropdownContent = document.getElementById('dropdown-content');

// Toggle the dropdown content when the button is clicked
dropdownButton.addEventListener('click', function() {
    dropdownContent.classList.toggle('show');
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (!event.target.matches('#dropdown-button')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
});


// side scrolly stuff
// using d3 for convenience
var main = d3.select("main");
var sidescrolly1 = main.select("#side-scrolly1");
var sidefigure1 = sidescrolly1.select("figure");
var sidearticle1 = sidescrolly1.select("article");
var sidestep1 = sidearticle1.selectAll(".side-step");

// initialize the scrollama
var sidescroller1 = scrollama();

// generic window resize listener event
function sideHandleResize(step, figure, scroller) {
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
function sideHandleStepEnter(response) {
    console.log(response);
    // response = { element, direction, index }

    // add color to current step only
    step.classed("is-active", function (d, i) {
        return i === response.index;
    });

    // update graphic based on step
    figure.select("p").text(response.index + 1);
}


// Scrolling stuff
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

// using d3 for convenience
var scrolly3 = d3.select("#scrolly3");
var figure3 = scrolly3.select("figure");
var article3 = scrolly3.select("article");
var step3 = article3.selectAll(".step");

// initialize the scrollama
var scroller3 = scrollama();

// initialize the scrollama
var scroller4 = scrollama();

// using d3 for convenience
var scrolly4 = d3.select("#scrolly4");
var figure4 = scrolly4.select("figure");
var article4 = scrolly4.select("article");
var step4 = article4.selectAll(".step");


// // using d3 for convenience
// var main4 = d3.select("main");
// var scrolly4 = main4.select("#scrolly3");
// var figure4 = scrolly4.select("figure");
// var article4 = scrolly4.select("article");
// var step4 = article4.selectAll(".step");


// // initialize the scrollama
// var scroller2 = scrollama();


// generic window resize listener event
function handleResize(step, figure, scroller) {
    // 1. update height of step elements
    var stepH = Math.floor(step.innerHeight * 0.5);
    var stepMargin = (window.innerHeight * 0.4);
    step
        .style("height", stepH + "px")
        .style("margin-bottom", stepMargin + "px")
        .style("margin-top", stepMargin + "px");

    var figureHeight = window.innerHeight * 0.75;
    var figureMarginTop = (window.innerHeight - figureHeight)/2;

    figure
        .style("height", figureHeight + "px")
        .style("top", figureMarginTop + "px");

    // 3. tell scrollama to update new element dimensions
    scroller.resize();
}

function resize(step, scroller) {
    var min = window.innerHeight * 0.5;
    var h = min + Math.random() * window.innerHeight * 0.25;
    step.style("height", Math.floor(h) + "px");
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

// generic window resize listener event
function handleResize3(step, figure, scroller) {
    // 1. update height of step elements
    var stepH = Math.floor(step.innerHeight * 0.5);
    var stepMargin = (window.innerHeight * 0.4);
    step
        .style("height", stepH + "px")
        .style("margin-bottom", stepMargin + "px")
        .style("margin-top", stepMargin + "px");

    var figureHeight = window.innerHeight * 0.75;
    var figureMarginTop = (window.innerHeight - figureHeight)/2;

    figure
        .style("top", figureMarginTop + "px");

    // 3. tell scrollama to update new element dimensions
    scroller.resize();
}


function handleStepEnter3(response) {
    // response = { element, direction, index }

    // add color to current step only
    step2.classed("is-active", function (d, i) {
        return i === response.index;
    });


    //console.log(figure3.src);
    // // update graphic based on step
    document.getElementById("hashtag-image").src = "img/"+(response.index + 1) +".png"
}

// scrollama event handlers
function handleStepEnter4(response) {
    console.log(response);
    // response = { element, direction, index }

    // add color to current step only
    step4.classed("is-active", function (d, i) {
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
    
    // // 1. setup the scroller with the bare-bones settings
    // // this will also initialize trigger observations
    // // 3. bind scrollama event handlers (this can be chained like below)
    // resize(step3, scroller3)

    // scroller3
    // .setup({
    //     step: "#scrolly3 article .step",
    //     offset: 0.7,
    //     debug: false
    // })
    // .onStepProgress(handleStepProgress3);


    // 1. force a resize on load to ensure proper dimensions are sent to scrollama
    sideHandleResize(sidestep1, sidefigure1, sidescroller1);

    // 2. setup the scroller passing options
    // 		this will also initialize trigger observations
    // 3. bind scrollama event handlers (this can be chained like below)
    sidescroller1
        .setup({
            step: "#side-scrolly1 article .side-step",
            offset: 0.33,
            debug: false
        })
        .onStepEnter(sideHandleStepEnter);

    // 1. force a resize on load to ensure proper dimensions are sent to scrollama
    handleResize3(step3, figure3, scroller3);

    scroller3
        .setup({
            step: "#scrolly3 article .step",
            offset: 0.7,
            debug: false
        })
        .onStepEnter(handleStepEnter3);
    
        // 1. force a resize on load to ensure proper dimensions are sent to scrollama
    handleResize(step4, figure4, scroller4);

    scroller4
        .setup({
            step: "#scrolly4 article .step",
            offset: 0.7,
            debug: false
        })
        .onStepEnter(handleStepEnter4);

}

// kick things off
init();
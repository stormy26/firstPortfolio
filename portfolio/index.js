console.log("I am also working");
let nielsen = document.getElementById("nielsen");
let portalCounter = -1;
let running = false;
let animation;
let oldVertical = 0;
let jumping = false;
let fallingLow = false;
let fallingHigh = false;
let overlayTriggered = false;
let portals = [
    {"#in-1": "#out-1"}, {"#in-2" : "#out-2"} 
    ,{"#in-3" : "#out-3"} 
    // {"#in-2": "#out-2"}
];


$(".outer-wrapper").on("scroll", function () {
    if (!running) {
        running = true;
        animation = setInterval(run, 30);
    }
});

let i = 1;
function run() {
    if(i < 16){
        nielsen.style.backgroundImage = "url('./assets/Nielsen/Walk\ \("  + i + "\).png')";
    }
    else
        i = 1;

    i++;
}


function stopRunning() {
    clearInterval(animation); 
}


// Main Engine something to check regularly 
setInterval(function() { 
    position = $(".outer-wrapper").scrollTop();

    if ($(".outer-wrapper").scrollTop != oldVertical) { 
        running = false; 
        stopRunning();
    }
        checkForPopups(); 
        checkForGrass();
        animatePortal();
        checkPortals();
}, 100);

function checkForGrass() {
    $(".grass").each(function(index, item) {
        // For Jumping
        let grassPosLeft = ($(window).width() / 2) - $(item).offset().left;
        let grassPosRight = ($(window).width() / 2) - ($(item).offset().left + $(item).width());

        if (!$("#nielsen").hasClass("bounce-down-high")) {
            // Check for Grass
            if ( (grassPosLeft + 250 >= 0 && grassPosRight - 180 <= 0)  && !jumping && !fallingHigh && !fallingLow) {
                jumping = true;
                $("#nielsen").addClass("bounce-up");
                console.log("adding bounce");
                // start falling after jumping up
                setTimeout(function () {
                    console.log("nielsen is falling down");
                    $("#nielsen").removeClass("bounce-up");
                    $("#nielsen").addClass("bounce-down-high");
                    setTimeout(function() {
                        jumping = false;
                        fallingHigh = true;
                    }, 500);
                }, 500);
            }   
        } 
        
        if(fallingHigh)
            checkForGrassBelow().then((res) => {
                console.log("res ", res);
                if (res) {
                    $("#nielsen").removeClass("bounce-down-high");
                    $("#nielsen").addClass("bounce-down-low");
                    fallingHigh = false;
                    fallingLow = true;
                    console.log("going down from grass");
                    setTimeout(function () {
                        $("#nielsen").removeClass("bounce-down-low");
                        fallingLow = false;
                    }, 300);
                }
            });    
    });
}

// check if there's grass below
async function checkForGrassBelow() {
    let noGrassBelow = true;
    $(".grass").each(function(index, item) {
        let gLeft = ($(window).width() / 2) - $(item).offset().left;
        let gRight = ($(window).width() / 2) - ($(item).offset().left + $(item).width());

        if ( ((gLeft >= 0) && (gRight <= 0)) && $("#nielsen").hasClass("bounce-down-high") && (jumping || fallingHigh || fallingLow) ) {
            noGrassBelow = false;
            console.log("found grass");
        }
    });
    console.log("nograssbelow = ", noGrassBelow);
    return noGrassBelow;
}



function checkForPopups () { 
    if (($(window).width() / 2) - $(".pinktrees1").offset().left > -700) { 
        $(".pinktrees1").addClass("pinktrees1-surprise");
    }

    if (($(window).width() / 2) - $(".pinktrees2").offset().left > -700) { 
        $(".pinktrees2").addClass("pinktrees2-surprise");
    }

    if (($(window).width() / 2) - $(".pinktrees3").offset().left > -700) { 
        $(".pinktrees3").addClass("pinktrees3-surprise");
    }


    if (($(window).width() / 2) - $(".pinktrees4").offset().left > -700) { 
        $(".pinktrees4").addClass("pinktrees4-surprise");
    }

    if (($(window).width() / 2) - $(".buildings").offset().left > -500) { 
        $(".buildings").addClass("buildings-surprise");
    }

    if (($(window).width() / 2) - $(".bird1").offset().left > -2000) { 
        $(".bird1").addClass("bird1-surprise");
    }

    if (($(window).width() / 2) - $(".bird2").offset().left >  -2000) { 
        $(".bird2").addClass("bird2-surprise");
    }

    if (($(window).width() / 2) - $(".bird3").offset().left >  -2000) { 
        $(".bird3").addClass("bird3-surprise");
    }

    if (($(window).width() / 2) - $(".bird4").offset().left > -2000) { 
        $(".bird4").addClass("bird4-surprise");
    }

    if (($(window).width() / 2) - $(".bird5").offset().left > -2000) { 
        $(".bird5").addClass("bird5-surprise");
    }

    if (($(window).width() / 2) - $(".bird6").offset().left > -2000) { 
        $(".bird6").addClass("bird6-surprise");
    }

    if (($(window).width() / 2) - $(".bird7").offset().left > -2000) { 
        $(".bird7").addClass("bird7-surprise");
    }


    if (($(window).width() / 2) - $(".bird8").offset().left > -2000) { 
        $(".bird8").addClass("bird8-surprise");
    }

    if (($(window).width() / 2) - $(".bird9").offset().left > -2000) { 
        $(".bird9").addClass("bird9-surprise");
    }

    if (($(window).width() / 2) - $(".bird10").offset().left > -2000) { 
        $(".bird10").addClass("bird10-surprise");
    }

    if (($(window).width() / 2) - $(".bird11").offset().left > -2000) { 
        $(".bird11").addClass("bird11-surprise");
    }
    if (($(window).width() / 2) - $(".bird12").offset().left > -2000) { 
        $(".bird12").addClass("bird12-surprise");
    }
    if (($(window).width() / 2) - $(".bird13").offset().left > -2000) { 
        $(".bird13").addClass("bird13-surprise");
    }
    if (($(window).width() / 2) - $(".bird14").offset().left > -2000) { 
        $(".bird14").addClass("bird14-surprise");
    }
    if (($(window).width() / 2) - $(".bird15").offset().left > -2000) { 
        $(".bird15").addClass("bird15-surprise");
    }
    if (($(window).width() / 2) - $(".bird16").offset().left > -2000) { 
        $(".bird16").addClass("bird16-surprise");
    }
    if (($(window).width() / 2) - $(".bird17").offset().left > -2000) { 
        $(".bird17").addClass("bird17-surprise");
    }
    if (($(window).width() / 2) - $(".bird18").offset().left > -2000) { 
        $(".bird18").addClass("bird18-surprise");
    }
    if (($(window).width() / 2) - $(".bird19").offset().left > -2700) { 
        $(".bird19").addClass("bird19-surprise");
    }
    if (($(window).width() / 2) - $(".bird20").offset().left > -2700) { 
        $(".bird20").addClass("bird20-surprise");
    }
    if (($(window).width() / 2) - $(".bird21").offset().left > -2700) { 
        $(".bird21").addClass("bird21-surprise");
    }
    if (($(window).width() / 2) - $(".bird22").offset().left > -2700) { 
        $(".bird22").addClass("bird22-surprise");
    }
    if (($(window).width() / 2) - $(".bird23").offset().left > -2700) { 
        $(".bird23").addClass("bird23-surprise");
    }
    if (($(window).width() / 2) - $(".bird24").offset().left > -2700) { 
        $(".bird24").addClass("bird24-surprise");
    }
    if (($(window).width() / 2) - $(".bird25").offset().left > -2700) { 
        $(".bird25").addClass("bird25-surprise");
    }
    if (($(window).width() / 2) - $(".bird26").offset().left > -2700) { 
        $(".bird26").addClass("bird26-surprise");
    }
    if (($(window).width() / 2) - $(".window1").offset().left > -1500) { 
        $(".window1").addClass("window1-surprise");
    }
    if (($(window).width() / 2) - $(".window1sample").offset().left > -1500) { 
        $(".window1sample").addClass("window1sample-surprise");
    }
    if (($(window).width() / 2) - $(".window2").offset().left > -1500) { 
        $(".window2").addClass("window2-surprise");
    }
    if (($(window).width() / 2) - $(".window2poster").offset().left > -1500) { 
        $(".window2poster").addClass("window2poster-surprise");
    }
    if (($(window).width() / 2) - $(".window2sample").offset().left > -1500) { 
        $(".window2sample").addClass("window2sample-surprise");
    }
    if (($(window).width() / 2) - $(".other1").offset().left > -2000) { 
        $(".other1").addClass("other1-surprise");
    }
    if (($(window).width() / 2) - $(".other12").offset().left > -2000) { 
        $(".other12").addClass("other12-surprise");
    }
    if (($(window).width() / 2) - $(".other2").offset().left > -2000) { 
        $(".other2").addClass("other2-surprise");
    }
    if (($(window).width() / 2) - $(".other3").offset().left > -2000) { 
        $(".other3").addClass("other3-surprise");
    }
    if (($(window).width() / 2) - $(".other4").offset().left > -2000) { 
        $(".other4").addClass("other4-surprise");
    }
    if (($(window).width() / 2) - $(".pennant1").offset().left > -2000) { 
        $(".pennant1").addClass("pennant1-surprise");
    }
    if (($(window).width() / 2) - $(".pennant2").offset().left > -1500) { 
        $(".pennant2").addClass("pennant2-surprise");
    }
    if (($(window).width() / 2) - $(".pennant3").offset().left > -1500) { 
        $(".pennant3").addClass("pennant3-surprise");
    }
    if (($(window).width() / 2) - $(".pennant4").offset().left > -1500) { 
        $(".pennant4").addClass("pennant4-surprise");
    }
    if (($(window).width() / 2) - $(".trophy1").offset().left > -2000) { 
        $(".trophy1").addClass("trophy1-surprise");
    }
    if (($(window).width() / 2) - $(".trophy2").offset().left > -1500) { 
        $(".trophy2").addClass("trophy2-surprise");
    }
    if (($(window).width() / 2) - $(".trophy3").offset().left > -1500) { 
        $(".trophy3").addClass("trophy3-surprise");
    }
    if (($(window).width() / 2) - $(".trophy4").offset().left > -1500) { 
        $(".trophy4").addClass("trophy4-surprise");
    }
    if (($(window).width() / 2) - $(".confetti").offset().left > 0) { 
        $(".confetti").addClass("confetti-surprise");
    }




    // if (($(window).width() / 2)- $(".block 2.bg-yellow").offset().left > 0) {
    //     $(".block2.bg-yellow").addClass("surprise-block");
    // }
} 

function animatePortal() {
    console.log("HELLO!");
    portalCounter++;
    if(portalCounter < 4)
        $(".portal").each(function() {
            $(this).css("backgroundImage", "url('./assets/portal/portal_0" + portalCounter + ".png')");
        });
    else 
        portalCounter = -1;
}

function checkPortals() {
    portals.forEach(function(e) {
        for (let [portalIn, portalOut] of Object.entries(e)) {
            // console.log(key + " " + value);    
            
            let middleScreen = ($(window).width() / 2);
            // for In portals
            let portalInLeftEdge = middleScreen - $(portalIn).offset().left;
            let portalInRightEdge = middleScreen - ($(portalIn).offset().left + $(portalIn).width());
        
            // for Out portals
            let portalOutLeftEdge = middleScreen - $(portalOut).offset().left;
            let portalOutRightEdge = middleScreen - ($(portalOut).offset().left + $(portalOut).width());
            
            if ((portalInLeftEdge >= 0) && (portalInRightEdge <= 0) && !overlayTriggered) {
                console.log("Going IN portal");
                triggerOverlay();

                // make screen black
                $(".black-overlay").animate({
                    opacity: 1,
                }, 
                500,
                function() {
                    // scroll to next portal
                    $(".outer-wrapper").animate({
                        scrollTop: "+=" + $(portalOut).offset().left,
                    }, 2000);

                    // remove black screen
                    setTimeout(function() {
                        $(".black-overlay").animate({
                            opacity: 0,
                        }, 500);

                        overlayTriggered = false;
                        $(".outer-wrapper").css("overflow-y", "scroll"); //re-enable scrolling
                    }, 2000);
                });

            } 
            else if ((portalOutLeftEdge >= 0) && (portalOutRightEdge <= 0) && !overlayTriggered) {
                console.log("Going Out Portal");
                triggerOverlay();

                // make screen black
                $(".black-overlay").animate({
                    opacity: 1,
                }, 
                500,
                function() {
                    // scroll to next portal
                    $(".outer-wrapper").animate({
                        scrollTop: "+=" + ($(portalIn).offset().left - ($(window).width() / 1.5)),
                    }, 2000);

                    // remove black screen
                    setTimeout(function() {
                        $(".black-overlay").animate({
                            opacity: 0,
                        }, 500);

                        overlayTriggered = false;
                        $(".outer-wrapper").css("overflow-y", "scroll"); //re-enable scrolling
                    }, 2000);
                });
            }
        }

    });
}

function triggerOverlay() {
    console.log("overlay triggered");
    overlayTriggered = true;
    $(".outer-wrapper").css("overflow-y", "hidden");
}

    
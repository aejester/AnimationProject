var pencil = new Image()
pencil.src = "pencil.png"

var eraser = new Image()
eraser.src = "eraser.png"

var figure1 = new Image()
figure1.src = "y01uPOi.png"
var fig1CurrentFrame;
var fig1X, fig1Y;

var figure2 = new Image()
figure2.src = "y01uPOi.png"
var fig2CurrentFrame;
var fig2X, fig2Y;

var figNumFrames;
var figWidth, figHeight;

var background = new Image();
background.src = "bg.jpg"

var canvas, ctx;

var timer = 0

var speech = [
    {
        text: "Doodle 1: Hello.",
        draw: false
    },
    {
        text: "Doodle 2: Hello there.",
        draw: false
    },
    {
        text: "Doodle 1: Do you think he will notice us talking?",
        draw: false
    },
    {
        text: "Doodle 2: I do not think so.",
        draw: false
    },
    {
        text: "Doodle 1: This biology class is a drag. He needs to come back and draw us some friends.",
        draw: false
    },
    {
        text: "Doodle 2: But aren't I enough?",
        draw: false
    },
    {
        text: "Doodle 1: Hold that thought. It looks like he is writing on the next page. I will go look.",
        draw: false
    },
    {
        text: "Doodle 2: That is a good idea.",
        draw: false
    }
]

function initialize() {
    fig1CurrentFrame = 0
    fig1X = 0
    fig1Y = 498-(64*2)

    fig2CurrentFrame = 0
    fig2X = 0
    fig2Y = 0

    figNumFrames = 9
    figWidth = 32
    figHeight = 64

    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext('2d')

    update()
}

function update() {

    if (timer < (60*5)) {
        if (timer % 10 == 0) {
            fig1CurrentFrame++
    
            if (fig1CurrentFrame == figNumFrames) {
                fig1CurrentFrame = 0
            }
        }

        fig1X++;
        fig1Y-=0.2
    }

    if (timer > (60*5) && timer < (60*9.5)) {
        if (timer % 10 == 0) {
            fig2CurrentFrame ++

            if (fig2CurrentFrame == figNumFrames) {
                fig2CurrentFrame = 0
            }
        }

        fig2X++;
        fig2Y++;
    } else {
        fig2CurrentFrame = 0
    }

    if (timer > (60*10) && timer < (60*15)) {
        speech[0].draw = true
    } else {
        speech[0].draw = false
    }

    if (timer > (60*15) && timer < (60*20)) {
        speech[1].draw = true
    } else {
        speech[1].draw = false
    }

    if (timer > (60*20) && timer < (60*25)) {
        speech[2].draw = true
    } else {
        speech[2].draw = false
    }

    if (timer > (60*25) && timer < (60*30)) {
        speech[3].draw = true
    } else {
        speech[3].draw = false
    }

    if (timer > (60*30) && timer < (60*35)) {
        speech[4].draw = true
    } else {
        speech[4].draw = false
    }

    if (timer > (60*35) && timer < (60*40)) {
        speech[5].draw = true
    } else {
        speech[5].draw = false
    }

    if (timer > (60*40) && timer < (60*45)) {
        speech[6].draw = true
    } else {
        speech[6].draw = false
    }

    if (timer > (60*45) && timer < (60*50)) {
        speech[7].draw = true
    } else {
        speech[7].draw = false
    }

    if (timer > (60*50)) {
        if (timer % 10 == 0) {
            fig1CurrentFrame++
    
            if (fig1CurrentFrame == figNumFrames) {
                fig1CurrentFrame = 0
            }
        }

        fig1X++;
        fig1Y-=0.2
    }

    timer++
    draw()
    requestAnimationFrame(update)
}

function draw() {
    ctx.clearRect(0, 0, 570, 498)

    ctx.beginPath()
        ctx.drawImage(background, 0, 0)
    ctx.closePath()

    ctx.beginPath()
        ctx.drawImage(
            figure1,
            fig1CurrentFrame * figWidth,
            64,
            figWidth,
            figHeight,
            fig1X,
            fig1Y,
            figWidth*2,
            figHeight*2
        )
    ctx.closePath()

    ctx.beginPath()
        ctx.drawImage(
            figure2,
            fig2CurrentFrame * figWidth,
            64,
            figWidth,
            figHeight,
            fig2X,
            fig2Y,
            figWidth*2,
            figHeight*2
        )
    ctx.closePath()

    ctx.beginPath()
        ctx.fillText("Doodle 1", fig1X+30, fig1Y+20)
    ctx.closePath()

    ctx.beginPath()
        ctx.fillText("Doodle 2", fig2X+30, fig2Y+20)
    ctx.closePath()

    ctx.beginPath()
        ctx.drawImage(pencil, 100, 100)
    ctx.closePath()

    ctx.beginPath()
        ctx.drawImage(eraser, 30, 300, 100, 100)
    ctx.closePath()

    speech.forEach((speechBubble) => {
        if (speechBubble.draw) {
            ctx.beginPath()
                ctx.fillText(speechBubble.text, 100, 100)
            ctx.closePath()
        }
    })


}
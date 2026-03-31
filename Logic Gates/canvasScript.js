
function andGate(){
    // grab the canvas element and get the 2d drawing context
    const andCtx = document.getElementById("andGate").getContext("2d");

    // set the colour and thickness of all lines being drawn
    andCtx.strokeStyle = '#00d4ff';
    andCtx.lineWidth = 2;

    // --- Wires ---
    //beginPath() starts a new drawing and removes any old one
    andCtx.beginPath()

    andCtx.moveTo(0,20); //moveTo(x, y)
    andCtx.lineTo(40,20);

    andCtx.moveTo(0,60); //start point
    andCtx.lineTo(40,60) //end point

    andCtx.moveTo(100,40);
    andCtx.lineTo(150,40)

    //draw the actual lines
    andCtx.stroke();

    // --- Body ---
    andCtx.beginPath()
    andCtx.moveTo(40,10); // top left corner
    andCtx.lineTo(40,70); // back of gate
    andCtx.lineTo(75,70); // botton edge to where dome starts

    // bezierCurveTo(cx1, cy1, cx2, cy2, x, y)
    // draws a curve from the current position (75,70) to the end point (75,10)
    // cx1 (110,70) pulls the bottom of the dome outward to the right
    // cx2 (110,10) pulls the top of the dome outward to the right
    // both control points being at x=110 is what makes it a symmetric rounded dome
    // x, y is where the line of the curve finishes

    andCtx.bezierCurveTo(110, 70, 110, 10, 75, 10);
    andCtx.lineTo(40,10);
    // middle point controls the curve
    andCtx.stroke();

}



// ----- OR Gate -----
function orGate(){
    const orCtx = document.getElementById("orGate").getContext("2d");
    orCtx.strokeStyle = '#00d4ff';
    orCtx.lineWidth = 2;

    orCtx.beginPath();
    orCtx.moveTo(0,20);
    orCtx.lineTo(56,20);

    orCtx.moveTo(0,60);
    orCtx.lineTo(56,60);

    orCtx.moveTo(120, 40)
    orCtx.lineTo(160, 40)

    //draw the actual lines
    orCtx.stroke();


    orCtx.beginPath()
    orCtx.moveTo(40, 10);  // top of back edge START POINT
    orCtx.bezierCurveTo(70, 11, 70, 70, 40, 70);  // curves inward to bottom X,Y END

    orCtx.moveTo(40, 10);  // top of back edge
    orCtx.bezierCurveTo(50, 11, 110, 30, 120, 40);  // sweeps to the point


    orCtx.moveTo(120, 40);  // point of gate
    orCtx.bezierCurveTo(105, 55, 60, 68, 42, 70);

    orCtx.stroke();

}



// ----- NOT Gate -----
function drawTriangle(notCtx,x1,y1,x2,y2,x3,y3){
    //Helper function to draw triange body
    //top left, point on right, bottom left
    notCtx.beginPath();
    notCtx.moveTo(x1,y1);
    notCtx.lineTo(x2,y2);
    notCtx.lineTo(x3,y3);
    notCtx.lineTo(x1,y1);
    notCtx.stroke()
}

function notGate(){
    const notCtx = document.getElementById("notGate").getContext("2d");
    notCtx.strokeStyle = '#00d4ff';
    notCtx.lineWidth = 2;

    notCtx.beginPath();
    notCtx.moveTo(0,40);
    notCtx.lineTo(50,40);

    notCtx.moveTo(120, 40)
    notCtx.lineTo(160, 40)

    //draw the actual lines
    notCtx.stroke();

    drawTriangle(notCtx,50, 5, 125, 40, 50, 70);

}


andGate();
orGate();
notGate();




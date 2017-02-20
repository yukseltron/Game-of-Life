var gridHeight = 400;
var gridWidth = 400;
var theGrid = createArray(gridWidth);
var mirrorGrid = createArray(gridWidth);

fillRandom();

function createArray(rows) {
    var arr = [];
    for (var i = 0; i < rows; i++) {
        arr[i] = [];
    }
    return arr;
}

function fillRandom() { //fill the grid randomly
    for (var j = 0; j < gridHeight; j++) {//rows
        for (var k = 0; k < gridWidth; k++) { //columns
            var rawRandom = Math.random();
            var improvedNum = (rawRandom * 2);
            var randomBinary = Math.floor(improvedNum);
            if (randomBinary === 1) {
                theGrid[j][k] = 1;
            } else {
                theGrid[j][k] = 0;
            }
        }
    }
}

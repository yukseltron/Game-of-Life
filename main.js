var height = 600;
var width = 600;
var grid = makeGrid(width);
var tempGrid = makeGrid(width);

start();

//functions
function start() {
    drawGrid();
    updateGrid();
    requestAnimationFrame(start);
}

function makeGrid(rows) {
    var a = [];

    for (var i = 0; i < rows; i++) {
        a[i] = [];
    }

    return a;
}

function fillGrid() {
    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            rand = Math.floor(Math.random() * (7 - 1 + 1)) + 1;

            if (rand === 1) {
                grid[i][j] = 1;
            } else {
                grid[i][j] = 0;
            }
        }
    }
}

function drawGrid() {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.clearRect(0, 0, 600, 600);

    for (var i = 1; i < height; i++) {
        for (var j = 1; j < width; j++) {
            if (grid[i][j] === 1) {
                ctx.fillStyle = "#59CD90";
                ctx.fillRect(i, j, 1, 1);
            }
        }
    }
}

function updateGrid() { //perform one iteration of grid update
	for (var i = 1; i < height-1; i++) {
		for (var j = 1; j < width-1; j++) {
			var cells = 0;

			cells += grid[i+1][j-1];
			cells += grid[i+1][j];
			cells += grid[i+1][j+1]
			cells += grid[i][j-1];
			cells += grid[i][j+1];
			cells += grid[i-1][j-1];
			cells += grid[i-1][j];
			cells += grid[i-1][j+1];

			determineFate(cells, i, j);
        }
    }
	displayGrid();
}

function determineFate(cells, i, j) {
	if (grid[i][j] == 0) {
		if (cells == 3) {
			tempGrid[i][j] = 1;
		}
		else {
			tempGrid[i][j] = 0;
		}
	}
	else if (grid[i][j] == 1){
		if (cells <= 1) {
			tempGrid[i][j] = 0;
		}
		else if (cells <= 3) {
			tempGrid[i][j] = 1;
		}
		else {
			tempGrid[i][j] = 0;
		}
	}
}

function displayGrid() {
	for (var i = 0; i < height; i++) { //iterate through rows
		for (var j = 0; j < width; j++) { //iterate through columns
			grid[i][j] = tempGrid[i][j];

		}
	}
}

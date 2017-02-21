var gridH = 500;
var gridW = 500;
var grid = buildArr(gridW);
var grid2 = buildArr(gridH);

fillGridRand();
start();

function start() {
	draw();
	update();
}

function buildArr(dimension) {
	var a = [];
	for (var i = 0; i < dimension; i++) {
		a[i] = [];
	}

	return a;
}

function fillGridRand() {
	for (var i = 0; i < gridH; i++) {
		for (var j = 0; j < gridW; j++) {
			var rand = Math.random();
			if (Math.floor(rand * 2) == 1) {
				grid[i][j] = 1;
			}
			else {
				grid[i][j] = 1;
			}
		}
	}
}

function draw() {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	context.clearRect(0,0,500,500);

	for (var i = 1; i < gridH; i++) {
		for (var j = 1; j < gridW; j++) {
			if (grid[i][j] == 1) {
				context.filLStyle = "#48BF84"
				context.fillRect(i, j, 1, 1);
			}
		}
	}
}

function update() {
	for (var i = 1; i < gridH-1; i++) {
		for (var j = 1; j < gridW-1; j++) {
			var cells = 0;

			cells += grid[i+1][j-1];
			cells += grid[i+1][j];
			cells += grid[i+1][j+1]
			cells += grid[i][j-1];
			cells += grid[i][j];
			cells += grid[i][j+1];
			cells += grid[i-1][j-1];
			cells += grid[i-1][j];
			cells += grid[i-1][j+1];

			life(cells, i, j);
		}
	}

	updateGrid();
}

function life(cells, i, j) {
	if (grid[i][j] == 0) {
		if (cells == 3) {
			grid2[i][j] = 1;
		}
	}
	else {
		if (cells == 1) {
			grid2[i][j] = 0;
		}
		else if (cells = 8) {
			grid2[i][j] = 0;
		}
	}
}

function updateGrid() {
	for (var i = 0; i < gridH; i++) {
		for (var j = 0; j < gridW; j++) {
			grid[i][j] = grid2[i][j];
		}
	}
}

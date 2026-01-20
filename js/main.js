const container=document.getElementById("maze-container");
const button=document.getElementById("generate-maze");

const SIZE=10;

const MEME_COUNT=59;
const meme=document.getElementById("meme");
if(meme){
	const randomMeme=Math.floor(Math.random()*MEME_COUNT);
	meme.src=`memes/${randomMeme}.png`;
}


function renderMaze(maze) {
    container.innerHTML = "";

    const CELL_SIZE = Math.min(
        40,
        Math.floor(container.clientWidth / maze.length)
    );

    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${maze.length}, ${CELL_SIZE}px)`;
    container.style.gap = "2px";
    container.style.justifyContent = "center";

    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[i].length; j++) {
            const cell = document.createElement("div");

            cell.style.width = `${CELL_SIZE}px`;
            cell.style.height = `${CELL_SIZE}px`;

            switch (maze[i][j]) {
                case 0:
                    cell.style.backgroundColor = "#e0e1dd";
                    break;
                case 1:
                    cell.style.backgroundColor = "#0d1b2a";
                    break;
                case 2:
                    cell.style.backgroundColor = "#4caf50";
                    break;
                case 3:
                    cell.style.backgroundColor = "#f44336";
                    break;
            }

            container.appendChild(cell);
        }
    }
}



function generateAndRender() {
	const maze = generateMaze(SIZE);
	renderMaze(maze);
}

generateAndRender();

button.addEventListener("click", generateAndRender);

const container=document.getElementById("maze-container");
const button=document.getElementById("generate-maze");

const SIZE=20;

function renderMaze(maze){
	container.innerHTML="";

	container.style.display="grid";
	container.style.gridTemplateColumns=`repeat(${maze.length}, 50px)`;
	container.style.gap="2px";
	for(let i=0;i<maze.length;i++){
		for(let j=0;j<maze[i].length;j++){
			const cell = document.createElement("div");
			cell.style.width = "50px";
			cell.style.height = "50px";

			switch(maze[i][j]){
				case 0:
					cell.style.backgroundColor = "#e0e1dd"; // walkable
					break;
				case 1:
					cell.style.backgroundColor = "#0d1b2a";
					break;
				case 2:
					cell.style.backgroundColor = "#4caf50";
					break;
				case 3:
					cell.style.backgroundColor = "#f44336"; // end
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

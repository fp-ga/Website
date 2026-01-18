//generates a maze Matrix. 1 signifies a wall 0 is air/walkable 
//and 2 and 3 are start and end respectively
//invariant: n>3
function generateMaze(n){
	if (n <= 3) throw new Error("size is too small silly");
	const maze=[];
	const mazeMirror=[];
	for(let i=0;i<n;i++){
		maze[i]=[];
		for(let j=0;j<n;j++){
			maze[i][j]=(Math.random()>0.7)?1:0;
		}
	}
	//game of life stuff :D
	for(let i=0;i<n;i++){
                mazeMirror[i]=[];
                for(let j=0;j<n;j++){
                        if(i===0||j===0||i===n-1||j===n-1){
				mazeMirror[i][j]=1;
			}else{
				const neighbourhood = maze[i-1][j-1]+
					maze[i-1][j]+maze[i-1][j+1]+
					maze[i][j-1]+maze[i][j+1]+
					maze[i+1][j-1]+maze[i+1][j]+
					maze[i+1][j+1];
				if(neighbourhood<2||neighbourhood>6){
					mazeMirror[i][j]=1;
				}else{
					mazeMirror[i][j]=0;
				}
			}
                }
        }
	for(let i=0;i<n;i++){
                mazeMirror[i]=[];
                for(let j=0;j<n;j++){
                        if(i===0||j===0||i===n-1||j===n-1){
                                mazeMirror[i][j]=1;
                        }else{
                                const neighbourhood = maze[i-1][j-1]+
                                        maze[i-1][j]+maze[i-1][j+1]+
                                        maze[i][j-1]+maze[i][j+1]+
                                        maze[i+1][j-1]+maze[i+1][j]+
                                        maze[i+1][j+1];
                                if(neighbourhood<2||neighbourhood>6){
                                        mazeMirror[i][j]=1;
                                }else{
                                        mazeMirror[i][j]=0;
                                }
                        }
                }
        }
	mazeMirror[1][1]=2;
	mazeMirror[n-2][n-2]=3;
	return mazeMirror;
}
window.generateMaze=generateMaze;

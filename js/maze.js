function generateMaze(n) {
    if (n <= 3) throw new Error("size is too small silly");

    function createMaze() {
        const maze = [];
        for (let i = 0; i < n; i++) {
            maze[i] = [];
            for (let j = 0; j < n; j++) {
                maze[i][j] = (Math.random() > 0.7) ? 1 : 0;
            }
        }

        const mazeMirror = [];
            for (let i = 0; i < n; i++) {
                mazeMirror[i] = [];
                for (let j = 0; j < n; j++) {
                    if (i === 0 || j === 0 || i === n - 1 || j === n - 1) {
                        mazeMirror[i][j] = 1;
                    } else {
                        const neighbourhood = maze[i-1][j-1]+maze[i-1][j]+maze[i-1][j+1]+
                                              maze[i][j-1]+maze[i][j+1]+
                                              maze[i+1][j-1]+maze[i+1][j]+maze[i+1][j+1];
                        mazeMirror[i][j] = (neighbourhood < 2 || neighbourhood > 6) ? 1 : 0;
                    }
                }
            }
            for (let i = 0; i < n; i++) {
                maze[i] = [...mazeMirror[i]];
            }
        
        mazeMirror[1][Math.floor(n/2)]=1;
        mazeMirror[Math.floor(n/2)][1]=1;
        mazeMirror[1][1] = 2;
        mazeMirror[n-2][n-2] = 3;

        return mazeMirror;
    }
    function sum(maze){
        let c=0;
        for(const i of maze)
            for(const j of i)
                c+=j;
        return c;
    }
    function isConnected(maze) {
        const visited = Array.from({length: n}, () => Array(n).fill(false));
        const dirs = [[1,0],[0,1],[-1,0],[0,-1]];

        let start = null;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (maze[i][j] === 2) start = [i,j];
            }
        }

        const stack = [start];
        while (stack.length) {
            const [x, y] = stack.pop();
            if (maze[x][y] === 3) return true;
            if (visited[x][y]) continue;
            visited[x][y] = true;

            for (const [dx, dy] of dirs) {
                const nx = x + dx, ny = y + dy;
                if (nx >= 0 && ny >= 0 && nx < n && ny < n &&
                    maze[nx][ny] !== 1 && !visited[nx][ny]) {
                    stack.push([nx, ny]);
                }
            }
        }
        return false;
    }

    let maze;
    do {
        maze = createMaze();
    } while (!isConnected(maze)||sum(maze)<(n*n)/4);

    return maze;
}

window.generateMaze = generateMaze;

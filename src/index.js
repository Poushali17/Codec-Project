// Mars-Robot problem solution - Codec test
import readline from 'readline';

// method to calculate robot final position in Mars
function calculateRobotFinalPosition() {
    console.log('Hey welcome to Mars !!')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      let initialXAxisPlateau = 1;
      let initialYAxisPlateau = 1;
      let initialPosition = 'North';
      rl.question('Please enter grid size: ', (size) => {
        rl.question('Please enter command: ', (command) => {
            const xAxisPlateau = size.split(/[xX]+/)[0];
            const yAxisPlateau = size.split(/[xX]+/)[1];

            command.split('').forEach((el) => {
                if(el === 'F' && (initialYAxisPlateau < yAxisPlateau && initialPosition == 'North')){
                    initialYAxisPlateau++; 
                } else if(el === 'F' && (initialYAxisPlateau < yAxisPlateau && initialYAxisPlateau > 1 && initialPosition == 'South')){
                    initialYAxisPlateau--; 
                } else if(el === 'F' && (initialXAxisPlateau < xAxisPlateau && initialPosition == 'East')){
                    initialXAxisPlateau++; 
                } else if(el === 'F' && (initialXAxisPlateau < xAxisPlateau && initialXAxisPlateau > 1 && initialPosition == 'West')){
                    initialXAxisPlateau--; 
                } else if(el === 'L'){
                    switch(initialPosition) {
                        case 'North':
                            initialPosition = 'West';
                            break;
                        case 'West':
                            initialPosition = 'South';
                            break;
                        case 'South':
                            initialPosition = 'East';
                            break;
                        case 'East':
                            initialPosition = 'North';
                            break;
                    }
                } else if(el === 'R'){
                    switch(initialPosition) {
                        case 'North':
                            initialPosition = 'East';
                            break;
                        case 'East':
                            initialPosition = 'South';
                            break;
                        case 'South':
                            initialPosition = 'West';
                            break;
                        case 'West':
                            initialPosition = 'North';
                            break;
                    }
                } 
            });
            console.log('The final position of the Robot in Mars :', initialXAxisPlateau,',',initialYAxisPlateau,',',initialPosition);
            console.log('Please Note:\n','Considering the grid origin (0,0), the max limit should be the plateau grid size. ie. for plateau grid size 3x4, the limit is X=3, Y=4\n',
            'If the robot reaches the limit of the plateau and wants to move within the plateau size, we will allow to do that');
        })
      });
}

calculateRobotFinalPosition();

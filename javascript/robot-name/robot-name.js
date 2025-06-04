// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
    
    static NAMES_LIST = new Set();
    static TOTAL_NUMBER_OF_NAMES = 26 * 26 * 10 * 10 * 10;

    constructor(){
        if (Robot.NAMES_LIST.size === Robot.TOTAL_NUMBER_OF_NAMES){
            throw new Error('Cannot create robot: no names available');
        }
        this.robotName = '';
    }

    get name(){
        if (this.robotName === ''){
            return this.robotName = Robot.releaseNames();
        }
        return this.robotName;
    }

    reset(){
        this.robotName = '';
    }
}

Robot.releaseNames = () => {

    if (Robot.NAMES_LIST.size === Robot.TOTAL_NUMBER_OF_NAMES){
        throw new Error('No names available');
    }
    let name = ['A', 'A', '1', '1', '1'].map(
        char => /[A-Z]/.test(char) ? String.fromCharCode(Math.floor(Math.random() * (91 - 65) + 65)) : Math.floor(Math.random() * 10)).join('');

    if (Robot.NAMES_LIST.has(name)){
        return Robot.releaseNames();
    }
    
    Robot.NAMES_LIST.add(name);
    return name; 
};

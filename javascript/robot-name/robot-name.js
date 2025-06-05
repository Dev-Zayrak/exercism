// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

const generateAllNames = () => {
    const allNames = [];

    for (let letterIndex = 0; letterIndex < 676; letterIndex++) {
        for (let numberPart = 0; numberPart < 1000; numberPart++) {
            
            const firstLetter = String.fromCharCode(65 + Math.floor(letterIndex / 26));
            const secondLetter = String.fromCharCode(65 + (letterIndex % 26));
            const digits = numberPart.toString().padStart(3, '0');
            const name = firstLetter + secondLetter + digits;
            allNames.push(name);
        }
    }
    return allNames;
};

const shuffle = ([...names]) => names.reduce((shuffled, _, first) => {
  const second = Math.floor(Math.random() * first);
  [shuffled[first], shuffled[second]] = [shuffled[second], shuffled[first]];
  return shuffled;
}, names);

export class Robot {
    
    static ALL_NAMES = generateAllNames();
    static RANDOM_NAMES = shuffle(Robot.ALL_NAMES);

    static releaseNames() {
        Robot.RANDOM_NAMES = shuffle(Robot.ALL_NAMES);
    }

    constructor(){
        this.robotName = Robot.RANDOM_NAMES.pop();
    }

    get name(){
        return this.robotName;
    }

    reset(){
        this.robotName = Robot.RANDOM_NAMES.pop();
    }
}

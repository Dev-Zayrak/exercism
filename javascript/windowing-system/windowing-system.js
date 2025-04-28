// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 * 
 * To practice your wide range of JavaScript skills, 
 * try to solve tasks 1 and 2 with prototype syntax 
 * and the remaining tasks with class syntax.
 */

/**
 * window constructor
 * @param {number} [width=80] = window width
 * @param {number } [height=60] = window height
 */
export function Size(width = 80, height = 60){
    this.width = width;
    this.height = height;
}

/**
 * window function used to resize the window
 * @param {number} newWidth
 * @param {number} newHeight 
 */
Size.prototype.resize = function(newWidth, newHeight){
    this.width = newWidth;
    this.height = newHeight;
}

/**
 * Position constructor
 * Defined the position of the window 
 * x and y axis in the top left-hand corner of the window
 * @param {*} [x = 0] 
 * @param {*} [y = 0] 
 */
export function Position(x = 0, y = 0){
    this.x = x;
    this.y = y ;
}

/**
 * Defined the new position of the window
 * x and y axis in the top left-hand corner of the window
 * @param {*} newX 
 * @param {*} newY 
 */
Position.prototype.move = function(newX, newY){
    this.x = newX;
    this.y = newY;
}

/**
 * Class representing a program window
 */
export class ProgramWindow{

    /**
     * create an intance of program window 
     */
    constructor(){
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
    }
    
    /**
     * Defined the new size of the window program
     * The minimum allowed height or width is 1. Requested heights or widths less than 1 will be clipped to 1
     * The maximum height and width depend on the current position of the window.
     * Values larger than these bounds will be clipped to the largest size they can take.
     * @param {Size} newSize 
     */
    resize(newSize){
        newSize.height < 1 ? this.size.height = 1 : 
        (this.position.y + newSize.height) <= this.screenSize.height ? this.size.height = newSize.height : this.size.height = (this.screenSize.height - this.position.y);
        newSize.width < 1 ? this.size.width = 1 : 
        (this.position.x + newSize.width) <= this.screenSize.width ? this.size.width = newSize.width : this.size.width = (this.screenSize.width - this.position.x);
    }


    /**
     * Defined the new position of the window
     * The smallest position is 0 for both x and y.
     * The maximum position in either direction depends on the current size of the window. The edges cannot move past the edges of the screen.
     * @param {Position} newPosition 
     */
    move(newPosition){
        newPosition.x < 0 ? this.position.x = 0 :
        newPosition.x > (this.screenSize.width - this.size.width) ? this.position.x = (this.screenSize.width - this.size.width) : this.position.x = newPosition.x;
        newPosition.y < 0 ? this.position.y = 0 :
        newPosition.y > (this.screenSize.height - this.size.height) ? this.position.y = (this.screenSize.height - this.size.height) : this.position.y = newPosition.y;
    }
}

/**
 * function that accepts a ProgramWindow instance as input and changes the window to the specified size and position.
 * The window should get a width of 400, a height of 300 and be positioned at x = 100, y = 150.
 * @param {ProgramWindow} newProgramWindow 
 * @returns = the ProgramWindow instance that was passed in after the changes were applied.
 */
export function changeWindow(newProgramWindow){
        const newSize = new Size(400, 300);
        newProgramWindow.resize(newSize);
        const newPosition = new Position(100, 150);
        newProgramWindow.move(newPosition);
        return newProgramWindow;
}

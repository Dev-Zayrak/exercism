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
    this.y = y;
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
        const maxWidth = this.screenSize.width - this.position.x;
        const maxHeight = this.screenSize.height - this.position.y;

        const newWidth = Math.max(1, Math.min(newSize.width, maxWidth));
        const newHeight = Math.max(1, Math.min(newSize.height, maxHeight));

        this.size.resize(newWidth, newHeight);
    }


    /**
     * Defined the new position of the window
     * The smallest position is 0 for both x and y.
     * The maximum position in either direction depends on the current size of the window. The edges cannot move past the edges of the screen.
     * @param {Position} newPosition 
     */
    move(newPosition){
        const maxX = this.screenSize.width - this.size.width;
        const maxY = this.screenSize.height - this.size.height;
        
        const newX = Math.max(0, Math.min(newPosition.x, maxX));
        const newY = Math.max(0, Math.min(newPosition.y, maxY));

        this.position.move(newX, newY);
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

var winner = false;
var player = 1;
var board1 = [[]];
var board2 = [[]];
var numShips = 0;

/* * = empty
    M = Miss
    H = Hit
    @ = Ship
*/

/** Class representing a point. 
 * 
 * Taken from https://jsdoc.app/howto-es2015-classes.html as an example
 * 
*/
class Point {
    /**
     * Create a point.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     */
    constructor(x, y) {
        // ...
    }

    /**
     * Get the x value.
     * @return {number} The x value.
     */
    getX() {
        // ...
    }

    /**
     * Get the y value.
     * @return {number} The y value.
     */
    getY() {
        // ...
    }

    /**
     * Convert a string containing two comma-separated numbers into a point.
     * @param {string} str - The string containing two comma-separated numbers.
     * @return {Point} A Point object.
     */
    static fromString(str) {
        // ...
    }
}
class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
const myRectangle = new Rectangle(5, 10);
console.log("Area:", myRectangle.getArea());           
console.log("Perimeter:", myRectangle.getPerimeter());
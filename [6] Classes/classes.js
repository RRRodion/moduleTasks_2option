/* Создайте класс под названием
«Прямоугольник» со свойствами ширины и
высоты. Включите два метода расчета
площади и периметра прямоугольника.
Создайте экземпляр класса «Прямоугольник»
и вычислите его площадь и периметр. */

class Rectangle {
    constructor(width, height) {
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

const rectangle = new Rectangle(5, 3);
console.log(rectangle.getArea()); //15
console.log(rectangle.getPerimeter()); //16

function Vec(x, y) {
    this.x = x;
    this.y = y;
}

Vec.prototype.plus = function (vec) {
    return new Vec(this.x + vec.x, this.y + vec.y);
};

Vec.prototype.minus = function (vec) {
    return new Vec(this.x - vec.x, this.y - vec.y);
};

Vec.prototype.length = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
};

const vec1 = new Vec(1, 2);
const vec2 = new Vec(3, 4);

console.log(vec1.plus(vec2).x); // 4
console.log(vec1.plus(vec2).y); // 6
console.log(vec1.minus(vec2).x); // -2
console.log(vec1.minus(vec2).y); // -2
console.log(vec1.length()); // 3.605551275463989
function Squares(x) {
    this.x = x;
};

Squares.prototype.squareOfSum = () => {
  let result = 0;
  for(let i = 1; i <= this.x; i += 1) {
    result += i;
  }
  return result * result;
};

Squares.prototype.sumOfSquares = () => {
  let result = 0;
  for(let i = 1; i <= this.x; i += 1) {
    result += (i*i);
  }
};

Squares.prototype.difference = () => {
  return this.squareOfSum() - this.sumOfSquares();
};

module.exports = Squares;

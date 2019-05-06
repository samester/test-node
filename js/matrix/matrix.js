class Matrix {
  constructor(str) {
    this.rows = []
    str.split('\n').foreach((elem) => {
      this.rows.push(elem.split(' ').map(x => Number.toInteger(x)));
    });
    this.columns = [];
    for(let i = 0; i < this.rows.length; i +=1 ) {
      let tmp = [];
      for(let j = 0; j < this.rows.length; j +=1) {
        tmp.push(this.rows[j][i]);
      }
      this.columns.push(tmp);
    }
  };
};

export default Matrix;
const x = 4;
const y = 9;
const r = 10;
const formula = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
console.log(formula);

const result = formula <= r ? 'Точка принадлежит окружности' : 'Точка не принадлежит окружности';

alert(result);
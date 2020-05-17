//abstração de função 

function soma(x,y){
  return x + y;
};

console.log(soma(3,4));

//ECS5

const mux = function(x,y){
  return x*y;
};

console.log(mux(4,5));

//Arrow Functions ECS6

const div = (x,y) => {
  return x/y;
};
console.log(div(4,5));

const obj = (x) =>({
  nome:'Gabriel',sobrenome:'Rodrigues'
})

console.log(obj('gabriel'));
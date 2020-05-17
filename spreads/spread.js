let list = [1,2,5];

let include = [3,4];

console.log(list)

// algoritmo para incluir itens em lista v1

for(let i = 0; i< include.length; i++){
  for(let j = 0;j<list.length; j++){
    if(list[j] >= include[i]){
      list.splice(j, 0, include[i]);
      j++;
    }
  }
}

console.log(list)

//

const list_result = [1,2,...include,5]


console.log('Lista com spread : '+list_result)

let arr = ['a','b','c'];

let ar = [...arr];

console.log(arr +'\n'+ ar);

ar.push('d');

console.log(`Arr = ${arr}`+'\n'+`Ar = ${ar}`)

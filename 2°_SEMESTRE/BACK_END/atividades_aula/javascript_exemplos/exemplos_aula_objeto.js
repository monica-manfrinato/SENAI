let names = { fname: "Dillion", lname: "Megida" } // dentro do objeto names, eixstem as propriedades "fname" e "lname", que possuem os seus conteúdos

// propriedade é a mesma coisa que atributo, mas "PROPRIEDADE" é mais utilizado 
console.log(names.fname); //mostra o valor que tem na propriedade fname, que nesse caso é Dillion


console.log(names.hasOwnProperty("lname")); // Resultado esperado // Dillion // true
// hasOwnProperty é um método 


//Exercício 1:

// const candidatos = {
//  ana: true,
//  bruno: false,
//  carla: true,
//  daniel: false
// };

// function verificarCandidato(nome, callback){
//     return callback(nome)
// }

// function conferir(nome){
//     if (candidatos[nome]){ //tem q ser candidados[nome] pq quer acessar o nome dentro de candidatos
//         console.log( 'Candidato aprovado para a próxima fase')
//     }
//     else{
//         console.log ('Candidato reprovado')
//     }
// }
// verificarCandidato('ana', conferir); //Candidato aprovado
// verificarCandidato('bruno', conferir); //Candidato reprovado
// verificarCandidato('carla', conferir); //Candidato aprovado



//Exercício 2:

// class Colaborador {

//     constructor(nome, cargo, salario){
//         this.nome = nome
//         this.cargo = cargo
//         this.salario = salario
//     }

//     aumentarSalario(percentual){
//         this.salario *= (1 + percentual/100)
//         return `O salário após o aumento ficou de ${this.salario}`
//     }

//     exibirDados(){
//         return` === DADOS COLABORADOR ===  
//         Nome: ${this.nome}
//         Cargo: ${this.cargo}
//         Salário atual: ${this.salario}`
//     }
// }

// const monica = new Colaborador ('Mônica', 'Gerente', 10000)
// console.log(monica.exibirDados())
// console.log(monica.aumentarSalario(50))
// console.log(monica.exibirDados())



//Exercício 3:


// class FolhaDePagamento{
//     constructor(nomeColaborador, cargo, salarioBase, diasTrabalhados){
//         this.nomeColaborador = nomeColaborador
//         this.cargo = cargo
//         this.salarioBase = salarioBase
//         this.diasTrabalhados = diasTrabalhados
//     }

//     calcularSalarioMensal(){
//         return `Após ${this.diasTrabalhados} dias de trabalho, seu salário mensal foi de ${this.salarioBase / 30*this.diasTrabalhados}`
//     }

//     resumoPagamento(){
//         return`

//         ==== RESUMO DO PAGAMENTO ====

//         Nome do colaborador: ${this.nomeColaborador}
//         Cargo: ${this.cargo}
//         Dias trabalhados: ${this.diasTrabalhados}
//         Salário mensal: ${this.salarioBase}
//         `
//     }
// }

// const celso = new FolhaDePagamento('Celso', 'programador', 3000, 30)
// console.log(celso.calcularSalarioMensal())
// console.log(celso.resumoPagamento())



//Exercício 4:

// class Contrato{
//     constructor(colaborador, dataInicio, tipo, salarioBase){
//         this.colaborador = colaborador
//         this.dataInicio = dataInicio
//         this.tipo = tipo
//         this.salarioBase = salarioBase
//     }

//     calcularSalario(){
//         return this.salarioBase
//     }
// }



// class CLT extends Contrato{
//     constructor(colaborador, dataInicio, tipo, salarioBase, bonusPercentual){
//         super(colaborador, dataInicio, tipo, salarioBase)
//         this.bonusPercentual = bonusPercentual
//         }

//         calcularSalario(){
//             if (this.bonusPercentual > 0 && this.bonusPercentual <= 15){ 
//             return this.salarioBase * (1 + this.bonusPercentual/100)

//         }}

//         detalhesContrato(){
//         return `=== DETALHES DO CONTRATO ===
//         Colaborador: ${this.colaborador}
//         Data de Início: ${this.dataInicio}
//         Tipo de contrato: ${this.tipo}
//         Salário base do colaborador: ${this.salarioBase}
//         Salário final do colaborador: ${this.calcularSalario()}`
//     }

// }


// class Estagiario extends Contrato {
//     constructor(colaborador, dataInicio, tipo, salarioBase, horasSemanais){
//         super(colaborador, dataInicio, tipo, salarioBase)
//         this.horasSemanais = horasSemanais
//         }

//         calcularSalario(){
//             let bonusSemanal = this.horasSemanais*20
//             return this.salarioBase + bonusSemanal
// }

//         detalhesContrato(){
//         return `=== DETALHES DO CONTRATO ===
//         Colaborador: ${this.colaborador}
//         Data de Início: ${this.dataInicio}
//         Tipo de contrato: ${this.tipo}
//         Salário base do colaborador: ${this.salarioBase}
//         Salário final do colaborador: ${this.calcularSalario()}`
//     }

// }

// let daniel = new CLT ('Daniel', '01/01/2001', 'CLT', 2000, 10)
// daniel.calcularSalario()
// console.log(daniel.detalhesContrato())

// let marlon = new Estagiario ('Marlon', '02/02/2002', 'Estagiário', 1000, 2)
// marlon.calcularSalario()
// console.log(marlon.detalhesContrato())



//Exercício 5:

// class Funcionario{
//     constructor(nome,salarioBase){
//         this.nome = nome
//         this.salarioBase = salarioBase
//     }

//     calcularSalario(){}
// }


// class AssistenteRH extends Funcionario{

//     calcularSalario(){
//         let salarioBonus =  this.salarioBase*1.05
//         return salarioBonus
//     }
// }

// class AnalistaRH extends Funcionario{

//     calcularSalario(){
//         let salarioBonus =  this.salarioBase*1.15
//         return salarioBonus
//     }
// }

// class GerenteRH extends Funcionario{

//     calcularSalario(){
//         let salarioBonus =  this.salarioBase + 3000
//         return salarioBonus
//     }
// }

//     const funcionarios = [
//         new GerenteRH('Mônica', 2000), 
//         new AnalistaRH('Rafael', 2000),
//         new AssistenteRH('Paula', 2000),
//         new GerenteRH('Davi', 2000),
//         new AssistenteRH('Lucas', 2000)
//     ];

//     funcionarios.forEach(f => console.log (`O salário de ${f.nome} é de ${f.calcularSalario()} reais`));



//Exercício 6:

// class BancoDeHoras{
//     #horas
//     colaborador
//     constructor(horas, colaborador){
//         this.#horas = horas
//         this.colaborador = colaborador
//     }

//     adicionarHoras(qtd){
//         this.#horas += qtd
//     }

//      retirarHoras(qtd){
//         if(qtd > this.#horas){
//             console.log ('Não foi possível retirar horas, não há valor suficiente')
//         }
//         else
//         {this.#horas -= qtd}
//     }

//     consultarHoras(){
//         return`O(a) colaborador(a) ${this.colaborador} teve ${this.#horas} horas`
//     }
// }

// monica = new BancoDeHoras(20, 'Mônica')

// console.log(monica.consultarHoras()) //20 horas de Mônica
// monica.adicionarHoras(2)
// console.log(monica.consultarHoras()) //22 horas de Mônica
// monica.retirarHoras(10) //12 horas de Mônica
// console.log(monica.consultarHoras()) //12 horas de Mônica
// monica.retirarHoras(23)// Erro, horas insuficientes

//EXERCÍCIO 1:Crie uma classe InstrumentoMusical com o método tocar(). Depois, crie duas subclasses Violao e Piano que herdem de InstrumentoMusical e sobrescrevam o método tocar() exibindo mensagens diferentes. 

// class InstrumentoMusical{
//     tocar(){}
// }

// class Violao extends InstrumentoMusical {
// tocar(){
//     console.log('Som de violão')
// }
// }
// let violao1 = new Violao ();

// ///////////////////////////////////////////////////

// class Piano extends InstrumentoMusical {
// tocar(){
//     console.log('Som de piano')
// }
// }
// let piano1 = new Piano();

// violao1.tocar();
// piano1.tocar();



// //EXERCÍCIO 2:Crie uma classe Funcionario com os atributos nome e salario. Crie uma classe Gerente que herde de Funcionario e adicione o atributo bonus.

// class Funcionario {
//     constructor (nome,salario){
// this.nome = nome;
// this.salario = salario;
// }
// }

// class Gerente extends Funcionario {
//     constructor(nome, salario, bonus){
//     super(nome,salario)
//     this.bonus = bonus
// }
// }
// let funcionario1 = new Funcionario('Celso', 60000);
// let gerente1 = new Gerente('Daniel', 80000, 50);


// console.log(`O funcionário ${funcionario1.nome}, tem salário igual a: ${funcionario1.salario} reais`)
// console.log(`O gerente ${gerente1.nome}, tem salário igual a: ${gerente1.salario} reais, mais um bônus de ${gerente1.bonus} reais`)

// //EXERCÍCIO 3:Implemente uma classe Veiculo com os atributos marca e ano. Depois crie: Carro (com atributo adicional portas)Moto (com atributo adicional cilindradas)

// class Veiculo {
//     constructor(marca,ano){
//         this.marca = marca;
//         this.ano = ano;
//     }
// }

// class Carro extends Veiculo {
//     constructor(marca, ano, portas){
//     super(marca,ano);
//     this.portas = portas;

// }
// }

// class Moto extends Veiculo{
//     constructor(marca, ano, cilindradas){
//     super(marca, ano);
//     this.cilindradas = cilindradas;

// }
// }

// let moto1 = new Moto('BABA', 2009, 48)
// let carro1 = new Moto('FIAT', 2000, 4)

// console.log(`A moto1, da marca ${moto1.marca}, foi feita no ano ${moto1.ano} e possuí ${moto1.cilindradas} cilindradas`)
// console.log(`O carro1, da marca ${carro1.marca}, foi feito no ano ${carro1.ano} e possuí ${carro1.portas} portas`)

//EXERCÍCIO 4:Crie uma classe Funcionario com o método calcularSalario(). Crie duas subclasses: Gerente: salário base + bônus de 30%. Desenvolvedor: salário base + adicional de 20%.


// class Funcionario {
//     constructor(salario, bonus) {
//         this.salario = salario;
//         this.bonus = bonus;
//     }

//     calcularSalario() {
//         return this.salario + this.bonus;
//     }
// }

// class Gerente extends Funcionario {
//     constructor(salario) {
//     super(salario, salario * 0.3);
//     }
// }

// class Desenvolvedor extends Funcionario {
//     constructor(salario) {
//     super(salario, salario * 0.2);
//     }
// }

// let Daniel = new Gerente(10000); // Base do salário do Daniel
// let Marlon = new Desenvolvedor(50000); // Base do salário do Marlon

// console.log(`Salário do Daniel: ${Daniel.calcularSalario()}`);
// console.log(`Salário do Marlon: ${Marlon.calcularSalario()}`);



//EXERCÍCIO 5:Implemente uma classe base ContaBancaria com atributos titular e saldo, e métodos depositar() e sacar(). ContaCorrente deve cobrar uma taxa de R$ 2,00 em cada saque. ContaPoupanca deve render 5% ao mês quando for chamado o método atualizarSaldo().

class ContaBancaria{
    constructor(titular, saldo,){
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(){}
    sacar(){}
}

class ContaCorrente extends ContaBancaria{}

class ContaPoupanca extends ContaBancaria{
    constructor(saldo){
        super(saldo)}
    
    atualizarSaldo(){
        saldo *= 1.05
    }

}

let saldoMonica = new ContaPoupanca (1000)
console.log(saldoMonica.atualizarSaldo())



//EXERCÍCIO 6: Crie uma classe Produto com atributos privados nome e preco. Implemente métodos get e set que permitam acessar e modificar esses atributos de forma controlada (não permitir preço negativo).



//EXERCÍCIO 7:Implemente uma classe Carro com atributo privado velocidade. Crie os métodos públicos acelerar() (aumenta +10 km/h) e frear() (diminui -10 km/h, sem permitir valores negativos).



//EXERCÍCIO 8:Crie uma classe Conta com atributo privado saldo. Garanta que só seja possível modificar o saldo pelos métodos depositar() (apenas valores positivos) e sacar() (apenas se houver saldo suficiente).



//EXERCÍCIO 9:



//EXERCÍCIO 10:



//EXERCÍCIO 11:



//EXERCÍCIO 12:



//EXERCÍCIO 13:



//EXERCÍCIO 14:



//EXERCÍCIO 15:


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

// class ContaBancaria {
//   constructor(titular, saldo) {
//     this.titular = titular;
//     this.saldo = saldo;
//   }

//   depositar(valor) {
//     return this.saldo + valor;
//   }
//   sacar(valor) {
//     return this.saldo - valor;
//   }
// }

// class ContaCorrente extends ContaBancaria {
//   constructor(titular, saldo) {
//     super(titular, saldo);
//   }

//   sacar(valor) {
//     if (this.saldo > valor + 2 && valor > 0) {
//       this.saldo -= valor + 2.0;
//       return `Parabéns ${this.titular}, seu saque foi realizado! Descontando a taxa seu saldo é de ${this.saldo} reais`;
//     } else {
//       return `${this.titular}, não foi possível realizar o saque, insira um valor válido!`;
//     }
//   }
// }

// class ContaPoupanca extends ContaBancaria {
//   constructor(titular, saldo) {
//     super(titular, saldo);
//   }

//   atualizar_saldo(qnt_meses) {
//     for (let i = 0; i < qnt_meses; i++) {
//       this.saldo *= 1.05;
//     }
//     return `${this.titular}, após ${qnt_meses} meses, seu saldo é de ${this.saldo} reais `;
//   }
// }

// let saldoMonica = new ContaCorrente("Mônica", 1000);
// console.log(saldoMonica.sacar(100));
// let saldoLucas = new ContaPoupanca("Lucas", 1000);
// console.log(saldoLucas.atualizar_saldo(2));

// //EXERCÍCIO 6: Crie uma classe Produto com atributos privados nome e preco. Implemente métodos get e set que permitam acessar e modificar esses atributos de forma controlada (não permitir preço negativo).

// class Produto {
//   #nome;
//   #preco;

//   constructor(nome, preco) {
//     this.#nome = nome;
//     this.#preco = preco;
//   }

//   get getNome() {
//     return this.#nome;
//   }

//   get getPreco() {
//     return this.#preco;
//   }

//   set getNome(value) {
//     return (this.#nome = value);
//   }

//   set getPreco(value) {
//     if (value < 0) {
//       console.log("Não foi possível alterar o saldo.");
//     } else {
//       return (this.#preco = novo_valor);
//     }
//   }
// }

// let novoProduto = new Produto("arroz", 25);
// console.log(novoProduto.getPreco);
// console.log(novoProduto.getNome);

// //EXERCÍCIO 7:Implemente uma classe Carro com atributo privado velocidade. Crie os métodos públicos acelerar() (aumenta +10 km/h) e frear() (diminui -10 km/h, sem permitir valores negativos).

// class Carro {
//   #velocidade;
//   constructor(velocidade) {
//     this.#velocidade = velocidade;
//   }

//   acelerar() {
//     this.#velocidade += 10;
//   }

//   frear() {
//     if (this.#velocidade < 0) {
//       console.log("O carro está parado!");
//     } else {
//       return (this.#velocidade -= 10);
//     }
//   }
//   get getVelocidade() {
//     return this.#velocidade;
//   }
// }
// let Fox = new Carro(40);
// Fox.frear();
// console.log(Fox.getVelocidade);
// Fox.acelerar();
// console.log(Fox.getVelocidade);

// //EXERCÍCIO 8:Crie uma classe Conta com atributo privado saldo. Garanta que só seja possível modificar o saldo pelos métodos depositar() (apenas valores positivos) e sacar() (apenas se houver saldo suficiente).

// class Conta {
//   #saldo;
//   constructor(saldo) {
//     this.#saldo = saldo;
//   }

//   depositar(valor) {
//     if (valor < 0) {
//       console.log("Insira um valor válido");
//     } else {
//       return (this.#saldo += valor);
//     }
//   }

//   sacar(valor) {
//     if (this.#saldo >= valor) {
//       return (this.#saldo -= valor);
//     } else {
//       console.log("O saldo não é suficiente!");
//     }
//   }

//   get getConta() {
//     return this.#saldo;
//   }
// }

// let contaMonica = new Conta(5000);
// contaMonica.sacar(50);
// console.log(contaMonica.getConta);
// contaMonica.depositar(100);
// console.log(contaMonica.getConta);

// //EXERCÍCIO 9: Implemente uma classe Usuario com atributo privado senha. Crie o método validarSenha(senhaDigitada) que retorna true se a senha estiver correta e false caso contrário.

// class Usuario {
//   #senha;
//   constructor(senha) {
//     this.#senha = senha;
//   }

//   validarSenha(senhaDigitada) {
//     if (senhaDigitada == this.#senha) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   get getSenha() {
//     // desnecessário isso
//     return this.#senha;
//   }
// }

// let Monica = new Usuario(12345);
// console.log(Monica.validarSenha(12345));

// //EXERCÍCIO 10: Crie uma classe Retangulo com atributos privados largura e altura. Crie métodos públicos getArea() e getPerimetro() para retornar a área e o perímetro.

// class Retangulo {
//   #largura;
//   #altura;
//   constructor(largura, altura) {
//     this.#largura = largura;
//     this.#altura = altura;
//   }

//   get getArea() {
//     return this.#largura * this.#altura;
//   }
//   get getPerimetro() {
//     return this.#largura * 2 + this.#altura * 2;
//   }
// }

// let retangulo1 = new Retangulo(3, 4);
// console.log(`A área do retangulo é se ${retangulo1.getArea}`);
// console.log(`O perímetro do retangulo é de ${retangulo1.getPerimetro}`);

//EXERCÍCIO 11: Crie uma classe Forma com o método calcularArea(). Crie as classes Quadrado (lado), Retangulo (largura e altura) e Circulo (raio), sobrescrevendo o método para calcular a área corretamente.

// class Forma {
//     calcularArea(){}
// }

// class Quadrado extends Forma {

//     constructor (lado){
//         super()
//         this.lado = lado

//     }
//     calcularArea(){
//         return this.lado**2
//     }
//     }

// class Retangulo extends Forma {

//     constructor (base, altura){
//         super()
//         this.base = base
//         this.altura = altura

//     }
//     calcularArea(){
//         return this.base*this.altura
//     }
//     }

// class Circulo extends Forma {

//     constructor (raio){
//         super()
//         this.raio = raio

//         }
//     calcularArea(){
//         return 3.14*this.raio**2
//     }
//     }

// let meuQuadrado = new Quadrado (10)
// let meuRetangulo = new Retangulo (10,20)
// let meuCirculo = new Circulo (10)

// console.log(meuQuadrado.calcularArea())
// console.log(meuRetangulo.calcularArea())
// console.log(meuCirculo.calcularArea())

//EXERCÍCIO 12:Crie uma classe Funcionario com o método trabalhar(). Depois crie:
// Professor: retorna "Ministrando aulas e corrigindo provas".
// Engenheiro: retorna "Desenvolvendo projetos e supervisionando obras".
// Designer: retorna "Criando layouts e materiais gráficos".

// class Funcionario {
//   trabalhar() {}
// }

// class Professor extends Funcionario {
//   trabalhar() {
//     return "Ministrando aulas e corrigindo provas";
//   }
// }

// class Engenheiro extends Funcionario {
//   trabalhar() {
//     return "Desenvolvendo projetos e supervisionando obras";
//   }
// }

// class Designer extends Funcionario {
//   trabalhar() {
//     return "Criando layouts e materiais gráficos";
//   }
// }

// let Marlon = new Professor();
// let Celso = new Engenheiro();
// let Daniel = new Designer();

// console.log(`O Marlon ${Marlon.trabalhar()}`);
// console.log(`O Celso ${Celso.trabalhar()}`);
// console.log(Daniel.trabalhar());

// //EXERCÍCIO 13:Implemente um sistema de pagamento com uma classe Pagamento e subclasses CartaoCredito, Boleto e Pix, cada uma sobrescrevendo o método realizarPagamento() exibindo a forma de pagamento utilizada.

// class Pagamento {
//     realizarPagamento(){}
// }

// class CartaoCredito extends Pagamento{
//     realizarPagamento(){
//     return 'Foi pago com cartão de crédito'
//     }
// }

// class Boleto extends Pagamento{
//     realizarPagamento(){
//     return 'Foi pago por boleto'
//     }
// }

// class Pix extends Pagamento{
//     realizarPagamento(){
//     return 'Foi pago com pix'
//     }
// }

// let pix = new Pix()
// let cartaocredito = new CartaoCredito()
// let boleto = new Boleto()

// console.log(pix.realizarPagamento())
// console.log(cartaocredito.realizarPagamento())
// console.log(boleto.realizarPagamento())

//EXERCÍCIO 14:Crie uma classe Transporte com o método mover(). Crie as subclasses Carro, Bicicleta e Aviao, cada uma sobrescrevendo o método mover() com mensagens específicas (ex: "O carro anda pela estrada"). Depois, crie uma lista de transportes e percorra chamando mover().

// class Transporte {
//   mover() {}
// }
// class Carro extends Transporte {
//   mover() {
//     return "O carro anda pela estrada";
//   }
// }
// class Bicicleta extends Transporte {
//   mover() {
//     return "A bicicleta anda pela calçada";
//   }
// }
// class Aviao extends Transporte {
//   mover() {
//     return "O avião voa pelas nuvens ";
//   }
// }

// let listaVeiculos = [new Aviao(), new Bicicleta(), new Carro()];
// listaVeiculos.forEach((veiculos) => {
//   console.log(veiculos.mover());
// });

//EXERCÍCIO 15:Implemente uma classe Mensagem com o método enviar(). Crie subclasses Email, SMS e WhatsApp que sobrescrevam enviar() exibindo a mensagem de envio

// class Mensagem{
//   enviar(){}
  
// }

// class Email extends Mensagem {
//     enviar(){
//         return "Sua mensagem foi enviada por email!"
//     }
// }
// class SMS extends Mensagem {
//     enviar(){
//         return "Sua mensagem foi enviada por SMS!"

//     }

// }
// class WhatsApp extends Mensagem {
//     enviar(){
//         return "Sua mensagem foi enviada por WhatsApp!"
//     }

// }

// let emailMonica = new Email()
// let smsMonica = new SMS()
// let whatsAppMonica = new WhatsApp()

// console.log (emailMonica.enviar())
// console.log (smsMonica.enviar())
// console.log (whatsAppMonica.enviar())
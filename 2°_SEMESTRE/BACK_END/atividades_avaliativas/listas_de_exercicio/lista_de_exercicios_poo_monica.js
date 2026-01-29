//CLASSE DO PRODUTO

class Produto {
  constructor(nome, preco, quantidadeEstoque) {
    this.nome = nome;
    this.preco = preco;
    this.quantidadeEstoque = quantidadeEstoque;
  }

  calcular_valor_estoque() {
    console.log(
      `O valor total do estoque de ${this.nome} é de R$${
        this.quantidadeEstoque * this.preco
      }`
    );
  }
}

const batata = new Produto("Batata", 5, 200); //Cria uma nova isntância (objeto criado apartir da classe Produto)
batata.calcular_valor_estoque();

//////////////////////////////////////////////////////////////////////////////////

//CLASSE FILME

class Filme {
  constructor(titulo, anoLancamento, diretor) {
    this.titulo = titulo;
    this.diretor = diretor;
    this.anoLancamento = anoLancamento;
  }
  mostrando_informacoes() {
    console.log(
      `O filme ${this.titulo}, foi lançado em ${this.anoLancamento} e dirigido por ${this.diretor}.`
    );
  }
}

const demon_slayer_castelo_infinito = new Filme(
  "Demon Slayer: Kimetsu no Yaiba – Castelo Infinito",2025,"Haruo Sotozaki");
demon_slayer_castelo_infinito.mostrando_informacoes();

//////////////////////////////////////////////////////////////////////////////////

//CLASSE ALUNO

class Aluno {
  constructor(nome, nota1, nota2) {
    this.nome = nome;
    this.nota1 = nota1;
    this.nota2 = nota2;
  }

  calculandoMedia() {
    let media = (this.nota1 + this.nota2) / 2;
    let aprovacao;

    if (media < 7 && media >= 0) {
      aprovacao = "foi reprovado(a)";
    } else if (media >= 7 && media <= 10) {
      aprovacao = "foi aprovado(a)";
    } else {
      aprovacao = "resultado inválido";
    }

    console.log(
      `O aluno(a) ${this.nome} teve como média final ${media},sendo ${aprovacao}`
    );
  }
}

const Monica = new Aluno("Mônica Cotrim Manfrinato", 8, 10);
Monica.calculandoMedia();

//////////////////////////////////////////////////////////////////////////////////

//CLASSE RETANGULO

class Retangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }

  calculandoArea() {
    let area = this.base * this.altura;
    console.log(`O retangulo descrito possuí área igual a:${area}`);
  }

  calculandoPerimetro() {
    let perimetro = this.base * 2 + this.altura * 2;
    console.log(`Seu perímetro é igual a:${perimetro}`);
  }
}

const retangulo4x5 = new Retangulo(4, 5);
retangulo4x5.calculandoArea();
retangulo4x5.calculandoPerimetro();

//////////////////////////////////////////////////////////////////////////////////

//CLASSE CARRO

class Carro {
  constructor(marca, modelo, combustivel) {
    this.marca = marca;
    this.modelo = modelo;
    this.combustivel = combustivel;
  }

  abastecerLitro(quantidadeAbastecida) {
    this.combustivel += quantidadeAbastecida;
    console.log(
      `Foram abastecidos mais ${quantidadeAbastecida}L ao seu veículo, agora ele está com ${this.combustivel}L`
    );
  }

  dirigirKm(kmRodados) {
    let gastoCombustivel = kmRodados / 10;
    this.combustivel -= gastoCombustivel;
    if (this.combustivel <= 0 ){
      console.log("Seu veículo não conseguiu completar o caminho... O combustível acabou antes")
    }
    else{
    console.log(
      `Depois de rodar por ${kmRodados}Km, seu veículo gastou ${gastoCombustivel}L, e ficou com ${this.combustivel}L`
    );}
  }
}

const carroMonica = new Carro("Fiat", "Fastback", 0);
carroMonica.abastecerLitro(40);
carroMonica.dirigirKm(2000);

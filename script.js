var nome_do_carro = "Fusca";

function iniciarPrograma() {
  var nomeDoUsuario = prompt("Escreva o seu nome: ");
  var idadeDoUsuario = parseInt(prompt("Digite sua idade: "));

  apresentarNaTela(nome_do_carro);
  apresentarNaTela("Olá, " + nomeDoUsuario);
  apresentarNaTela("Olá, " + nomeDoUsuario + " sua idade é " + idadeDoUsuario);

  var opcaoFiguraPlana = "";
  var tiposDeFigura = [
    "Retângulo",
    "Quadrado",
    "Losango",
    "Trapézio",
    "Paralelogramo",
    "Triângulo",
    "Circulo",
  ];

  for (var i = 0; i < tiposDeFigura.length; i++) {
    opcaoFiguraPlana += `\n[ ${i + 1} ] Área do ${tiposDeFigura[i]}\n`;
  }

  do {
    var indiceFiguraPlana = parseInt(
      prompt(
        "======| Calculadora de Área de Figuras Planas |====== \n\nDigite qual opção deseja calcular:\n" +
          opcaoFiguraPlana +
          "\n[ 0 ] ---> Encerrar Calculo <---\n "
      )
    );

    if (indiceFiguraPlana == 0) {
      apresentarNaTela("Calculadora de área de figuras planas foi encerrada!!");
    } else if (indiceFiguraPlana == 1) {
      calcularRetangulo();
    } else if (indiceFiguraPlana == 2) {
      calcularQuadradoEParalelogramo();
    } else if (indiceFiguraPlana == 3) {
      calcularLosango();
    } else if (indiceFiguraPlana == 4) {
      calcularTrapézio();
    } else if (indiceFiguraPlana == 5) {
      calcularQuadradoEParalelogramo();
    } else if (indiceFiguraPlana == 6) {
      calcularTriangulo();
    } else if (indiceFiguraPlana == 7) {
      calcularCirculo();
    } else {
      apresentarNaTela("Valor digitado incorreto! Tente novamente...");
    }
  } while (indiceFiguraPlana != 0);
}

function calcularRetangulo() {
  var resultadoArea = pedirValor("da base") * pedirValor("da altura");
  apresentarAreaNaTela(resultadoArea);
}

function calcularQuadradoEParalelogramo() {
  var resultadoArea = pedirValor("do lado") ** 2;
  apresentarAreaNaTela(resultadoArea);
}

function calcularLosango() {
  var resultadoArea =
    (pedirValor("da diagonal maior") * pedirValor("da diagonal menor")) / 2;
  apresentarAreaNaTela(resultadoArea);
}

function calcularTrapézio() {
  var resultadoArea =
    ((pedirValor("da base maior") + pedirValor("da base menor")) *
      pedirValor("da altura")) /
    2;
  apresentarAreaNaTela(resultadoArea);
}

function calcularTriangulo() {
  var resultadoArea = (pedirValor("da base") * pedirValor("da altura")) / 2;
  apresentarAreaNaTela(resultadoArea);
}

function calcularCirculo() {
  var resultadoArea = Math.PI * pedirValor("do raio") ** 2;
  apresentarAreaNaTela(resultadoArea.toFixed(2));
}

function pedirValor(tipoDeValor) {
  return parseFloat(
    prompt(
      `Digite o valor de medida ${tipoDeValor} do ${
        tiposDeFigura[indiceFiguraPlana - 1]
      }: `
    )
  );
}

function apresentarNaTela(conteudo) {
  alert(conteudo);
}

function apresentarAreaNaTela(resultado) {
  alert(`A área do ${tiposDeFigura[indiceFiguraPlana - 1]} é: ${resultado}`);
}

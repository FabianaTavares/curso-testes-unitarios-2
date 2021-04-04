/**
 * @description toBeTruthy
 * Realiza comparação dizendo se variavel ou objeto possui um valor valido.
 * Um valor será considerado valido caso ele possua um valor diferente de 'false', '0', '', 'undefined', 'null', ou 'NaN'
 * Deve ser utilizado quando a verificação abordar valores inválidos distintos,
 * baseados nas opções citadas acima.
 * Prefira usar 'toBeFalsy' ao invés de 'not.toBeTruthy' para deixar o código mais fácil de compreender.
 */

describe("matchers-comparadores Comparador toBeTruthy", function() {

  var obj1 = { 'valor': 123 };
  var texto;
  var numero = 10;

  it("Deve validar o uso do Matcher toBeTruthy", function(){
    expect(obj1).toBeTruthy();
    expect(numero).toBeTruthy();
    expect(texto).not.toBeTruthy();
    //expect(text).toBeTruthy(); //exemplo que pode dar erro aqui.

    var n1 = 10;
    var n2 = undefined;
    var n3 = 0;
    var n4 = '';
    var n5 = null;
    var n6 = NaN;
    var n7;

    expect(n1).toBeTruthy();
    expect("teste").toBeTruthy();
    expect(true).toBeTruthy();

    expect(n2).not.toBeTruthy();
    expect(n3).not.toBeTruthy();
    expect(n4).not.toBeTruthy();
    expect(n5).not.toBeTruthy();
    expect(n6).not.toBeTruthy();
    expect(n7).not.toBeTruthy();
    expect(false).not.toBeTruthy();

    //expect(n5).toBeTruthy(); // exemplo que pode dar erro

  });
});
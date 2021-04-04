/**
 * @description toBeFalsy
 * Realiza comparação dizendo se variavel ou objeto possui um valor inválido.
 * Um valor será considerado um valor invalido caso ele seja 'false', '0', '', 'undefined', 'null', ou 'NaN'
 * Deve ser utilizado quando a verificação abordar valores inválidos distintos,
 * baseados nas opções citadas acima.
 * Prefira usar 'toBeTruthy' ao invés de 'not.toBeFalsy' para deixar o código mais fácil de compreender.
 */

describe("matchers-comparadores Comparador toBeFalsy", function() {

  var numero = 10;

  it("Deve validar o uso do Matcher toBeFalsy", function(){
    expect(false).toBeFalsy();
    expect("").toBeFalsy();
    expect(0).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(NaN).toBeFalsy();
    expect(numero).not.toBeFalsy();
    expect("false").not.toBeFalsy();

    expect(true).not.toBeFalsy();
    //expect(true).toBeFalsy(); //exemplo que pode dar erro aqui.

  });
});
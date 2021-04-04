/**
 * @description toBeNull
 * Realiza comparação de um objeto como sendo null.
 * Usamos null para dizer que uma variavel não possui um valor.
 * O valor null se diferencia de undefined pelo fato de null ser um tipo e undefined ser uma variavel ainda não definida.
 */

describe("matchers-comparadores Comparador toBeNull", function() {

  var obj1 = null
  var texto;
  var numero = 10;

  it("Deve validar o uso do Matcher toBeNull", function(){
    expect(obj1).toBeNull();
    expect(numero).not.toBeNull();
    expect(texto).not.toBeNull();
    expect(obj1).not.toEqual(texto);
    //expect(numero).toBeNull(); //exemplo que pode dar erro aqui.

    var n1 = null;
    var n2 = undefined;
    var n3;
    var n4 = NaN;
    var n5 = "teste";

    expect(n1).toBeNull();

    expect(n2).not.toBeNull();
    expect(n3).not.toBeNull();
    expect(n4).not.toBeNull();
    expect(n5).not.toBeNull();

    //expect(n5).toBeNull(); // exemplo que pode dar erro

  });
});
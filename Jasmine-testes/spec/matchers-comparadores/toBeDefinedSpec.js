/**
 * @description toBeDefined
 * Realiza comparação de um objeto não sendo undefined.
 * prefira usar toBeUndefined ao inves de 'not.toBeDefined' para deixar o codigo de mais facil compreensão
 */

describe("matchers-comparadores Comparador toBeDefined", function() {
    var numero = 10;
    var obj = { 'valor': 10};

  it("Deve validar o uso do matcher 'toBeDefined'", function(){

    expect(numero).toBeDefined();
    expect(obj.valor).toBeDefined();
    expect(obj.mensagem).not.toBeDefined(); //pior forma

    var n1 = 10;
    var n2;
    var n3 = undefined;

    expect(n1).toBeDefined();
    expect(null).toBeDefined();
    expect(NaN).toBeDefined();

    expect(n2).not.toBeDefined();
    expect(n3).not.toBeDefined();

  });
});
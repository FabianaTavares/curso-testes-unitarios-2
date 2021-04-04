/**
 * @description toBeUndefined
 * Realiza comparação de um objeto sendo undefined.
 * prefira usar toBeDefined ao inves de 'not.toBeUndefined' para deixar o codigo de mais facil compreensão
 */

describe("matchers-comparadores Teste do toBeUndefined", function() {
    var numero = 10;
    var obj = { 'valor': 10};

  it("Deve demonstrar o uso do matcher 'toBeUndefined'", function(){

    expect(numero).not.toBeUndefined();
    expect(obj.valor).toBeDefined();
    expect(obj.mensagem).toBeUndefined(); //pior forma
    expect(obj.valor).not.toBeUndefined();

    var n1;
    var n2 = undefined;
    var n3 = false;

    expect(n1).toBeUndefined();
    expect(n2).toBeUndefined();

    expect(n3).not.toBeUndefined();
    expect(null).not.toBeUndefined();

  });
});
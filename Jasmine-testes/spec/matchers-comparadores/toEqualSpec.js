/**
 * @description toEqual
 * Realiza comparação de dois elementos de modo similar ao 'toBe'.
 * A única diferença em relação ao 'toBe' é uqe ele não compara o tipo do objeto, somente seu valor.
 * É recomendadod seu uso para comparação de valores literais.
 */

describe("matchers-comparadores Comparador toEqual", function() {
  it("Deve validar o uso do matcher 'toEqual'", function(){
    var obj1 = { valor: true };
    var obj2 = { valor: true };

    expect(true).toEqual(true); //boolean
    expect("Teste").toEqual("Teste"); //String
    expect(obj1).toEqual(obj2); //objeto
    //expect(true).toEqual(false); //boolean porem da erro,

  });
});
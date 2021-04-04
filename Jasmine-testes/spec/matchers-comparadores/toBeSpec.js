/**
 * @description toBe
 * Realiza comparação com  o operador '===', que compara o valor e também o tipo.
 */

describe("matchers-comparadores Comparador toBe", function() {
  it("Deve validar o uso do toBe", function(){
    var obj1 = { valor: true };
    var obj2 = { valor: true };

    expect(true).toBe(true); //boolean
    expect("Teste").toBe("Teste"); //String
    expect(obj1).toBe(obj1); //objeto
    //expect(obj1).toBe(obj2); //objeto porem da erro, compara se o objeto é igual, mesma referente, e não se peocupa com o objecto CONTEM o mesmo valor.

  });
});
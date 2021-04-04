/**
 * @description toMatch
 * Realiza a comparação utilizando expressões regulares.
 * Caso seja passada uma string como parametro, o comparador tentara o texto passando dentro do valor a ser comparado.
 */

/**
 * @description toBe
 * Realiza comparação com  o operador '===', que compara o valor e também o tipo.
 */

describe("matchers-comparadores Teste do toMatch", function() {
  it("Deve validar o uso do toMatch", function(){
    expect("14/12/2016").toMatch(/^\d{2}\/\d{2}\/\d{4}$/);

    var texto = "teste com Jasmine";
    expect(texto).toMatch("Jasmine");
    //expect(texto).toMatch("jasmine"); // exemplo de erro
    expect(texto).toMatch(/jasmine/i); // em expressões regulares o i representa case insensitive, então vai passar no teste.

    //cep
    expect("12345-456").toMatch(/^\d{5}-\d{3}$/);
    //expect("12345-45a").toMatch(/^\d{5}-\d{3}$/); //exemplo com erro

  });
});
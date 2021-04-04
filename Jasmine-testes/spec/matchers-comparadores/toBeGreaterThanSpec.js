/**
 * @description toBeGreaterThan
 * Compara se um valor numérico é maior do que outro valor
 * REaliza conversão para valor numerico antes da conmparação, podendo o valor ser passado em formato texto.
 * Prefira usar 'toBeGreaterThen' ao invés de 'not.toBeLessThan', para deixar o código de mais fácil compreensão.
 * Para valores iguais utilize o 'toEqual'.
 */

describe("matchers-comparadores Validação do toBeGreaterThan", function() {

  const PI = 3.1415;
  var numero = 4;

  it("Deve validar o uso do Matcher toBeGreaterThan", function(){
    expect(numero).toBeGreaterThan(PI);
    expect("3.2").toBeGreaterThan(PI);
    expect(2).not.toBeGreaterThan(PI);
    expect(PI).not.toBeGreaterThan(PI);

    expect(4).toBeGreaterThan(PI);
    expect(3).not.toBeGreaterThan(PI);

    //expect(3).toBeGreaterThan(PI);//para dar erro no teste

  });
});
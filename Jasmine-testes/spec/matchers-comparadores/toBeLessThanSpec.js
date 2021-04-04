/**
 * @description toBeLessThan
 * Compara se um valor numérico é menor do que outro valor
 * REaliza conversão para valor numerico antes da conmparação, podendo o valor ser passado em formato texto.
 * Prefira usar 'toBeGreaterThan' ao invés de 'not.toBeLessThan', para deixar o código de mais fácil compreensão.
 * Para valores iguais utilize o 'toEqual'.
 */

describe("matchers-comparadores toBeLessThan", function() {

  const PI = 3.1415;
  var numero = 2;

  it("Deve validar o uso do Matcher toBeLessThan", function(){
    expect(numero).toBeLessThan(PI);
    expect("1.2").toBeLessThan(PI);
    expect(5).not.toBeLessThan(PI);
    expect(PI).not.toBeLessThan(PI);

    expect(3).toBeLessThan(PI);
    expect(3.5).not.toBeLessThan(PI);

    //expect(3.5).toBeLessThan(PI);//para dar erro no teste

  });
});
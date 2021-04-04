/**
 * @description Expectations:
 * Verificações servem para validar um resultado de um teste.
 * A função global pra isso se chama 'expect' que recebe como parametro um argumento que é o resultado a ser verificado.
 * "expect" deve ser utilizado cem conjunto com uma comparação (Matcher), que conterá o valor a ser comparado.
 * Uma Spec poderá conter uma ou mais verificações
 * Uma boa pratica é sempre manter as verificações no final da função
 */
describe("Expect", function() {
  it("Deve Garantir que 1+1 é 2", function(){
    expect(1+1).toBe(2);
    //expect(1+1).toBe(3); //testar mensagem de erro: comente a linha de cima e execute esta debaixo.
  });
});

/**
 * @description beforeAll
 * Função javascript global do Jasmine que é executada uma única vez antes da execução dos testes.
 * Por ser executada antes de todos os testes, serve para inicializar um status, criar objetos.
 *
 */

describe("before-after beforeAll", function() {

  var contador = 0;

  beforeAll(function(){
    contador = 10;
  })

  beforeEach(function(){
    contador++;
  });

  it("Deve garantir o valor 11 para o contador", function(){
    expect(contador).toEqual(11);
  });

  it("Deve garantir o valor 12 para o contador", function(){
    expect(contador).toEqual(12);
    //expect(contador).toEqual(9); // exemplo de erro
  });


});
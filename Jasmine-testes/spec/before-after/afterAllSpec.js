/**
 * @description afterAll
 * Função javascript global do Jasmine que é executada uma única vez depois da execução dos testes.
 * Por ser executada depois de todos os testes, serve para limpar algum status global.
 *
 */

describe("before-after afterAll", function() {

  var contador;

   beforeAll(function(){
    contador = 10;
  })

  afterAll(function(){
    contador = 0;
  })

  it("Deve exibir o contador com valor 10", function(){
    expect(contador).toEqual(10);
  });

  it("Deve manter o contador com valor 10", function(){
    expect(contador).toEqual(10);
    //expect(contador).toEqual(9); // exemplo de erro
  });


});
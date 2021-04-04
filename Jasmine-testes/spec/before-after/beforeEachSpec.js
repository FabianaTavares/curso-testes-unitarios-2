/**
 * @description beforeEach
 * Função javascript global do Jasmine que é executada antes de cada teste
 * Por ser executada antes de cada teste, serve para inicializar ou reiniciar um status.
 * Pode também executar uma ação antes de cada teste.
 */

describe("before-after BeforeEach", function() {

  var contador = 0;

  beforeEach(function(){
    contador++;
  })

  it("Deve exibir o contador com valor 1", function(){
    //expect(contador).toEqual(1);
  });

  it("Deve exibir o contador com valor 2", function(){
    //expect(contador).toEqual(2);
  });


});
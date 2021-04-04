/**
 * @description afterEach
 * Função javascript global do Jasmine que é executada depois de cada teste
 * Por ser executada depois de cada teste, serve para reiniciar um status.
 * Pode também executar uma ação depois de cada teste.
 */

describe("before-after afterEach", function() {

  var contador = 0;

  beforeEach(function(){
    contador++;
  })

  afterEach(function(){
    contador = 0;
  })

  it("Deve exibir o contador com valor 1", function(){
    expect(contador).toEqual(1);
  });

  it("Deve continuar exibindo o contador com valor 1", function(){
    expect(contador).toEqual(1);
  });


});
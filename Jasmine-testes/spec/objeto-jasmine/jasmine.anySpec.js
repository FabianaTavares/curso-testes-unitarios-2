/**
 * @description jasmine.any
 * jasmine.any: serve para verificar se um valor é de um determinado tipo.
 * Pode ser usado para comparar valores reais ou valores utilizados em spies.
 * Em spies é muito util quando deseja verificar se um método foi chamado com um argumento de determinado ipo, sem se importar com seu valor real.
 */

describe("Spies-mocks jasmine.any", function() {

  var somar;

  beforeEach(function(){
    somar = jasmine.createSpy("somar");
  });

  it ("deve validar o uso do jasmine.any", function(){
   somar(1, 9);
    expect(somar).toHaveBeenCalledWith(
      jasmine.any(Number), jasmine.any(Number)
    );
    expect({}).toEqual(jasmine.any(Object));
    expect("Texto").toEqual(jasmine.any(String));
  });

});
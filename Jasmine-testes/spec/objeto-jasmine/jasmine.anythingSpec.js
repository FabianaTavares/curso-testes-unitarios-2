/**
 * @description jasmine.anything
 * jasmine.anything: Serve para verificar se um objeto ou variável é diferente de "null" ou "undefined".
 * Ele é muito similar ao "jasmine.any", com a diferença de que ele não verifica o tipo do objeto ou variavel.
 * Pode ser utilizado em spies para certificar que um valor foi passado como parametro.
 */

describe("Spies-mocks jasmine.anything", function() {

  var somar;

  beforeEach(function(){
    somar = jasmine.createSpy("somar");
  });

  it ("deve validar o uso do jasmine.anything", function(){
    somar(1, 9);
    expect(somar).toHaveBeenCalledWith(
      jasmine.anything(), jasmine.anything()
    );
    expect({}).toEqual(jasmine.anything());
  });

});
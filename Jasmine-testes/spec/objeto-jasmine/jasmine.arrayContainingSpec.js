/**
 * @description jasmine.arrayContaining
 * jasmine.arrayContaining: Serve para verificar se determinados valores existem em um array.
 * Ele recebe como parametro um array com os valores a serem verificados.
 */

describe("Spies-mocks jasmine.arrayContaining", function() {

  var numeros;

  beforeEach(function(){
    numeros = [1,2,3,5,7,11];

  });

  it ("deve validar o uso do jasmine.arrayContaining", function(){
    expect(numeros).toEqual( jasmine.arrayContaining([1, 3, 5]) );
    expect(numeros).toEqual( jasmine.arrayContaining([11]) );
    expect(numeros).not.toEqual( jasmine.arrayContaining([1,4]) );
  });

});
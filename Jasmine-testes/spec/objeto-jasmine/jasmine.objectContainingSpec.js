/**
 * @description jasmine.objectContaining
 * jasmine.objectContaining: Serve para verificar se determinada entrada (chave ou valor) existe em um objeto.
 * Ele recebe como parametro o bloco a ser verificado em um objeto.
 */

describe("Spies-mocks jasmine.objectContaining", function() {

  var carro;

  beforeEach(function(){
    carro = {
      'movido': 'gasolina',
      'ano': 2016
    }
  });

  it ("deve validar o uso do jasmine.objectContaining", function(){
    expect(carro).toEqual( jasmine.objectContaining({ 'movido': 'gasolina' }) );
    expect(carro).toEqual( jasmine.objectContaining({ 'ano': 2016 }) );
    expect(carro).not.toEqual( jasmine.objectContaining({ 'portas': 5 }) );
  });

});
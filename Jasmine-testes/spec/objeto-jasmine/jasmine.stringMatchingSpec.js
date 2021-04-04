/**
 * @description jasmine.stringMatching
 * jasmine.stringMatching: Serve para verificar por uma porção de texto dentro de uma string.
 * Ele suporta o uso de expressões regulares.
 * Também pode ser utilizado com spies.
 * Recebe como parametro a porção de texto ou expressão regular utilizada no teste.
 */

describe("Spies-mocks jasmine.stringMatching", function() {

  var exibirTexto;

  beforeEach(function(){
    exibirTexto = jasmine.createSpy("exibirTexto");

  });

  it ("deve validar o uso do jasmine.stringMatching", function(){
    exibirTexto("Fulano de Tal");
    expect(exibirTexto).toHaveBeenCalledWith(jasmine.stringMatching("Fulano"));
    expect({ 'tipo': 'gasolina' }).toEqual({ 'tipo': jasmine.stringMatching('gasolina') });
    expect("Fulano de Tal").toEqual(jasmine.stringMatching(/^fulano/i));
  });

});
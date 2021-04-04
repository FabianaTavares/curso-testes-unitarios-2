/**
 * @description calls.any
 * calls.any: Todo spy possui um atributo "calls" com informações sobre suas chamadas.
 * O "calls.any" serve para indicar se o método do spy foi chamada ao menos uma vez.
 * Ele não recebe parametros e retorna um valor booleano se ocorreu ou não uma chamada ao método do spy.
 */

describe("Spies-mocks calls.any", function() {

  var calculadora = {
    somar: function(n1, n2){
      return n1 + n2;
    }
  };

  beforeEach(function(){
    spyOn(calculadora, "somar");
  });

  it ("deve validar o uso do calls.any", function(){
    expect(calculadora.somar.calls.any()).toBeFalsy();
    calculadora.somar(1, 1);
    expect(calculadora.somar.calls.any()).toBeTruthy();
  });

});
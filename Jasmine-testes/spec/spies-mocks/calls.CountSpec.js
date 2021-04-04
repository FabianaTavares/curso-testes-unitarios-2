/**
 * @description calls.count
 * calls.count: armazena e retorna o número de vezes que um método do spy foi chamado.
 * Ele não possui parametros e retorna o numero de chamadas do metodo.
 */

describe("Spies-mocks calls.count", function() {

  var calculadora = {
    somar: function(n1, n2){
      return n1 + n2;
    }
  };

  beforeEach(function(){
    spyOn(calculadora, "somar");
  });

  it ("deve demonstrar o uso do calls.count", function(){
    calculadora.somar(1, 1);
    calculadora.somar(2, 2);
    expect(calculadora.somar.calls.count()).toEqual(2);
  });

});
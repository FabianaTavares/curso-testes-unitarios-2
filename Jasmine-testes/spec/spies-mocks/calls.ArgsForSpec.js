/**
 * @description calls.argsFor
 * calls.argsFor: armazena e retorna uma lista(array) contendo os parametros utilizados em cada chamada do método de um spy.
 * Ele recebe como parametro o indice da chamada a ser retornada.
 * É bastante útil para validar se um método foi chamado com os parametros corretos.
 */

describe("Spies-mocks calls.argsFor", function() {

  var calculadora = {
    somar: function(n1, n2){
      return n1 + n2;
    }
  };

  beforeEach(function(){
    spyOn(calculadora, "somar");
  });

  it ("deve demonstrar o uso do calls.argsFor", function(){
    calculadora.somar(1, 1);
    calculadora.somar(2, 2);
    expect(calculadora.somar.calls.argsFor(0)).toEqual([1, 1]);
    expect(calculadora.somar.calls.argsFor(1)).toEqual([2, 2]);

  });

});
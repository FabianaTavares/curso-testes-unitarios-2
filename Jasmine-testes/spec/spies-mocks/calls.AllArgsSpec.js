/**
 * @description calls.allArgs
 * calls.allArgs: retorna uma lista(array) com todos os argumentos de todas as chamadas aos métodos de um spy
 * Ele não recebe nenhum argumento como parâmetro.
 * Prefira utilizar o "calls.argsFor" quando precisar verificar um item em especifico.
 */

describe("Spies-mocks calls.allArgs", function() {

  var calculadora = {
    somar: function(n1, n2){
      return n1 + n2;
    }
  };

  beforeEach(function(){
    spyOn(calculadora, "somar");
  });

  it ("deve demonstrar o uso do calls.allArgs", function(){
    calculadora.somar(1, 1);
    calculadora.somar(2, 2);
    expect(calculadora.somar.calls.allArgs()).toEqual([ [1, 1], [2, 2] ]);

  });

});
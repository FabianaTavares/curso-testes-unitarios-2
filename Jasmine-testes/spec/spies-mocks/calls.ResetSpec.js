/**
 * @description calls.reset
 * calls.reset: serve para limpar a lista com os dados das chamadas dos métodos de um spy.
 * Pode ser util quando tiver suítes aninhadas ou mesmo precisar restaurar o valor padrão das chamadas
 */

describe("Spies-mocks calls.reset", function() {

  var calculadora = {
    somar: function(n1, n2){
      return n1 + n2;
    }
  };

  beforeEach(function(){
    spyOn(calculadora, "somar");
  });

  it ("deve demonstrar o uso do calls.reset", function(){
    calculadora.somar(1, 1);
    expect(calculadora.somar.calls.any()).toBeTruthy();
    calculadora.somar.calls.reset();
    expect(calculadora.somar.calls.any()).toBeFalsy();
  });

});
/**
 * @description and.throwError
 * and.throwError serve para informar ao spy que determinado metodo deve lançar um erro ao ser executado.
 * and.throwError deve ser aplicado ao objeto spy.
 * and.throwError recebe como parametro uma string contendo a mensagem de erro a ser lançada.
 */

describe("Spies-mocks and.throwError", function() {

  var msg = "valores inválidos."; // é melhor escrever uma variavel pois o teste não aceita valores diferentes dentro de throwError

  var calculadora = {
    somar: function(n1, n2){
      return n1 + n2;
    }
  };

  beforeEach(function(){
    spyOn(calculadora, "somar").and.throwError(msg);
  });

  it ("deve validar o uso do and.throwError", function(){
    expect(function(){
      calculadora.somar(5, 2);
    }).toThrowError(msg);
    expect(calculadora.somar).toHaveBeenCalled();
  });

});
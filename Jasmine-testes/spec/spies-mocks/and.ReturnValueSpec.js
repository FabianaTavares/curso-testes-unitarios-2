/**
 * @description and.returnValue
 * and.returnValue serve para informar ao spy o valor de retorno de determinado metodo.
 * and.returnValue deve ser aplicado ao objeto spy
 */

describe("Spies-mocks and.returnValue", function() {

  var calculadora = {
    somar: function(n1, n2){
      return n1 + n2;
    }
  };

  beforeEach(function(){
    spyOn(calculadora, "somar").and.returnValue(10);
  });

  it ("deve validar o uso do and.returnValue", function(){
    expect(calculadora.somar(5, 2)).toEqual(10);
    expect(calculadora.somar).toHaveBeenCalled();
  });

});
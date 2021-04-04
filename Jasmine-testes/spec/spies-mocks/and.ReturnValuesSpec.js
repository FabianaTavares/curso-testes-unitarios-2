/**
 * @description and.returnValues
 * and.returnValues serve para informar ao spy quais os valores a serem retornados por chamada.
 * and.returnValues aceita como parametro um ou mais valores, separados por virgula.
 * Se o numero de chamadas for maior do que o de valores a serem retornados, será retornado "undefined".
 * and.returnValues deve ser aplicado ao objeto spy.
 */

describe("Spies-mocks and.returnValues", function() {

  var calculadora = {
    somar: function(n1, n2){
      return n1 + n2;
    }
  };

  beforeEach(function(){
    spyOn(calculadora, "somar").and.returnValues(10, 20);
  });

  it ("deve retoarna valores distintos para o metodo somar, and.returnValues", function(){
    expect(calculadora.somar(5, 2)).toEqual(10);
    expect(calculadora.somar(5, 2)).toEqual(20);
    expect(calculadora.somar(5, 2)).toBeUndefined();
    expect(calculadora.somar).toHaveBeenCalledTimes(3);
  });

});
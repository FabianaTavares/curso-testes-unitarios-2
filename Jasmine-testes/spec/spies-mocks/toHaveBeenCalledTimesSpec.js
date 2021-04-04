/**
 * @description toHaveBeenCalledTimes
 * toHaveBeenCalledTimes serve para verificar quantas vezes um método do spy foi chamado.
 * toHaveBeenCalledTimes recebe como parametro o numero de execuções a ser verificado.
 */

describe("Spies-mocks toHaveBeenCalledTimes", function() {

  var calculadora = {
    somar: function(n1, n2){
      return n1 + n2;
    }
  };

  beforeEach(function(){
    spyOn(calculadora, "somar");
  });

  it ("deve validar o uso do toHaveBeenCalledTimes", function(){
    calculadora.somar(1, 1);
    calculadora.somar(2, 2);
    expect(calculadora.somar).toHaveBeenCalledTimes(2);
  });

});
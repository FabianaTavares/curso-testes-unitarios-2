/**
 * @description toHaveBeenCalledWith
 * toHaveBeenCalledWith serve para verificar quais parametros do método do spy foi chamado.
 * toHaveBeenCalledWith recebe como parametro os valores de chamado do método do spy, separados por virgula.
 */

describe("Spies-mocks toHaveBeenCalledWith", function() {

  var calculadora = {
    somar: function(n1, n2){
      return n1 + n2;
    }
  };

  beforeEach(function(){
    spyOn(calculadora, "somar");
  });

  it ("deve validar o uso do toHaveBeenCalledWith", function(){
    calculadora.somar(1, 1);
    calculadora.somar(2, 2);
    expect(calculadora.somar).toHaveBeenCalledWith(1, 1);
    expect(calculadora.somar).toHaveBeenCalledWith(2, 2);
  });

});
/**
 * @description toHaveBeenCalled
 * toHaveBeenCalled serve para informar se um método do spy foi executado ao menos uma vez.
 * toHaveBeenCalled não possui parametros.
 */

describe("Spies-mocks toHaveBeenCalled", function() {

  var calculadora = {
    somar: function(n1, n2){
      return n1 + n2;
    }
  };

  beforeEach(function(){
    spyOn(calculadora, "somar");
  });

  it ("deve validar o uso do toHaveBeenCalled", function(){
    calculadora.somar(1, 1);
    expect(calculadora.somar).toHaveBeenCalled();
  });

});
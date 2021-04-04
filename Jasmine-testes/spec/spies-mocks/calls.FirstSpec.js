/**
 * @description calls.first
 * calls.first: retorna os dados da primeira chamada do metodo do spy.
 * seria o mesmo que acessar o primeiro elemento (posicao 0) da lista contida em calls.all
 */

describe("Spies-mocks calls.first", function() {

  var calculadora = {
    somar: function(n1, n2){
      return n1 + n2;
    }
  };

  beforeEach(function(){
    spyOn(calculadora, "somar");
  });

  it ("deve demonstrar o uso do calls.first", function(){
    calculadora.somar(1, 1);
    calculadora.somar(2, 3);
    var retorno = calculadora.somar.calls.first();
    expect(retorno.object).toEqual(calculadora);
    expect(retorno.args).toEqual([1, 1]);
    expect(retorno.returnValue).toBeUndefined();
  });

});
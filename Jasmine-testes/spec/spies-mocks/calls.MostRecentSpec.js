/**
 * @description calls.mostRecent
 * calls.mostRecent: retorna os dados da ultima chamada do metodo do spy.
 * seria o mesmo que acessar o ultimo elemento (qtd itens - 1) da lista contida em calls.all
 */

describe("Spies-mocks calls.mostRecent", function() {

  var calculadora = {
    somar: function(n1, n2){
      return n1 + n2;
    }
  };

  beforeEach(function(){
    spyOn(calculadora, "somar");
  });

  it ("deve demonstrar o uso do calls.mostRecent", function(){
    calculadora.somar(1, 1);
    calculadora.somar(2, 3);
    var retorno = calculadora.somar.calls.mostRecent();
    expect(retorno.object).toEqual(calculadora);
    expect(retorno.args).toEqual([2, 3]);
    expect(retorno.returnValue).toBeUndefined();
  });

});
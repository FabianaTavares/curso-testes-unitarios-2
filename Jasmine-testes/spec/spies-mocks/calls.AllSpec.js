/**
 * @description calls.all
 * calls.all: contém e retorna todas as informaç~eos de chamadas de um método do spy.
 * As informações armazenadas são o tipo de objeto (object), os parametros de chamada (args), e os valores de retorno (returnValue).
 * Os itens acima são agrupados em uma lista, e são referenciados por número de chamada.
 */

describe("Spies-mocks calls.all", function() {

  var calculadora = {
    somar: function(n1, n2){
      return n1 + n2;
    }
  };

  beforeEach(function(){
    spyOn(calculadora, "somar");
  });

  it ("deve demonstrar o uso do calls.all", function(){
    calculadora.somar(1, 1);
    var retorno = calculadora.somar.calls.all();
    expect(retorno[0].object).toEqual(calculadora);
    expect(retorno[0].args).toEqual([1, 1]);
    expect(retorno[0].returnValue).toBeUndefined();
  });

});
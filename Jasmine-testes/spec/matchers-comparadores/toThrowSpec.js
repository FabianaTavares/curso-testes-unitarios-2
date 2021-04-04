/**
 * @description toThrow
 * Verifica se uma exceção é lançada por um método.
 * Não realiza a validação em detalhe o tipo da exceção lançada, apenas certifica que um erro ocorreu na execução da função.
 * Deve ser utilizada quando deseja apenas certificar que um erro ocorreu, sem se preocupar com detalhes como tipo ou mensagem de erro.
 */

describe("matchers-comparadores Validação do toThrow", function() {

  var comErro = function(){
    return numero * 10;
  };

  var semErro = function(numero){
    return numero * 10;
  };

  it("Deve validar o uso do Matcher toThrow", function(){
    expect(comErro).toThrow();
    expect(semErro).not.toThrow();

    function multiplicar(){
      numero * 10;
    }

    function somar(n1, n2){
      return n1 + n2;
    }

    expect(multiplicar).toThrow();
    expect(somar).not.toThrow();


  });

});
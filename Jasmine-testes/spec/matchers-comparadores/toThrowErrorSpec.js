/**
 * @description toThrowErrorError
 * Verifica se uma exceção é lançada por um método.
 * Valida o tipo de exceção lançada.
 * Valida a mensagem de erro contida na exceção
 * Suporta expressão regular na validação da mensagem de erro da exceção
 * Deve ser utilizada para maior controle do erro lançado.
 */

describe("matchers-comparadores Validação do toThrowError", function() {
  //Testes 1
  var calcularDobro = function(numero){
    if(numero <= 0){
      throw new TypeError("O número deve ser maior que 0.");
    }
    return numero * numero;
  };

  it("Deve validar o uso do Matcher toThrowError", function(){
    expect(function(){ calcularDobro(0) }).toThrowError();
    expect(function(){ calcularDobro(0) }).toThrowError("O número deve ser maior que 0.");
    expect(function(){ calcularDobro(0) }).toThrowError(/maior que 0/);
    expect(function(){ calcularDobro(0) }).toThrowError(TypeError);
    expect(function(){ calcularDobro(0) }).toThrowError(TypeError, "O número deve ser maior que 0.");
    expect(calcularDobro).not.toThrowError();

    //Testes 2
    var somar = function(n1, n2){
      if(n1 <= 0 || n2 <= 0){
        throw new TypeError("Deve ser maior que 0");
      }
      return n1+n2;
    }
    expect(function(){ somar(0, 0) }).toThrowError();
    expect(function(){ somar(0, 0) }).toThrowError('Deve ser maior que 0');
    expect(function(){ somar(0, 0) }).toThrowError(/maior que 0/);
    expect(function(){ somar(0, 0) }).toThrowError(TypeError);
    expect(function(){ somar(0, 0) }).toThrowError(TypeError, "Deve ser maior que 0");
    expect(calcularDobro).not.toThrowError();

  });

});
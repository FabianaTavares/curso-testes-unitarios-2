/**
 * @description toContain
 * Realiza a busca por determinado item em um array
 * também pode ser utilizado para buscar uma substring dentro de uma string
 * Não suporta busca por expressões regulares.
 */

describe("matchers-comparadores toContain", function() {

  var nomes = ["Fulano", "Ciclano", "Beltrano"];
  var nomesTexto = "Fulano Ciclano Beltrano";

  it("Deve validar o uso do Matcher toContain", function(){
    expect(nomes).toContain("Ciclano");
    expect(nomesTexto).toContain("Fulano");
    expect(nomesTexto).toContain("Bel");
    expect(nomes).not.toContain("Maria");

    //expect(nomes).not.toContain("Ciclano"); //exemplo que pode dar erro aqui.

    var texto = "Meu nome é Marcio";
    var frutas = ["laranja", "banana", "pera"];

    expect(texto).toContain("Marcio");
    expect(texto).not.toContain("marcio");

    expect(frutas).toContain("laranja");
    expect(frutas).not.toContain("uva");

  });
});
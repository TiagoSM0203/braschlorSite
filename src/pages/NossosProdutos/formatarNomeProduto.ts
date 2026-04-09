const palavrasMinusculas = new Set([
  "a",
  "ao",
  "aos",
  "as",
  "à",
  "às",
  "com",
  "da",
  "das",
  "de",
  "do",
  "dos",
  "e",
  "em",
  "na",
  "nas",
  "no",
  "nos",
  "o",
  "os",
  "para",
  "por",
  "sem",
  "sob",
]);

const formatarPalavra = (palavra: string, indicePalavra: number) => {
  const palavraMinuscula = palavra.toLocaleLowerCase("pt-BR");
  const ehSigla =
    palavra.length > 1 &&
    palavra === palavra.toLocaleUpperCase("pt-BR") &&
    /\p{L}/u.test(palavra);

  if (ehSigla) {
    return palavra;
  }

  if (indicePalavra > 0 && palavrasMinusculas.has(palavraMinuscula)) {
    return palavraMinuscula;
  }

  return (
    palavraMinuscula.charAt(0).toLocaleUpperCase("pt-BR") +
    palavraMinuscula.slice(1)
  );
};

export const formatarNomeProduto = (nome: string) => {
  let indicePalavra = 0;

  return nome.replace(/\p{L}+/gu, (palavra) => {
    const palavraFormatada = formatarPalavra(palavra, indicePalavra);

    indicePalavra += 1;

    return palavraFormatada;
  });
};

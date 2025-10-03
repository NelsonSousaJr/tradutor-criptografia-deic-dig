function encryptKeywordCipher(text, keyword) {
  if (!keyword) return "Erro: palavra-chave necessária!";
  // Remove caracteres que não são letras do alfabeto latino (A-Z, a-z) e mantém espaços e caracteres especiais
  // Convertendo para maiúsculas para o cálculo da cifra, mas mantendo o original para a saída
  const originalText = text;
  text = text.toUpperCase().replace(/[^A-ZÇÃÕÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÄËÏÖÜÀ-ſ\s.,!?;:]/g, ""); // Adicionado suporte a caracteres acentuados e pontuação
  keyword = keyword.toUpperCase().replace(/[^A-Z]/g, "");

  if (keyword.length === 0) return "Erro: palavra-chave inválida!";

  let result = "";
  let keywordIndex = 0;

  for (let i = 0; i < originalText.length; i++) {
    const originalChar = originalText[i];
    const upperChar = originalChar.toUpperCase();

    // Verifica se o caractere é uma letra do alfabeto (incluindo acentuadas)
    if (upperChar >= 'A' && upperChar <= 'Z' || 'ÇÃÕÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÄËÏÖÜ'.includes(upperChar)) {
      const tChar = upperChar.charCodeAt(0) - 65;
      const kChar = keyword.charCodeAt(keywordIndex % keyword.length) - 65;
      const enc = (tChar + kChar) % 26;
      result += String.fromCharCode(enc + 65);
      keywordIndex++;
    } else {
      // Mantém espaços e caracteres especiais inalterados
      result += originalChar;
    }
  }
  return result;
}

function decryptKeywordCipher(text, keyword) {
  if (!keyword) return "Erro: palavra-chave necessária!";
  // Remove caracteres que não são letras do alfabeto latino (A-Z, a-z) e mantém espaços e caracteres especiais
  // Convertendo para maiúsculas para o cálculo da cifra, mas mantendo o original para a saída
  const originalText = text;
  text = text.toUpperCase().replace(/[^A-ZÇÃÕÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÄËÏÖÜ\s.,!?;:]/g, ""); // Adicionado suporte a caracteres acentuados e pontuação
  keyword = keyword.toUpperCase().replace(/[^A-Z]/g, "");

  if (keyword.length === 0) return "Erro: palavra-chave inválida!";

  let result = "";
  let keywordIndex = 0;

  for (let i = 0; i < originalText.length; i++) {
    const originalChar = originalText[i];
    const upperChar = originalChar.toUpperCase();

    // Verifica se o caractere é uma letra do alfabeto (incluindo acentuadas)
    if (upperChar >= 'A' && upperChar <= 'Z' || 'ÇÃÕÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÄËÏÖÜ'.includes(upperChar)) {
      const tChar = upperChar.charCodeAt(0) - 65;
      const kChar = keyword.charCodeAt(keywordIndex % keyword.length) - 65;
      const dec = (tChar - kChar + 26) % 26;
      result += String.fromCharCode(dec + 65);
      keywordIndex++;
    } else {
      // Mantém espaços e caracteres especiais inalterados
      result += originalChar;
    }
  }
  return result;

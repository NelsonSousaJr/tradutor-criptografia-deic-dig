function encryptKeywordCipher(text, keyword) {
  if (!keyword || keyword.trim() === ") return ""; // Retorna string vazia para palavra-chave ausente

  const originalText = text;
  // A palavra-chave deve ser limpa de caracteres não alfabéticos para o cálculo da cifra
  // Mantemos apenas A-Z para a palavra-chave, pois ela define o shift da cifra de Vigenère
  const cleanKeyword = keyword.toUpperCase().replace(/[^A-Z]/g, ");

  if (cleanKeyword.length === 0) return ""; // Retorna string vazia se a palavra-chave limpa for inválida

  let result = "";
  let keywordIndex = 0;

  for (let i = 0; i < originalText.length; i++) {
    const originalChar = originalText[i];
    const upperChar = originalChar.toUpperCase();

    // Mapeamento de caracteres acentuados para suas versões não acentuadas para o cálculo da cifra
    const charMap = {
      'Á': 'A', 'À': 'A', 'Â': 'A', 'Ã': 'A', 'Ä': 'A',
      'É': 'E', 'È': 'E', 'Ê': 'E', 'Ë': 'E',
      'Í': 'I', 'Ì': 'I', 'Î': 'I', 'Ï': 'I',
      'Ó': 'O', 'Ò': 'O', 'Ô': 'O', 'Õ': 'O', 'Ö': 'O',
      'Ú': 'U', 'Ù': 'U', 'Û': 'U', 'Ü': 'U',
      'Ç': 'C'
    };

    const charForCipher = charMap[upperChar] || upperChar;

    if (charForCipher >= 'A' && charForCipher <= 'Z') {
      const tChar = charForCipher.charCodeAt(0) - 65;
      const kChar = cleanKeyword.charCodeAt(keywordIndex % cleanKeyword.length) - 65;
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
  if (!keyword || keyword.trim() === "") return "";

  const originalText = text;
  // A palavra-chave deve ser limpa de caracteres não alfabéticos para o cálculo da cifra
  // Mantemos apenas A-Z para a palavra-chave, pois ela define o shift da cifra de Vigenère
  const cleanKeyword = keyword.toUpperCase().replace(/[^A-Z]/g, "");

  if (cleanKeyword.length === 0) return ""; // Retorna string vazia se a palavra-chave limpa for inválida

  let result = "";
  let keywordIndex = 0;

  for (let i = 0; i < originalText.length; i++) {
    const originalChar = originalText[i];
    const upperChar = originalChar.toUpperCase();

    // Mapeamento de caracteres acentuados para suas versões não acentuadas para o cálculo da cifra
    const charMap = {
      'Á': 'A', 'À': 'A', 'Â': 'A', 'Ã': 'A', 'Ä': 'A',
      'É': 'E', 'È': 'E', 'Ê': 'E', 'Ë': 'E',
      'Í': 'I', 'Ì': 'I', 'Î': 'I', 'Ï': 'I',
      'Ó': 'O', 'Ò': 'O', 'Ô': 'O', 'Õ': 'O', 'Ö': 'O',
      'Ú': 'U', 'Ù': 'U', 'Û': 'U', 'Ü': 'U',
      'Ç': 'C'
    };

    const charForCipher = charMap[upperChar] || upperChar;

    if (charForCipher >= 'A' && charForCipher <= 'Z') {
      const tChar = charForCipher.charCodeAt(0) - 65;
      const kChar = cleanKeyword.charCodeAt(keywordIndex % cleanKeyword.length) - 65;
      const dec = (tChar - kChar + 26) % 26;
      result += String.fromCharCode(dec + 65);
      keywordIndex++;
    } else {
      // Mantém espaços e caracteres especiais inalterados
      result += originalChar;
    }
  }
  return result;
}

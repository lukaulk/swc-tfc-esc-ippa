export function AnalyzeString(text: string): string {
    // Remove espaços em branco extras e divide a string em partes separadas por espaço
    const words = text.trim().split(/\s+/);
    
    // Inicializa uma variável para armazenar os caracteres analisados
    let analyzedChars = "";
    
    // Itera sobre as palavras
    for (const word of words) {
      // Verifica se a palavra tem pelo menos 2 caracteres
      if (word.length >= 2) {
        // Concatena os dois primeiros caracteres da palavra, capitalizados
        analyzedChars += word.substring(0, 2).toUpperCase();
      } else if (word.length === 1) {
        // Se a palavra tiver apenas um caractere, concatena o caractere capitalizado
        analyzedChars += word.toUpperCase();
      }
      
      // Verifica se a string analisada já tem pelo menos 2 caracteres
      if (analyzedChars.length >= 2) {
        break; // Sai do loop se já tiver pelo menos 2 caracteres
      }
    }
    
    return analyzedChars;
  }
export function Capitalize(text: string): string {
    if (!text) {
      return "";
    }
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }  
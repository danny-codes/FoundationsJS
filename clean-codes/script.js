let thisValue = camelCase;

const ONE_HOUR = 60 * 60;

setTimeout(stopTimer, ONE_HOUR);

function extractTextWithinBrackets(text){
    const bracketTextStart = text.indexOf('[') + 1;
    const bracketTextEnd = text.indexOf(']') + 1;
    return text.substring(bracketTextStart, bracketTextEnd);

}
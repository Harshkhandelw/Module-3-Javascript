function TwoCharacter(text) {
    const letters = text.match(/[a-z]/gi) || [];

    return letters.length >= 2;
}
function thereconsective(text) {
     for (const character of text) {
        const occurrences = Array.from(text).filter(v => v == character).length;

        if (occurrences >= 3) {
            return false;
        }
     }
    return true;    
}
const checks = [TwoCharacter,thereconsective];
const textinput = document.querySelector(".text");
const wordcountElement = document.querySelector(".word-counter");
const lettercountElement = document.querySelector(".letter-counter");
const SpacecounElement = document.querySelector(".space-counter");

textinput.addEventListener("input", () => {
    const splitted = textinput.value.trim().split(/[\s-]/);
    const letterCount = (textinput.value.match(/[a-z]/gi) || []).length;
    const spaceCount = (textinput.value.match(/\s+/g) || []).length;
    let wordCount = 0;

    outer:
    for (const text of splitted) {
        for (const check of checks) {
            if (!check(text)) {
                continue outer;
            }
        }
        wordCount++;
    }

    wordcountElement.textContent = wordCount;
    lettercountElement.textContent = letterCount;
    SpacecounElement.textContent = spaceCount;
});
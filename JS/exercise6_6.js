const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
}, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logicall irrefutable"
}, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

const descriptionList = document.createElement("dl");
descriptionList.id = "descList";
document.getElementById("content").appendChild(descriptionList);

words.forEach(word => {
  const wordTerm = document.createElement("dt");
  wordTerm.id = "Term";
  wordTerm.textContent = `${word.term}`;
  console.log(wordTerm);

  const wordDefinition = document.createElement("dd");
  wordDefinition.id = "Definition";
  wordDefinition.textContent = `${word.definition}`;
  console.log(wordDefinition);

  document.getElementById("descList").appendChild(wordTerm);
  document.getElementById("descList").appendChild(wordDefinition);
})

console.log(document.body.innerHTML);

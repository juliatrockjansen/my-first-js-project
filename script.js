const enToDa = {
  "hello": "hej",
  "hi": "hej",
  "goodbye": "farvel",
  "bye": "farvel",
  "please": "venligst",
  "thank you": "tak",
  "thanks": "tak",
  "cat": "kat",
  "dog": "hund",
  "coffee": "kaffe",
  "tea": "te",
  "water": "vand",
  "bread": "brød",
  "cheese": "ost"
};

const daToEn = Object.fromEntries(
  Object.entries(enToDa).map(([en, da]) => [da, en])
);

function normalize(s) {
  return (s || "").toLowerCase().trim();
}

function translateWord(text, direction) {
  const t = normalize(text);

  if (!t) return "Please type a word 🙂";

  if (direction === "en-da") {
    return enToDa[t] || `No match for "${text}" (try another word)`;
  } else {
    return daToEn[t] || `Ingen oversættelse for "${text}" (prøv et andet ord)`;
  }
}
function wireUpUI() {
  const input = document.getElementById("text");
  const dir = document.getElementById("direction");
  const btn = document.getElementById("btn");
  const result = document.getElementById("result");

  function run() {
    const out = translateWord(input.value, dir.value);
    result.textContent = out;
  }

  btn.addEventListener("click", run);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") run();
  });
}

document.addEventListener("DOMContentLoaded", wireUpUI);

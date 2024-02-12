const textarea = document.getElementById('editor');
const numbers = document.getElementById("numbers");
const startScript = 'function main(name) {\n\n  return key;\n}\n\nmain(name);';

textarea.addEventListener("keyup", (e) => {
  const num = e.target.value.split("\n").length;
  numbers.innerHTML = Array(num).fill("<span></span>").join("");
  
});

textarea.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    textarea.value =
      textarea.value.substring(0, start) +
      "\t" +
      textarea.value.substring(end);
    event.preventDefault();
  }
});

textarea.innerHTML = startScript;

document.getElementById('run').addEventListener('click', () => {
  eval(textarea);
  document.getElementById('keys').innerHTML += key+'\n';
});

document.getElementById('delete').addEventListener('click', () => {
  textarea.value = startScript;
});

document.getElementById("validation").addEventListener('keydown', (event) => {
  if(event.key === 'Enter') {
    event.preventDefault();
    validate();
  }
});

document.getElementById('refresh').addEventListener('click', () => {
  if (chances == 0) {
    document.getElementById('reveal').innerHTML = '';
    chances = 6;
    document.getElementById('refresh').innerHTML = '6 &#xE72E;';
    encrypt();
  }
  else return;
})
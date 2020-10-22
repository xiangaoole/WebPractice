var section = document.querySelector("section");
var editableCSS = document.querySelector(".editable-css");
var editableJS = document.querySelector(".editable-js");
var textareaHTML = document.querySelector(".playable-html");
var textareaCSS = document.querySelector(".playable-css");
var textareaJS = document.querySelector(".playable-js");
var reset = document.getElementById("reset");
var htmlCode = textareaHTML.value;
var cssCode = textareaCSS.value;
var jsCode = textareaJS.value;

function fillCode() {
  console.log("fillCode: ");
  editableCSS.innerHTML = textareaCSS.value;
  section.innerHTML = textareaHTML.value;
  editableJS.textContent = textareaJS.value;
  try {
    eval(editableJS.textContent);
  } catch (e) {
    section.innerHTML = " ";
    let para = document.createElement("p");
    para.textContent = e;
    section.appendChild(para);
  }
}

reset.addEventListener("click", function () {
  textareaHTML.value = htmlCode;
  textareaCSS.value = cssCode;
  textareaJS.value = jsCode;
  fillCode();
});

textareaHTML.addEventListener("input", fillCode);
textareaCSS.addEventListener("input", fillCode);
textareaJS.addEventListener('input', fillCode);
window.addEventListener("load", fillCode);

const textarea = document.querySelector(".text-area");
let wordCounter = document.getElementById("words");
let characterCounter = document.getElementById("characters");

textarea.addEventListener("input", function () {
    let textareaValue = this.value;
    characterCounter.value = textareaValue.length;

    textareaValue = textareaValue.trim();
    let arrayList = textareaValue.split(" ");
    let newArrayList = arrayList.filter(function (subString) {
        return subString != "";
    });
    wordCounter.value = newArrayList.length;
});

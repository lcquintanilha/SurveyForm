document.getElementById("buttonNext3").addEventListener("click", function(event) {
    var textareaContent = document.getElementById("page3txt1").value;
    if (textareaContent.trim() === "") {
        event.preventDefault();
        alert(`Please write something (or press "skip" if you don't have any history) to continue.`);
    }
});
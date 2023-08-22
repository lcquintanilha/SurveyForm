document.getElementById("buttonNext2").addEventListener("click", function(event) {
    if (!document.getElementById("page2Option1").checked &&
        !document.getElementById("page2Option2").checked &&
        !document.getElementById("page2Option3").checked &&
        !document.getElementById("page2Option4").checked) {
        event.preventDefault();
        alert("Please select at least one option.");
    }
});
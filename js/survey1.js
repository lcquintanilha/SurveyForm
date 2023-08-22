document.getElementById("buttonNext1").addEventListener("click", function(event) {
    if (!document.getElementById("page1Option1").checked &&
        !document.getElementById("page1Option2").checked &&
        !document.getElementById("page1Option3").checked &&
        !document.getElementById("page1Option4").checked &&
        !document.getElementById("page1Option5").checked) {
        event.preventDefault();
        alert("Please select at least one option.");
    }
});
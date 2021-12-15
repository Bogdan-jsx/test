input = document.getElementById("text-input")
button = document.getElementById("button")

button.onclick = () => {
    let text = input.value;
    input.value = "";
    alert(text);
}
let parent = document.getElementById('parent').innerText
document.getElementById('copyParent').addEventListener("click", function () {
    document.getElementById("text").innerHTML += parent;
})

let child = document.getElementById('child').innerText
document.getElementById('copyChild').addEventListener("click", function () {
    
    document.getElementById("text").innerText += child;
})
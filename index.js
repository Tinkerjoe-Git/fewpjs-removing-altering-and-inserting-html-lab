// Write your code here!
document.querySelector('main#main').remove()



let header = document.createElement("h1");
header.setAttribute("id", "victory");
document.body.appendChild(header)


let newHeader = document.querySelector('h1#victory');
newHeader.innerHTML = "Jean is the champion";




// HTML DOM Element appendChild()
// EXAMPLE 1
function myAppend1() {
    // Create an "li" node :
    const node = document.createElement("li");

    // Create a text node :
    const textNode = document.createTextNode("Water");

    // Append the text node to the "li" node:
    node.appendChild(textNode);

    // Append the "li" node to the list:
    document.getElementById("myList1").appendChild(node);
}


// EXAMPLE 2
function myAppend2() {
    const node = document.getElementById("myList3").lastElementChild;
    document.getElementById("myList2").appendChild(node);
}
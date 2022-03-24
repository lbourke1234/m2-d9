// 1) Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]

let genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]

// 2) Create an unordered list using JavaScript and save it in a variable

let uLNode = document.createElement('ul')

// 3) Cycle the array and create a list-item via JavaScript for every element
// 4) Insert the genere as text in the list-item
// 5) Append the list items in the unordered list


for (let i = 0; i < genres.length; i++) {
    let liNode = document.createElement('li')
    liNode.innerText = genres[i]
    // console.log(liNode)
    uLNode.appendChild(liNode)
}

// 6) Append the unordered list in the document. The list should appear in the page.

document.querySelector('body').appendChild(uLNode)

// ------------------------ Day 2 of Exercises -------------------------------------------------------------------------------------------------------------------------------------------------

// 1) Create two inputs for picking up colors in the page, and a button with "Apply Colors" as text
let colorPickerNode = document.createElement("input")
let colorPickerNode2 = document.createElement('input')
colorPickerNode.type = "color"
colorPickerNode2.type = "color"
// console.log(colorPickerNode)

let buttonNode = document.createElement('button')
buttonNode.innerText = "Apply Colors"
// console.log(buttonNode)

// 2) Grab all <li> in the page from the DOM, and save them in a variable called "listItems"
let listItems = document.querySelectorAll('li')

// 3) Grab the inputs references via DOM manipulation and save them in variables

let inputsNode = document.querySelectorAll('inputs')

// 4) Create a function and attach it to the "Apply Colors" button click event
// 5) Cycle listItems inside the function. Verify that the function and the loop work by logging in the console 
//     each item from the loop every time the button gets clicked

document.querySelector('body').appendChild(colorPickerNode)
document.querySelector('body').appendChild(colorPickerNode2)
document.querySelector('body').appendChild(buttonNode)


function applyColorsButtonEvent() {
    buttonNode.addEventListener('click', applyColorsButtonClick)
}
function applyColorsButtonClick() {
    for (let item of listItems) {
        console.log(item)
    }
}
applyColorsButtonEvent()




// 6) Move the inputs references in the function. Use the first input value as background-color for the item, and the second one for the text color.



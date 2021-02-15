/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
var paragraph = document.querySelectorAll('p')
console.log(paragraph)

//2. the first div element node

var firstDiv = document.querySelector('div')
console.log(firstDiv)
//3. the element with id "jumbotron-text"
let jumbotronDiv = document.getElementById('jumbotron-text');
console.log(jumbotronDiv);
//4. all the "p" elements of contained inside  the .primary-content element node

var primaryContentP = document.querySelectorAll('.primary-content p')
console.log(primaryContentP)
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

function greetings(){
    alert('Thanks for visiting Bikes for Refugees!')
}
function greetingsConsole(){
    console.log('Thanks for visiting Bikes for Refugees!')
}
var button = document.getElementById('alertBtn')
button.addEventListener("click", greetings)
button.addEventListener('click', greetings)
/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

function changeBackgroundColour(){
    let body = document.querySelector('body');
    body.style.backgroundColour = 'cyan';
}
var buttonChangeColour = document.getElementById('bgrChangeBtn')
buttonChangeColour.addEventListener('click', changeBackgroundColour)
/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
function addSometext(newText){
    var paragraph = document.createElement('p')
    paragraph.innerText = newText
 //  paragraph.innerText = "newText".toUpperCase()
    var article = document.createElement('article')
    article.classList.add('article')
    article.appendChild(paragraph)

    var learnMoreH2 = document.querySelector('#mainArticles')
    learnMoreH2.appendChild(article)
}
var newTextButton = document.querySelector('#addTextBtn')
newTextButton.addEventListener('click',addSometext)

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
function largerLinks(){
    var anchors = document.querySelectorAll('a[href]')
    anchors.forEach(
        anchor => {
            var fontSize = parseInt(anchor.style.fontSize)
            fontSize++
            anchor.style.fontSize=`${fontSize}em`
        }
    )
}
var largerLinksButton= document.querySelector('#largerLinksBtn')
largerLinksButton.addEventListener('click',largerLinks)
/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
function add(){
   var inputText = document.querySelector('#content input')
   var text =inputText.value
   addSometext(text)
    console.log(inputText.value)

}
var addButton = document.getElementById('addArticleBtn')
//addButton.addEventListener('click',add)
//validaciones



/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

var colores = [
    'cyan',
    'red',
    'white',
    'blue',
    'yellow'
]
function changeBackgroundColour(){
    let body = document.querySelector('body');
    var currentColour = body.style.backgroundColor
    var currentColourIndex = colores.indexOf(currentColour)
currentColourIndex++

if (currentColourIndex >= colores.length) {
    currentColourIndex = 0;

}
body.style.backgroundColor=colores[currentColourIndex];
}
var buttonChangeColour = document.getElementById('bgrChangeBtn')
buttonChangeColour.addEventListener('click', changeBackgroundColour)
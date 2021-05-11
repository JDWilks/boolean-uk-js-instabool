// write your code here

fetch("http://localhost:3000/images")
    .then(function (response){
        return response.json()   
    })
    .then(function (data){
       console.log("inside-fetch", data)
       renderPostCards(data)
    })

    function renderPostCards(posts){
    for (const post of posts){
        renderCard(post)
        console.log("inside-blah", post)
        }
    }

 


const instaImageCard = document.querySelector(".image-container")

function renderCard (post){

const imageCardEl = document.createElement("article")
imageCardEl.setAttribute("class", "image-card")

const titleEl = document.createElement("h2")
titleEl.innerText = post.title

const imgEl = document.createElement("img")
imgEl.setAttribute("src", post.image)
imgEl.setAttribute("class", "image")

const likesSectionEl = document.createElement("div")
likesSectionEl.setAttribute("class", "likes-section")

const spanEl = document.createElement("span")
spanEl.setAttribute("class", "likes")
spanEl.innerText = post.likes

const likeBttnEl = document.createElement("button")
likeBttnEl.setAttribute("class", "like-button")
likeBttnEl.innerText = "♥"

const unorderedListEl = document.createElement("ul")
unorderedListEl.setAttribute("class", "comments")

const list1El = document.createElement("li")
list1El.innerText = "Get rid of these comments"

const list2El = document.createElement("li")
list2El.innerText = "And replace them with the real ones"

const list3El = document.createElement("li")
list3El.innerText = "From the server"

const formEl = document.createElement("form")
formEl.setAttribute("class", "comment-form")

const inputEl = document.createElement("input")
inputEl.setAttribute("class", "comment-input")
inputEl.setAttribute("type", "text")
inputEl.setAttribute("name", "comment")
inputEl.setAttribute("placeholder", "Add a comment...")

const buttonSubmit = document.createElement("button")
buttonSubmit.setAttribute("class", "comment-button")
buttonSubmit.setAttribute("type", "submit")
buttonSubmit.innerText = "Post"


imageCardEl.append(titleEl, imgEl, likesSectionEl, unorderedListEl, formEl)

likesSectionEl.append(spanEl, likeBttnEl)
unorderedListEl.append(list1El,list2El,list3El)
formEl.append(inputEl, buttonSubmit)
instaImageCard.append(imageCardEl)
console.log(instaImageCard)

}





// *************************************************************************** // 



// js cheat sheet

// this finds an element in the html - it is the 'bridge' - its stored in a variable
// const dogListEl = document.querySelector(".dogs-list")

// this creates an element within JS (div / main / li / ul)
//const liEl = document.createElement ('li')

// this sets an attribute - in this case a class
//liEl.setAttribute("class", "dogs-list__button")

// this changes the text within an element
//liEl.innerText = "Mr Bonkers"

// this appends leEl to dogListEl (nests it)
// dogListEl.append(liEl)

// this addEventListener in the below adds a click and then function
// liEl.addEventListener("click", function(){
   // console.log(dog)

// this set attribure is syntax for images
//   imgEl.setAttribute("src", 
//"https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg")

// this removes all content from a specific part of the html
// mainDogSection.innerHTML = " "

// The conditional (ternary) operator is the only JavaScript operator that takes three operands: 
// a condition followed by a question mark (?), 
// then an expression to execute if the condition is truthy followed by a colon (:), 
// and finally the expression to execute if the condition is falsy. 
// This operator is frequently used as a shortcut for the if statement.
// below is an axample from above code
// dogNaughtyBtnEl.innerText = !dog.isGoodDog ? "Yes is a bad dog" : "No is a good dog"

// below is a link to all the events (we have used eventListener above) as seen below :
// dogNaughtyBtnEl.addEventListener("click" , function() {
// dog.isGoodDog = !dog.isGoodDog
// renderDogCard(dog)
// console.log("YESS!")
// })

// links:
// https://developer.mozilla.org/en-US/docs/Web/Events
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events



// *************************************************************************** // 

// json create sheet

// use fetch

// Promise / responce 

// .then in the responce

// 
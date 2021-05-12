// Nico's code i'm going to work through to understand...

// write your code here
const imageContainerEl = document.querySelector(".image-container");

// EXAMPLE OF BREAKING DOWN A FEATURE
// THE FEATURE: Add a comment
// THE STEPS:
// Listen to the form submission
// Stop the form from refreshing the page
// Create a comment object to send to the server
// Send the new comment to the server (POST)
// Display the new comment on the page when it comes back from the server

// create a single cards
function createSingleCard(imageData) {
  const articleEl = document.createElement("article");
  articleEl.setAttribute("class", "image-card");

  const h2El = document.createElement("h2");
  h2El.setAttribute("class", "title");
  h2El.innerText = imageData.title;

  const imageEl = document.createElement("img");
  imageEl.setAttribute("class", "image");
  imageEl.setAttribute("src", imageData.image);

  const likesSectionEl = document.createElement("div");
  likesSectionEl.setAttribute("class", "likes-section");

  const likesEl = document.createElement("span");
  likesEl.setAttribute("class", "likes");
  likesEl.innerText = `${imageData.likes} likes`;

  const likeBtn = document.createElement("button");
  likeBtn.setAttribute("class", "like-button");
  likeBtn.innerText = "♥";

  // listen for clicks on the heart button
  likeBtn.addEventListener("click", function () {
    // increase likes on object by 1
    imageData.likes += 1;

    // update the server
    // Method: PATCH
    // URL: http://localhost:3000/images/:id
    // Body: { likes }
    fetch(`http://localhost:3000/images/${imageData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ likes: imageData.likes })
    })
      // Promise<Response>
      .then(function (response) {
        return response.json();
      }) // Promise<updatedImage>
      .then(function (updatedImage) {
        // update the page
        likesEl.innerText = `${updatedImage.likes} likes`;
      });
  });

  likesSectionEl.append(likesEl, likeBtn);

  const ulEl = document.createElement("ul");
  ulEl.setAttribute("class", "comments");

  for (const comment of imageData.comments) {
    const liEl = document.createElement("li");
    liEl.innerText = comment.content;
    ulEl.append(liEl);
  }

  const formEl = document.createElement("form");
  formEl.setAttribute("class", "comment-form");

  const commentInputEl = document.createElement("input");
  commentInputEl.setAttribute("class", "comment-input");
  commentInputEl.setAttribute("type", "text");
  commentInputEl.setAttribute("name", "comment");
  commentInputEl.setAttribute("placeholder", "Add a comment...");
  commentInputEl.setAttribute("required", true);
  commentInputEl.setAttribute("minlength", "3");

  const postBtnEl = document.createElement("button");
  postBtnEl.setAttribute("class", "comment-button");
  postBtnEl.setAttribute("type", "submit");
  postBtnEl.innerText = "Post";

  formEl.append(commentInputEl, postBtnEl);

  // Add a comment:

  // Listen to comment form submission
  formEl.addEventListener("submit", function (event) {
    // Prevent the form from refreshing the page
    event.preventDefault();

    // Create the comment object to use as a body
    const comment = {
      imageId: imageData.id,
      content: commentInputEl.value
    };

    // Send new comment info to server
    // Method: POST
    // URL: http://localhost:3000/comments
    // Body: comment
    fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(comment)
    }) // Promise<Response>
      .then(function (response) {
        return response.json();
      }) // Promise<comment>
      .then(function (newCommentFromServer) {
        // Update the page (add the new comment)
        const liEl = document.createElement("li");
        liEl.innerText = newCommentFromServer.content;
        ulEl.append(liEl);
        formEl.reset();
      });
  });

  articleEl.append(h2El, imageEl, likesSectionEl, ulEl, formEl);

  imageContainerEl.append(articleEl);
}

// create multiple cards
function createMultipleCards(imagesData) {
  for (const imageData of imagesData) {
    createSingleCard(imageData);
  }
}

// get images from the server
function getImages() {
  fetch("http://localhost:3000/images")
    .then(function (response) {
      return response.json();
    })
    .then(function (images) {
      createMultipleCards(images);
    });
}

getImages();



// my code - dead dead dead code...

// fetch("http://localhost:3000/images")
//     .then(function (response){
//         return response.json()   
//     })
//     .then(function (data){
//     //    console.log("inside-fetch", data)
//        renderPostCards(data)
//     })


//     const instaImageCard = document.querySelector(".image-container")
    
    
//     function renderPostCards(posts){
//         for (const post of posts){
//             renderCard(post)
//         }
//     }
    
    
//     function renderCard (post){ 
        
//         const imageCardEl = document.createElement("article")
//         imageCardEl.setAttribute("class", "image-card")
        
//         const titleEl = document.createElement("h2")
//         titleEl.innerText = post.title
        
//         const imgEl = document.createElement("img")
//         imgEl.setAttribute("src", post.image)
//         imgEl.setAttribute("class", "image")
        
//         const likesSectionEl = document.createElement("div")
//         likesSectionEl.setAttribute("class", "likes-section")
        
//         const spanEl = document.createElement("span")
//         spanEl.setAttribute("class", "likes")
//         spanEl.innerText = post.likes + " Likes"
        
//         const likeBttnEl = document.createElement("button")
//         likeBttnEl.setAttribute("class", "like-button")
//         likeBttnEl.innerText = "♥"
        
//         likeBttnEl.addEventListener("click", function(){
//             const newLikes = post.likes +1
//             updateLikes(post, newLikes, spanEl)
//         })

//         const unorderedListEl = document.createElement("ul")
//         unorderedListEl.setAttribute("class", "comments")
        
//         for (comment of post.comments){
//             const list1El = document.createElement("li")
//             list1El.innerText = comment.content
//             unorderedListEl.append(list1El)
//         }

//         const formEl = document.createElement("form")
//         formEl.setAttribute("class", "comment-form")
        
//         const inputEl = document.createElement("input")
//         inputEl.setAttribute("class", "comment-input")
//         inputEl.setAttribute("type", "text")
//         inputEl.setAttribute("name", "comment")
//         inputEl.setAttribute("placeholder", "Add a comment...")
        
//         const buttonSubmit = document.createElement("button")
//         buttonSubmit.setAttribute("class", "comment-button")
//         buttonSubmit.setAttribute("type", "submit")
//         buttonSubmit.innerText = "Post"
        
        
//         imageCardEl.append(titleEl, imgEl, likesSectionEl, unorderedListEl, formEl)
        
//         likesSectionEl.append(spanEl, likeBttnEl)
       
//         formEl.append(inputEl, buttonSubmit)
//         instaImageCard.append(imageCardEl)
//         // console.log(instaImageCard)
        
//     }
    
    
//     function updateLikes(post, newLikes, spanEl){

//         fetch(`http://localhost:3000/images/${data.id}`, {
//             method: "PATCH",
//             headers: {'Content-Type': 'application/json',},
//             body: JSON.stringify({likes: newLikes,
//             })             

//     })

//     }

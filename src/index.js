fetch("http://localhost:3000/images")
    .then(function (response){
        return response.json()   
    })
    .then(function (data){
    //    console.log("inside-fetch", data)
       renderPostCards(data)
    })


    const instaImageCard = document.querySelector(".image-container")
    
    
    function renderPostCards(posts){
        for (const post of posts){
            renderCard(post)
        }
    }
    
    
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
        spanEl.innerText = post.likes + " Likes"
        
        const likeBttnEl = document.createElement("button")
        likeBttnEl.setAttribute("class", "like-button")
        likeBttnEl.innerText = "♥"
        
        likeBttnEl.addEventListener("click", function(){
            const newLikes = post.likes +1
            updateLikes(post, newLikes, spanEl)
        })

        const unorderedListEl = document.createElement("ul")
        unorderedListEl.setAttribute("class", "comments")
        
        for (comment of post.comments){
            const list1El = document.createElement("li")
            list1El.innerText = comment.content
            unorderedListEl.append(list1El)
        }

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
       
        formEl.append(inputEl, buttonSubmit)
        instaImageCard.append(imageCardEl)
        // console.log(instaImageCard)
        
    }
    
    
    function updateLikes (post, newLikes, spanEl){

        fetch(`http://localhost:3000/images/${post.id}`, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({likes: newLikes,
            })             

    })

    }

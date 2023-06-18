const API = "http://localhost:3000/toys"
let addToy = false

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn")
  const toyFormContainer = document.querySelector(".container")
  const toyForm = document.querySelector(".add-toy-form")
  
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block"
    } else {
      toyFormContainer.style.display = "none"
    }
  });

  toyForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    data.likes = 0
    fetch("http://localhost:3000/toys", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }, 
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => renderCard(data))

    //console.log("Submitting")
  })

  fetch(API)
 	.then((response) => response.json())
  .then(renderToys)

  function renderCard(toy){
    const card = document.createElement("div")
		  card.classList.add("card")
		  
      const h2 = document.createElement("h2")
			h2.textContent = toy.name
      //card.appendChild(h2)

      const img = document.createElement("img")
		  img.classList.add("toy-avatar")
      img.src = toy.image 
     // card.appendChild(img)

      const p = document.createElement("p")
		  p.textContent = `${toy.likes} Likes`
      //card.appendChild(p)

      const button = document.createElement("button")
      button.classList.add("like-btn")
      button.setAttribute("id", `${toy.id}`) 
      button.textContent = "Like ❤️"

      card.append(h2, img, p, button)
      document.querySelector("#toy-collection").appendChild(card)      
      console.log(card)
  }
   
  function renderToys(toyList) {
		  //console.log(toyList)

    	toyList.forEach((toy) => {
        renderCard(toy)
      }) 
    } 
})


 // function renderToys(toyList) {
	// 	//console.log(toyList)
	// 	toyList.forEach((toy) => {
	// 	  const card = document.createElement("div")
	// 	  card.classList.add("card")
		  
		  
  //     const h2 = document.createElement("h2")
	// 		h2.textContent = toy.name
  //     //card.appendChild(h2)

  //     const img = document.createElement("img")
	// 	  img.classList.add("toy-avatar")
  //     img.src = toy.image 
  //    // card.appendChild(img)

  //     const p = document.createElement("p")
	// 	  p.textContent = `${toy.likes} Likes`
  //     //card.appendChild(p)

  //     const button = document.createElement("button")
  //     button.classList.add("like-btn")
  //     button.setAttribute("id", `${toy.id}`) 
  //     button.textContent = "Like ❤️"

  //     card.append(h2, img, p, button)
  //     document.querySelector("#toy-collection").appendChild(card)
      
  //     //console.log(card)
	// 	})
  // }



  // function renderToys(toyList) {
	// 	//console.log(toyList)
	// 	toyList.forEach((toy) => {
	// 	  const card = document.createElement("div")
	// 	  card.classList.add("card")
		  
		  
  //     const h2 = document.createElement("h2")
	// 		h2.textContent = toy.name
  //     //card.appendChild(h2)

  //     const img = document.createElement("img")
	// 	  img.classList.add("toy-avatar")
  //     img.src = toy.image 
  //    // card.appendChild(img)

  //     const p = document.createElement("p")
	// 	  p.textContent = `${toy.likes} Likes`
  //     //card.appendChild(p)

  //     const button = document.createElement("button")
  //     button.classList.add("like-btn")
  //     button.setAttribute("id", `${toy.id}`) 
  //     button.textContent = "Like ❤️"

  //     card.append(h2, img, p, button)
  //     document.querySelector("#toy-collection").appendChild(card)
      
  //     //console.log(card)
	// 	})
  // }






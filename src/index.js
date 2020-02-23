console.log('%c HI', 'color: firebrick')


window.addEventListener("DOMContentLoaded", function(e){
n = ""

    let breedsContainer = document.getElementById("dog-breeds")
    let dogsImageContainer = document.getElementById("dog-image-container")

   fetch('https://dog.ceo/api/breeds/image/random/4')
       .then((response) => {
           return response.json();
       })
       .then((myJson) => {
           myJson.message.forEach( img =>
            { 
                let newImg = document.createElement("img")
                newImg.src = img
                let breedName = img.split("/")[4]
                let newLi = document.createElement("li")
                newLi.innerHTML = `${breedName}`
                console.log(newLi.innerHTML)
                dogsImageContainer.append(newImg)
                breedsContainer.append(newLi)
            }
           )
       });


    let breedDropdown = document.getElementById("breed-dropdown")
    breedDropdown.addEventListener("change", function(e){
        let listOfDogs = breedsContainer.children
        let dogsArr = Array.from(listOfDogs)
        let currentLetterToSort = e.target.value
        let dogImages = Array.from(dogsImageContainer.children)

        dogsArr.forEach(dog => {
            let breedName = Array.from(dog.innerText)
            if (breedName[0] != e.target.value) {
                dogImages.forEach(img =>
                    {
                        let firstLetter = Array.from(img.src.split("/")[4])[0]
                        console.log("first letter img:", firstLetter, "sort letter", currentLetterToSort)
                        if (firstLetter != currentLetterToSort){
                            img.hidden = true;
                        }
                    })

            } else {
                dogImages.forEach(img => {
                    let firstLetter = Array.from(img.src.split("/")[4])[0]
                    if (firstLetter === currentLetterToSort) {
                        img.hidden = false;
                    }
                })
            }
        })
        console.log(listOfDogs)

    })

})
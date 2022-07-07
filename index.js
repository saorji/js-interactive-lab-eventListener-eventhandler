const message = document.querySelector('#message')


const addMovie = (evt) =>{
evt.preventDefault()
const inputField = document.querySelector('input')
console.log(inputField)

const movie = document.createElement('li')
const movieTitle = document.createElement('span')
movie.appendChild(movieTitle);
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "x"
movie.appendChild(deleteBtn);
deleteBtn.addEventListener("click",deleteMovie);
movieTitle.textContent = inputField.value;
movieTitle.addEventListener("click", crossOffMovie);

document.querySelector('ul').appendChild(movie);



inputField.value = " ";
}

document.querySelector('form').addEventListener('submit',addMovie)

const deleteMovie = (evt) => {
    evt.target.parentNode.remove()
    message.textContent = 'Movie Deleted'
}

const crossOffMovie = (evt) => {
    evt.target.classList.toggle('checked')
    if(evt.target.classList.contains('checked')=== true){
        message.textContent = `Movie Watched!`
    }else {
        message.textContent = `Movie added back`
    }
}


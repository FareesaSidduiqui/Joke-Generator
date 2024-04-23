let joke = document.querySelector("#jokeContent")
let genJoke = document.querySelector("#genJoke")
const url = "https://v2.jokeapi.dev/joke/Programming,Dark,Christmas?blacklistFlags=nsfw,religious,political,racist,explicit&type=single"

// genJoke.addEventListener("click",()=>{
//     fetch(url)
//     .then(data => data.json())
//     .then(item =>{
//          joke.innerHTML = `${item.joke}`
//         })
//       joke.style.display = "block"
// })

// by Async
// const getJokes = async () =>{
//      console.log("getting data...");
//      let respone = await fetch(url)
//      console.log(respone);
//      let data = await respone.json()
//      console.log(data.joke); 
//      joke.style.display = "block"
//      joke.innerHTML = `${data.joke}`
//      // or joke.innerHTML = data.joke
// }

// by promise chaining
const getJoke = ()=>{
     fetch(url)
     .then((response)=>{
        return response.json()
     })
     .then((data)=>{
          console.log(data);
          joke.style.display = "block"
          joke.innerHTML = data.joke
     })
}

genJoke.addEventListener("click",getJoke)
// getJoke()

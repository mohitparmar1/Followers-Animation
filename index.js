let instaEl = document.querySelector("#insta-counter")
let youtubeEl = document.querySelector("#youtube-counter")
let twitterEl = document.querySelector("#twitter-counter")

let times = 0;

let id = setInterval(()=>{
    
   instaEl.innerText = times*300
   youtubeEl.innerText = times*150
   twitterEl.innerText = times*15
   times ++
   if(times == 101){
    window.clearInterval(id)
   }

},100)
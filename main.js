// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modalErr = document.getElementById("modal");
const hearts = document.querySelectorAll(".like-glyph");
for(const glyph of hearts){
  glyph.addEventListener('click', function(){
    mimicServerCall()
      .then(()=>{
        if(glyph.classList.contains("activated-heart")){
          glyph.textContent = EMPTY_HEART;
          glyph.classList.remove("activated-heart");
        }else{
          glyph.textContent = FULL_HEART;
          glyph.classList.add("activated-heart");
        }
      })
      .catch((error)=>{
        modalErr.classList.remove("hidden");
        document.getElementById("modal-message").textContent = error
        setTimeout(()=>{modalErr.classList.add("hidden")},3000);
        console.log("error should have shown")
      })
  });
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

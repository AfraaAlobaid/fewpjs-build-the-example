// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

document.getElementById("modal").classList.add("hidden");
document.querySelectorAll(".like-glyph").forEach((span) => {
  span.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        if (span.innerHTML === EMPTY_HEART) {
          span.innerHTML = FULL_HEART;
          span.classList.add("activated-heart");
        } else {
          span.innerHTML = EMPTY_HEART;
          span.classList.remove("activated-heart");
        }
      })
      .catch((err) => {
        document.getElementById("modal").classList.remove("hidden");
        document.getElementById("modal-message").innerText = err.message;
        setTimeout(() => {
          document.getElementById("modal").classList.add("hidden");
        }, 5000);
      });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

//Magic 8 Ball

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let randNum = Math.random();
  console.log(randNum);
  let question = document.getElementById("question-in").value.toLowerCase();
  console.log(question.length);
  let response = document.getElementById("response");

  //Responses
  if (question.length <= 0) {
    response.innerHTML = `<h3 id="response">Answer:<span>Please ask a question...</span></h3>`;
  } else if (question == "does a magic 8 ball actually work?") {
    response.innerHTML = `<h3 id="response">Answer:<span>How dare you doubt me!</span></h3>`;
  } else if (question == "is javascript awesome?") {
    response.innerHTML = `<h3 id="response">Answer:<span>Of Course!</span></h3>`;
  } else if (randNum < 0.2) {
    response.innerHTML = `<h3 id="response">Answer:<span>Without a Doubt.</span></h3>`;
  } else if (randNum < 0.4) {
    response.innerHTML = `<h3 id="response">Answer:<span>As I see it, yes.</span></h3>`;
  } else if (randNum < 0.6) {
    response.innerHTML = `<h3 id="response">Answer:<span>Concentrate and ask again.</span></h3>`;
  } else if (randNum < 0.8) {
    response.innerHTML = `<h3 id="response">Answer:<span>Don't count on it.</span></h3>`;
  } else {
    response.innerHTML = `<h3 id="response">Answer:<span>Outlook not so good.</span></h3>`;
  }
}

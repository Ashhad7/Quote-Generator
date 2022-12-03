const quoteText = document.querySelector(".quote");
quoteBtn = document.querySelector("button");
authorName  =document.querySelector(".author .name");
soundBtn  = document.querySelector(".sound");
copyBtn  = document.querySelector(".copy");
tweetBtn  = document.querySelector(".tweet");
//Random Quote funtion
function randomQuote(){
    quoteBtn.classList.add("Loading");
    quoteBtn.innerText = "Loading Quote..."
     fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("Loading");
     });
}

soundBtn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText} `);
    speechSynthesis.speak(utterance);
});
copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerHTML);
});
tweetBtn.addEventListener("click", ()=>{
    let tweetURL = (`http://twitter.com/intent/tweet?url1=${quoteText.innerText}`);
    window.open(tweetURL,"_blank");
});
quoteBtn.addEventListener("click",randomQuote);
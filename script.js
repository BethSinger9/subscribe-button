let subscribeBtn = document.getElementById("subscribe");
let subscribe = false;

subscribeBtn.addEventListener('click', () => {
    if (subscribe) {
        subscribeBtn.innerText = "Subscribed"
        subscribeBtn.style = "background-color: gray; color: white;"
        subscribe = false
    } else {
        subscribeBtn.innerText = "Subscribe"
        subscribeBtn.style = "background-color: white;"
        subscribe = true
    }
})
const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
const API_KEY = "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"; // Paste your API key here
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="">
    <img src="./ui/assets/favicon/Kubera Thambnail-01.png" alt="" class="rounded-circle">
    </span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}

const generateResponse = (chatElement) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = chatElement.querySelector("p");

    // Define the properties and message for the API request
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: userMessage}],
        })
    }

    // Send POST request to API, get response and set the reponse as paragraph text
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content;
    }).catch((error) => {
        messageElement.classList.add("error");
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
    }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}

const handleChat = () => {
    userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if(!userMessage) return;

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    
    setTimeout(() => {
        // Display "Thinking..." message while waiting for the response
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window 
    // width is greater than 800px, handle the chat
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

// option own chatr bot
// Brand Building

// var div=document.getElementById('demo');
// var display=0;
function Brand_Building(){
    document.getElementById('demo').innerHTML='SEO means Search Engine Optimization and is the process used to optimize a website s technical configuration, content relevance and link popularity so its pages can become easily findable, more relevant and popular towards user search queries, and as a consequence, search engines rank them better.'
    // if(display==1){
        // div.style.display='block'
        // display=0
    // }
    // else{
        // div.style.display='none'
        // display=1;
    // }
}

// Digital_Marketing
var div=document.getElementById('demo');
var display=0;
function Digital_Marketing(){
    document.getElementById('demo').innerHTML='I Am Digital_Marketing'; 

    // if(display==1){
        // div.style.display='block'
        // display=0
    // }
    // else{
        // div.style.display='none'
        // display=1;
    // }
}


// Creative_Content
// var div=document.getElementById('demo');
// var display=0;
const Creative_Content=()=>{
    document.getElementById('demo').innerHTML='I am Creative_Content'; 

    // if(display==1){
        // div.style.display='block'
        // display=0
    // }
    // else{
        // div.style.display='none'
        // display=1;
    // }
}


// Media_Buying_Planning
// var div=document.getElementById('demo');
// var display=0;
const Media_Buying_Planning=()=>{
    document.getElementById('demo').innerHTML='I am Media_Buying_Planning ';

    // if(display==1){
        // div.style.display='block'
        // display=0
    // }
    // else{
        // div.style.display='none'
        // display=1;
    // }
    
}

// Event_Activation
// var div=document.getElementById('demo');
// var display=0;
const Event_Activation=()=>{
    document.getElementById('demo').innerHTML='I am Event_Activation'; 

    // if(display==1){
        // div.style.display='block'
        // display=0
    // }
    // else{
        // div.style.display='none'
        // display=1;
    // }
}
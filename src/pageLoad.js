import loadTicket from "./ticket.js"; 
import loadContact from "./contact.js"; 


function createHeader(){
    const header = document.createElement("div"); 
    header.innerHTML = `
    <header>
        <h2 class = "header">Disco Dance Bash </h2>
    </header>
    <nav>
    <div class = "links">
        <button home-button>Home</button>
        <button ticket-button>Tickets</button>
        <button contact-button>Contact Us</button>
    </div>
    </nav>
    `; 
    return header; 
}

function createHome(){
    const homePage = document.createElement("div"); 
    homePage.innerHTML = ` 
    <div class = "home-page">
        <div class = "title-div">
            <h2 class = "title">You are Cordially Invited To Boogie With Us</h2>
        </div>
        <div class = "home">
            <div class = "info">
                <div class = "left">
                    <p><span class = "question">On? 🤨</span> The Dance floor (duh)</p>
                </div>
            </br>
                <div class = "right">
                    <p><span class = "question">When? ⏰</span> July 9th 2024</p>
                </div>
            </br>
                <div class = "left">
                    <p><span class = "question">Where? 🗺️</span> 1680 Creditstone Rd, Concord, ON L4K 5T4 </p>
                </div>
            </div>
            <div class = "parent">
                    <iframe src="https://giphy.com/embed/fA1l6ovCiVq0MpxNoj" max-width="25%" height="480" frameBorder="0" class="giphy-embed"></iframe>></iframe>
                    <iframe src="https://giphy.com/embed/ftdB92kvdX9pbnNkD3" max-width="25%"height="480" frameBorder="0" class="giphy-embed down "></iframe>
                    <iframe src="https://giphy.com/embed/RkoYGHqegyaENdlAek" max-width="25%" height="480" frameBorder="0" class="giphy-embed"></iframe>
                    <iframe src="https://giphy.com/embed/dX47B5INYZmnU4bnTw" max-width="25%" height="480" frameBorder="0" class="giphy-embed down"></iframe>
            </div>
        </div>
    </div>`
    return homePage
}

function createFooter(){
    const footer = document.createElement("div"); 
    footer.innerHTML = `
    <footer>
        <p class = "footer-text">Copyright © 2023 Disco Dance</p>
        <img src = "./images/instagram.svg" height="50px">
        <img src ="./images/envelope-regular.svg" height = "50px">
    </footer>`
    return footer; 
}

function activateButtons(){
    console.log("hi"); 
    const buttons = document.querySelectorAll("button"); 
    console.log(buttons); 
    buttons.forEach(function(button){
        button.addEventListener("click", loadContent); 
    })
}

function loadContent(e){
    console.log(e); 
    const clickedButton = e.target.innerText; 
    console.log("CLicked Button", clickedButton); 


    const mainDiv = document.querySelector(".main-div"); 
    mainDiv.innerHTML = ''; 

    console.log("hi"); 
    console.log("Main DIv: ", mainDiv); 


    if (clickedButton == 'Home'){
        mainDiv.appendChild(createHome()); 
    }
    else if (clickedButton == "Tickets"){
        mainDiv.appendChild(loadTicket()); 
    }
    else{
        mainDiv.appendChild(loadContact()); 
    }
}

function contentDiv(){
    const div = document.createElement("div"); 
    div.classList.add("main-div");
    return div;  
}

function pageLoad(){
    const content = document.getElementById("content"); 
    content.appendChild(createHeader()); 
    activateButtons(); 
    let mainDiv; 

    mainDiv = contentDiv(); 
    mainDiv.appendChild(createHome()); 
    
    content.appendChild(mainDiv);    
    
    content.appendChild(createFooter()); 
}

export default pageLoad; 
(()=>{"use strict";function n(){const n=document.createElement("div");return n.innerHTML=' \n    <div class = "home-page">\n        <div class = "title-div">\n            <h2 class = "title">You are Cordially Invited To Boogie With Us</h2>\n        </div>\n        <div class = "home">\n            <div class = "info">\n                <div class = "left">\n                    <p><span class = "question">On? 🤨</span> The Dance floor (duh)</p>\n                </div>\n            </br>\n                <div class = "right">\n                    <p><span class = "question">When? ⏰</span> July 9th 2024</p>\n                </div>\n            </br>\n                <div class = "left">\n                    <p><span class = "question">Where? 🗺️</span> 1680 Creditstone Rd, Concord, ON L4K 5T4 </p>\n                </div>\n            </div>\n            <div class = "parent">\n                    <iframe src="https://giphy.com/embed/fA1l6ovCiVq0MpxNoj" max-width="25%" height="480" frameBorder="0" class="giphy-embed"></iframe>></iframe>\n                    <iframe src="https://giphy.com/embed/ftdB92kvdX9pbnNkD3" max-width="25%"height="480" frameBorder="0" class="giphy-embed down "></iframe>\n                    <iframe src="https://giphy.com/embed/RkoYGHqegyaENdlAek" max-width="25%" height="480" frameBorder="0" class="giphy-embed"></iframe>\n                    <iframe src="https://giphy.com/embed/dX47B5INYZmnU4bnTw" max-width="25%" height="480" frameBorder="0" class="giphy-embed down"></iframe>\n            </div>\n        </div>\n    </div>',n}function e(e){console.log(e);const t=e.target.innerText;console.log("CLicked Button",t);const i=document.querySelector(".main-div");i.innerHTML="",console.log("hi"),console.log("Main DIv: ",i),"Home"==t?i.appendChild(n()):"Tickets"==t?i.appendChild(function(){const n=document.createElement("div");return n.innerHTML="<h2>Ticket Page</h2>",console.log(n),n}()):i.appendChild(function(){const n=document.createElement("div");return n.innerHTML="<h2>Contact Page</h2>",n}())}!function(){const t=document.getElementById("content");let i;t.appendChild(function(){const n=document.createElement("div");return n.innerHTML='\n    <header>\n        <h2 class = "header">Disco Dance Bash </h2>\n    </header>\n    <nav>\n    <div class = "links">\n        <button home-button>Home</button>\n        <button ticket-button>Tickets</button>\n        <button contact-button>Contact Us</button>\n    </div>\n    </nav>\n    ',n}()),function(){console.log("hi");const n=document.querySelectorAll("button");console.log(n),n.forEach((function(n){n.addEventListener("click",e)}))}(),i=function(){const n=document.createElement("div");return n.classList.add("main-div"),n}(),i.appendChild(n()),t.appendChild(i),t.appendChild(function(){const n=document.createElement("div");return n.innerHTML='\n    <footer>\n        <p class = "footer-text">Copyright © 2023 Disco Dance</p>\n        <img src = "./images/instagram.svg" height="50px">\n        <img src ="./images/envelope-regular.svg" height = "50px">\n    </footer>',n}())}()})();
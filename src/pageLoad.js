import bbtea from './bbtea.jpg'; 

const pageLoad = () =>{

    const contentContainer = document.querySelector("#content"); 
    const header = document.createElement("header"); 

    header.innerHTML = `
    <nav>
    <h2 class = "header">School Dance</h2>

    <ul class = "links">
        <li>Home</li>
        <li>Tickets</li>
        <li>Contact Us</li>
    </ul>

    </nav>
    
    
    `; 
    contentContainer.appendChild(header); 

    

    /*const div = document.createElement("div"); 
    const title = document.createElement("h1"); 
    title.textContent = "Welcome to our bubble tea shop!"; 
    const img = new Image(); 
    img.src = bbtea;
    const content = document.createElement("p"); 
    content.textContent = "Our bubble tea is the best!"; 
    div.appendChild(title); 
    div.appendChild(img); 
    div.appendChild(content); 
    return div; */
}

export { pageLoad }; 
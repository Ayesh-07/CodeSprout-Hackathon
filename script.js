
//Select Html Elements

let prompt = document.querySelector('#prompt')
let display = document.querySelector('.display')
let btn = document.querySelector('button')


// Api Setup 

let apiKey = 'vk-VTVstI6U2ArAqdm4iu37MIDgMgFvFFvAFUAchIX3FnExW2D';
let endpoint_url = 'https://api.vyro.ai/v2/image/generations'



// Here is Async function 

async function Data() {
    try {

if(!prompt.value.trim()){
    alert('Kindly Write Your Prompt')
}


 display.innerHTML = '<h5>Generating image... Please wait.</h5>';


const formData = new FormData();
formData.append("prompt",prompt.value);
formData.append("style", "anime");
formData.append("aspect_ratio", "1:1");


let options = {
    method: "POST",
    headers: { 'Authorization': `Bearer ${apiKey}` },
    body: formData,
}



const response = await fetch(endpoint_url, options);
    if(!response.ok){
    throw new Error(`API returned an error: ${response.status} ${response.statusText}`);}

       

const blob = await response.blob();
let imageUrl = URL.createObjectURL(blob);

let img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Generated Image";
    img.style.maxwidth = "300px";
    display.src = imageUrl
    display.innerHTML = "";  
    display.appendChild(img);

} catch(e) {
    throw new Error(e)
    }
}


// Here is click listner 

btn.addEventListener('click', Data)

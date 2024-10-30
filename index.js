import { initializeSparkles } from "./helperfunctions.js"; 

window.onload = function ()
{
    initializeSparkles();
};

const randomText = 
[
  "Every bite of an apple pie is an invitation to savor autumn, no matter the season.",
  "The secret to happiness? A golden, tender, and flavorful apple pie.",
  "One slice of apple pie and the world seems sweeter and more comforting.",
  "With an apple pie, it’s as if the sweetness of nature rests on your plate.",
  "A taste of childhood in every golden crust, apple pie awakens our fondest memories.",
  "Crispy on the outside, tender on the inside, apple pie is a caress for the taste buds.",
  "Apple pie is more than just a dessert; it’s a moment of sharing and togetherness.",
  "The scent of an apple pie fresh from the oven is a promise of a warm and delightful moment.",
  "Nothing warms the heart like a generous apple pie, made with love.",
  "Apple pie is the perfect blend of sweet indulgence and fruity freshness.",
];
 
let imgTarte = document.getElementById("tarte");
const incrementCounterInDOM = document.getElementsByTagName('h2');
const pieCountPerSecond = document.getElementById('piecount');
const totalCounter = document.getElementById('Total');
const itemsShop = document.getElementsByTagName('li');
console.log(itemsShop)

let    ApplePiecounter = 0; 

//--------
// Handle text random generation
//-----
function textChange() 
{
    const phraseInitiale = Math.floor(Math.random() * randomText.length);
    document.getElementById("change").innerHTML = randomText[phraseInitiale];

    setInterval(() => 
    {
      const phraseAleatoire = Math.floor(Math.random() * randomText.length);
      document.getElementById("change").innerHTML = randomText[phraseAleatoire];
    }, 5000);
}

//--------
// Handle ApplePie Image 
//--------

  function shakeImage(ElementFromDOM) 
  {
    ElementFromDOM.classList.add("shake");

    setTimeout(function () {
      ElementFromDOM.classList.remove("shake");
    }, 500);

  }

function toggleImage() 
{
    if (imgTarte.getAttribute("data-img") === "tarte") {
      imgTarte.src = "./asset/tarte2sap.png"; //remplace l'image par une autre
      imgTarte.setAttribute("data-img", "tarte2");
    } else {
      imgTarte.src = "./asset/tarte.png"; 
      imgTarte.setAttribute("data-img", "tarte");
    }
 }

function onClickHandler() 
{   
    shakeImage(imgTarte);
    toggleImage();
    ApplePiecounter ++;
    totalCounter.textContent = ApplePiecounter;
}

imgTarte.addEventListener("click", onClickHandler);

//----
//Item - Shop
//---- 
function incrementYieldPerSecond(yieldPerSecond, integer)
{
    yieldPerSecond += integer;
    return(yieldPerSecond);
}

//------
//main function()
//------

function ApplepieClickerProgram()
{
  let    yieldPerSecond = 0;
  
  textChange();
  itemsShop[0].children[0].addEventListener("click", ()=>
  { 
        shakeImage(itemsShop[0].children[0]);
        setInterval(() => 
        { 
          ApplePiecounter+= 10;
          totalCounter.textContent= ApplePiecounter; 
          console.log(ApplePiecounter);
        }, 1000);
        yieldPerSecond = incrementYieldPerSecond(yieldPerSecond, 10);
        pieCountPerSecond.innerHTML =  yieldPerSecond;
    },{ once: true });

  itemsShop[1].children[0].addEventListener("click", ()=>
  { 
        shakeImage(itemsShop[1].children[0]); 
        setInterval(() => 
        { 
          ApplePiecounter+= 25;
          totalCounter.textContent = ApplePiecounter; 
          console.log(ApplePiecounter);
        }, 1000);
        yieldPerSecond = incrementYieldPerSecond(yieldPerSecond, 25); 
        pieCountPerSecond.innerHTML =  yieldPerSecond; 
      }, { once: true });

  itemsShop[2].children[0].addEventListener("click", ()=>
  { 
        shakeImage(itemsShop[2].children[0]); 
        setInterval(() => 
        { 
          ApplePiecounter+= 100;
          totalCounter.textContent = ApplePiecounter; 
          console.log(ApplePiecounter);
        }, 1000);
        yieldPerSecond = incrementYieldPerSecond(yieldPerSecond, 100);
        pieCountPerSecond.innerHTML =  yieldPerSecond; 
      }, { once: true });

      itemsShop[3].children[0].addEventListener("click", ()=>
      { 
        shakeImage(itemsShop[3].children[0]); 
        setInterval(() => 
        { 
          ApplePiecounter+= 200;
          totalCounter.textContent = ApplePiecounter; 
          console.log(ApplePiecounter);
        }, 1000);

        yieldPerSecond = incrementYieldPerSecond(yieldPerSecond, 200);
        pieCountPerSecond.innerHTML =  yieldPerSecond; 
      }, { once: true });

  itemsShop[4].children[0].addEventListener("click", ()=>{ 
        shakeImage(itemsShop[4].children[0]); 
        setInterval(() => 
        { 
          ApplePiecounter+= 300;
          totalCounter.textContent = ApplePiecounter; 
          console.log(ApplePiecounter);
        }, 1000);
       
        yieldPerSecond = incrementYieldPerSecond(yieldPerSecond, 300); 
        pieCountPerSecond.innerHTML =  yieldPerSecond; 
      }, { once: true });
}

ApplepieClickerProgram();
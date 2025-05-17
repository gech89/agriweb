//refresh every xx second
/*const pageRefresh = document.createElement("meta");
pageRefresh.innerHTML = "<meta http-equiv='refresh' content=''>"
document.head.appendChild(pageRefresh);*/

//adding element for the firstTime
const addedParagraph1 = document.createElement('p');
addedParagraph1.innerHTML = "<p> ይህ በ JavaScript በ(appendChild) መጨረሻ ላይ  የተጨመረ አንቀፅ (paragraph) ነው!!!</p>";
document.body.appendChild(addedParagraph1);
const addedHeading1 = document.createElement("h2");
addedHeading1.innerHTML = "<h2>በJS የተጨመረ የመጀመሪያ h2 ርእስ </h2>";
document.body.insertAdjacentElement("beforeend",addedHeading1)
paragraph2 = document.createElement("p");
paragraph2.innerHTML = "<p> በjs የተጨመረ የ addedHeading1(h2) 1ኛ ፓራግራፍ</p>";
addedHeading1.insertAdjacentElement("afterend", paragraph2);



//remove child of element
const elementX = document.querySelector('.javap1');
elementX.parentElement.removeChild(elementX);

//classes(list of classes and assigned variable)
const departments = document.querySelector(".departments");
const topHeader = document.querySelector("#top");
const mainBody = document.querySelector(".main-body");
const footer = document.querySelector(".footer");
const javalists = document.querySelector(".javalists")
const lists = document.querySelector(".lists");
const javas = document.querySelector(".javas");

//adding elemnt
const addedlist = document.createElement("li");
addedlist.innerHTML = "<li>added list by JavaScript(appendChild)</li>";
javalists.appendChild(addedlist);


//cssStyles
javalists.style.color = "red";
javalists.style.textAlign = "center";

//another way to add css
lists.style.cssText = 'border-radius:.5em; color: blue; background: orange; font-size: 1.5em';

//another way to add css
javas.setAttribute("style", "font-size:1.5em; background-color:grey; border-radius:2em; padding:0.5em; height: auto;");


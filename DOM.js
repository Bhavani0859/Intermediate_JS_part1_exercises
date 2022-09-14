//Select the section with an id of container without using querySelector.
document.getElementById("container")

//Select the section with an id of container using querySelector.
document.querySelector("#container")

//Select all of the list items with a class of "second".
document.getElementsByTagName("second")
      //or
document.querySelectorAll(".second")

//Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("ol.third")

//Give the section with an id of container the text "Hello!".
let a= document.querySelector("#container")
a.innerText("Hello!")

//Add the class main to the div with a class of footer.
let footer= document.querySelector("#footer")
footer.classList.add("main")

//Remove the class main on the div with a class of footer.
let footer1= document.querySelector("#footer")
footer1.classList.remove("main")

//Create a new li element.
let newList=document.createElement("li")

//Give the li the text "four".
newList=innerText="four"

//Append the li to the ul element.
let uList=document.querySelector("ul")
list.append(uList)

//Loop over all of the lis inside the ol tag and give them a background color of "green".
let liOl = document.querySelectorAll("ol li");
for(let i = 0; i < liOl.length; i++){
    liOl[i].style.backgroundColor = "green";
}

//Remove the div with a class of footer.
let footer2=document.querySelector("#footer")
footer2.remove()

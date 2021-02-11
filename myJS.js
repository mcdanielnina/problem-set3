/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/
const block = document.getElementById("color-block");

block.addEventListener("click", function changeColor(){
    const cl = block.getAttribute("class");


    //Write a condition determine what color it should be changed to
    if(cl === "coral") {
        //change the background color using JS
        block.setAttribute("class", "teal-blue");
        
         //Change the text of the color using the span id color-name
        
        document.getElementById("color-name").textContent="#2D728F";
        
    

    }
    else{ 
        //change the background color using JS
        block.setAttribute("class", "coral");
        
        //Change the text of the color using the span id color-name

        document.getElementById("color-name").textContent="#F08080";
        

        
    }
}); 


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/
const button =  document.getElementById("convertbtn");

button.addEventListener("click", function convertTemp(){
    //Calculate the temperature here
    const fahr = document.getElementById("f-input").value;
    var cel;
    cel = (fahr -32) * (5/9);
    
    //Send the calculated temperature to HTML
    document.getElementById("c-output").innerHTML= cel;

     
 

   

});



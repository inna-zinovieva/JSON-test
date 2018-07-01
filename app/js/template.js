var ourRequest = new XMLHttpRequest();
ourRequest.open("GET", 'http://localhost:3000/json/test.json');
ourRequest.onload = function (){
    if(ourRequest.status >= 200 && ourRequest.status < 400){
         var data = JSON.parse(ourRequest.responseText);
         createHTML(data);
    } else {
        console.log("we connected to server, but it returned an error.");
    }
};
ourRequest.onerror = function () {
    console.log("connection error");
};
 ourRequest.send();

 function createHTML (burgersData){
        var fullTemplate= document.getElementById("burgersMenu").innerHTML;
        var compiledTemplate = Handlebars.compile(fullTemplate);
        var ourGeneratedHTML = compiledTemplate(burgersData);

        var food = document.getElementById("food");
        food.innerHTML = ourGeneratedHTML;
 }

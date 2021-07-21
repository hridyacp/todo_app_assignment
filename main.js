let item=document.getElementById("item");
let heading=document.getElementById("myheading");
let heads=document.getElementById("heads");
let secheads=document.getElementById("secheads");
let drop=document.getElementById("drop");
let dropbtn=document.getElementById("dropdownMenuButton1");
let taskfull=document.getElementById("taskfull");
let taskc=document.getElementById("taskc");
let taskuc=document.getElementById("taskuc");
let todo=document.getElementById("todo");
var table = document.getElementsByTagName("demo")[0];
let congrats=document.getElementById("congrats");
//var cells = document.getElementsByTagName("td");
const map1 = new Map();
function changeImage() {
   item.removeAttribute("src","images/sad.png");
   item.setAttribute("src","images/happy.png");
   item.style.width="80%";
   item.style.marginLeft="-10%"
}

function ajax(){
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function(){ 
      if(this.readyState==4 && this.status==200){
         var response = JSON.parse(this.responseText);
         var output="";
         var taskcomp="";
         var taskuncomp="";
         for(i=0;i<response.length;i++){
                  
                  if(response[i].completed==true){
                     output+=`<tr style="background-color: peachpuff;">`;
                   output+=`<td><input type="checkbox" checked=true onclick="return false"></td>`;
               output+=`<td> ${response[i].title} </td>`;
               output+=`</tr>`;
                  }
                  else if(response[i].completed==false){
                     output+=`</tr>`;
                     output+=`<td class="cells"><input type="checkbox" class="check"></td>`;     
                  output+=`<td> ${response[i].title} </td>`;
                  output+=`</tr>`;
                  }
   
    
                  if(response[i].completed==true){
                     taskcomp+=`<tr style="background-color: peachpuff;">`;
                     taskcomp+=`<td><input type="checkbox" checked=true onclick="return false"></td>`;
                     taskcomp+=`<td> ${response[i].title} </td>`;
                     taskcomp+=`</tr>`;
                  }
                 
                  
                  if(response[i].completed==false){
                     taskuncomp+=`<tr>`;
                     taskuncomp+=`<td class="cellsuncomp"><input type="checkbox" class="checks"></td>`;
                     taskuncomp+=`<td> ${response[i].title} </td>`;  
                     taskuncomp+=`</tr>`;  
                  }
                  
     }
     var checkedlist=[];
     let counter=0;
     $(document).ready(function() {
      var cell = $("td")[i];
   
       $(".cells").on('change',':checkbox',function() {
               // Cell Object  
          var cellIndex  = this.cellIndex + 1; 
         var rowIndex = this.parentNode.rowIndex + 1;
   const promise= new Promise(function(resolve,reject){
   var checked=true;
   counter=$(':checkbox:checked').length-90;
   $(':checkbox:checked').parent().parent().css("background-color", "peachpuff");
      $(':checkbox:not(:checked)').parent().parent().css("background-color", "aquamarine");
   checkedlist+=rowIndex;
   if(counter>=5){
      congrats.innerHTML="Congratulations!!";
      congrats.style.color="orangered";
   resolve();
}    
else{
   congrats.innerHTML="Complete another 5 tasks today";
   congrats.style.color="black";
}
   })
   promise.then(function(){alert("Congrats. 5 Tasks have been Successfully Completed")});
  
      });
});

         document.getElementById("demo").innerHTML=output;
         item.src="";
         drop.innerHTML="Sort your list";
         drop.style.fontWeight="bold";
         heading.innerHTML="Your list";
         heading.style.color="black";
         heading.style.fontWeight="bold";
         document.body.style.backgroundColor = "rgb(6, 146, 132)";
         demo.style.backgroundColor="aquamarine";
         demo.style.fontWeight="bold";
         demo.style.border="2px solid black";
         demo.style.borderRadius="12px";
         heads.style.color="black";
         secheads.style.color="black";
         todo.style.visibility="visible";
         taskfull.innerHTML="List of task";
            taskc.innerHTML="Task Completed";
            taskuc.innerHTML="Task Uncomplete";
            todo.style.backgroundColor="aquamarine";
            todo.style.fontWeight="bold";
            congrats.innerHTML="Complete another 5 tasks today";
            congrats.style.color="black";
            todo.onclick= function(){
                if(todo.value==taskc.value){
               document.getElementById("demo").innerHTML=taskcomp;
               congrats.innerHTML="Well done. Keep up the good work.";
               congrats.style.color="orangered";
               }
               else if(todo.value==taskuc.value){
               document.getElementById("demo").innerHTML=taskuncomp;
               congrats.innerHTML="Complete another 5 tasks today";
               congrats.style.color="black";
               $(document).ready(function() {
                   var cell = $("td")[i];
                   
                    $(".cellsuncomp").on('change',':checkbox',function() {
                            // Cell Object    
                       var cellIndex  = this.cellIndex + 1; 
                      var rowIndex = this.parentNode.rowIndex + 1;
                const promise= new Promise(function(resolve,reject){
                var checked=true;
                counter=$(':checkbox:checked').length;
                $(':checkbox:checked').parent().parent().css("background-color", "peachpuff");
                $(':checkbox:not(:checked)').parent().parent().css("background-color", "aquamarine");
                if(counter>=5){
                  congrats.innerHTML="Congratulations!!";
                  congrats.style.color="orangered";
                resolve();
             }    
             else{
               congrats.innerHTML="Complete another 5 tasks today";
               congrats.style.color="black";
             }
                })
                promise.then(function(){alert("Congrats. 5 Tasks have been Successfully Completed ")});
                   });
             });
               }
               else {
                  document.getElementById("demo").innerHTML=output;
                  congrats.innerHTML="Complete another 5 tasks today";
                  congrats.style.color="black";
                  $(document).ready(function() {
                      var cell = $("td")[i];
                       $(".cells").on('change',':checkbox',function() {
                               // Cell Object
                          var cellIndex  = this.cellIndex + 1; 
                         var rowIndex = this.parentNode.rowIndex + 1;
                   const promise= new Promise(function(resolve,reject){
                   var checked=true;
                   counter=$(':checkbox:checked').length-90;
                   $(':checkbox:checked').parent().parent().css("background-color", "peachpuff");
                   $(':checkbox:not(:checked)').parent().parent().css("background-color", "aquamarine");
                   if(counter>=5){
                     congrats.innerHTML="Congratulations!!";
                     congrats.style.color="orangered";
                   resolve();
                } 
                else{
                  congrats.innerHTML="Complete another 5 tasks today";
                  congrats.style.color="black";
                }
                   })
                   promise.then(function(){alert("Congrats. 5 Tasks have been Successfully Completed ")});
                      });
                });
               }
            }   
      }
   }
   xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
   xhttp.send();
}

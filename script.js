const todo = document.getElementsByClassName("todo")[0];
var input = document.getElementById("input");
var trash = document.getElementById("trash");

input.addEventListener("keydown",function(event){
  if(event.key == "Enter"){
    add();
  }
})

function add(){
  var divParent = document.createElement("div");
  var divChild = document.createElement("div");
  var check = document.createElement("i");
  var trash = document.createElement("i");

  divParent.className="items";
  divParent.innerHTML = '<div>'+input.value+'</div>';
  check.className = "fas fa-check-square";
  check.addEventListener("click", function(){
    check.style.color = 'limegreen';
  })
  divChild.appendChild(check);
  trash.className ="fas fa-trash";
  trash.addEventListener("click", function(){
    divParent.remove();
  })
  divChild.appendChild(trash);
  divParent.appendChild(divChild);
  todo.appendChild(divParent);
  input.value="";
}

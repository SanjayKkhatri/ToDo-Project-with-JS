
//ToDo JavaScript


var list  =document.getElementById("item_list");
function addItem(){
        //Add Button
    
    var input = document.getElementById("todo_item");
    var li = document.createElement("li");
    var liText = document.createTextNode(input.value); 
    li.appendChild(liText);
    list.appendChild(li);
    if (input === '') {
        alert("You must write something!");
      } else {
        document.getElementById("item_list").appendChild(li);
      }

    //Delete Button
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delBtn.appendChild(delText);
    li.appendChild(delBtn);
    delBtn.setAttribute("onclick","delItem(this)");
    delBtn.setAttribute("class","delitem");
    delBtn.innerHTML = '<i class="fa fa-trash-o"></i>';


    //Edit Button

    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.appendChild(editText);
    li.appendChild(editBtn);
    editBtn.setAttribute("onclick" , "edititem(this)");
    editBtn.setAttribute("class","edititem");
    editBtn.innerHTML = '<i class="fa fa-pencil-square-o"></i>';
    input.value = "";
}


function delItem(e){
    e.parentNode.remove();
}
function delAll(){
    list.innerHTML = "";
}

function edititem(e){
    var editBox = prompt("Enter Edit Value" , e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = editBox;
}
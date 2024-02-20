var productNameInput=document.getElementById("inputName");
var productPriceInput=document.getElementById("inputPrice");
var productTypeInput=document.getElementById("inputType");
var indexUpdate=0;
var addBtn=document.getElementById("addBtn");
var updateBtn=document.getElementById("updateBtn");

if(localStorage.getItem("arr")!=null){
    dataList=JSON.parse( localStorage.getItem("arr"));
    displayData();
}
var dataList=[];
function addItems(){
    var product={
        name:productNameInput.value ,
        price:productPriceInput.value,
        type:productTypeInput.value,
    }
    dataList.push(product);
    localStorage.setItem("arr",JSON.stringify(dataList));
    deleteItem();
    displayData();
    console.log(dataList);
}

function deleteItem(){
    productNameInput.value="";
    productPriceInput.value="";
    productTypeInput.value="";

}

function displayData(){
    var content="";
for(var i=0;i<dataList.length;i++){
    content+=`<tr>
    <td>${i}</td>
    <td>${dataList[i].name}</td>
    <td>${dataList[i].price}</td>
    <td>${dataList[i].type}</td>
    <td>
    <button onclick=" updateData(${i})" class="btn btn-info">Update</button>
    <button onclick="deleteData(${i})" class="btn btn-danger">Delete</button></td>
</tr>`
}
document.getElementById("bodyData").innerHTML=content;
}

function deleteData(indx){
dataList.splice(indx,1);
localStorage.setItem("arr",JSON.stringify(dataList));

displayData();
}
function updateData(index){
    indexUpdate=index;
    var curentData=dataList[indexUpdate];

    productNameInput.value=curentData.name,
       productPriceInput.value=curentData.price,
       productTypeInput.value=curentData.type
       addBtn.classList.add("d-none");
       updateBtn.classList.remove("d-none");

}

function returnData(){
    var product={
        name:productNameInput.value ,
        price:productPriceInput.value,
        type:productTypeInput.value,
    };
    dataList.splice( indexUpdate, 1,product);
localStorage.setItem("arr",JSON.stringify(dataList));
    displayData();
    deleteItem();
    addBtn.classList.remove("d-none");
       updateBtn.classList.add("d-none");
}
let title=document.getElementById("title")
let button=document.getElementById("but")
let count=document.getElementById("count")
let department=document.getElementById("dep")
let inputs=document.querySelectorAll("#cost input")
let mydiv=document.getElementById("td")
let tr=document.getElementsByTagName("tr")
let deleteall=document.getElementById("deleteall")
let inplist=document.getElementsByTagName("input")
let del=document.getElementById("delete")
let image=document.getElementById("image")
let upd=document.getElementById("update")
let btnmood=document.getElementById("mode")
let body=document.getElementById("body")
let clsbut=document.getElementById("close")
let pop=document.getElementById("pop")
let td=document.getElementById("t")
let load=document.getElementById("load")



let globaiID;
let z;
let co;
let mood="create";

if (localStorage.product!=null){
    allData = JSON.parse(localStorage.product);

}
else{
    allData=[];
}
let getTotal=()=>{
for (i=0;i<inputs.length;i++){
    inputs[i].onkeyup=function(){
        let price=inputs[0].value;
        let tax=inputs[1].value;
        let trancost=inputs[2].value;
        let dis=inputs[3].value;
        let total=+price + +tax + +trancost - +dis
        console.log(total)
        inputs[4].value=+total
        }
   }   
}
getTotal()
let createObject=()=>{
    let newData={
        title:title.value,
        price:inputs[0].value,
        tax:inputs[1].value,
        transcost:inputs[2].value,
        discount:inputs[3].value,
        total:inputs[4].value,
        department:department.value,
        count:count.value,
        image:image.value
    } 
    for(i=1;i<=inplist.length;i++){
    if(inplist[i].value.trim()=="" ){  
    break;
    

}else{
    co++;
    z=co;
}
    

    

    if(mood=="create")
    {
    if (newData.length>1){
        allData.push(newData)

    }else{
        allData.push(newData)
    }
}else{
   allData[globaiID]=newData
    mood=="create";
    button.innerHTML="create";
    button.classList.replace("btn-warning", "btn-primary");
    count.classList.remove("hid");

}
}



    localStorage.setItem("product",JSON.stringify(allData))
showData()
validation()
deleteall.classList.remove("hid")

}

let showData = () => {
    let table=``
     for (let i = 0; i < allData.length; i++) {
        table += `
        <tr>
        <td id="td" class="lightmode" >ID: ${i + 1}</td>
        <td id="td" class="lightmode">title: ${allData[i].title}</td>
        <td id="td" class="lightmode">price: ${allData[i].price}</td>
        <td id="td" class="lightmode">Tax: ${allData[i].tax}</td>
        <td id="td" class="lightmode" >transcount: ${allData[i].transcost}</td>
        <td id="td" class="lightmode" >discount: ${allData[i].discount}</td>
        <td id="td" class="lightmode" >total: ${allData[i].total}</td>
        <td id="td" class="lightmode" >Department: ${allData[i].department}</td>
        <td id="td" class="lightmode" >image: <img src="${allData[i].image}" width=90px height=90px></td>
        <td> <button onclick='deleteItem(${i})' class='btn btn-danger'> Remove </button>  </td>
        <td> <button onclick='updateData(${i})'  class='btn btn-primary'> Update </button>  </td>
        </tr>`;
    }
    mydiv.innerHTML=table;
}
showData();
button.addEventListener("click",createObject)
let deleteItem=(i)=>{
    allData.splice(i,1);
    localStorage.product=JSON.stringify(allData);
    showData();
    if(allData.value==""){
        deleteall.classList.add("hid")

    }
}
let deletealldata=()=>{
    localStorage.clear();
    allData.splice(0);
    showData();
    deleteall.classList.add("hid")

}
deleteall.addEventListener("click",deletealldata)
let updateData=(i)=>{
    mood="update";
    title.value=allData[i].title
    inputs[0].value=allData[i].price
    inputs[1].value=allData[i].tax
    inputs[2].value=allData[i].transcost
    inputs[3].value=allData[i].discount
    inputs[4].value=allData[i].total
    count.value=allData[i].count
    department.value=allData[i].department
    globaiID=i;
    z=i

    count.classList.add("hid")
    button.innerHTML="update";
    button.classList.replace("btn-primary","btn-warning")
}

let colmood=()=>{
    if(body.classList.contains("lightmode")){
        body.classList.replace("lightmode","darkmode")
        btnmood.classList.replace("drakmode","lightmode")
        btnmood.innerHTML="Light"
    }
    else{
        body.classList.replace("darkmode","lightmode")
        btnmood.classList.replace("lightmode","drakmode")
        btnmood.innerHTML="Dark"
    }
}
let cls=()=>{
    pop.classList.add("hid")
}
let validation=()=>{
    for(i=0;i<inplist.length;i++){
        if(inplist[i].value.trim()==""){
            pop.classList.remove("hid")
        }

    
            
        
    }
  
    
}

btnmood.addEventListener("click",colmood)
clsbut.addEventListener("click",cls)
let cs=()=>{
for(i=0;i<inplist.length;i++){
if(allData[i].value==""){
    deleteall.classList.add("hid")
}
}
}
let win=()=>{
    window.onload().remove(load)
}

window.addEventListener('load', (event) =>{

    load.remove()

});






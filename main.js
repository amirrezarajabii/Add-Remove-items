// var mahsool = [];
var proName
var proCode
var proDesc
function addProduct(){
 proName = document.getElementById('pname').value;
 proDesc = document.getElementById('descript').value;
 proCode = document.getElementById('code').value;
displayProduct();
// mahsool.push({
//     name:proName,
//     desc:proDesc,
//     code:proCode
// })

}
var count = 1
function  DeletMe(row) { row.parentNode.removeChild(row) }
function displayProduct(){

    let myRow = document.createElement('tr');
    myRow.id='row'+count
    document.getElementById('tableBody').append(myRow);
     let tdName = document.createElement('td');
     tdName.innerHTML=proName+'</br>';
     myRow.append(tdName);
     let tdDesc = document.createElement('td');
     tdDesc.innerHTML=proDesc+'</br>';
     myRow.append(tdDesc);
     let tdCode = document.createElement('td');
     tdCode.innerHTML=proCode+'</br>';
     myRow.append(tdCode);
    let delBtn = document.createElement('td');
    let btn = document.createElement('button');
    delBtn.append(btn)
    btn.className="btn btn-danger btn-sm";
    myRow.append(delBtn);
    btn.addEventListener('click',function(){DeletMe(myRow)})
    btn.innerText='X';
    
     count++
}
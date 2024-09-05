
const input=document.getElementById("input")
const equalsTo=document.getElementById("equalsTo")
function toWrite(ele){
    
    input.value+=ele.id
}
function negativeOperator(ele){
    
    input.value=-input.value
}

function equalTo(){
    const output=eval(input.value)
input.value=output
   
}
function toCancel(){
    input.value=""
}
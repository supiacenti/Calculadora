function insert(num){
    document.querySelector("#res").value = document.querySelector("#res").value + num;
}
function igual(){
    vis = document.querySelector("#res").value;
    if (vis){
        document.querySelector("#res").value = eval(vis);
    }
}
function c(){
    document.querySelector("#res").value = "";
}
function raiz(){
    document.querySelector("#res").value = Math.sqrt(Number(document.querySelector("#res").value))
}
function round(){
    document.querySelector("#res").value = Math.round(Number(document.querySelector("#res").value))
}
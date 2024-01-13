const wail = document.querySelector('.one');
const amine = document.querySelector('.one');
const asame = document.querySelector('.one');
var numchar ;
var curepointer , previouschar;
var amah = ['+','/','-','*'];
function adam(ana){
    wail.value += ana;
    numchar = wail.value.length;
    curepointer = ana;
    previouschars();
   
}
function amin(x){
    amine.value = x;
}
function asam(){
    asame.value = eval(asame.value);

}
function previouschars(){
    previouschar = wail.value.substring(numchar-2,numchar-1);
  
    axah();
    
}
function axah(){
    if(amah.includes(previouschar) && amah.includes(curepointer)){
        if(previouschar==curepointer){
            
        }else{
            awah();
        }
        ayah();
        
    }
}
function ayah(){
    wail.value = wail.value.substring(0,numchar-1);
}
function awah(){
    wail.value = wail.value.slice(0,numchar-2) + wail.value.slice(numchar-1);
}

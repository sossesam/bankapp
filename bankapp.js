alert("working")


function btn1(){
  alert("working")  ;
};
function btn2(){
    var bal = 50000
    var w = document.getElementById("cash").value;
    document.getElementById("balance").innerHTML = "Your  account balance is N" + bal;
    var a = "sanmi"; 
    var b = "april";
    document.getElementById("greet").innerHTML = "Welcome " + a;
    
    c = "sanmi";
    d = "april";

    if(a === c && b ===d){
        if ( bal > w && bal > 0){
          var bal = bal - w;
             document.getElementById("current").innerHTML = "Current Balance: N" + bal;
            
         }
         else{
            document.getElementById("current").innerHTML = "insuffient fund "+ " Current Balance: N";
            
         }
        }else{
        alert("wrong username or password")
    }
    
    
}
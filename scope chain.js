/*var globle="assalamallkum"
function parent(){
    var globle="walakum salam"
    function child(){
        console.log(globle)
        function child1(){
          console.log(globle);
          console.log(this.globle)
        }
        return child1
    }
    return child
}
parent()()()*/
var allah="asalamallakum";
function parent(){
    console.log(this.allah)
    var allah="aadam"
    function child(){
       console.log(allah)
       var allah1="mohammed mustaffa salalhu aalaiwassalam";
       function child1(){
        console.log()
       }
       function child1(){
        console.log(allah1)
        console.log("hazrath usman")
       }
       return child1
    }
    return child
}
parent()()()
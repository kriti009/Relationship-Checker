console.log("connected");
var name1 = $("#urName");
var name2 = $("#baeName");

$("#submitButton").click(() => {
    $(".content").text(name1.val()+" & "+name2.val());
    $(".content").addClass("show");
    calculate();
})
function calc(){
    var count= count_common();
    console.log(count);
    var flames = ['F','L','A','M','E','S'];
    while(count>0){
        console.log(flames.length);
        
    }
    
};
function count_common(){
    var fname = name1.val().toUpperCase();
    var sname = name2.val().toUpperCase();
    var n1 = [];
    var n2 = [];
    for(var i=0 ; i<fname.length; i++){
        n1[i] = fname.charAt(i);
        // console.log(n1[i]);
    }
    for(var i=0 ; i<sname.length; i++){
        n2[i] = sname.charAt(i);
        // console.log(n2[i]);
    }
    for(var i=0; i<fname.length; i++){
        for(var j=0;j<sname.length; j++){
            if(n1[i] === n2[j]){
                n1[i]=0;
                n2[j]=0;
            }
        }
    }
    var count= 0;
    for(var i=0;i<fname.length; i++){
        if(n1[i]!=0)
            count++;
    }
    for(var i=0;i<sname.length; i++){
        if(n2[i]!=0)
            count++;
    }
    return count;
}
function clear_all(){
    name1.val("");
    name1.val("");
}

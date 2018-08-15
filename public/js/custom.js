var myHilitor;

window.addEventListener("DOMContentLoaded",function(){
    myHilitor = new Hilitor();
})

window.addEventListener("keydown",function (e) {

    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) { 
        e.preventDefault();
       
        $("#findbar").toggle();

        if($("#findbar").is(":visible")){
            $("#findbarSearch").focus();
        } else {
            $("#findbarSearch").blur();
        }
    }
});

$('#findbarSearch').keyup(function(e){
    if(e.keyCode == 13)
    {
        var searchText = $('#findbarSearch').val();
        myHilitor.apply(searchText);
        //window.find(searchText, false, false, true, false, false);
    }
});

var win;
var p;

$("#nextSearch").click(function(){
    
    var element = document.getElementById(myHilitor.getNextSearch());
    element.scrollIntoView();

    if(myHilitor.tempCount > myHilitor.count){
        myHilitor.count = 0;
    }
});


$("#actionButton1").click(function(){

});

$("#actionButton2").click(function(){

   
});

$("#actionButton3").click(function(){
    var myHilitor = new Hilitor();
    myHilitor.apply("match is found");
});

$("#actionButton4").click(function(){
    
});



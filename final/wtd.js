$(document).ready(function(){

	$(".pin").hide();
	
	$("a.cell").mouseover(function(){
		$(this).css("background-color", "#f5a397");
		$(this).find(".pin").show();
	});
	$("a.cell").mouseout(function(){
		$(this).css("background-color", "#cdb8f2");
		$(this).find(".pin").hide();
	});
	$("section").mouseover(function(){
	$("section").hide();
	});

 });  

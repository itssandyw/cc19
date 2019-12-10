$(document).ready(function(){

	$(".pin").hide();
	
	$(".cell:nth-child(2n+2)").mouseover(function(){
		$(".cell:nth-child(2n+2)").css("background-color", "#f5a397");
		$(".pin").show();
	});
	$(".cell:nth-child(2n+2)").mouseout(function(){
		$(".cell:nth-child(2n+2)").css("background-color", "#cdb8f2");
		$(".pin").hide();
	});
	$("section").mouseover(function(){
		$("section").hide();
	});
	
 });

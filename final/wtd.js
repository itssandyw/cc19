$(document).ready(function(){

	$(".pin").hide();
	
	$(".cell:nth-child(2n+2)").mouseover(function(){
		$(".cell:nth-child(2n+2)").css("background-color", "lightgray");
		$(".pin").show();
	});
	$(".cell:nth-child(2n+2)").mouseout(function(){
		$(".cell:nth-child(2n+2)").css("background-color", "black");
		$(".pin").hide();
	});
	
 });
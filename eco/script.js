$(document).ready(function(){

	$(".bubble1").hide();
	$(".bubble2").hide();
	$(".jellyfish3").hide();
	$(".jellyfish4").hide();

	$(".fish1").click(function(){
		$(".bubble1").show();
	});
	$(".fish2").click(function(){
		$(".bubble2").show();
	});
	$(".jellyfish2").click(function(){
		$(".jellyfish2").hide();
		$(".jellyfish3").show();
	});
	$(".jellyfish1").click(function(){
		$(".jellyfish1").hide();
		$(".jellyfish4").show();
	});
});
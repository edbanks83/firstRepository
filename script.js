$(document).ready(function () {
$(".div1").on("click", function() {
	var addChicken = $("<li></li>").text("Chicken");
	$("ol.list").append(addChicken)
});

$(".div2").on("click", function() {
	var addBeef = $("<li></li>").text("Beef");
	$("ol.list").append(addBeef)
});
});
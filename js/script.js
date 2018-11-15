$(function () {
	var itemNum = $("#wrap img").length;
	var itemDeg = 360 / itemNum;
	$("#wrap img").each(function (index, element) {
    	$(element).css({
        	transform: "rotateY(" + itemDeg * index + "deg) translateZ(310px)"
        });
    });
});
 
$("#wrap img").click(function(){
	var src = $(this).attr("src");
	$("#show").css({
		"background":"url("+src+")"
	}).removeClass("zoomOutUp").addClass("zoomInDown").show();
});

$("#show").click(function(){
	if($(this).css("display") == "block"){
		$(this).addClass("zoomOutUp");
	}
})

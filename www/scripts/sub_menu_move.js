define(["jquery"],function($){
	var sub_menu_move = sub_menu_move || {};
	sub_menu_move.show=function(){
		$("#sub-menu").animate({top:"0px"},150);

	};
	sub_menu_move.hide=function(){
		console.log("adsfassd");
		$("#sub-menu").animate({bottom:"100px"},150);
	}
	return sub_main_menu;
});
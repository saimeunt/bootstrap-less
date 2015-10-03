/*
var Router=Package["iron:router"] && Package["iron:router"].Router;

if(Router){
	Iron.Router.plugins.hideBootstrapModalOnStop=function(router,options){
		router.onStop(function(){
			// hide modal on route change
			//$(".modal").modal("hide");
			// hide modal backdrop on route change
			$(".modal-backdrop").remove();
			// remove modal-open state on body
			$("body").removeClass("modal-open");
		});
	};
}
*/

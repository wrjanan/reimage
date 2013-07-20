(function($) {

	$.fn.manageDefault = function () {
	
		return this.each(function(){
		
			var self = $(this);
			
			if (self.find(".manageDefault").length) {
				
				var resetDefault = function() {
					self.find(".manageDefault").each(function(){
						$(this).val($(this).attr("title"));
					});
				}
				
				resetDefault();
			
				self.find(".manageDefault").live("focusin focusout", function(event){
					
					var title = $(this).attr("title");
				
					if (event.type == "focusin") {
						if ($(this).val() == title) {
							$(this).val("");
						}
					} else if (event.type == "focusout") {
						if ($(this).val() == "") {
							$(this).val(title);
						}
					}
				
				});
			}
						
		});
	}

})(jQuery);
var Menu = {
	init: function(){
		var self = this;
		setTimeout(function(){
			self.close();
		}, 3000);
		
		this.initEvents();
	},
	
	initEvents: function(){
		var self = this;
		
		$("#menu").hover(function(e){
			if(self._timer){
				clearTimeout(self._timer);
				return;
			}
			self.open();
		}, function(e){
			self._timer = setTimeout(function(){
				self.close();
				self._timer = null;
			}, 500);
			
		});
	},
	
	open: function(){
		$('#menu').animate({left: 0});
	},
	
	close: function(){
		$('#menu').animate({left: '-9%'});
	}
};
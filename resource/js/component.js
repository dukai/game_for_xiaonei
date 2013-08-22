var CTMS = function(options){
	this._initCTMS(options);
}

CTMS.prototype = {
	_initCTMS: function(options){
		this.options = {};
		
		for(var key in options){
			this.options[key] = options[key];
		}
		
		this._initEvents();
	},
	
	_initEvents: function(){
		var self = this;
		$(this.options.container).find('.current').click(function(e){
			self.toggle();
		});
		
		$(this.options.container).find('li').click(function(e){
			var value = this.innerHTML;
			self.setValue(value);
			self.close();
			
			self.options.onselect && self.options.onselect.call(this, value);
		});
	},
	
	setValue: function(value){
		$(this.options.container).find('.current').html(value);
		$(this.options.container).find('input').val(value);
	},
	
	open: function(){
		$(this.options.container).addClass('select');
	},
	
	close: function(){
		$(this.options.container).removeClass('select');
	},
	
	toggle: function(){
		$(this.options.container).toggleClass('select');
	}
};

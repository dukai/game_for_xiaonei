MouseEventManager = {
	_mousemove: function(e){
		this._setPointerPosition(e);
		var pos = this._getPointerPosition();
		for(var i in this._eventsPool.mouseover){
				var event = this._eventsPool.mouseover[i];
				var status = event.target.collision(pos[0], pos[1]);
				
				if(event.target.mouseStatus === undefined){
					event.target.mouseStatus = status;
					
					status && event.callback.call(event.target, e);
				}else{
					if(!event.target.mouseStatus){
						status && event.callback.call(event.target, e);
						event.target.mouseStatus = status;
					}
				}
			}
			
			for(var i in this._eventsPool.mouseout){
				var event = this._eventsPool.mouseout[i];
				var status = event.target.collision(pos[0], pos[1]);
				
				if(event.target.mouseStatus === undefined){
					event.target.mouseStatus = status;
					if(!status){
						event.callback.call(event.target, e);
					}
					
				}else{
					if(event.target.mouseStatus){
						status || event.callback.call(event.target, e);
						event.target.mouseStatus = status;
					}
				}
			}
	},
	
	_click: function(e){
		this._setPointerPosition(e);
		var pos = this._getPointerPosition();
		
		for(var i in this._eventsPool.click){
			var event = this._eventsPool.click[i];
			var status = event.target.collision(pos[0], pos[1]);
			status && event.callback.call(event.target, e);
		}
	},
	
	_setPointerPosition: function(e){
		this._mouseX = e.pageX;
		this._mouseY = e.pageY;
	},
	_getPointerPosition: function(){
		return [this._mouseX, this._mouseY];
	},
	
	_eventsPool: {
		keydown: {},
		keyup: {},
		click: {},
		keypress: {},
		mousemove: {},
		mouseover: {},
		mouseout: {},
		collide: {},
		hit: {}
	},
	_guid: 1,
	_getGuid: function(){
		return this._guid++;
	},
	
	add: function(eventType, target, listener){
		listener.__guid = this._getGuid();
		var event = {
			target: target, 
			callback: listener,
			init: false,
			guid: listener.__guid
		};	
		
		if(eventType == 'mouseover' || eventType == 'mouseout'){
			event.target.__mouseover = false;
		}
		
		this._eventsPool[eventType][listener.__guid] = event;
	},
	
	remove: function(eventType, target, listener){
		var guid = listener.__guid;
		delete this._eventsPool[eventType][guid];
	},
	
	init: function(selector){
		var self = this;
		$(selector).mousemove(function(e){
			self._mousemove(e);
		});
		
		$(selector).click(function(e){
			self._click(e);
		})
	}
};
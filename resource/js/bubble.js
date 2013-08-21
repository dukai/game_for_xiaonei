var Bubble = function(options){
	this._initBubble(options);
};
/**
 * options = {value, container, left, top}
 */
Bubble.prototype = {
	_initBubble: function(options){
		this.options = options;
		this.maxWidthScale = 9.47916666666667;
		this.minWidthScale = 3.90625;
		this.widthDiff = this.maxWidthScale - this.minWidthScale;
		
		this.maxHeightScale = 22.59259259259259;
		this.minHeightScale = 9.25925925925926;
		this.heightDiff = this.maxHeightScale - this.minHeightScale;
		
		this.fontScale = 0.3072;
		this._initUI();
	},
	
	_initUI: function(){
		var value = this.options.value;
		var bubbleBox = document.createElement('div');
		bubbleBox.className = 'bubble';
		var img = new Image();
		img.src = 'resource/images/bubble.png';
		var span = document.createElement('span');
		var displayValue = value > 999 ? '999+' : value;
		var calValue = value > 999 ? 1000 :  value;
		span.innerHTML = displayValue;
		var percent = calValue / 1000;
		var ws = this.widthDiff * percent  + this.minWidthScale;
		var hs = this.heightDiff * percent + this.minHeightScale;
		$(bubbleBox).css({
			width: ws + '%',
			height: hs + '%',
			left: this.options.left,
			top: this.options.top,
			fontSize: ws * this.fontScale + '%'
		});
		bubbleBox.appendChild(img);
		bubbleBox.appendChild(span);
		$(this.options.container).append(bubbleBox);
	}
};
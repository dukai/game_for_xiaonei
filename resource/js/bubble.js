var Bubble = function(options){
	this._initBubble(options);
};
/**
 * options = {value, container, left, top}
 */
Bubble.prototype = {
	_initBubble: function(options){
		this.options = options;
		this.maxWidthScale = 8.6;
		this.widthDiff = this.maxWidthScale - this.minWidthScale;
		
		this.maxHeightScale = 21;
		this.heightDiff = this.maxHeightScale - this.minHeightScale;
		
		this.fontScale = 0.3072;
		this._initUI();
	},
	
	_initUI: function(){
		var value = this.options.value;
		var bubbleBox = document.createElement('div');
		bubbleBox.className = 'bubble';
		bubbleBox.id = 'bub_' + this.options.id;
		var img = new Image();
		img.src = 'resource/images/bubble.png';
		var span = document.createElement('span');
		var displayValue = value > 999 ? '999+' : value;
		span.innerHTML = displayValue;
		var i = document.createElement('i');
		i.innerHTML = '条秘籍';
		var ws = this.maxWidthScale;
		var hs = this.maxHeightScale;
		$(bubbleBox).css({
			width: ws + '%',
			height: hs + '%',
			left: this.options.left,
			top: this.options.top,
			fontSize: '3%'
		});
		bubbleBox.appendChild(img);
		bubbleBox.appendChild(span);
		bubbleBox.appendChild(i);
		$(this.options.container).append(bubbleBox);
	}
};
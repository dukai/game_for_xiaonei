var resources = [
	{'name': 'bg1920', type: 'image', src: 'resource/images/bg1920.jpg'},
	{'name': 'announce', type: 'image', src: 'resource/images/announce.png'},
	{'name': 'announce_hover', type: 'image', src: 'resource/images/announce_hover.png'},
	{'name': 'bubble', type: 'image', src: 'resource/images/bubble.png'},
	{'name': 'jiaoxuelou', type: 'image', src: 'resource/images/jiaoxuelou.png'},
	{'name': 'jiaoxuelou_hover', type: 'image', src: 'resource/images/jiaoxuelou_hover.png'},
	{'name': 'lake', type: 'image', src: 'resource/images/lake.png'},
	{'name': 'lake_hover', type: 'image', src: 'resource/images/lake_hover.png'},
	{'name': 'library', type: 'image', src: 'resource/images/library.png'},
	{'name': 'library_hover', type: 'image', src: 'resource/images/library_hover.png'},
	{'name': 'logo', type: 'image', src: 'resource/images/logo.png'},
	{'name': 'menu', type: 'image', src: 'resource/images/menu.png'},
	{'name': 'shitang', type: 'image', src: 'resource/images/shitang.png'},
	{'name': 'shitang_hover', type: 'image', src: 'resource/images/shitang_hover.png'},
	{'name': 'shubaoting', type: 'image', src: 'resource/images/shubaoting.png'},
	{'name': 'shubaoting_hover', type: 'image', src: 'resource/images/shubaoting_hover.png'},
	{'name': 'sport', type: 'image', src: 'resource/images/sport.png'},
	{'name': 'sport_hover', type: 'image', src: 'resource/images/sport_hover.png'},
	{'name': 'sushe', type: 'image', src: 'resource/images/sushe.png'},
	{'name': 'sushe_hover', type: 'image', src: 'resource/images/sushe_hover.png'},
	{'name': 'userinfo', type: 'image', src: 'resource/images/userinfo.png'},
	{'name': 'wellandtree', type: 'image', src: 'resource/images/wellandtree.png'},
	{'name': 'wellandtree_hover', type: 'image', src: 'resource/images/wellandtree_hover.png'},
	{'name': 'xiaomaipu', type: 'image', src: 'resource/images/xiaomaipu.png'},
	{'name': 'xiaomaipu_hover', type: 'image', src: 'resource/images/xiaomaipu_hover.png'},
	{'name': 'yushi', type: 'image', src: 'resource/images/yushi.png'},
	{'name': 'yushi_hover', type: 'image', src: 'resource/images/yushi_hover.png'}
];


resourceLoader.load(resources);

resourceLoader.onProgress = function(e){
	$('#mask').show();
	$('#mask').html(parseInt(e.loadedCount / e.totalCount * 100) + '%');
};

resourceLoader.onComplete = function(){
//隐藏遮罩图层
$("#mask").hide();
//初始化鼠标事件
MouseEventManager.init('#main');
//建筑物可点击区域	
var buildingsCoordinates = [
	//湖泊
	[[926, 330] ,[1085, 423], [1357, 282], [1179, 189]],
	//体育馆
	[[1296, 407], [1381, 498], [1482, 548], [1723, 414], [1414, 226]],
	
	//宿舍楼
	[[274, 281], [274, 412], [450, 500], [690, 367], [690, 224], [530, 140]],
	//公告牌
	[[142, 385], [142, 460], [254, 400], [254, 327]],
	//树和井
	[[0,501], [46, 609], [181, 629], [185, 500], [115, 448]],
	//浴室
	[[342, 553], [189, 660], [191, 722], [259, 756], [393, 761], [484, 732], [477, 650], [457, 612]],
	//图书馆
	[[553, 466],[532, 519], [530, 632], [677, 702 ], [1042, 510], [1039, 417], [867 ,306]],
	//餐厅
	[[499, 709], [449, 835], [593, 908], [765, 820], [620, 650]],
	
	//教学楼
	[[916, 656], [916, 780], [1104, 878], [1420, 697], [1420, 577], [1230,475]],
	//小卖铺
	[[892, 807], [756, 872], [760, 1000], [900, 1056], [1033, 1000], [1037, 874]],
	//gate
	[[1523, 864], [1525,1056], [1826, 1007], [1870, 877], [1856, 817]]
	
	
	
];
var ps = [];
for(var i= 0, len = buildingsCoordinates.length; i < len; i++){
	ps.push(new Polygon(buildingsCoordinates[i]));
}

var mouseoverEvents = [
	{
		selector: 'lake'
	},
	
	{
		selector: 'sport'
	},
	
	{
		selector: 'sushe'
	},
	{
		selector: 'announce'
	},
	{
		selector: 'wellandtree'
	},
	{
		selector: 'yushi'
	},
	{
		selector: 'library'
	},
	{
		selector: 'shitang'
	},
	
	
	{
		selector: 'jiaoxuelou'
	},
	{
		selector: 'xiaomaipu'
	},
	{
		selector: 'gate', 
		onclick: function(){
			$("#college_change_layer").show();
		}
	}
	
	
];

for(var i = 0, len = mouseoverEvents.length; i < len; i++){
	var info = mouseoverEvents[i];
	info.dom = document.getElementById('b_' + info.selector);
	info.img = info.dom.getElementsByTagName('img')[0];
	info.imgHover = info.dom.getElementsByTagName('img')[1];
	$(info.imgHover).hide();
	!function(info){
		MouseEventManager.add('mouseover', ps[i], function(){
			$(info.imgHover).show();
			
			$('#bub_' + info.selector).fadeIn();
		});
		MouseEventManager.add('mouseout', ps[i], function(){
			$(info.imgHover).hide();
			$('#bub_' + info.selector).fadeOut();
		});
		if(info.onclick){
			MouseEventManager.add('click', ps[i], function(e){
				info.onclick();
			});
		}
		
	}(info);
}



$(window).resize(function(e){
	resizeBuildingsRegion();
});
//var context = document.getElementById('subline').getContext('2d');
var resizeBuildingsRegion = function(){
	//var canvas = document.getElementById('subline');
	//canvas.width = $('#main').width();
	//canvas.height = $('#main').height();
	//context.clearRect(0, 0, 1920, 1080);
	var percent = $('#main').width() / 1920;
	$('body').css('font-size', $('#main').width() + 'px');
	for(var i = 0, len = ps.length; i< len; i++){
		ps[i].resize(percent);
		//ps[i].draw(context);
	}
};

resizeBuildingsRegion();
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
			self.open();
		}, function(e){
			self.close();
		});
	},
	
	open: function(){
		$('#menu').animate({left: 0});
	},
	
	close: function(){
		$('#menu').animate({left: '-9%'});
	}
};

Menu.init();
setTimeout(function(){
	$('.bubble').fadeOut();
}, 3000);


$("#btn_login").click(function(){
	$("#userinfo").addClass('login');
})

$("#btn_logout").click(function(){
	$("#userinfo").removeClass('login');
})

};
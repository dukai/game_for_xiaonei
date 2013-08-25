//需要载入的资源
var resources = [
	{'name': 'loading', type: 'image', src: 'resource/images/loading.jpg'},
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

//载入资源
resourceLoader.load(resources);
//载入资源进度通知
resourceLoader.onProgress = function(e){
	//显示加载页内容，更新进度条
	$('#loading_mask').show();
	$('#loading_mask .progress .bar').css('width', parseInt(e.loadedCount / e.totalCount * 100) + '%');
};
//完成资源加载调用函数
resourceLoader.onComplete = senceInit;

//加载超过10s强制进入
var senceInitTimer = setTimeout(function(){
	senceInit();
	resourceLoader.onComplete = null;
}, 10000);

//主函数
function senceInit(){
//清除强制加载
clearTimeout(senceInitTimer);
//2s后隐藏遮罩图层
setTimeout(function(){
	$("#loading_mask").hide();
}, 2000);
//初始化鼠标事件
MouseEventManager.init('#l_bulidings,#layer_ui');
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
	[[1523, 864], [1525,1056], [1826, 1007], [1870, 877], [1856, 817]],
	
	//书报亭
	[[713, 115], [717, 195], [780, 230], [836, 200], [830, 120], [768, 87]]
	
];
var ps = [];
//初始化点击区域多边形
for(var i= 0, len = buildingsCoordinates.length; i < len; i++){
	ps.push(new Polygon(buildingsCoordinates[i]));
}
//建筑物鼠标事件
var mouseoverEvents = [
	//湖泊
	{
		selector: 'lake',
		onclick: function(){
			alert("lake");
		}
	},
	//体育场
	{
		selector: 'sport',
		
		onclick: function(){
			alert("sport");
		}
		
	},
	//宿舍
	{
		selector: 'sushe',
		
		onclick: function(){
			alert("sushe");
		}
	},
	//公告栏
	{
		selector: 'announce',
		
		onclick: function(){
			alert("announce");
		}
	},
	//树和井
	{
		selector: 'wellandtree',
		
		onclick: function(){
			alert("wellandtree");
		}
	},
	//浴室
	{
		selector: 'yushi',
		
		onclick: function(){
			alert("yushi");
		}
	},
	//图书馆
	{
		selector: 'library',
		
		onclick: function(){
			alert("library");
		}
	},
	//食堂
	{
		selector: 'shitang',
		
		onclick: function(){
			alert("shitang");
		}
	},
	//教学楼
	{
		selector: 'jiaoxuelou',
		
		onclick: function(){
			alert("jiaoxuelou");
		}
	},
	//小卖铺
	{
		selector: 'xiaomaipu',
		
		onclick: function(){
			alert("xiaomaipu");
		}
	},
	//学校大门
	{
		selector: 'gate', 
		onclick: function(){
			$("#college_change_layer").show();
		}
	},
	//书报亭
	{
		selector: 'shubaoting',
		
		onclick: function(){
			alert("shubaoting");
		}
	}
	
	
];
//绑定建筑物区域事件， 鼠标移入移出，以及点击事件
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


//窗口大小改变后处理尺寸变化
$(window).resize(function(e){
	resizeBuildingsRegion();
});
//var context = document.getElementById('subline').getContext('2d');//调试信息
//窗口改变大小后重新计算尺寸
var resizeBuildingsRegion = function(){
	//var canvas = document.getElementById('subline');//调试信息
	//canvas.width = $('#main').width();//调试信息
	//canvas.height = $('#main').height();//调试信息
	//context.clearRect(0, 0, 1920, 1080);//调试信息
	//计算百分比
	var percent = $('#main').width() / 1920;
	//计算容器高度
	$('#main').height(parseInt(1080 * percent));
	//计算基本字号
	$('body').css('font-size', $('#main').width() + 'px');
	//计算建筑多边形尺寸
	for(var i = 0, len = ps.length; i< len; i++){
		ps[i].resize(percent);
		//ps[i].draw(context); //调试信息
	}
};
//页面加载执行首次尺寸计算
resizeBuildingsRegion();

//初始化菜单对象
Menu.init();

/**
 * bubble 尺寸与字体大小的比例 0.3072
 */

//自定义下拉列表初始化, 如果需要可针对每一个下拉列表单独初始化，只需获取自定义列表容器即可
/*
new CTMS({
	container: '#c_c_college',
	onselect: function(value){
		console.log(value);//形参为选中的值
	}
});

*/

$('.ctms').each(function(index){
	new CTMS({
		container: this,//传入dom对象或者jQuery选择符
		onselect: function(value){}//相应选择事件
	})
});

//弹出层关闭按钮事件
$('img.btn_close').click(function(e){
	$(this.parentNode).hide();
});
//创建按钮事件，关闭学校选择层，打开学校创建层
$('.btn_create').click(function(e){
	$('#college_select_layer').hide();
	$('#college_create_layer').show();
});

//添加气泡对象
//宿舍气泡
new Bubble({
	value: 888, //气泡值
	container: '#l_bulidings', //添加的层，默认是跟建筑物在同一层
	left: '31%', //气泡位置
	top: '10%', //气泡位置
	id: 'sushe' //气泡id，需跟mouseoverEvents中的id对应
});
//公告栏气泡
new Bubble({
	value: 888,
	container: '#l_bulidings',
	left: '11%',
	top: '18%',
	id: 'announce'
});
//井和树气泡
new Bubble({
	value: 888,
	container: '#l_bulidings',
	left: '4%',
	top: '32%',
	id: 'wellandtree'
});
//图书馆气泡
new Bubble({
	value: 888,
	container: '#l_bulidings',
	left: '42%',
	top: '32%',
	id: 'library'
});
//浴室气泡
new Bubble({
	value: 888,
	container: '#l_bulidings',
	left: '20%',
	top: '42%',
	id: 'yushi'
});
//食堂气泡
new Bubble({
	value: 888,
	container: '#l_bulidings',
	left: '34%',
	top: '52%',
	id: 'shitang'
});
//教学楼气泡
new Bubble({
	value: 888,
	container: '#l_bulidings',
	left: '68%',
	top: '42%',
	id: 'jiaoxuelou'
});
//体育场气泡
new Bubble({
	value: 888,
	container: '#l_bulidings',
	left: '78%',
	top: '22%',
	id: 'sport'
});
//湖泊气泡
new Bubble({
	value: 888,
	container: '#l_bulidings',
	left: '58%',
	top: '11%',
	id: 'lake'
});

//4s后所有气泡消失
setTimeout(function(){
	$('.bubble').fadeOut();
}, 4000);

//切换登录登出事件，显示用户信息
$("#btn_login").click(function(){
	$("#userinfo").addClass('login');
})
//切换登录登出事件，显示登入
$("#btn_logout").click(function(){
	$("#userinfo").removeClass('login');
})
//学院选择提交按钮事件
$('#college_select_layer .btn_submit').click(function(){
	$('#school').html($("#c_s_l_cn").val());
	$('#college_select_layer').hide();
});
//打开活动说明
$('#menu ul li.active_exp').click(function(e){
	$('#activity_layer').show();
});
};
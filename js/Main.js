﻿
init(50,"gamePanel",900,600,main);


var welcomeLayer;
//-------游戏场景------
var backGroundLayer;//游戏背景
var loadingLayer;//载入图层
var imglist={};//图像列表对象
var imgData=[
	{name:"backGround",path:"img/backGround.jpg"},
	{name:"球场2",path:"img/球场2.jpg"},
	{name:"neimaer",path:"img/neimaer.png"},
	{name:"neimaer1",path:"img/neimaer1.png"},
	{name:"football",path:"img/football.png"},
	{name:"花",path:"img/花.png"},
	{name:"花花",path:"img/花花.png"},
	{name:"meixi",path:"img/meixi.png"},
	{name:'Argentina',path:'img/Argentina.png'},
    {name:'Brazil',path:'img/Brazil.png'}
];
var showFlag=new Array();
var sound;
var soundPlayer = true;








//---------主函数入口---------
function main(){
LGlobal.setDebug(true);
backGroundLayer=new LSprite()	;
backGroundLayer.graphics.drawRect(1,"#000",[0,0,900,600],true,"#000");
addChild(backGroundLayer);
/*
Bound = new LSprite();
backGroundLayer.addChild(Bound);

Bound.graphics.drawRect(1,'#f00',[20,20,800,10],true,'#f00');
*/
loadingLayer=new LoadingSample1();
backGroundLayer.addChild(loadingLayer);
    Bound();
LLoadManage.load(
	imgData,
	function (progress){
	loadingLayer.setProgress(progress);
	},
	gameInit
);

}

//-----欢迎页面开始-----
function gameInit(result){
	imglist=result;
	backGroundLayer.removeChild(loadingLayer);
	loadingLayer=null;
	var title=new LTextField();
	
	title.x=170;
	title.y=100;
	title.size=55;
	title.color="white";
	title.text="欢迎进入游戏世界";
	backGroundLayer.addChild(title);
	
	backGroundLayer.graphics.drawRect(1,"#fff",[200,270,500,150]);
	var clickText=new LTextField();
	clickText.color="#fff";
	clickText.text="点击进入游戏";
	clickText.size=30;
	clickText.x=325;
	clickText.y=320;
	backGroundLayer.addChild(clickText);
	backGroundLayer.addEventListener(LMouseEvent.MOUSE_DOWN,changePage1);
	
	
	
}
//-----欢迎页面结束-----



function changePage1(){
/*	var back;
    back = new LSprite();*/
	LGlobal.box2d=new LBox2d();
	backGroundLayer.die();
	backGroundLayer.removeAllChild();
  /*  back.graphics.drawRect(1,'#f00',[0,0,900,600],false);*/
	var backGroundPic=new LBitmap(new LBitmapData(imglist["球场2"]));
	backGroundLayer.addChild(backGroundPic);
  /*  backGroundLayer.addChild(back);*/
	onup();
	Bound();

	

	backGroundLayer.graphics.drawRect(1,"#fff",[200,270,500,150]);
	var clickText=new LTextField();
	clickText.color="#fff";
	clickText.text="单人游戏";
	clickText.size=30;
	clickText.x=325;
	clickText.y=320;
	backGroundLayer.addChild(clickText);
	backGroundLayer.addEventListener(LMouseEvent.MOUSE_DOWN,changePage);
}

ctx.fillStyle = '#000000';
ctx.globalAlpha = Math.max((step.distance + step.shading) / this.lightRange - map.light, 0);
ctx.fillRect(left, wall.top, width, wall.height);
//-----游戏场景-----
function changePage(){
/*	var back;
    back = new LSprite();*/
	LGlobal.box2d=new LBox2d();
	backGroundLayer.die();
	backGroundLayer.removeAllChild();
  /*  back.graphics.drawRect(1,'#f00',[0,0,900,600],false);*/
	var backGroundPic=new LBitmap(new LBitmapData(imglist["backGround"]));
	backGroundLayer.addChild(backGroundPic);
  /*  backGroundLayer.addChild(back);*/
	onup();
	Bound();


	
	//-----------玩家1出现（梅西）------------
	var firstPlayerLayer=new LSprite();
	firstPlayerLayer.x=100;
	firstPlayerLayer.y=300;
	backGroundLayer.addChild(firstPlayerLayer);
	var bitmap= new LBitmapData(imglist["meixi"]);
	firstPlayerLayer.graphics.beginBitmapFill(bitmap);
	firstPlayerLayer.graphics.drawArc(1,"#000",[40,40,40,0,2*Math.PI],false);
	firstPlayerLayer.addBodyCircle(40,40,40,1,5,0.5,0.9);
	firstPlayerLayer.setBodyMouseJoint(true);
	
	//-----玩家2出现（内马尔）-----
	var secondPlayerLayer=new LSprite();
	secondPlayerLayer.x=500;
	secondPlayerLayer.y=300;
	backGroundLayer.addChild(secondPlayerLayer);
	var bitmap= new LBitmapData(imglist["neimaer"]);
	secondPlayerLayer.graphics.beginBitmapFill(bitmap);
	secondPlayerLayer.graphics.drawArc(1,"#000",[40,40,40,0,2*Math.PI],false);
	secondPlayerLayer.addBodyCircle(40,40,40,1,5,0.5,0.9);
	secondPlayerLayer.setBodyMouseJoint(true);
	
	//-----玩家3出现（内马尔1）-----
	var thirdPlayerLayer=new LSprite();
	thirdPlayerLayer.x=300;
	thirdPlayerLayer.y=300;
	backGroundLayer.addChild(thirdPlayerLayer);
	var bitmap= new LBitmapData(imglist["neimaer1"]);
	thirdPlayerLayer.graphics.beginBitmapFill(bitmap);
	thirdPlayerLayer.graphics.drawArc(1,"#000",[40,40,40,0,2*Math.PI],false);
	thirdPlayerLayer.addBodyCircle(40,40,40,1,5,0.5,0.9);
	thirdPlayerLayer.setBodyMouseJoint(true);
	
	var fourPlayerLayer=new LSprite();
	fourPlayerLayer.x=300;
	fourPlayerLayer.y=200;
	backGroundLayer.addChild(fourPlayerLayer);
	var bitmap= new LBitmapData(imglist["football"]);
	fourPlayerLayer.graphics.beginBitmapFill(bitmap);
	fourPlayerLayer.graphics.drawArc(1,"#000",[20,20,20,0,2*Math.PI],false);
	fourPlayerLayer.addBodyCircle(20,20,20,1,5,0.5,0.9);
	fourPlayerLayer.setBodyMouseJoint(true);
	
	var fivePlayerLayer=new LSprite();
	fivePlayerLayer.x=400;
	fivePlayerLayer.y=300;
	backGroundLayer.addChild(fivePlayerLayer);
	var bitmap= new LBitmapData(imglist["花"]);
	fivePlayerLayer.graphics.beginBitmapFill(bitmap);
	fivePlayerLayer.graphics.drawArc(1,"#000",[40,40,40,0,2*Math.PI],false);
	fivePlayerLayer.addBodyCircle(40,40,40,1,5,0.5,0.9);
	fivePlayerLayer.setBodyMouseJoint(true);
	
	var sixPlayerLayer=new LSprite();
	sixPlayerLayer.x=200;
	sixPlayerLayer.y=300;
	backGroundLayer.addChild(sixPlayerLayer);
	var bitmap= new LBitmapData(imglist["花花"]);
	sixPlayerLayer.graphics.beginBitmapFill(bitmap);
	sixPlayerLayer.graphics.drawArc(1,"#000",[40,40,40,0,2*Math.PI],false);
	sixPlayerLayer.addBodyCircle(40,40,40,1,5,0.5,0.9);
	sixPlayerLayer.setBodyMouseJoint(true);
	
	showFlag.push(new LBitmapData(imglist["Argentina"]));
	showFlag.push(new LBitmapData(imglist["Brazil"]));
	
	//显示国旗Argentina
     	Argentina = new LBitmap(showFlag[0]);
     	Argentina.x =50;
     	Argentina.y = 5;
     	backGroundLayer.addChild(Argentina);
	
	//显示国旗Brazil
     	Brazil = new LBitmap(showFlag[1]);
     	Brazil.x = 770;
     	Brazil.y = 5;
     	backGroundLayer.addChild(Brazil);
		
		scoreText();
	
	//设置地板
	  var ground;
	
}



	//---国家比分-----
	function scoreText(){
		resultScore = new LSprite();
     	resultScore.graphics.drawRect(0,'#f80',[0,0,670,30],false,'#000');
     	resultScore.x = 100;
     	resultScore.y =5;
     	backGroundLayer.addChild(resultScore);
     	
     	resultArgentina = new LTextField();
     	resultArgentina.text = '阿根廷';
     	resultArgentina.weight = 'bolder';
     	resultArgentina.color = '#fff';
     	resultArgentina.x = 20;
     	resultArgentina.y = 10;
     	resultScore.addChild(resultArgentina);
     	
     	resultBrazil = new LTextField();
     	resultBrazil.text = '巴西';
     	resultBrazil.weight = 'bolder';
     	resultBrazil.color = '#fff';
     	resultBrazil.x = 610;
     	resultBrazil.y = 10;
     	resultScore.addChild(resultBrazil);
	}
	//播放音乐
function onup(e){
	sound=new LSound();
	sound.load('sound/2014Soccer.mp3');
	sound.addEventListener(LEvent.COMPLETE,loadOver);
}

function loadOver(e){
	sound.play();
	
}
function ondown(event){
	sound.stop();
	
}



//物体碰撞边界
var BoundTop;

function Bound(){
    LGlobal.box2d =  new LBox2d();
    BoundTop = new LSprite();
    backGroundLayer.addChild(BoundTop);

    var shapeArray = [
        [[0,0],[10,0],[10,600],[0,600]],
        [[0,0],[900,0],[900,10],[0,10]],
        [[890,0],[900,0],[900,600],[890,600]],
        [[0,590],[900,590],[900,600],[0,600]]
    ];
    BoundTop.addBodyVertices(shapeArray,0,0,0,.5,.4,.5);
}






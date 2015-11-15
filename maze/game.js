window.focus();
enchant();

//ゲームの基本設定
var SCREEN_WIDTH=320;
var SCREEN_HEIGHT=320;
var IMAGES=new Array("chara5.png","chara6.png","chara7.png","icon0.png","map0.png","clear.png");
var MAP_IMAGE="map0.png";//6:壁 7:壁（手前）8:床

//マップの設定
/*
-1:なし
0-19:マップ
20:主人公
30-39:敵（スライム・ウィザード・ダークナイト）
40-49:アイテム（回復薬・防御薬・爆弾）
50-59:ギミック（宝箱・罠・扉）
*/

/*

MAP_DATA[]=[
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
];

*/


var MAP_DATA=new Array();
MAP_DATA[0]=[
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6,50, 8, 8, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 8, 8, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 8, 8, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,30, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 8, 8, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 8, 8, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 8, 8, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 8, 8, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 8, 8, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 8, 8, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 8, 8, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 8, 8, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 8, 8, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 8, 8, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 8, 8, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 8,20, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
];

MAP_DATA[1]=[
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6,41, 8,30, 8, 8, 8, 8, 8,20, 8, 8, 8, 8, 8, 8,32, 8,50, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6,31, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6,40, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
];


MAP_DATA[2]=[
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 8, 8,41, 8, 8, 6, 8, 8,50, 8, 8, 8, 6, 8, 8,42, 8, 8, 6],
[ 6, 8, 8, 8, 8, 8, 6, 8, 8, 8, 8, 8, 8, 6, 8, 8, 8, 8, 8, 6],
[ 6, 8, 8, 8, 8, 8, 6, 8, 8, 8, 8, 8, 8, 6, 8, 8, 8, 8, 8, 6],
[ 6, 8, 8, 8, 8, 8, 6, 8, 8, 8, 8, 8, 8, 6, 8, 8, 8, 8, 8, 6],
[ 6, 8, 8, 8, 8, 8, 6, 8, 8, 8, 8, 8, 8, 6, 8, 8, 8, 8, 8, 6],
[ 6, 8, 8, 8, 8, 8, 6, 8, 8, 8, 8, 8, 8, 6, 8, 8, 8, 8, 8, 6],
[ 6, 8, 8, 8, 8, 8, 6, 8, 8, 8, 8, 8, 8, 6, 8, 8, 8, 8, 8, 6],
[ 6, 8, 8, 8, 8, 8, 6, 8, 8, 8, 8, 8, 8, 6, 8, 8, 8, 8, 8, 6],
[ 6, 8, 8, 8, 8, 8, 6, 8, 8, 8, 8, 8, 8, 6, 8, 8, 8, 8, 8, 6],
[ 6, 8, 8, 8, 8, 8, 6, 8, 8, 8, 8, 8, 8, 6, 8, 8, 8, 8, 8, 6],
[ 6, 6, 6,30, 6, 6, 6, 6, 6,52,52, 6, 6, 6, 6, 6,30, 6, 6, 6],
[ 6, 6, 6,51, 6, 6, 6, 6, 6,51,51, 6, 6, 6, 6, 6,51, 6, 6, 6],
[ 6, 6, 6, 8, 6, 6, 6, 6, 6,51,51, 6, 6, 6, 6, 6, 8, 6, 6, 6],
[ 6, 6, 6, 8, 6, 6, 6, 6, 6,51,51, 6, 6, 6, 6, 6, 8, 6, 6, 6],
[ 6, 6, 6, 8, 6, 6, 6, 6, 6,51,51, 6, 6, 6, 6, 6, 8, 6, 6, 6],
[ 6, 6, 6, 8, 8, 8, 8, 8, 8, 8,20, 8, 8, 8, 8, 8, 8, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
];


MAP_DATA[3]=[
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6,50, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6,52, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6,41, 8, 8, 8,32, 8, 8, 8,40, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 8, 6, 6, 6, 8, 6, 6, 6, 8, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 8, 6, 6, 6, 8, 6, 6, 6, 8, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 8, 6, 6, 6, 8, 6, 6, 6, 8, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6,31, 8, 8, 8,20, 8, 8, 8,31, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 8, 6, 6, 6, 8, 6, 6, 6, 8, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 8, 6, 6, 6, 8, 6, 6, 6, 8, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 8, 6, 6, 6, 8, 6, 6, 6, 8, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6,40, 8, 8, 8,31, 8, 8, 8,42, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
];


var FIRST_ID=0;
//FIRST_ID=MAP_DATA.length-1;


//キャラクターのデータを格納するクラス
function SpriteData(image,width,height,frame1,frame2){
    this.image=image==undefined?0:image;
    this.width=width==undefined?0:width;
    this.height=height==undefined?0:height;
    this.frame1=frame1==undefined?0:frame1;
    this.frame2=frame2==undefined?frame1:frame2;
}

//キャラデータの設定
var spriteData=new Array();
spriteData[20]=new SpriteData("chara5.png",32,32,0,9);//主人公

spriteData[30]=new SpriteData("chara6.png",32,32,0,2);//スライム
spriteData[31]=new SpriteData("chara6.png",32,32,3,5);//ウィザード
spriteData[32]=new SpriteData("chara7.png",32,32,0,2);//ダークナイト

spriteData[40]=new SpriteData("icon0.png",16,16,13,13);//回復薬
spriteData[41]=new SpriteData("icon0.png",16,16,12,12);//防御薬
spriteData[42]=new SpriteData("icon0.png",16,16,25,25);//爆弾

spriteData[50]=new SpriteData("map0.png",16,16,25,25);//宝箱
spriteData[51]=new SpriteData("map0.png",16,16,16,16);//ダメージ床
spriteData[52]=new SpriteData("map0.png",16,16,27,27);//岩石

//ページの読み込みが完了してからゲームを初期化する
window.onload=function(){

    //ゲームの初期化
    var game=new Game(SCREEN_WIDTH,SCREEN_HEIGHT);
    game.fps=15;
    game.frame=0;
    var keyStop=false;

    for (i=0; i < IMAGES.length; i++)
        game.preload(IMAGES[i]);

    //スプライトの宣言
    var sprite=new Array();

    game.onload=function() {

        function gameStart(mapID){

            //シーンの設定
            var scene=game.rootScene;
            scene.backgroundColor="black";
            var spriteGroup=new Group();

            //主人公の能力値
            var heroDef=0;
            var heroBomb=0;

            //画面上部のラベルの設定
            var lifeLabel=new LifeLabel(10,10,3);
            lifeLabel.life=3;
            spriteGroup.addChild(lifeLabel);

            var stageLabel=new MutableText(200,10,200);
            stageLabel.text="STAGE:"+(mapID+1);
            spriteGroup.addChild(stageLabel);


            //グラフィックがらみの処理
            var itemIcon=new Array();

            for(i=0;i<2;i++){
                itemIcon[i]=new Sprite(spriteData[41+i].width,spriteData[41+i].height);
                itemIcon[i].image=game.assets[spriteData[41+i].image];
                itemIcon[i].frame=spriteData[41+i].frame1;
                itemIcon[i].visible=false;
                itemIcon[i].moveTo(150+i*20,7);
                spriteGroup.addChild(itemIcon[i]);
            }

            //毎フレームごとの処理
            game.onenterframe=function(){
                //防御薬表示
                itemIcon[0].visible=heroDef>0;
                //爆弾表示
                itemIcon[1].visible=heroBomb>0;
            }

            //MAP_DATAからmapData/spriteMap/heroSprite/spriteを作る
            var map=new Map(16,16);
            var mapData=[
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
            ];
            var spriteMap=[
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
            ];
            var spriteID=0;
            var sprite=new Array();

            for(i=0;i<MAP_DATA[mapID].length;i++){
                for(j=0;j<MAP_DATA[mapID][i].length;j++){

                    //とりあえず床に設定
                    mapData[i][j]=8;
                    if(-1<=MAP_DATA[mapID][i][j]&&MAP_DATA[mapID][i][j]<20){//地形
                        //地形なら地形に置き換える
                        mapData[i][j]=MAP_DATA[mapID][i][j];
                    }else if(20<=MAP_DATA[mapID][i][j]&&MAP_DATA[mapID][i][j]<30){//主人公
                        //スプライトの設定
                        heroSprite=new Sprite(spriteData[20].width,spriteData[20].height);
                        heroSprite.image=game.assets[spriteData[20].image];
                        heroSprite.frame=spriteData[20].frame1;
                        heroSprite.anime=new Array(1,0,1,2);
                        heroSprite.animeFrame=0;

                        //セル座標の取得設定
                        heroSprite.put=function(X,Y){
                            this.x=X*16-8;
                            this.y=(Y-1)*16;
                        }
                        heroSprite.X=function(){return ((this.x+8)/16);}
                        heroSprite.Y=function(){return (this.y/16+1);}

                        //heroSprite._element.style.zIndex = 256;
                        heroSprite.put(MAP_DATA[mapID][0],MAP_DATA[mapID][1]);

                        //移動処理
                        heroSprite.move=function(x,y,d){
                            if(keyStop)return;
                            //アニメーションする
                            this.animeFrame=(this.animeFrame+1)%4;
                            this.frame=d*9+this.anime[this.animeFrame];

                            //移動先セル座標の設定
                            var X=(this.x+x+8)/16;
                            var Y=(this.y+y)/16+1;

                            //移動判定
                            //移動先が床か
                            if(mapData[Y][X]==8){
                                var canMove=true;
                                //spriteMap[Y][X]にものがあるか
                                if(spriteMap[Y][X]!=-1){
                                    var id=parseInt(sprite[spriteMap[Y][X]].id);
                                    switch(id){
                                        case 30://スライム
                                            lifeLabel.life-=Math.max(1-heroDef,0);
                                            break;

                                        case 31://ウィザード
                                            lifeLabel.life-=Math.max(2-heroDef,0);
                                            break;

                                        case 32://ダークナイト
                                            lifeLabel.life-=Math.max(3-heroDef,0);
                                            break;

                                        case 40://回復薬
                                            lifeLabel.life=10;
                                            break;

                                        case 41://防御薬
                                            heroDef++;
                                            break;

                                        case 42://爆弾
                                            heroBomb++;
                                            break;

                                        case 50://宝箱
                                            scene.removeChild(spriteGroup);
                                            var keyStop=true;

                                            if(mapID+1<MAP_DATA.length)gameStart(mapID+1);
                                            else {
                                                var clearGroup=new Group();

                                                var clear=new Sprite(267,48);
                                                clear.image=game.assets["clear.png"];
                                                clear.moveTo((320-267)/2,(320-48)/2);
                                                //clear._element.style.zIndex = 300;

                                                clearGroup.addChild(clear);

                                                /*
                                                var hero=new Sprite(spriteData[20].width,spriteData[20].height);
                                                hero.image=game.assets[spriteData[20].image];
                                                heroSprite.frame=spriteData[20].frame1;
                                                hero.moveTo((320-spriteData[20].width)/2,280-spriteData[20].height);
                                                clearGroup.addChild(hero);
                                                */

                                                scene.addChild(clearGroup);
                                            }
                                            break;

                                        case 51://ダメージ床
                                            lifeLabel.life-=Math.max(1-heroDef,0);
                                            break;

                                        case 52://岩石
                                            if(heroBomb>0)heroBomb--;
                                            else canMove=false;
                                            break;
                                        default:
                                            alert(sprite[spriteMap[Y][X]].id);
                                            break;
                                    }
                                }
                                //ゲームオーバー処理
                                if(lifeLabel.life<=0){
                                    spriteGroup.removeChild(this);
                                    canMove=false;
                                    game.end();
                                }
                                //移動できるなら移動する。また移動先のspriteを削除する
                                if(canMove==true){
                                    this.x=X*16-8;
                                    this.y=(Y-1)*16;
                                    if(id!=51){
                                        spriteGroup.removeChild(sprite[spriteMap[Y][X]]);
                                        spriteMap[Y][X]=-1;
                                    }
                                }//if

                            }//if
                        }//move

                        //キー処理
                        heroSprite.onenterframe=function(){
                            var input = game.input;
                            var v=16;
                            if (input.right){
                                this.move(v,0,2);
                            }else if (input.up){
                                this.move(0,-v,3);
                            }else if (input.left){
                                this.move(-v,0,1);
                            }else if (input.down){
                                this.move(0,v,0);
                            }
                        }

                        heroSprite.put(j,i);

                    }else if(30<=MAP_DATA[mapID][i][j]&&MAP_DATA[mapID][i][j]<60){

                        spriteMap[i][j]=spriteID;

                        var id=MAP_DATA[mapID][i][j];

                        sprite[spriteID]=new Sprite(spriteData[id].width,spriteData[id].height);
                        sprite[spriteID].image=game.assets[spriteData[id].image];
                        sprite[spriteID].frame=spriteData[id].frame1;
                        sprite[spriteID].frame1=spriteData[id].frame1;
                        sprite[spriteID].frame2=spriteData[id].frame2;
                        sprite[spriteID].period=spriteData[id].poriod;
                        //sprite[spriteID]._element.style.zIndex = spriteID+100;
                        sprite[spriteID].id=id;
                        sprite[spriteID].put=function(X,Y){
                            this.x=X*16-8;
                            this.y=(Y-1)*16;
                        }

                        sprite[spriteID].onenterframe=function(){
                            if(game.frame%10==0)
                                this.frame=(this.frame==this.frame1?this.frame2:this.frame1);
                        }

                        //dx,dy:座標からセル座標へ変化するときの補正値
                        //dX,dY:セル座標の補正値
                        var dx=0;var dy=0;
                        var dX=0;var dY=0;
                        switch(id){
                            case 30://スライム
                                dx=8;
                                dy=-8;
                                dY=1;

                                break;

                            case 31://ウィザード
                            case 32://ダークナイト
                                dx=8;
                                dY=1;

                                break;

                            case 40://回復薬
                            case 41://防御薬
                            case 42://爆弾
                            case 50://宝箱
                            case 51://ダメージ床
                            case 52://岩石

                                break;
                        }//switch


                        sprite[spriteID].X=function(){return ((this.x+dx)/16+dX);}
                        sprite[spriteID].Y=function(){return ((this.y+dy)/16+dY);}

                        sprite[spriteID].put=function(X,Y){
                            this.x=(X-dX)*16-dx;
                            this.y=(Y-dY)*16-dy;
                        };

                        sprite[spriteID].put(j,i);

                        spriteID++;

                    }//if
                }//for
            }//for

            map.image=game.assets[MAP_IMAGE];
            map.loadData(mapData);
            
            //スプライトの追加
            spriteGroup.addChild(map);
            for (var x in sprite) {
                spriteGroup.addChild(sprite[x]);
            };
            spriteGroup.addChild(heroSprite);

            //groupの追加
            scene.addChild(spriteGroup);
            keyStop=false;
        }
        gameStart(FIRST_ID);

    }
    //ゲームの開始
    game.start();
}

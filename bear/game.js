window.focus();
enchant();

//ゲームの基本設定
var windowWidth=320;
var windowHeight=320;
var frameOfSettingEnemy=9;//小さいほど出る
var heroType="brownBear";

//キャラクターのデータを格納するクラス
function Character(image,frame,width,height,speed){
    this.image=image==undefined?0:image;
    this.frame=frame==undefined?0:frame;
    this.width=width==undefined?0:width;
    this.height=height==undefined?0:height;
    this.speed=speed==undefined?0:speed;
}


//ページの読み込みが完了してからゲームを初期化する
window.onload=function(){
    //ゲームの初期化
    var game=new Game(windowWidth,windowHeight);
    game.preload("chara1.png");
    game.preload("clear.png");
    var chara=new Array();

    var time  = 60;
    var score = 0;

    //キャラクターのデータを設定する
    chara["brownBear"]=new Character("chara1.png",0,32,32,5);
    chara["whiteBear"]=new Character("chara1.png",5,32,32,3);
    chara["pinkBear"]=new Character("chara1.png",10,32,32,10);
    
    
    game.onload = function() {
        //操作キャラクターの基本設定
        var bear=new Sprite(chara[heroType].width,chara[heroType].width);
        bear.image=game.assets[chara[heroType].image];
        bear.x=windowWidth/2;
        bear.y=windowHeight/2;
        
        
        // キーを割り当てる(キーバインド)
        game.keybind('A'.charCodeAt(0), 'a');	// z を a ボタンとして割り当てる
        game.keybind('O'.charCodeAt(0), 'b');	// x を b ボタンとして割り当てる
        game.keybind(32, "space");  // space
        game.keybind(13, "enter");  // space
        
        // コンソールラベル作成
        var scene = game.rootScene;
        var consoleLabel = new Label();	// 生成
        consoleLabel.moveTo(10, 10);
        consoleLabel.text = "Score:0";
        consoleLabel.font = "16px 'Consolas'";
        scene.addChild(consoleLabel);		// シーンに追加
        scene.backgroundColor = "white";
        
        var timeLabel = new Label();
        timeLabel.moveTo(240,10);
        timeLabel.text = "残り時間:" + time;
        scene.addChild(timeLabel);

        var keyEventFunc = function(e) {
            consoleLabel.log(e.type);
        };
	
        // ボタン名+buttondown, ボタン名+buttonup でそれぞれのイベント時の関数を登録できます
        game.addEventListener("abuttondown", keyEventFunc);
        game.addEventListener("abuttonup", keyEventFunc);
        game.addEventListener("bbuttondown", keyEventFunc);
        game.addEventListener("bbuttonup", keyEventFunc);
        game.addEventListener("spacebuttondown", keyEventFunc);
        game.addEventListener("spacebuttonup", keyEventFunc);
        game.addEventListener("enterbuttondown", keyEventFunc);
        game.addEventListener("enterbuttonup", keyEventFunc);
        
        //ブースト化
        game.addEventListener("enterbuttondown", function(){
            bear.frame=chara[heroType].frame+4;
        });
        game.addEventListener("enterbuttonup", function(){
            bear.frame=chara[heroType].frame;
        });
    
        //操作キャラクターの移動設定
        bear.addEventListener("enterframe",function(){
            //入力方向を検出
            var input = game.input;
            var angle = null;
            
            if      (input.right && input.up)   { angle = 45; }
            else if (input.left  && input.up)   { angle =135; }
            else if (input.left  && input.down) { angle =225; }
            else if (input.right && input.down) { angle =315; }
            else if (input.right)   { angle =  0; }
            else if (input.up)      { angle = 90; }
            else if (input.left)    { angle =180; }
            else if (input.down)    { angle =270; }

            //移動量を設定する
            if (angle !== null) {
                var vx = Math.cos(angle*Math.PI/180) * chara[heroType].speed;
                var vy =-Math.sin(angle*Math.PI/180) * chara[heroType].speed;   // y軸は下が正なので符号を反転させる
                this.x+=vx;
                this.y+=vy;
                this.frame=game.frame%10<5?chara[heroType].frame+1:chara[heroType].frame+2;
            }else{
                this.frame=chara[heroType].frame;
            }
            
            // 移動可能な範囲を制限
            if (this.x < 0){ this.x = 0; }
            else if (this.x > windowWidth-chara[heroType].width){ this.x = windowWidth-chara[heroType].width; }
            if (this.y < 0){ this.y = 0; }
            else if (this.y > windowHeight-chara[heroType].height){ this.y = windowHeight-chara[heroType].height; }

        });

        //ゲーム全体について、毎フレームごとに呼ばれる処理を設定する
        game.rootScene.addEventListener("enterframe",function(){
            if(game.frame%game.fps==0)time--;
                timeLabel.text = "残り時間:" + time;
            if (time <= 0) {
                var clearGroup=new Group();

                var clear=new Sprite(267,48);
                clear.image=game.assets["clear.png"];
                clear.moveTo((320-267)/2,(320-48)/2);
                clearGroup.addChild(clear);
                
                timeLabel.text = "";
                consoleLabel.text = "";
                        
                var scoreLabel = new Label();
                scoreLabel.text = "Score:" + score;
                scoreLabel.font = "16px 'Consolas'";       
                scoreLabel.moveTo(130,220);
                
                clearGroup.addChild(scoreLabel);

                scene.addChild(clearGroup);
                    
                game.stop();
            };
            //スコア計算
            if(game.frame%(game.fps/2)==0)score += Math.ceil((320-bear.y)/50);
            if(time>0)consoleLabel.text = "Score:"+score;
            //敵生成
            if(game.frame%frameOfSettingEnemy==0){
                //敵のタイプの設定
                var enemyType="dammy";
                if(game.frame%(frameOfSettingEnemy*10)==0&&game.frame>0) enemyType="pinkBear";
                else enemyType="whiteBear";
                
                //敵の画像・座標の設定
                var enemy=new Sprite(chara[enemyType].width,chara[enemyType].width);
                enemy.image=game.assets[chara[enemyType].image];
                enemy.frame=chara[enemyType].frame;
                enemy.x=(windowWidth-chara[enemyType].width)*Math.random();
                enemy.y=-1*chara[enemyType].height;
                enemy.speed = chara[enemyType].speed + Math.random()*2;
                //敵について、毎フレームごとに呼ばれる処理を設定する
                enemy.addEventListener("enterframe",function(){
                    //絵の切り替え
                    if(game.frame%10==0)enemy.frame=chara[enemyType].frame+2;
                    else if(game.frame%5==0)enemy.frame=chara[enemyType].frame+1;
                    
                    //敵の移動
                    enemy.y+= this.speed;
                    
                    //画面端で削除
                    if(enemy.y>windowHeight)game.rootScene.removeChild(this);
                    
                    //衝突時の処理
                    if(enemy.within(bear,22)){
                        enemy.frame=chara[enemyType].frame+3;
                        bear.frame=chara[heroType].frame+3;
                        
                        timeLabel.text = "";
                        consoleLabel.text = "";
                        
                        var scoreLabel = new Label();
                        scoreLabel.text = "Score:" + score;
                        scoreLabel.font = "16px 'Consolas'";       
                        scoreLabel.moveTo(130,220);
                                       
                        scene.addChild(scoreLabel);

                        game.stop();
                        game.end(0,0);
                    }
                });
                game.rootScene.addChild(enemy);
            }
        });
        game.rootScene.addChild(bear);
    }
    //ゲームの開始
    game.start();
}
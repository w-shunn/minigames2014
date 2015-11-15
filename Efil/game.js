window.focus();
enchant();
var HEIGHT = 20;
var WIDTH = 33;

var COST_MAKE = 10;
var COST_CHANGE = 50;

var GAME_SPEED = 0; //0:stop 1~:work
var MAX_SPEED  = 3;

var money = 500;

var board=[
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[ 0, 1, 1, 1, 0, 3, 1, 1, 0, 1, 3, 1, 0, 1, 1, 3, 0, 3, 3, 1, 0, 3, 1, 3, 0, 1, 3, 3, 0, 3, 3, 3, 0],
[ 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

//ページの読み込みが完了してからゲームを初期化する
window.onload=function(){

    //ゲームの初期化
    var game = new Core(528,320);
    game.fps = 60;
    game.frame = 0;

    //画像の読み込み
    game.preload("gene.png");

    game.onload = function() {
        var scene = game.rootScene;
        scene.backgroundColor = "gray";

        //初期設定
        var generation = 0;

        //ボードの初期化

        //画面上部のラベルの設定
        var spriteGroup = new Group();

        //速度ラベルの設定
        var speedLabel = new MutableText(337,3,500);
        speedLabel.text = "Game Speed:" + GAME_SPEED;
        spriteGroup.addChild(speedLabel);
        var changed = false;

        //お金ラベルの設定
        var moneyLabel = new MutableText(3,3,500);
        moneyLabel.text = "Money     :" + money;
        spriteGroup.addChild(moneyLabel);

        //世代ラベル設定
        var generationLabel = new MutableText(3,18,500);
        generationLabel.text = "Generation:" + generation;
        spriteGroup.addChild(generationLabel);

        scene.addChild(spriteGroup);

        var map = new Group();

        for (var i = 2; i < HEIGHT; i++) {
            for (var j = 0; j < WIDTH; j++) {
                cell = new Sprite(16,16);
                cell.image = game.assets['gene.png'];
                cell.frame = board[i][j];
                cell.cx = j;
                cell.cy = i;
                cell.x = j * 16;
                cell.y = i * 16;

                map.addChild(cell);

                if(i<HEIGHT-4){//セルへの介入処理
                    cell.addEventListener('touchstart', function() {
                        var i = this.cy , j = this.cx ;
                        
                        if(board[i][j] == 1 && money>=COST_MAKE){
                        
                            this.frame = board[i][j] = 2; 
                            money-=COST_MAKE;
                            moneyLabel.text = "Money     :" + money;  
                        };
                    });

                    cell.addEventListener('enterframe', function() {
                        this.frame = board[this.cy][this.cx]; 
                    });

                }else if(i==HEIGHT-2){//パターンへの介入処理
                    cell.addEventListener('touchstart', function() {
                        var i = this.cy , j = this.cx ;
                        if (money>=COST_CHANGE) {
                            if(board[i][j] == 1){
                                this.frame = board[i][j] = 3; 
                                money-=COST_CHANGE;
                            }else if(board[i][j] == 3){
                                this.frame = board[i][j] = 1; 
                                money-=COST_CHANGE;
                            }
                            moneyLabel.text = "Money     :" + money;  
                        };
                    });
                }
            };
        };

        scene.addChild(map);

        game.addEventListener('enterframe', function () {
            //キーボード処理
            var input = game.input;
            if (input.up   && GAME_SPEED<MAX_SPEED &&!changed){
                GAME_SPEED++;
                changed = true;
            }else if (input.down && GAME_SPEED>0 &&!changed){
                GAME_SPEED--;
                changed = true;
            }else if (!input.up && !input.down && changed){
                changed = false;
            }

            if (GAME_SPEED > 0 && (game.frame * GAME_SPEED * 2) % (game.fps * 1) == 0) {
                //情報の更新
                generationLabel.text = "Generation:" + generation++; 
                
                //世代交代
                var nboard =[
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [ 0, 1, 1, 1, 0, 3, 1, 1, 0, 1, 3, 1, 0, 1, 1, 3, 0, 3, 3, 1, 0, 3, 1, 3, 0, 1, 3, 3, 0, 3, 3, 3, 0],
                [ 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ];

                //パターンの継承
                nboard[HEIGHT-2] = board[HEIGHT-2];
                        
                //変異判定
                for (var i = 3; i < HEIGHT-4; i++) {
                    for (var j = 1; j< WIDTH-1; j++) {
                        var p = -1;
                        //パターンの検出
                        if      (board[i-1][j-1] == 1 && board[i-1][j] == 1 && board[i-1][j+1] == 1){ p = 2; }
                        else if (board[i-1][j-1] >= 2 && board[i-1][j] == 1 && board[i-1][j+1] == 1){ p = 6; }
                        else if (board[i-1][j-1] == 1 && board[i-1][j] >= 2 && board[i-1][j+1] == 1){ p =10; }
                        else if (board[i-1][j-1] == 1 && board[i-1][j] == 1 && board[i-1][j+1] >= 2){ p =14; }
                        else if (board[i-1][j-1] >= 2 && board[i-1][j] >= 2 && board[i-1][j+1] == 1){ p =18; }
                        else if (board[i-1][j-1] >= 2 && board[i-1][j] == 1 && board[i-1][j+1] >= 2){ p =22; }
                        else if (board[i-1][j-1] == 1 && board[i-1][j] >= 2 && board[i-1][j+1] >= 2){ p =26; }
                        else if (board[i-1][j-1] >= 2 && board[i-1][j] >= 2 && board[i-1][j+1] >= 2){ p =30; }
                        
                        //パターンに従い変化
                        if(board[HEIGHT-2][p]==1) {
                            nboard[i][j] = 1;
                        }else{
                            nboard[i][j] = 2;
                        }

                    };
                };

                //引き継ぎ判定
                for (var i = 0; i < HEIGHT-4; i++) {
                    for (var j = 0; j< WIDTH; j++) {
                        if     (board[i][j] == 1 && nboard[i][j] == 1){}//灰→灰:なし
                        else if(board[i][j] == 1 && nboard[i][j] == 2){money++; }//灰→黄:金+1
                        else if(board[i][j] == 2 && nboard[i][j] == 2){nboard[i][j] = 3; }//今世代黄で次世代でも黄なら橙へ
                        else if(board[i][j] == 3 && nboard[i][j] == 2){nboard[i][j] = 3;　money--; }//今世代橙で次世代でも黄なら橙にして金を取る
                    };
                };

                //データの更新
                board = nboard;

            };

            //情報の更新
            speedLabel.text = "Game Speed:" + GAME_SPEED;
            moneyLabel.text = "Money     :" + money;
            if (money<0) {
                game.stop();
                game.end(0,0);
            };
        });

    };
    //ゲームの開始
    game.start();
};

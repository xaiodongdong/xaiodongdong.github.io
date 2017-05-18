/**
 * Created by Lenovo on 2017/5/18.
 */
class Game {
    constructor(main, scor, life) { //返回对创建此对象的数组函数的引用
        this.main = main;
        this.num = 3;
        this.obj = {};

        this.scorEle = scor;
        this.scor = 0;

        this.state = 1;

        this.lifeEle = life;
        this.lifeEle.style.backgroundSize = "100% 100%";
        this.life = 5;

        this.speed = 5;

        this.height = window.innerHeight;

        this.startControl = true;

        this.st = null;

        this.bestScore = localStorage.bestScore ? JSON.parse(localStorage.bestScore) : [];
    }

    _creatLetter() {
        var div = document.createElement("div");
        div.className = "letter";

        do {
            var rn = Math.floor(Math.random() * 26 + 65);
            var le = String.fromCharCode(rn);
        } while (this.obj[le])

        div.style.backgroundImage = `url(img/${le}.png)`;

        do {
            var rl = Math.random() * 1120;
        } while (this._check(rl))

        div.style.left = rl + "px";

        var rt = -Math.random() * 200;
        div.style.top = rt + "px";

        this.obj[le] = {
            left: rl,
            top: rt,
            el: div
        };

        this.main.appendChild(div);

    }

    _check(left) {
        for(var i in this.obj) {
            if(left > this.obj[i].left - 80 && left < this.obj[i].left + 80) {
                return true;
            }
        }
    }

    start() {
        for(var i = 0; i < this.num; i++) {
            this._creatLetter();
        }
        this._move();
        this._keydown();
        this.startControl = false;
        this.bestScore = localStorage.bestScore ? JSON.parse(localStorage.bestScore) : [];

    }

    _move() {
        this.st = setInterval(function() {
            for(var i in this.obj) {
                var t = this.obj[i].top;
                t += this.speed;
                this.obj[i].top = t;
                this.obj[i].el.style.top = t + "px";

                if(t >= this.height - 80) {
                    this.life--;
                    var zhi = this.life * 20 + "%";
                    this.lifeEle.style.backgroundSize = zhi + " 100%";

                    this.main.removeChild(this.obj[i].el);
                    delete this.obj[i];
                    this._creatLetter();
                    if(this.life == 0) {
                        this._gameover();
                        return;
                    }
                }
            }
        }.bind(this), 50)
    }

    _keydown() {
        document.onkeydown = function(e) {
            var keyCode = e.keyCode;
            var l = String.fromCharCode(keyCode);
            if(this.obj[l]) {
                this.main.removeChild(this.obj[l].el);
                delete this.obj[l];

                this.scor++;
                this.scorEle.innerHTML = this.scor;
                if(this.scor % 10 == 0) {
                    this._upstate();
                }
                this._creatLetter();
            }
        }.bind(this);
    }

    _upstate() {
        this.state++;
//		this.stateEle.innerHTML = this.state;
        if(this.state <= 4) {
            this.num++;
            this._creatLetter();
        } else {
            this.speed++;
        }
    }

    _gameover() {
        alert(`游戏结束，得分${this.scor}`);

        if(this.bestScore.length < 3 || (this.bestScore.length >= 3 && this.scor > this.bestScore[2].scor)) {
            var player = prompt("请输入姓名");
            this.bestScore.push({
                player,
                scor: this.scor
            });
            this.bestScore.sort(function(a, b) {
                if(a.scor > b.scor) {
                    return -1;
                } else {
                    return 1;
                }
            });
            if(this.bestScore.length > 3) {
                this.bestScore.pop();
            }
            localStorage.bestScore = JSON.stringify(this.bestScore);
        }

        this.main.innerHTML = "";
        this.num = 3;
        this.obj = {};
        this.scorEle.innerHTML = 0;
        this.scor = 0;

        this.state = 1;
        this.lifeEle.style.backgroundSize = "100% 100%";
        this.life = 5;
        this.speed = 5;
        this.startControl = true;
        clearInterval(this.st);

    }
    pause() {
        clearInterval(this.st);
    }

    play() {
        this._move();
        this._keydown();
    }

    getScore() {
        var str = '<li><div class="name">姓名</div><div class="score1">得分</div></li>';
        var data = this.bestScore;
        if(data == undefined) {
            return;
        }
        data.forEach(function(v, i) {
            str += `<li><div class="name">${v.player}</div><div class="score1">${v.scor}</div></li>`;
        });

        return str;
    }

}

var main = document.querySelector(".main");
var scor = document.querySelector(".scorinner");
var state = document.querySelector(".state");
var life = document.querySelector(".lifeinner");

var game = new Game(main, scor, life);
var start = document.querySelector(".start");
var pause = document.querySelector(" .stop");

var paihang = document.querySelector(".paihang");
var ph = document.querySelector(".ph");
var close = document.querySelector(".close");
var mask = document.querySelector(".mask");

var startControl = true;
start.onclick = function() {
    if(game.startControl) {
        game.start();

    }
}

var flag = true;
pause.onclick = function() {
    if(flag) {
        game.pause();
        document.onkeydown = null;

    } else {
        game.play();
    }
    flag = !flag;
}
paihang.style.display = "none";
ph.onmouseover = function() {
    paihang.style.display = "block";
    paihang.innerHTML = game.getScore();
}
ph.onmouseout = function() {
    paihang.style.display = "none";

}

/*
close.onclick = function() {
    mask.style.display = "none";
}
*/

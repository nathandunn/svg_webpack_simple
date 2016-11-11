require("!style!css!./style.css");
// document.write(require('./content.js'));

// var rootSvg = document.getElementById('contentid');
// console.log(rootSvg);

var paper = Raphael(0,0, 500, 500);
// var circle = paper.circle(50, 40, 10);
// rootSvg.appendChild(paper);

paper.path("M200,50L200,500");


var text1 = "Raphaël kicks butt a long string !";
var r = paper.rect(-text1.length*2.5,0,text1.length * 5, 20 );
r.rotate(90,0,0);
r.attr('fill','white');
r.translate(100,-220);

var t = paper.text(0, 0, text1);
t.rotate(90,0,0);
t.translate(100,-210);


var text2 = "Raphaël kicks butt!";

var r2 = paper.rect(-text2.length*2.5,0,text2.length * 5, 20 );
r2.rotate(90,0,0);
r2.attr('fill','white');
r2.translate(100,-200);

var t2 = paper.text(0, 0, text2);
t2.rotate(-90,0,0);
t2.translate(-100,190);





// console.log(t.getTotalLength());
// console.log(t2.getTotalLength());




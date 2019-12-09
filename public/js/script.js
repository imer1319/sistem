var number=[1,2,3,4,5,6,7,8,9];
var ids=["a","b","c","d","e","f","g","h","i"];
var x=0;
var xx=0;
var xxx=0;
var indicator=1;
var indicatortwo=0;
var table = document.getElementById("table");
actual=0;
var num=1;
var icon = document.getElementById("aactual");
icon.innerHTML=num;
function pres(b){
    switch (b.id) {
        case "a":
        var a = document.getElementById("a");
        if (number[actual]==num){ a.innerHTML="a";num++;  esUltimo(num);}else{console.log("error");}
        break;
        case "b":
        var b = document.getElementById("b");
        if (number[actual+1]==num){b.innerHTML="b"; num++; esUltimo(num);}else{console.log("error");}
        break;
        case "c":
        var c = document.getElementById("c");
        if (number[actual+2]==num){c.innerHTML="c"; num++; esUltimo(num);}else{console.log("error");}
        break;
        case "d":
        var d = document.getElementById("d");
        if (number[actual+3]==num){d.innerHTML="d"; num++; esUltimo(num);}else{console.log("error");}
        break;
        case "e":
        var e = document.getElementById("e");
        if (number[actual+4]==num){e.innerHTML="e"; num++; esUltimo(num);}else{console.log("error");}
        break;
        case "f":
        var f = document.getElementById("f");
        if (number[actual+5]==num){f.innerHTML="f"; num++; esUltimo(num);}else{console.log("error");}
        break;
        case "g":
        var g = document.getElementById("g");
        if (number[actual+6]==num){g.innerHTML="g"; num++; esUltimo(num);}else{console.log("error");}
        break;
        case "h":
        var h = document.getElementById("h");
        if (number[actual+7]==num){h.innerHTML="h"; num++; esUltimo(num);}else{console.log("error");}
        break;
        case "i":
        var i = document.getElementById("i");
        if (number[actual+8]==num){i.innerHTML="i"; num++; esUltimo(num);}else{console.log("error");}
        break;
    }

}
function esUltimo(numero){
    if(numero == 10){
        icon.innerHTML="finalizado";
    }else{
        icon.innerHTML=num;
    }
}
function shuf(a,b){
    return Math.floor(Math.random()*9+0);
}
function mostrar(){
    table.style.display = 'block';
    icon.style.display = 'block';
    number.sort(shuf);
    while (x<=8){
        xx=Math.floor(Math.random()*6+3);
        xxx=number[x];
        number[x]=number[xx];
        number[xx]=xxx;
        x++;
    }
    while (indicator<=9){
        document.getElementById(ids[indicator-1]).innerHTML=number[indicatortwo];
        indicator++;
        indicatortwo++;
    }
    console.log(number.join(' '));
    console.log(ids.join(' '));
}
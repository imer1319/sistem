<template>
	<div class="col-12">
		<h3>{{ name }}</h3>
		<button class="mostrar" @click="mostrar()">Empezar</button>
		<div id="contenedor">
			<br>
			<div id="actual"></div>
			<hr>
			<table id="table">
				<tr>
					<td @click="pres($event)" id="a"></td>
					<td @click="pres($event)" id="b"></td>
					<td @click="pres($event)" id="c"></td>
				</tr>
				<tr>
					<td @click="pres($event)" id="d"></td>
					<td @click="pres($event)" id="e"></td>
					<td @click="pres($event)" id="f"></td>
				</tr>
				<tr>
					<td @click="pres($event)" id="g"></td>
					<td @click="pres($event)" id="h"></td>
					<td @click="pres($event)" id="i"></td>
				</tr>
			</table>
		</div>
	</div>
</template>
<script>
	export default{

		data(){
			return{
				name:'schultz',
				number: [1,2,3,4,5,6,7,8,9],
				ids: ["a","b","c","d","e","f","g","h","i"],
				x: 0,
				xx: 0,
				xxx: 0,
				indicator: 1,
				indicatortwo: 0,
				actual:0,
				num:1,
				icon:'',
			}
		},
		methods:{
			mostrar(){
				var table = document.getElementById("table");
				this.icon = document.getElementById("actual");
				this.icon.innerHTML=this.num;
				table.style.display = 'block';
				this.icon.style.display = 'block';
				this.number.sort(this.shuf);
				while (this.x<=8){
					this.xx=Math.floor(Math.random()*6+3);
					this.xxx=this.number[this.x];
					this.number[this.x]=this.number[this.xx];
					this.number[this.xx]=this.xxx;
					this.x++;
				}
				while (this.indicator<=9){
					document.getElementById(this.ids[this.indicator-1]).innerHTML=this.number[this.indicatortwo];
					this.indicator++;
					this.indicatortwo++;
				}
				console.log(this.number.join(' '));
				console.log(this.ids.join(' '));
			},
			pres(event){
				var targetId = event.currentTarget.id;
				console.log(targetId);
				switch (targetId) {
					case "a":
					var a = document.getElementById("a");
					console.log("acutal : "+this.actual);
					console.log("number : "+this.number[this.actual]);
					console.log("num : "+this.num);
					if (this.number[this.actual]==this.num){ a.innerHTML="a";this.num++;  this.esUltimo(this.num);}else{console.log("error");}
					break;
					case "b":
					var b = document.getElementById("b");
					if (this.number[this.actual+1]==this.num){b.innerHTML="b"; this.num++; this.esUltimo(this.num);}else{console.log("error");}
					break;
					case "c":
					var c = document.getElementById("c");
					if (this.number[this.actual+2]==this.num){c.innerHTML="c"; this.num++; this.esUltimo(this.num);}else{console.log("error");}
					break;
					case "d":
					var d = document.getElementById("d");
					if (this.number[this.actual+3]==this.num){d.innerHTML="d"; this.num++; this.esUltimo(this.num);}else{console.log("error");}
					break;
					case "e":
					var e = document.getElementById("e");
					if (this.number[this.actual+4]==this.num){e.innerHTML="e"; this.num++; this.esUltimo(this.num);}else{console.log("error");}
					break;
					case "f":
					var f = document.getElementById("f");
					if (this.number[this.actual+5]==this.num){f.innerHTML="f"; this.num++; this.esUltimo(this.num);}else{console.log("error");}
					break;
					case "g":
					var g = document.getElementById("g");
					if (this.number[this.actual+6]==this.num){g.innerHTML="g"; this.num++; this.esUltimo(this.num);}else{console.log("error");}
					break;
					case "h":
					var h = document.getElementById("h");
					if (this.number[this.actual+7]==this.num){h.innerHTML="h"; this.num++; this.esUltimo(this.num);}else{console.log("error");}
					break;
					case "i":
					var i = document.getElementById("i");
					if (this.number[this.actual+8]==this.num){i.innerHTML="i"; this.num++; this.esUltimo(this.num);}else{console.log("error");}
					break;
				}

			},
			esUltimo(numero){
				if(numero == 10){
					this.icon.innerHTML="finalizado";
				}else{
					this.icon.innerHTML=this.num;
				}
			},
			shuf(a,b){
				return Math.floor(Math.random()*9+0);
			}
		}
	}
</script>
<style>
#table {
	display:none;
	width: 500px;
	height: 500px;
	flex-wrap: wrap;
	margin: auto;
}
tr,td {
	font-size: 30px;
	color: blue;
	width: 100px;
	height: 100px;
	text-align: center;
	line-height: 100px;
	box-shadow: 1px 1px 1px  white;

}
#actual{
	display: none;
	color: blue;
	font-size: 35px;
}
</style>
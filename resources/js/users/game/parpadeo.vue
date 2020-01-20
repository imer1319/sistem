<template>
	<div class="container">
		<table>
			<tr v-for="numero in numeros">
				<td>{{ numero }}</td>
			</tr>
		</table>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				numeros:[1,2,3,4,5,6,7,8,9],
			}
		},
		methods:{
			
		}
	}
</script>
(function($){
	window.prettyPrint && prettyPrint();
	$(document.body).ready(function(){
		$('li a.nav-link:eq(0)').interactive({
			size:100,
			textPosition:{
				bottom:'100px'
			},
			text:'Este ejemplo muestra como podemos resaltar un elemento y dar un tour general',
			author:'williamamed'
		})
		.then(function(){
			return $('.btn-primary').interactive({
				size:100,
				textPosition:{
					bottom:'100px'
				},
				text:'Pulse en este enlace para realizar alguna accion',
				author:'williamamed'
			})
		})
		.then(function(){
			return $('.btn-search').interactive({
				size:100,
				textPosition:{
					bottom:'100px'
				},
				text:'Explicar las busquedas al usuario, Happy coding !!',
				author:'williamamed'
			})
		})
	})
	
})($)
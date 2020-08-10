var lista=[];

function add(variable){
	if(sessionStorage.getItem('list')==null){
		lista.push(variable);
		sessionStorage.setItem('list', JSON.stringify(lista));
		alert('Añadido a Carretilla');
	}else{
		lista=JSON.parse(sessionStorage.getItem('list'));
		lista.push(variable);
		sessionStorage.setItem('list', JSON.stringify(lista));
		alert('Añadido a Carretilla');
	}
	console.log(JSON.parse(sessionStorage.getItem('list')))
}

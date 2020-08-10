var lista=JSON.parse(sessionStorage.getItem('list'));
var tabla;
var contenido;
var precio;
var total=0;
var comprar=document.getElementById("comprar");

function mostra(){
	
	var mostr_Total=  document.getElementById("total");

	tabla = document.getElementById("tabla");
	for(var i =0; i<lista.length;i++){
		var tr = document.createElement("tr");
	var td1 = document.createElement("td");
	var td2 = document.createElement("td");
	
	var para_switch= lista[i];
	switch(para_switch){
		case 1:
		{
			contenido='Gaseosa';
			precio=	1.8;
			break;
		}
		case 2:
		{
			contenido='Jamaica';
			precio=	1.9;
			break;
		}
		case 3:
		{
			contenido='Horchata';
			precio=	1.9;
			break;
		}
		case 4:
		{
			contenido='Café';
			precio=	1.0;
			break;
		}
		case 5:
		{
			contenido='Agua';
			precio=	1.5;
			break;
		}
		case 6:
		{
			contenido='limonada';
			precio=	1.5;
			break;
		}
		case 7:
		{
			contenido='Las tostaditas';
			precio=	2.0;
			break;
		}
		case 8:
		{
			contenido='Enchiladitas';
			precio=	3.0;
			break;
		}
		case 9:
		{
			contenido='Tacos (Orden de 3)';
			precio=	4.75;
			break;
		}
		case 10:
		{
			contenido='Gringas';
			precio=	4.50;
			break;
		}
		case 11:
		{
			contenido='Burrito';
			precio=	6.00;
			break;
		}
		case 12:
		{
			contenido='Torta';
			precio=	5.00;
			break;
		}
		case 13:
		{
			contenido='Sopa de Tortilla Grande';
			precio=	4.75;
			break;
		}
		case 14:
		{
			contenido='Sopa de Tortilla Mediana';
			precio=	3.50;
			break;
		}
		case 15:
		{
			contenido='Sopa de Tortilla Pequeña';
			precio=	2.50;
			break;
		}
		case 16:
		{
			contenido='Nachos';
			precio=	7.10;
			break;
		}
		case 17:
		{
			contenido='Helado';
			precio=	2.50;
			break;
		}
		case 18:
		{
			contenido='Flan';
			precio=	2.75;
			break;
		}
		case 19:
		{
			contenido='Cheesecake';
			precio=	3.50;
			break;
		}
		case 20:
		{
			contenido='Cheesecake';
			precio=	4.00;
			break;
		}
		default:{
			alert(ERROR);
		}
	}
	
	td1.innerHTML = contenido;
	td2.innerHTML = '$'+precio;
	tr.appendChild(td1);
	tr.appendChild(td2);
	
	tabla.appendChild(tr);
	total+=precio;
	}
	var tr = document.createElement("tr");
	var td3 = document.createElement("td");
	var td4 = document.createElement("td");
	td3.innerHTML = 'Su total es:';
	td4.innerHTML = '$'+total;
	tr.appendChild(td3);
	tr.appendChild(td4);
	tabla.appendChild(tr);
}

function clean(){
	lista=[];
		sessionStorage.setItem('list', JSON.stringify(lista));
		alert('Compra realizada con éxito');
		location.reload();
}
window.onload=mostra;


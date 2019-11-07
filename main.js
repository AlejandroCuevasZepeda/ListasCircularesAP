var cola = new Cola();
var n = 1;
var completado = 0;
var vacio = 0;
var este;

for (var i = 0; i < 300; i++) {
	if (Math.trunc(Math.random()*100+1) <= 39) {
		cola.agregar(new Nodo("P" + n));
		if (n == 1) {
			este = cola.primero;
		}
		n++;
	}
	
	if (cola.primero) {
		este.ciclos--;
		if (este.ciclos == 0) {
			cola.eliminar(este.nombre);
			completado++;
		}
		este = este.siguiente;	
	} else {
		vacio++;
	}
	cola.imprimir();
}

console.log('Ciclos Vacios: ' + vacio);
console.log('Ciclos Completados: ' + completado);
console.log('Ciclos Pendientes: ' + cola.pendientes());
console.log('Total de Ciclos Pendientes: ' + cola.pendientesTotales());
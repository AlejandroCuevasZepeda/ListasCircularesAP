class Nodo {
	constructor(n) {
		this._nombre = n;
		this._ciclos = Math.trunc(Math.random()*11+4);
		this._siguiente = null;
    }
    
    get nombre() {
        return this._nombre;
    }

    get ciclos() {
        return this._ciclos
    }

	get siguiente(){
        return this._siguiente;
    }

	set ciclos(v) {
        this._ciclos = v;
    }

	set siguiente(v) {
        this._siguiente = v;
    }
}
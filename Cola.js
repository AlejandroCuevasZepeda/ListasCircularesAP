class Cola {
	constructor() {
		this._primero = null;
    }
    
	get primero() {
        return this._primero;
    }

	set primero(v) {
        this._primero = v;
    }

	agregar(nuevo) {
		if (this._primero) {
			var este = this._primero;
			while(este.siguiente != this._primero){
				este = este.siguiente;
			}
			este.siguiente = nuevo;
		} else {
			this._primero = nuevo;
		}
		nuevo.siguiente = this._primero;
	}

	buscarAnterior(nombre) {
		var este = this._primero;
		do {
			if (este.siguiente.nombre == nombre) {
				return este;
			} else {
				este = este.siguiente;
			} 
		} while(este != this._primero) {
				return null;
			}
	}

	eliminar(nombre){
		var n = this.buscarAnterior(nombre);
		if (n) {
			if (n.siguiente == this._primero) {
				if (n == this._primero) {
					this._primero = null;
				} else {
					this._primero = n.siguiente.siguiente;
					n.siguiente = this._primero;
				}
			} else {
				n.siguiente = n.siguiente.siguiente;
			}
			return true;
		} else {
			return null;
		}
	}

	imprimir() {
		if (this._primero) {
			var s = '';
			var este = this._primero;
			do {
				s += este.nombre+':'+este.ciclos+' ';
				este = este.siguiente;
			} while(este != this.primero) {
				console.log(s);
			}
		} else {
			return null;
		}
	}

	pendientes() {
		if (this._primero) {
			var s = 0;
			var este = this._primero;
			do {
				s++;
				este = este.siguiente;
			} while(este != this.primero) {
				return s;
			}
		} else {
			return null;
		}
    }
	
	pendientesTotales() {
		if (this._primero) {
			var s = 0;
			var este = this._primero;
			do {
				s += este.ciclos;
				este = este.siguiente;
			} while(este != this.primero) {
				return s;
			}
		} else {
			return null;
		}
    }
}
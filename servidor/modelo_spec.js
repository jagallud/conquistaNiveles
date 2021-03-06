var modelo=require('./modelo.js');

describe("El juego niveles incialmente...",function(){
	var juego;

	beforeEach(function(){
		juego=new modelo.Juego();
	});

	it("tiene una coleccion de niveles y usuarios",function(){	
		expect(juego.niveles.length).toEqual(0);
		expect(juego.usuarios.length).toEqual(0);
	});

	it("agregar usuario",function(){
		var usuario=new modelo.Usuario("Pepe");
		juego.agregarUsuario(usuario);

		expect(juego.usuarios[0]).toEqual(usuario);
		expect(juego.usuarios[0].nombre).toEqual("Pepe");
	});
})
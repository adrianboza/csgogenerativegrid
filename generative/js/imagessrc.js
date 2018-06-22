// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes=Array("plays/gif1.gif","plays/gif2.gif","plays/gif3.gif","plays/gif4.gif","plays/gif5.gif","plays/gif6.gif","plays/gif7.gif","plays/gif8.gif","plays/gif9.gif","plays/gif10.gif","plays/gif11.gif","plays/gif12.gif","plays/gif13.gif","plays/gif14.gif","plays/gif15.gif","plays/gif16.gif","plays/gif17.gif","plays/gif18.gif","plays/gif19.gif","plays/gif20.gif");

	var imagenVisible=0;
 
	// Función que cambia la imagen actual por la siguiente
	function cambiar(img)
	{
		imagenVisible++;
		if(imagenVisible>=imagenes.length)
		{
			imagenVisible=0;
		}
		img.src=imagenes[imagenVisible];
		cargarSiguienteImagen();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen()
	{
		if((imagenVisible+1)<imagenes.length)
		{
			console.log(imagenVisible+1);
			var imgTmp=new Image();
			imgTmp.src=imagenes[imagenVisible+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
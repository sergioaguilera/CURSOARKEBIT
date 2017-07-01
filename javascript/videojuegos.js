var juegos = [
    {
    'casa':'Activision/Bungie',
    'juego':'Destiny 2',
    'year':'2017',
    'plataforma':'PC/XBOXONE/PS4',
    },
    
    {
    'casa':'Gamefreak',
    'juego':'Pokemon UltraSun',
    'year':'2017',
    'plataforma':'Nintendo 3ds',
    },
    
    {
    'casa':'Gamefreak',
    'juego':'Pokemon UltraMoon',
    'year':'2017',
    'plataforma':'Nintendo 3ds',
    },
    
    {
    'casa':'EA Games',
    'juego':'Assasins Creed Origins',
    'year':'2017',
    'plataforma':'PC/XBOXONE/PS4',
    },

];


var tabla = document.getElementById("tablaJuegos");

for(var i=0; i < juegos.length; i++){
    
    var renglon = tabla.insertRow(1);
    
    var colCasa = renglon.insertCell(0);
    colCasa.textContent = juegos[i].casa;
    
    var colJuego = renglon.insertCell(1);
    colJuego.textContent = juegos[i].juego;
    
    var colYear = renglon.insertCell(2);
    colYear.textContent = juegos[i].year;
    
    var colPlataforma=renglon.insertCell(3);
    colPlataforma.textContent = juegos[i].plataforma;

}
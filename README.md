Realice con exito el backend cumplo con toda las consignas. 

swagger: http://localhost:3000/api-docs/#/


USUARIO: eliasalasia@gmail.com CONTRASEÑA: Elias123
USUARIO: lionelmessi@gmail.com  CONTRASEÑA: Campeon23
USUARIO: Dimaria@gmail.com CONTRASEÑA: Campeon23
USUARIO: dibumartinez@gmail.com CONTRASEÑA: Campeon23
USUARIO: cristiano@gmail.com CONTRASEÑA: Cristiano7
USUARIO: enzofernandez@gmail.com CONTRASEÑA: Campeon23
USUARIO: Neymar10@gmail.com CONTRASEÑA: Neymararabia
USUARIO: kunaguero@gmail.com CONTRASEÑA: Campeon23

DATOS PARA PROBAR EL FUNCIONAMIENTO: 

POST http://localhost:3000/api/register 
BODY: JSON:

 {
    "email":"nuevoemail@gmail.com",
    "password":"agregarcontraseña"
}


  
POST http://localhost:3000/api/usuario

{
   "email":"kunaguero@gmail.com",
    "password":"Campeon23"
}

Respuesta: deberia recibir "Inicio de sesión exitoso" y el (TOKEN)



GET http://localhost:3000/usuario
Authorization: Bearer (TOKEN)




PUT http://localhost:3000/api/usuario 
Authorization: Bearer (TOKEN)
JSON
{
  "name": "Sergio Aguero",
  "biografia":"Jugador Retirado",
  "phone": "020364166"
}
y en FORM PUEDE CARGAR LA FOTO DE PERFIL Y LA GUARDA ESO FUNCIONA BIEN EN MI BACKEND. 







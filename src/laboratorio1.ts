//definir un tipo usuario que al menos contenga una propiedad activo que se llave boolean

enum Rols{
  Admini = 'ADMINISTRADOR',
  User = 'USUARIO'
}

type TGender = 'Hombre' | 'Mujer' 
interface IUser{
  id_user:number
  name:string
  rol:Rols
  gender:TGender
  activo:boolean
}

//crear un arreglo de usuarios
const users2:IUser[] = [
  {id_user:1,name:'harry',rol:Rols.Admini,gender:'Hombre',activo:false},
  {id_user:2,name:'Pedro',rol:Rols.Admini,gender:'Hombre',activo:true},
  {id_user:3,name:'Juan',rol:Rols.User,gender:'Hombre',activo:true},
  {id_user:4,name:'Leonardo',rol:Rols.Admini,gender:'Hombre',activo:false},

] 

//filtrar los usuarios activos (true)

const usersActivate = users2.filter((user)=> user.activo)
console.log("usuarios activos: ",usersActivate);


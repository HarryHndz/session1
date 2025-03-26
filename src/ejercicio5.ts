enum Rol{
  Admin = "ADMIN",
  Usuario = "USER"
}


interface User{
  id:string
  name:string
  lastname:string
  rol:Rol
  password:string
}


const users: User[] = []
const user2: Array<User> = []

let rowUser:User ={
  name:'leonardo',
  lastname:'Chan',
  id:'001',
  rol:Rol.Admin,
  password:'12345'
}

users.push(rowUser)
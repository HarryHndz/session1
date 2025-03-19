
type IGenero = 'Macho' | 'Hembra' 
type IPelaje = 'plumas' | 'Escamas' | 'pelaje' | 'Ninguno'
interface IAnimal {
  edad:number
  nombre:string
  genero:IGenero
  color:string
  pelaje:IPelaje
}


interface IPerro extends IAnimal{
  ladrar():void
}

const perro:IPerro ={
  edad:12,
  nombre:'Firulais',
  genero:'Macho',
  pelaje:'pelaje',
  color:'negro',
  ladrar() {
      console.log("guau");
      
  },
}
// contratos entrada Persona:

interface Persona {
  nombre: string,
  apellido: string,
  edad: number,
  direccion?:PersonaConDireccion | null,
  genero: 'Masculino' | 'Femenino' | 'ND'
}

interface PersonaConDireccion{
  calle: string,
  colonia: string,
  zipCode: string
}

// Mock Persona:

const Mock: Persona = {
  nombre: 'Arturo',
  apellido: 'Gonzalez',
  edad: 24,
  genero: 'Masculino' 
}
// Contrato Persona
// Interface vs types

type GeneroProp =  'Masculino' | 'Femenino' | 'ND'; // Lista enumerada - enums
type ID = string | number;

interface Persona2 {
  id: ID,
  nombre: string,
  apellidos: string, 
  saludar(): void,
  genero: GeneroProp
}

interface Usuario extends Persona {
  id: ID,
};

const usuario: Persona2 = {
  id: 'someId12',
  nombre: 'Alan',
  apellidos: 'Turing',
  genero: 'Masculino',
  saludar() {
    console.log('Hola a todos');
  },
};
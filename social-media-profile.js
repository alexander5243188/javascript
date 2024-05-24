// user information
const userName = 'dani33';
const fullName = 'Dani Ojeda';
const age = 33;
const isStudent = true;

// Direccion
const address = {
    street: '123 Calle Moxos',
    city: 'Cochabamba',    
}

// Hobbies
const hobbies = ['Music','Dance', 'Movie'];

const dataUser = `Hola mi nombre es ${fullName}, soy de ${address.city}, mi edad es ${age}, y me encanta ${hobbies.join(' and ')}`;
console.log(dataUser);
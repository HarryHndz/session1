"use strict";
var Rol;
(function (Rol) {
    Rol["Admin"] = "ADMIN";
    Rol["Usuario"] = "USER";
})(Rol || (Rol = {}));
const users = [];
const user2 = [];
let rowUser = {
    name: 'leonardo',
    lastname: 'Chan',
    id: '001',
    rol: Rol.Admin,
    password: '12345'
};
users.push(rowUser);

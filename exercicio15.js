const usuarios = [
    { nome: "Isac Newton", idade:18},
    { nome: "Pedrin", idade:22},
    { nome: "ITZ da Coronel", idade:25},
    { nome: "Joao", idade:17},
];

function filtrarMotoristas (lista){
    return lista.filter(function (usuario){
        return usuario.idade>18;
    });
}

console.log(filtrarMotoristas(usuarios));


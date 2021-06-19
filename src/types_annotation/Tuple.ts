// Tupla: array com tipos específicos e tamanho fixo
const clientes : readonly[number,string]=[1,'Jason']
const clientes2 : ReadonlyArray<string>=['Jason','MAX']
/*Devido ao readonly não será possível editar a tupla */
// clientes[1]='asd'

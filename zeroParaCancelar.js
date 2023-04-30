//acumulador da soma e a entrada do array, sendo que a primeira entrada sinaliza a quantidade de entradas seguintes
const entrada = [10, 1, 3, 5, 4, 0, 0, 7, 0, 0, 6];
let resultado = 0
const nVariavelInicial = entrada[0]

//A Variavel incial deve ser entre 1 e 100 000
if (nVariavelInicial == entrada.length - 1 && 1 <= nVariavelInicial && nVariavelInicial <= 100000) {

    // No laço, ele itera o array na condição de encontar zeros
    for (indice = 1; indice < entrada.length; indice++) {
        if (entrada[indice] == 0) {

            //Apaga o zero e volta um indice
            entrada.splice(indice, 1)
            indice = indice - 1

            //Apaga o indice anterior desejado e normaliza a indexação
            entrada.splice(indice, 1)
            indice = indice - 1
        }
    }

    //Calcula a soma dos números restantes, subtraindo a variavel inicial
    resultado = entrada.reduce((acumulador, numero) => acumulador + numero, -nVariavelInicial);
    console.log(resultado)

} else {

    //"0" como resposta é representado como mensagem de erro
    console.log(resultado)
}
let nome = prompt("Digite seu nome")
let text = alert  ("Clique no BOTÂO para fazer seu pedido") 
let total = 0
let desconto = 0
document.getElementById("nome").innerHTML = nome;



function Carlos() {
    let msg = prompt("Voce deseja fazer o pedido? \n1-Sim \n2-Não");
    while (msg == 1) {


        let lanche = prompt("Digite qual o lanche: \n1-X-Burguer 20,00R$  \n2-X-Salada 15,00R$");
        const lanches = ["X-Burguer 20,00R$", "X-Salada 15,00R$"];
        let opcao = "";
        let bebida = prompt("Digite a bebida que deseja: \n1-Coca-Cola  9,00R$ \n2-Fanta 8,00R$");
        const bebidas = ["Coca-Cola 9,00R$", "Fanta 8,00R$"];
        let sobremesa = prompt("Digite a sobremesa desejada: \n1-Pudim 23,00 R$ \n2-Bolo Bolo 22,00R$");
        const sobremesas = ["Pudim 23,00 R$", "Bolo 22,00R$"];

        let opcao_lanche = ""
        let opcao_bebida = ""
        let opcao_sobremesa = ""






        switch (lanche) {
            case "1":
                opcao_lanche += lanches[0]
                total += 20
                break;

            case "2":
                opcao_lanche += lanches[1]
                total += 15
                break;

            default:
                opcao_lanche += "Não possui lanches"
                break
        }
        switch (bebida) {
            case "1":
                opcao_bebida += bebidas[0]
                total += 9
                break;
            case "2":
                opcao_bebida += bebidas[1]
                total += 8
                break;
            default:
                opcao_bebida += "Não possui bebidas"
                break
        }
        switch (sobremesa) {
            case "1":
                opcao_sobremesa += sobremesas[0]
                total += 23
                break;

            case "2":
                opcao_sobremesa += sobremesas[1]
                total += 22
                break;
            default:
                opcao_sobremesa += "Não possui sobremesas"
                break
        }
        if (total > 70) {
            desconto = total * 0.8
        }
        else {
            desconto = total * 0.95
        }
        msg = prompt("Voce deseja fazer o pedido novamente?");

        document.getElementById("opcao_lanche").innerHTML = opcao_lanche;
        document.getElementById("opcao_bebida").innerHTML = opcao_bebida;
        document.getElementById("opcao_sobremesa").innerHTML = opcao_sobremesa;
        document.getElementById("total").innerHTML = total;

    }
}


function primo() {
    let primo = alert ("Bem vindo ao Lanches do Primo")
}







const lista = document.querySelector('ul')                         /* selecionei a ul a lista */
const mostrarTodos = document.querySelector('#buttonForEach')     /* chamei o button */
const mapearTudo = document.querySelector("#mapearTodos")
const soma = document.querySelector('#somarTudo')
const filtro = document.querySelector('#filtrarVeg')

function formartarMoeda(valor) {
    const novoValor = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(valor)
    return novoValor
}

function mostrar(arrayProdutos) {
    let minhaLista = ''      /* toda vez certificar de passar aqui e zerar os itens para nao criar varios itens e apenas uma lista*/

    arrayProdutos.forEach((produto) => {
        minhaLista = minhaLista +
            ` 
        <li> 
        <img src = ${produto.src} alt="fotoXsalada">  
        <p> ${produto.nome} </p>
        <p class="preço">${formartarMoeda(produto.preço)} </p>
        </li>
        `
    })

    lista.innerHTML = minhaLista;                        /* recebe o valor alterado */
}

function MapearClick() {
    const PrecoAlterado = menuOpçoes.map((novoPreco) => (
        {
            ...novoPreco,
            preço: novoPreco.preço * 0.9,
        }))
    mostrar(PrecoAlterado)                   /* recebe o valor alterado */
}

function somaItens() {
    const totalValores = menuOpçoes.reduce((acc, corrente) => acc + corrente.preço, 0)

    lista.innerHTML =
        ` 
            <li> 
            <p> O valor total dos itens e de ${formartarMoeda(totalValores)}</p>
            </li>
            `
    console.log(totalValores)
}

function vegItens() {
    const apenasVeg = menuOpçoes.filter((veganos) => veganos.vegano === true)

    mostrar(apenasVeg)
}

mostrarTodos.addEventListener('click', () => mostrar(menuOpçoes))
mapearTudo.addEventListener('click', MapearClick)
soma.addEventListener('click', somaItens)
filtro.addEventListener('click', vegItens)


let despesas = [];

function adicionarDespesa() {
    const categoria = document.getElementById('categoria').value;
    const categoria2 = document.getElementById('categoria2').value;
    const nomeDespesa = document.getElementById('nomeDespesa').value;
    const valor = parseFloat(document.getElementById('valor').value);
    
    const despesa = {
        id: despesas.length + 1,
        categoria,
        categoria2,
        nomeDespesa,
        valor
    };
    
    despesas.push(despesa);
    listarDespesas();
}

function listarDespesas() {
    const listaDespesas = document.getElementById('listaDespesas');
    listaDespesas.innerHTML = '';
    
    despesas.forEach(despesa => {
        const item = document.createElement('div');
        item.innerHTML = `Categoria: ${despesa.categoria}, Categoria 2: ${despesa.categoria2}, Despesa: ${despesa.nomeDespesa}, Valor: ${despesa.valor} <button onclick="apagarDespesa(${despesa.id})">Apagar</button>`;
        listaDespesas.appendChild(item);
    });
}

function apagarDespesa(id) {
    despesas = despesas.filter(despesa => despesa.id !== id);
    listarDespesas();
}

function pesquisarDespesas() {
    const termo = document.getElementById('inputPesquisa').value.toLowerCase();
    const listaFiltrada = despesas.filter(despesa => {
        return despesa.categoria.toLowerCase().includes(termo) || despesa.categoria2.toLowerCase().includes(termo) || despesa.nomeDespesa.toLowerCase().includes(termo);
    });
    
    const listaDespesas = document.getElementById('listaDespesas');
    listaDespesas.innerHTML = '';
    
    listaFiltrada.forEach(despesa => {
        const item = document.createElement('div');
        item.innerHTML = `Categoria: ${despesa.categoria}, Categoria 2: ${despesa.categoria2}, Despesa: ${despesa.nomeDespesa}, Valor: ${despesa.valor} <button onclick="apagarDespesa(${despesa.id})">Apagar</button>`;
        listaDespesas.appendChild(item);
    });
}

let proximoId = 1;
buscarDados();
function adicionarChurrasco(){
    let data = document.getElementById("data").value;
    let qtdHomens = parseInt(document.getElementById("qtdHomens").value);
    let qtdMulheres = parseInt(document.getElementById("qtdMulheres").value);
    let qtdCriancas = parseInt(document.getElementById("qtdCriancas").value);
    let qtdPessoas = qtdCriancas + qtdMulheres + qtdHomens;
    let carnes = (qtdHomens * 0.4) + (qtdMulheres * 0.32) + (qtdCriancas * 0.2);
    let paoDeAlho = (qtdHomens + qtdMulheres) * 2 + qtdCriancas;
    let carvao = qtdHomens + qtdMulheres + qtdCriancas; 
    let refrigerantes = carvao / 5;
    let cerveja = (qtdHomens + qtdMulheres) * 3;
    console.log(qtdMulheres)
    proximoId++;
    let idAtual = `${proximoId}`;
    const novoRegistro = {
        idAtual,
        data,
        qtdHomens,
        qtdMulheres,
        qtdCriancas,
        qtdPessoas,
        carnes,
        paoDeAlho,
        carvao,
        refrigerantes,
        cerveja
    };

    criarPost(novoRegistro);
    proximoId++;
}
    function adicionarRegistro(novoRegistro){
        const tbody = document.getElementById('tbody');
        const novaLinha = tbody.insertRow(tbody.rows.length);
        const celData = novaLinha.insertCell(0);
        const celQtdPessoas = novaLinha.insertCell(1);
        const celCarnes = novaLinha.insertCell(2);
        const celPaoDeAlho = novaLinha.insertCell(3);
        const celCarvao = novaLinha.insertCell(4);
        const celRefrigerante = novaLinha.insertCell(5);
        const celCerveja = novaLinha.insertCell(6);
        const celAcao = novaLinha.insertCell(7);

        celData.innerText = novoRegistro.data;
        celQtdPessoas.innerText = novoRegistro.qtdPessoas;
        celCarnes.innerText = novoRegistro.carnes;
        celPaoDeAlho.innerText = novoRegistro.paoDeAlho;
        celCarvao.innerText = novoRegistro.carvao;
        celRefrigerante.innerText = novoRegistro.refrigerantes;
        celCerveja.innerText = novoRegistro.cerveja;
        celAcao.innerHTML = '<button onclick="editarRegistro()">Editar</button>' + 
                            '<button onclick="removerRegistro()">Remover</button>';
        // window.location.href = "index.html";
    }

    
   async function buscarDados(){
    const resp = await fetch("http://localhost:3000/churrasco")
    const data = await resp.json()
    data.forEach(item => {
        adicionarRegistro(item)
    })
    }

   

    async function criarPost(registro){
        const response = await fetch("http://localhost:3000/churrasco", {
            method: "POST",
            body: JSON.stringify(registro),
            
        })
    }

    function obter(){

    }
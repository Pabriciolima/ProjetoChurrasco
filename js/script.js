buscarDados();
function adicionarChurrasco(event){
    let qtdHomens = parseInt(document.getElementById("qtdHomens").value);
    let qtdMulheres = parseInt(document.getElementById("qtdMulheres").value);
    let qtdCriancas = parseInt(document.getElementById("qtdCriancas").value);
    let qtdPessoas = qtdHomens +  qtdMulheres + qtdCriancas;
    let carnes = (qtdHomens * 0.4) + (qtdMulheres * 0.32) + (qtdCriancas * 0.2);
    let paoDeAlho = (qtdHomens + qtdMulheres) * 2 + qtdCriancas;
    let carvao = qtdPessoas; 
    let refrigerantes = qtdPessoas / 5;
    let cerveja = (qtdHomens + qtdMulheres) * 3;
    console.log(qtdMulheres)

    const novoRegistro = {
        data,
        qtdPessoas,
        carnes,
        paoDeAlho,
        carvao,
        refrigerantes,
        cerveja
    };

    adicionarRegistro(novoRegistro)
    registrosExistente.push(novoRegistro);
    localStorage.setItem('registros', JSON.stringify(registrosExistente));
    event.preventDefault();
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
        celAcao.innerText = '<button onclick="editarRegistro()">Editar</button>' + 
                            '<button onclick="removerRegistro()">Remover</button>';
        // window.location.href = "index.html";
    }

    function exibirRegistro(registros){
        registros.forEach(element => {
            adicionarRegistro(element)
        });
    }
    
   async function buscarDados(){
    const resp = await fetch("http://localhost:3000/churrasco")
    const data = await resp.json()
    data.forEach(item => {
        adicionarRegistro(item)
    })
    }

   // window.location.href = "index.html";
//   /* const td = document.getElementById('td')
//     td.innerHTML = `<td>${carnes}</td> <td>${paoDeAlho}</td><td>${carvao}</td> <td>${refrigerantes}</td> <td>${cerveja}</td>`*/


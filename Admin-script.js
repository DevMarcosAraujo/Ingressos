// Simulando ingressos vendidos
const ingressos = [
    { id: 1, nome: "João Silva", whatsapp: "(11) 99999-9999", cpf: "123.456.789-00", email: "joao@email.com", ingresso: "VIP" },
    { id: 2, nome: "Maria Souza", whatsapp: "(21) 98888-8888", cpf: "987.654.321-00", email: "maria@email.com", ingresso: "Pista" },
    { id: 3, nome: "Maria Valentina", whatsapp: "(21) 98888-8888", cpf: "987.654.321-44", email: "Valentina@email.com", ingresso: "Pista" }
];

// Função para carregar ingressos na tabela
function carregarIngressos() {
    const tabela = document.getElementById("tabelaIngressos");
    tabela.innerHTML = "";

    ingressos.forEach(ingresso => {
        const row = `
            <tr>
                <td>${ingresso.id}</td>
                <td>${ingresso.nome}</td>
                <td>${ingresso.whatsapp}</td>
                <td>${ingresso.cpf}</td>
                <td>${ingresso.email}</td>
                <td>${ingresso.ingresso}</td>
                <td>
                    <button onclick="verIngresso(${ingresso.id})">👁️ Ver</button>
                    <button onclick="cancelarIngresso(${ingresso.id})">❌ Cancelar</button>
                </td>
            </tr>
        `;
        tabela.innerHTML += row;
    });
}

// Função para visualizar detalhes do ingresso
function verIngresso(id) {
    alert("Detalhes do ingresso ID: " + id);
}

// Função para cancelar ingresso (simulado)
function cancelarIngresso(id) {
    alert("Ingresso ID " + id + " cancelado!");
}

// Logout do administrador
function logout() {
    alert("Você saiu do sistema!");
    window.location.href = "Index.html"; // Redireciona para a página de login
}

// Carregar ingressos ao abrir a página
document.addEventListener("DOMContentLoaded", carregarIngressos);

// admin-script.js
document.addEventListener('DOMContentLoaded', function() {
    console.log("O conteúdo foi carregado e o script está rodando!");
    // Coloque aqui a lógica do seu script
});


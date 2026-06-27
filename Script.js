document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("#contato form");

    if (formulario) {
        formulario.addEventListener("submit", function (evento) {
            // Impede o comportamento padrão (que seria atualizar a página)
            evento.preventDefault();

            // Captura os valores digitados
            const nome = formulario.querySelector("input[type='text']").value.trim();
            const email = formulario.querySelector("input[type='email']").value.trim();
            const mensagem = formulario.querySelector("textarea").value.trim();

            // 1. Validação simples para verificar se os campos estão vazios (CORRIGIDO AQUI!)
            if (nome === "" || email === "" || mensagem === "") {
                alert("Por favor, preencha todos os campos antes de enviar.");
                return; // Para a execução aqui
            }

            // Validação básica de formato de e-mail
            if (!email.includes("@") || !email.includes(".")) {
                alert("Por favor, insira um e-mail válido.");
                return;
            }

            // 2 e 3. Simulação de envio com sucesso e Mensagem de confirmação
            alert(`Mensagem enviada com sucesso!\n\nObrigado pelo contato, ${nome}!`);

            formulario.reset(); /* Limpa o campo */
        });
    }
});



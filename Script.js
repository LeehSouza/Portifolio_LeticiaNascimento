document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("#contato form");

    if (formulario) {
        formulario.addEventListener("submit", function (evento) {
            evento.preventDefault();

            // Captura as informações digitadas
            const nome = formulario.querySelector("input[type='text']").value.trim();
            const email = formulario.querySelector("input[type='email']").value.trim();
            const mensagem = formulario.querySelector("textarea").value.trim();

            // Validação para verificar se os campos estão vazios 
            if (nome === "" || email === "" || mensagem === "") {
                alert("Por favor, preencha todos os campos antes de enviar.");
                return; // Para a execução aqui
            }

            // Validação email
            if (!email.includes("@") || !email.includes(".")) {
                alert("Por favor, insira um e-mail válido.");
                return;
            }

            alert(`Mensagem enviada com sucesso!\n\nObrigado pelo contato, ${nome}!`);

            formulario.reset(); /* Limpa o campo */
        });
    }
});



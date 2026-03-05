document.getElementById('formWhatsApp').addEventListener('submit', function (e) {
  e.preventDefault();

  // Captura os valores
  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const servico = document.getElementById('servico').value;
  const msg = document.getElementById('mensagem').value.trim();

  // Validações
  if (nome.length < 2) {
    alert('Por favor, informe seu nome completo.');
    return;
  }

  // Validação simples de telefone (apenas números, mínimo 10 dígitos)
  const telLimpo = telefone.replace(/\D/g, '');
  if (telLimpo.length < 10) {
    alert('Por favor, insira um telefone válido com DDD.');
    return;
  }

  if (!servico) {
    alert('Por favor, selecione um serviço.');
    return;
  }

  // Monta a mensagem de forma organizada
  const textoMensagem = `Olá Studio Ferreira!
Me chamo: *${nome}*
Meu contato: *${telefone}*
Tenho interesse em: *${servico}*

${msg ? `*Observação:* ${msg}` : ''}`;

  // Encode para URL
  const textoEncoded = encodeURIComponent(textoMensagem);
  const numeroWhatsApp = "5511963439363";

  // Abre o WhatsApp
  window.open(`https://wa.me/${numeroWhatsApp}?text=${textoEncoded}`, '_blank', 'noopener,noreferrer');
});
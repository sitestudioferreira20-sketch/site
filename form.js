const form = document.getElementById('formWhatsApp');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = form.nome.value.trim();
  const telefone = form.telefone.value.trim();
  const servico = form.servico.value;
  const msg = form.mensagem.value.trim();

  if (nome.length < 2) {
    alert('Por favor, informe seu nome completo.');
    return;
  }

  const telLimpo = telefone.replace(/\D/g, '');
  if (!/^\d{10,11}$/.test(telLimpo)) {
    alert('Digite um telefone válido com DDD.');
    return;
  }

  if (!servico) {
    alert('Selecione um serviço.');
    return;
  }

  let textoMensagem = `Olá Studio Ferreira!
Meu nome é: *${nome}*
Meu telefone é: *${telefone}*
Serviço desejado: *${servico}*`;

  if (msg) {
    textoMensagem += `

Observação:
${msg}`;
  }

  const numeroWhatsApp = "5511963439363";
  const textoEncoded = encodeURIComponent(textoMensagem);

  const url = `https://wa.me/${numeroWhatsApp}?text=${textoEncoded}`;
  window.open(url, '_blank');
});


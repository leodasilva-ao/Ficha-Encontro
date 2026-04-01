import React from 'react';

function EmailButton() {
  const handleClick = () => {
    const emailRecipient = 'cniilp.geral@gmail.com'; // Email do destinatário
    const emailSender = 'leodasilva.geral.ao@gmail.com'; // Email do emissor
    const subject = 'Inscrição para a Semana da Língua Portuguesa'; // Assunto do e-mail (opcional)
    const body = 'Insira o arquivo word do Resumo'; // Corpo do e-mail (opcional)

    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailRecipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&bcc=${emailSender}`;
  };

  return (
    <button onClick={handleClick} className="btn" id='btn_email'>Enviar arquivo Word</button>
  );
}

export default EmailButton;

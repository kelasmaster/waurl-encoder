document.getElementById('generate-link').addEventListener('click', function () {
  const numberInput = document.getElementById('whatsapp-number');
  const messageInput = document.getElementById('message');
  const numberError = document.getElementById('number-error');
  const messageError = document.getElementById('message-error');
  const plainText = document.getElementById('plain-text');
  const directLink = document.getElementById('direct-link');

  // Reset errors
  numberError.textContent = '';
  messageError.textContent = '';

  // Get values
  const number = numberInput.value.trim();
  const message = messageInput.value.trim();

  // Validate inputs
  if (!number) {
    numberError.textContent = 'Please enter a valid WhatsApp number.';
    return;
  }
  if (!/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,}$/.test(number)) {
    numberError.textContent = 'Invalid phone number format.';
    return;
  }
  if (!message) {
    messageError.textContent = 'Please enter a message.';
    return;
  }

  // Encode the message
  const encodedMessage = encodeURIComponent(message);

  // Generate the WhatsApp URL
  const whatsappUrl = `https://wa.me/${number}?text=${encodedMessage}`;

  // Update the output fields
  plainText.textContent = whatsappUrl;
  directLink.href = whatsappUrl;
  directLink.textContent = 'Open in WhatsApp';
});

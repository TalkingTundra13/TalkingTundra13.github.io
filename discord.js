// Obtén el elemento del enlace de Discord
const discordLink = document.querySelector('.social-icon');

// Agrega un evento de clic al enlace
discordLink.addEventListener('click', () => {
  Swal.fire({
    title: '¡Mi perfil de Discord!',
    text: 'Mi nombre de usuario es: thisuseristundra',
    icon: 'info',
    confirmButtonText: '¡Genial!'
  });
});

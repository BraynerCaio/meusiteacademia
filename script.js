document.addEventListener('DOMContentLoaded', function() {
    // 1. Pega os elementos pelo ID que criamos
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    const navLinks = document.querySelectorAll('#nav-list a');

    // 2. Função principal para abrir/fechar
    function toggleMenu() {
        navList.classList.toggle('nav-active');
    }

    // 3. Adiciona o evento de clique ao botão hamburguer
    menuToggle.addEventListener('click', toggleMenu);

    // 4. Fecha o menu ao clicar em um link (para rolar suavemente)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Se o menu estiver aberto, feche-o
            if (navList.classList.contains('nav-active')) {
                toggleMenu(); 
            }
        });
    });
});


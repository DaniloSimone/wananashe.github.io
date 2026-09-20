document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.scroll-wrapper');
    const items = document.querySelectorAll('.elemento-scroll');
    const total = items.length;

    // Cada elemento "ocupa" una pantalla completa de scroll
    wrapper.style.height = `${total * 100}vh`;

    function actualizar() {
        const scrollTotal = wrapper.offsetHeight - window.innerHeight;
        const rect = wrapper.getBoundingClientRect();

        let avance = -rect.top;
        avance = Math.max(0, Math.min(avance, scrollTotal));

        const progreso = scrollTotal > 0 ? avance / scrollTotal : 0;
        let activo = Math.floor(progreso * total);
        activo = Math.min(total - 1, Math.max(0, activo));

        items.forEach((item, i) => {
            item.classList.remove('visible', 'antes', 'despues');
            if (i === activo) {
                item.classList.add('visible');
            } else if (i < activo) {
                item.classList.add('antes');
            } else {
                item.classList.add('despues');
            }
        });
    }

    window.addEventListener('scroll', actualizar);
    window.addEventListener('resize', actualizar);
    actualizar();
});
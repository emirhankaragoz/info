const fnavdots = document.querySelectorAll('.f-nav-dot');
const fkartlarisec = document.querySelectorAll('.f-kartlari');

fnavdots.forEach(dot => {
    dot.addEventListener('click', function() {
        const grupnumarasi = this.getAttribute('data-group');
        
        fnavdots.forEach(d => d.classList.remove('aktif'));
        this.classList.add('aktif');

        fkartlarisec.forEach(group => group.classList.remove('aktif'));

        document.getElementById(`f-kartlari-${grupnumarasi}`).classList.add('aktif');
    });
});
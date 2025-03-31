const aramabuton = document.getElementById('arama-butonu');
const aramapop = document.getElementById('arama-pop');
const aramakapat = document.getElementById('arama-kapat');
        
aramabuton.addEventListener('click', function() {
    aramapop.style.display = 'flex';
});
        
aramakapat.addEventListener('click', function() {
    aramapop.style.display = 'none';
});
        
window.addEventListener('click', function(event) {
    if (event.target === aramapop) {
        aramapop.style.display = 'none';
    }
});
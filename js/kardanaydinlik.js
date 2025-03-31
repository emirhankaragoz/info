const kardanaydinlik = document.getElementById('kardan-aydinlik');
const iconsec = kardanaydinlik.querySelector('i');
        
kardanaydinlik.addEventListener('click', function() {
    document.body.classList.toggle('karanlik');
    if (document.body.classList.contains('karanlik')) {
        iconsec.classList.remove('fa-moon');
        iconsec.classList.add('fa-sun');
    } else {
        iconsec.classList.remove('fa-sun');
        iconsec.classList.add('fa-moon');
    }
});
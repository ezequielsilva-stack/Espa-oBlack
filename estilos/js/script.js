const mobileBtn = document.querySelector('.btn-mobile');
const navLinks = document.getElementById('nav-links');
const icon = document.querySelector('.btn-mobile i');
mobileBtn.addEventListener('click', () =>{
    navLinks.classList.toggle('show');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times')
})

window.addEventListener('scroll', () =>{
    const header = document.querySelector('header');
    
    if(window.scrollY > 0){
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    }
    else{
        header.style.boxShadow = 'none';
    }
})
const elementos = document.querySelectorAll(`
    #home > *,
    .trending-card,
    .about-content > *,
    .product-card,
    .product-content,
    .title
`);

// aplica estado inicial sem mexer no HTML
elementos.forEach(el => {
    el.classList.add("reveal");
});

function animarScroll(){
    const alturaTela = window.innerHeight;

    elementos.forEach((el, index) => {
        const topo = el.getBoundingClientRect().top;

        if(topo < alturaTela - 80){
            setTimeout(() => {
                el.classList.add("ativo");
            }, index * 60); // sequência
        }
    });
}

window.addEventListener("scroll", animarScroll);
animarScroll();
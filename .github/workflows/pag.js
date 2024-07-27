const frases = [
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "La única forma de hacer un gran trabajo es amar lo que haces.",
    "No importa cuán despacio vayas, siempre y cuando no te detengas.",
    "Cree en ti mismo y todo será posible.",
    "El futuro pertenece a quienes creen en la belleza de sus sueños.",
    "La perseverancia es la clave del éxito en cualquier empresa.",
    "Cada día es una nueva oportunidad para cambiar tu vida.",
    "Los desafíos son lo que hacen la vida interesante y superarlos es lo que la hace significativa.",
    "Tu actitud determina tu dirección.",
    "El optimismo es la fe que conduce al logro; nada puede hacerse sin esperanza.",
    "La creatividad es la inteligencia divirtiéndose.",
    "El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora.",
    "Convierte tus heridas en sabiduría.",
    "La vida es 10% lo que te sucede y 90% cómo reaccionas ante ello.",
    "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
    "Apunta a la luna. Si fallas, podrías dar a una estrella.",
    "No cuentes los días, haz que los días cuenten.",
    "La disciplina es el puente entre metas y logros.",
    "Las oportunidades no ocurren, las creas tú.",
    "El fracaso es éxito si aprendemos de él."
];

function generarFrase() {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById('frase').innerText = fraseAleatoria;
}
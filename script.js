document.addEventListener('DOMContentLoaded', () => {
  console.log('Dragon Ball FanPage ready.');
  
  // Efecto de partículas de energía en el fondo
  createEnergyParticles();
  
  // Añadir efecto de brillo a los enlaces de navegación
  addNavGlowEffect();
  
  // Añadir efecto de aparición gradual a los elementos principales
  animateMainElements();
  
  // Mostrar personajes
  displayCharacters();
  
  // Añadir funcionalidad de búsqueda
  setupSearch();
});

// Función para mostrar los personajes
function displayCharacters(characters = personajes) {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  
  characters.forEach(character => {
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
      <div class="card-content">
        <img src="${character.imagen}" alt="${character.nombre}">
        <h3>${character.nombre}</h3>
        <span class="raza">${character.raza}</span>
        <h4>Transformaciones:</h4>
        <ul>
          ${character.transformaciones.map(t => `<li>${t}</li>`).join('')}
        </ul>
        <h4>Curiosidades:</h4>
        <ul>
          ${character.curiosidades.map(c => `<li>${c}</li>`).join('')}
        </ul>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

// Función para configurar la búsqueda
function setupSearch() {
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Buscar personaje...';
  searchInput.id = 'search-input';
  searchInput.style.cssText = `
    padding: 0.8rem 1.2rem;
    margin: 1rem auto;
    display: block;
    width: 80%;
    max-width: 500px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border-radius: 30px;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;
  `;
  
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = personajes.filter(p => 
      p.nombre.toLowerCase().includes(searchTerm) || 
      p.raza.toLowerCase().includes(searchTerm)
    );
    displayCharacters(filtered);
  });
  
  document.querySelector('main').prepend(searchInput);
}

// Función para crear partículas de energía en el fondo
function createEnergyParticles() {
  const body = document.querySelector('body');
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles-container';
  body.appendChild(particlesContainer);
  
  // Crear 20 partículas de energía
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'energy-particle';
    
    // Posición aleatoria
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    // Tamaño aleatorio
    const size = Math.random() * 15 + 5;
    
    // Color aleatorio (naranja o azul)
    const colors = ['rgba(255, 107, 0, 0.7)', 'rgba(0, 191, 255, 0.7)'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Duración aleatoria de la animación
    const duration = Math.random() * 10 + 5;
    
    // Aplicar estilos
    particle.style.cssText = `
      position: fixed;
      top: ${posY}%;
      left: ${posX}%;
      width: ${size}px;
      height: ${size}px;
      background-color: ${color};
      border-radius: 50%;
      filter: blur(2px);
      z-index: -1;
      opacity: 0.7;
      animation: float ${duration}s infinite ease-in-out;
    `;
    
    particlesContainer.appendChild(particle);
  }
}

// Función para añadir efecto de brillo a los enlaces de navegación
function addNavGlowEffect() {
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.textShadow = '0 0 10px rgba(0, 191, 255, 0.8), 0 0 20px rgba(0, 191, 255, 0.5)';
    });
    
    link.addEventListener('mouseleave', () => {
      link.style.textShadow = 'none';
    });
  });
}

// Función para animar elementos principales
function animateMainElements() {
  const mainElements = document.querySelectorAll('main h2, main p, main img, .card');
  
  mainElements.forEach((element, index) => {
    // Retrasar la animación para cada elemento
    setTimeout(() => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, 100);
    }, index * 200);
  });
}

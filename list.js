let currentIndex = 0;
      let charactersData;
    
      async function fetchCharacters() {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        charactersData = await response.json();
      
      }
    
      async function agregar() {
        if (!charactersData) {
          await fetchCharacters();
        }
    
        const characterListContainer = document.getElementById('character-list-container');
    
        if (currentIndex < charactersData.results.length) {
          const character = charactersData.results[currentIndex];
    
          const listItem = document.createElement('div');
          listItem.classList.add('character-card', 'position-relative');
    
          listItem.innerHTML = `
            <div class="card">
              <div class="number-badge">${currentIndex + 1}</div>
              <img src="${character.image}" class="card-img-top" alt="Character Image">
              <div class="card-body">
                <u><h5 class="card-title">${character.name}</h5></u>
                <p class="card-text">
                  
                  <span class="fw-bold">ID:</span> ${character.id}<br>
                  <span class="fw-bold">Estado:</span> <span>${character.status}</span><br>
                  <span class="fw-bold">Especie:</span> ${character.species}
                </p>
              </div>
            </div>
          `;
    
          characterListContainer.appendChild(listItem);
          currentIndex++;
        } else {
          alert('No hay mas personajes');
        }
      }
    
      function limpiar() {
        currentIndex = 0;
        const characterListContainer = document.getElementById('character-list-container');
        characterListContainer.innerHTML = '';
      }
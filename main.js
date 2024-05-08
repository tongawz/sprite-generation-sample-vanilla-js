import './style.css'

const appContainer = document.getElementById('app');

async function cargarDatosDesdeJSON() {
  try {
    const response = await fetch('./archery.json');
    const jsonData = await response.json();

    jsonData.forEach(data => {
      const ageStages = ['feudalAge', 'castleAge'];
      const image = data['image']
      console.log(image);
      ageStages.forEach(stage => {
        const stageData = data[stage];
        const { size, positions } = stageData;
        positions.forEach(position => {
          const newDiv = document.createElement('div');
          newDiv.style.background = `url(${image}) no-repeat`;
          newDiv.style.display = 'inline-block';
          newDiv.style.width = `${size[0]}px`;
          newDiv.style.height = `${size[1]}px`;
          newDiv.style.backgroundPosition = `${position[0]}px ${position[1]}px`;
          appContainer.appendChild(newDiv);
        });
      });
    })

  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
}

window.onload = cargarDatosDesdeJSON;
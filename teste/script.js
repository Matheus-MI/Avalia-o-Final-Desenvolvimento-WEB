// script.js

// Variáveis para os elementos do DOM
const catImage = document.getElementById('catImage');
const deleteCatButton = document.getElementById('deleteCatButton');
const newCatButton = document.getElementById('newCatButton');
const newCatButtonCard = document.getElementById('newCatButtonCard');

// Função para obter uma imagem de gato aleatória da API
async function getCatImage() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        if (response.ok) {
            const catData = await response.json();
            return catData[0].url;
        } else {
            console.error('Falha ao obter a imagem de gato. Código:', response.status);
            return null;
        }
    } catch (error) {
        console.error('Erro durante a requisição:', error);
        return null;
    }
}

// Função para exibir uma imagem de gato
async function displayCatImage() {
    const catImageUrl = await getCatImage();
    if (catImageUrl) {
        catImage.src = catImageUrl;
        catImage.parentElement.classList.add('centered'); // Adiciona a classe para centralizar
    }
}

// Restante do script.js permanece o mesmo


// Função para excluir a imagem de gato
function deleteCatImage() {
    catImage.src = ''; // Limpa a imagem
}

// Event listeners para os botões
newCatButton.addEventListener('click', displayCatImage);
newCatButtonCard.addEventListener('click', displayCatImage);
deleteCatButton.addEventListener('click', deleteCatImage);

// Inicializa a página
document.addEventListener('DOMContentLoaded', displayCatImage);

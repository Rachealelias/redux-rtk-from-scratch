export const fetchRandomDogImage = () => {
    return fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => data.message)
    .catch(error => alert(error.message))
}
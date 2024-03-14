document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name')
    const usernameElement = document.querySelector('#username')
    const avatarElement = document.querySelector('#avatar')
    const reposElement = document.querySelector('#repos')
    const followersElement = document.querySelector('#followers')
    const followingElement = document.querySelector('#following')
    const linkElement = document.querySelector('#link')

    const link = 'https://api.github.com/users/GuiZeroUm'

    fetch(link)
    .then(function(res) {
    if(res.ok){
        return res.json();
    }
    throw new Error();
    })
    .then(function(json) {
    nameElement.innerHTML = json.name
    usernameElement.innerHTML = json.login
    avatarElement.src = json.avatar_url
    reposElement.innerHTML = json.public_repos
    followersElement.innerHTML = json.followers
    followingElement.innerHTML = json.following
    linkElement.href = json.html_url
    })
    .catch(function(error){
    alert("Erro na API")
    })
})
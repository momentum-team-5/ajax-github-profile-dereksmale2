let url = 'https://api.github.com/users/dereksmale2'
let content = document.querySelector('.wrapper')

fetch(url)
.then(response => response.json())
.then(data => {
    let info = `

    <h1>${data.name}</h1>
    <div id="container">
        <div class="profileInfo">
            <h3>The Basics</h3>
            <p class="description">Name: <p class="desciptionInfo">${data.name}</p></p>
            <p class="description">GitHub URL: <p class="descriptionInfo"><a href="${data.html_url}">https://api.github.com/users/dereksmale2</a></p></p>
            <p class="description">Email: <p class="descriptionInfo">dereksmale2@gmail.com</p></p>
            <p class="description">Location: <p class="descriptionInfo">${data.location}</p></p>
        </div>

        <div class="profileAbout">
            <h3>The Story</h3>
            <p class="bio">${data.bio}</p>
        </div>

        <div class="profileImage">
            <img src="${data.avatar_url}"/>
        </div>
    </div> `

    content.innerHTML = info

    })
const buddiesLoad = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}

buddiesLoad()

const displayBuddies = (buddy) => {
    console.log(buddy)
    const buddies = buddy.results
    const buddiesDiv = document.getElementById('buddies')
    for (const buddy of buddies) {
        console.log(buddy)
        const p = document.createElement('p')
        p.innerText = `Name:${buddy.name.title} ${buddy.name.first} ${buddy.name.last} gender:${buddy.gender}  email:${buddy.email}`
        buddiesDiv.appendChild(p)
    }

}
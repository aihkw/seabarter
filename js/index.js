/*

What up bud, welcome to the 

*/

document.addEventListener('DOMContentLoaded', ()=>{
    // Load topnav
    const topnav = document.getElementsByTagName('topnav')[0]
    fetch('/API/topnav.json').then(data => {
        data.json().then(item => {
            item.forEach(e => {
                let a = document.createElement('a');
                a.innerHTML = e.name;
                a.href = e.href;
                topnav.appendChild(a);
            });
        })
        // with author of course, why wouldn't I want to credit myself
        const author = document.createElement('author');
        author.innerHTML = 'Designed by Aiko';
        topnav.appendChild(author);
        console.log('LOADED');
        // ah yes, forgot to add the logo
        const img = document.createElement('img');
        img.src = '/assets/seabarter.png';
        topnav.appendChild(img)
    })
    
    // Load sections only if the page is home
    if (window.location.pathname === '/') {
        // Load sections
        let section = document.querySelector('section');
        fetch('/API/sections.json').then(data => {
            data.json().then(item => {
                item.forEach(e => {
                    let title = document.createElement('a');
                    title.innerHTML = e.q;
                    title.classList.add('title');
                    title.setAttribute('middle', '');
                    let desc = document.createElement('a');
                    desc.innerHTML = e.a;
                    desc.classList.add('desc');
                    desc.setAttribute('middle', '');
                    section.appendChild(title);
                    section.appendChild(desc);
                })
            })
        })
    }
})
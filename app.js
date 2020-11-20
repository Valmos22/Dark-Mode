const boton = document.querySelector('#boton')
const temaDefault = window.matchMedia('(prefers-color-scheme: dark)')
const nombre = document.querySelector('#nombre')

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.toggle('dark-theme');
} else if (currentTheme === 'light') {
    document.body.classList.toggle('light-theme');
}

//------------Para el color--------------
boton.addEventListener('click', () => {
    let theme;
    if (temaDefault.matches) {
        document.body.classList.toggle('light-theme')
        theme = document.body.classList.contains('light-theme') ? 'light' : 'dark'
    } else {
        document.body.classList.toggle('dark-theme')
        theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light'
    }
    localStorage.setItem('theme', theme)
})

// boton.addEventListener('click', () => {
//     console.log("hiciste click")
//     console.log(temaDefault)

//     if (temaDefault.matches) {
//         document.body.classList.toggle('light-theme')
//     } else {
//         document.body.classList.toggle('dark-theme')
//     }
// })
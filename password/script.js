const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value === null) {
        messages.push('name is required')
    }

    if (password.value.length >= 10) {
        messages.push('password must be 10 characters long')
    }

    if (password.value === 'password') {
        messages.push('password cannot be password')
    }

    
    if (messages.length > 0) {
        e.preventDefault() 
        errorElement,innerText = messages.join(', ')
    }
    
})
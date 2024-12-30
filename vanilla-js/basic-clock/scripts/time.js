let dayInfo = document.getElementById('date')
let timeSpan = document.getElementById('time')

const dateInfoObj = new Date
let formattedDate = dateInfoObj.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    weekday: 'long'
})

dayInfo.textContent = formattedDate

setInterval(() => {
    const dateTimeObj = new Date
    const formattedTime = dateTimeObj.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit', 
        second: '2-digit',
        hour12: false
    })

    timeSpan.textContent = formattedTime
}, 1000)
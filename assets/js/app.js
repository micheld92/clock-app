const city = document.getElementById('city').innerText
const time = document.getElementById('time')
const dayPeriod = document.getElementById('day-period')

function findLocation(){
    const location = city.split('/')
}/*
    if(city.includes('/termos-de-uso-empresas/')){
    console.log('lond')
    }
    else{
        console.log('sjs')
    }*/
findLocation();



const updateTimes = function(){
    const now = luxon.DateTime.now().setZone(city)
    time.innerHTML = now.toFormat("HH:mm")
    const hour = parseInt(now.toFormat('HH'))
    if(hour > 5 && hour <= 12){
        dayPeriod.innerHTML = `<span class="material-symbols-outlined">sunny</span> Good Evening, It's currently`
    }
    else if(hour > 12 && hour <= 18){
        dayPeriod.innerHTML = `<span class="material-symbols-outlined">
        wb_twilight </span> Good Evening, It's currently`
    }
    else{
        dayPeriod.innerHTML = `<span class="material-symbols-outlined">dark_mode</span> Good Night, It's currently`
    }
}

updateTimes()
setInterval(function() {
    updateTimes()
}, 1000)

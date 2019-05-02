
let getData = () => {
    return new Promise(resolve =>{
        setTimeout( () => {
            fetch(
              "https://api.apixu.com/v1/current.json?key={key}=Santiago"
            )
              .then(resp => {
                console.log("respuesta: ", resp.status);
                return resp.json();
              })
              .then(data => {
                let img = document.createElement('img');
                img.setAttribute('src', `https:${data.current.condition.icon}`);
                img.style.height = '100px';
                imagen.appendChild(img);
                let icon = data.current.condition.icon;
                ciudad.innerHTML = `ciudad: ${data.location.name}`;
                tiempo.innerHTML = `Tiempo: ${data.current.condition.text}`;
                temp.innerHTML = `Temperatura: ${data.current.temp_c}`;
                wind.innerHTML = `Viento: ${data.current.wind_kph}`;
              });
        }, 1000)
    } )
}

async function readInfo() {
    console.log('waiting data from server ...');
    const info = await getData();
    console('response: ', info);
}

readInfo();

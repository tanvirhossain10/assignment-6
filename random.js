const yo = () => {
    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => firstFetch(data))
    // .then(d => console.log(d.results[0]))

}
// yo()
// firstFetch()


const firstFetch = datas => {
    // console.log(data)
    // yo()
    console.log(datas);
    // console.log(data.results)/

    const imgDiv = document.getElementById('img');
    imgDiv.textContent = '';
    const img = document.createElement('div');
    img.innerHTML = `<img  src="${datas.results[0].picture.large}" alt="">
    <p>name:${datas.results[0].name.first} ${datas.results[0].name.last} </br>gender:${datas.results[0].gender}</P>
    <p>${datas.results[0].name.first} lives in street number ${datas.results[0].location.street.number},${datas.results[0].location.street.name}, in ${datas.results[0].location.city} city ,${datas.results[0].location.state} state,${datas.results[0].location.country} </P>
        `;
    console.log(datas.results[0].location)
    imgDiv.appendChild(img)

}
// function yo(img) {

// }
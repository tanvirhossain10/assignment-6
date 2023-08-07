// const firstFetch = () => {
//     fetch('https://www.thesportsdb.com/api/v1/json/3/all_leagues.php')
//         .then(res => res.json())
//         .then(data => yo(data))
// }
// // firstFetch();
// const yo = (yo) => {
//     console.log(yo)
// }
const loder = document.getElementById('loading');

const search = () => {
    document.getElementById('yo').textContent = '';
    loadigSping()
    const getSearch = document.getElementById('search-feild').value;
    fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${getSearch}`)
        .then(res => res.json())
        .then(data => yo(data.player))

}
// firstFetch();
function loadigSping() {
    loder.classList.add('display');
    setTimeout(() => {
        loder.classList.remove('display');
    }, 5000);
}
function hideLoadingSping() {
    loder.classList.remove('display')
}

const yo = data => {
    document.getElementById('search-feild').value = '';

    console.log(data)
    data.forEach(d => {
        // console.log(data)
        const imgDiv = document.getElementById('yo');
        const div = document.createElement('div');
        console.log(d)
        div.classList.add('col');
        console.log(d.strThumb)
        div.innerHTML = `
        <div onclick="seePlyaerDetails(${d.idPlayer})"  class="card h-100">
        <img src="${d.strThumb}" class="card-img-top" width="150px" alt="...">
        <div class="card-body">
            <h5 class="card-title">${d.strPlayer}</h5>
            <p class="card-text">${d?.strDescriptionEN?.slice(0, 200)}.</p>
            <a href="https://${d.strFacebook}" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        `
        // console.log(d.strThumb)
        // console.log(d.strThumb)
        imgDiv.appendChild(div);
        hideLoadingSping()
    })

    // return;
}
const seePlyaerDetails = data => {
    // console.log(data)
    const url = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${data}`;
    loadigSping()
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data))


}
const displayDetails = data => {
    console.log(data)
    const div = document.getElementById('player-detail');
    div.classList.add('card');
    div.textContent = '';
    div.innerHTML = `
    <img src="${data.players[0].strThumb}" class="card-img-top" width=""  alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.players[0].strPlayer}</h5>
            <p class="card-text">${data?.players[0]?.strDescriptionEN?.slice(0, 100)}</p>
            <a href="https://${data?.players[0]?.strFacebook
        }" class="btn btn-primary">Facebook</a>
        </div>
    `
    hideLoadingSping()
    // div.appendChild()
}
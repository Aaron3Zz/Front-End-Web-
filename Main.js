
async function getData(){

    let aipUrl = "https://www.boredapi.com/api/activity";
    let response = await fetch(aipUrl).catch(err => console.error(err));
    const data = await response.json();
    console.log(data);
    let entries = data.activity;

    console.log(entries);

    let listItem = document.createElement("li");
    listItem.innerHTML = `<p>${"~" + entries}</p>`
    toDoList.appendChild(listItem);
    console.log(listItem);
}

searchButton.onclick = () => getData();
refreshButton.onclick = () => location.reload();


fetch("http://localhost:3000/User")
    .then(res=> res.json())
    .then(json=> {
        json.map(data=> {
            console.log(data.name);

            let name = data.name;
            let dataname = document.createElement("li");
            dataname.innerHTML = `<p>${name}</p>`;
            assignData.appendChild(dataname);
        })
    })
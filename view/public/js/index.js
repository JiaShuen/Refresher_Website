document.addEventListener("DOMContentLoaded", function(e) {
    const baseUrl = 'http://localhost:8383';

    const getAddBtn = document.getElementById("getAdd");
    getAddBtn.addEventListener("click", getAddresses);
    const addressTbl = document.getElementById("addressTbl");

    async function getAddresses(e) {
        e.preventDefault();
        
        addressTbl.innerHTML = `
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
            </tr>
        `;

        fetch(baseUrl + '/Address', {
            method: 'GET'
        }).then((res) => {
            return res.json();
        }).then((json) => {
            var html = ``;
            console.log(json);
            for (i = 0; i < json.length; i++) {
                html += `
                <tr>
                    <td>${json[i].id}</td>
                    <td>${json[i].name}</td>
                    <td>${json[i].address}</td>
                </tr>`;
            }
            addressTbl.innerHTML += html;
        }).catch((err) => {
            console.log(err);
        });
    }
})
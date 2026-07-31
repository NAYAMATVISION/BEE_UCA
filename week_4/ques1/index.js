const users = [
    {name : "Alice", age : 25},
    {name : "Bob", age : 30},
    {name : "Charlie", age : 35}
]

function generateTable(){
    const rows = users.map(user => `
        <tr>
           <td>${user.name}</td>
           <td>${user.age}</td>
        </tr>
        `).join("");
    return `
        <table border = "1">
           ${rows}
        </table>
    `;
}

document.getElementById("usersList").innerHTML = generateTable();
const fields = [
    "First Name",
    "Last Name",
    "Email"
]

function generateForm(){
    const data = fields.map(field => `
        <div>
        <label>${field}</label><br>
        <input type = "text">
        </div>
        `
    ).join("")
    return `
    <form>
        ${data}
    </form>
    `;
}

document.getElementById("formid").innerHTML = generateForm();
let dataBase = [];
function addStudent() {
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let grade = Number(document.getElementById("grade").value);

    if (fullName === "" || email === "" || grade < 0 || grade > 100) {
        alert("Check your information");
        return;
    }

    let info = {
        fullName: fullName,
        email: email,
        grade: grade,
        date: new Date().toLocaleDateString(),
    };

    dataBase.push(info);

    clearInputs();
    showTable();
}

function showTable() {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    dataBase.forEach((student, index) => {
        tbody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${student.date}</td>
            <td>${student.fullName}</td>
            <td>${student.email}</td>
            <td>${student.grade}</td>
            <td>
                <button class="update-btn" onclick="updateStudent(${index})">Update</button>
                <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>
        `;
    });
}

function clearInputs() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("grade").value = "";
}

function deleteStudent(index) {
    dataBase.splice(index, 1);
    showTable();
}

function updateStudent(index) {
    document.getElementById("fullName").value = dataBase[index].fullName;
    document.getElementById("email").value = dataBase[index].email;
    document.getElementById("grade").value = dataBase[index].grade;

    document.getElementById("add").innerText = "Update";

    document.getElementById("add").onclick = function () {
        applyUpdate(index);
    };
}

function applyUpdate(index) {
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let grade = Number(document.getElementById("grade").value);

    if (fullName === "" || email === "" || grade < 0 || grade > 100) {
        alert("Check your information");
        return;
    }

    dataBase[index].fullName = fullName;
    dataBase[index].email = email;
    dataBase[index].grade = grade;

    document.getElementById("add").innerText = "Add";
    document.getElementById("add").onclick = addStudent;

    clearInputs();
    showTable();
}
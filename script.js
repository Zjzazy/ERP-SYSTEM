function navigate(section) {
    const content = document.getElementById("content");
    if (section === "faculty") {
        content.innerHTML = facultyPage();
    } else if (section === "student") {
        content.innerHTML = studentPage();
    } else if (section === "admin") {
        content.innerHTML = adminPage();
    } else if (section === "parent") {
        content.innerHTML = parentPage();
    }
}

function facultyPage() {
    return `
        <h2>Faculty Login</h2>
        <input id="facultyUser" placeholder="Username">
        <input id="facultyPass" placeholder="Password" type="password">
        <button class="submit-btn" onclick="facultyLogin()">Login</button>
    `;
}

function facultyLogin() {
    navigate("facultyDashboard");
    const content = document.getElementById("content");
    content.innerHTML = `
        <h2>Faculty Dashboard</h2>
        <p>Welcome, Faculty! You can manage your classes here.</p>
    `;
}

function studentPage() {
    return `
        <h2>Student Login</h2>
        <input id="studentUser" placeholder="Username">
        <input id="studentPass" placeholder="Password" type="password">
        <button class="submit-btn" onclick="studentLogin()">Login</button>
    `;
}

function studentLogin() {
    navigate("studentDashboard");
    const content = document.getElementById("content");
    content.innerHTML = `
        <h2>Student Dashboard</h2>
        <p><strong>Student Info:</strong> Alice Smith, ID: 1</p>
        <p><strong>Assignments:</strong> Math Homework, Science Project</p>
        <p><strong>Notes:</strong> Prepare for upcoming exams.</p>
    `;
}

function adminPage() {
    return `
        <h2>Admin Login</h2>
        <input id="adminUser" placeholder="Username">
        <input id="adminPass" placeholder="Password" type="password">
        <button class="submit-btn" onclick="adminLogin()">Login</button>
    `;
}

function adminLogin() {
    navigate("adminDashboard");
    const content = document.getElementById("content");
    content.innerHTML = `
        <h2>Admin Dashboard</h2>
        <button onclick="adminOption(1)">Add Admission</button>
        <button onclick="adminOption(2)">Record Fee Payment</button>
        <button onclick="adminOption(3)">Allocate Hostel</button>
        <button onclick="adminOption(4)">View Dashboard</button>
    <div id="adminOptions"></div>
    `;
}

function adminOption(option) {
    let container = document.getElementById("adminOptions");
    container.innerHTML = "";

    if (option === 1) {
        container.innerHTML = `
            <h3>Add Admission</h3>
            <input id="studentName" placeholder="Student Name">
            <input id="studentEmail" placeholder="Student Email">
            <button onclick="addAdmission()">Submit</button>
        `;
    } else if (option === 2) {
        container.innerHTML = `
            <h3>Record Fee Payment</h3>
            <input id="studentIDFee" placeholder="Student ID">
            <input id="amountPaid" placeholder="Amount Paid">
            <input id="receiptNumber" placeholder="Receipt Number">
            <button onclick="recordFee()">Submit</button>
        `;
    } else if (option === 3) {
        container.innerHTML = `
            <h3>Allocate Hostel</h3>
            <input id="studentIDHostel" placeholder="Student ID">
            <input id="roomNumber" placeholder="Room Number">
            <button onclick="allocateHostel()">Submit</button>
        `;
    } else if (option === 4) {
        let admissions = JSON.parse(localStorage.getItem("admissions") || "[]");
        let fees = JSON.parse(localStorage.getItem("fees") || "[]");
        let hostels = JSON.parse(localStorage.getItem("hostels") || "[]");

        container.innerHTML = `
            <h3>Institution Dashboard</h3>
            <p>Total Admissions: ${admissions.length}</p>
            <p>Total Fee Records: ${fees.length}</p>
            <p>Total Hostel Allocations: ${hostels.length}</p>
        `;
    }
}

function addAdmission() {
    let admissions = JSON.parse(localStorage.getItem("admissions") || "[]");
    let name = document.getElementById("studentName").value;
    let email = document.getElementById("studentEmail").value;
    admissions.push({id: admissions.length + 1, name, email});
    localStorage.setItem("admissions", JSON.stringify(admissions));
    alert(`Admission recorded: ID ${admissions.length}`);
}

function recordFee() {
    let fees = JSON.parse(localStorage.getItem("fees") || "[]");
    let id = document.getElementById("studentIDFee").value;
    let amount = document.getElementById("amountPaid").value;
    let receipt = document.getElementById("receiptNumber").value;
    fees.push({id, amount, receipt});
    localStorage.setItem("fees", JSON.stringify(fees));
    alert(`Fee recorded for student ID ${id}`);
}

function allocateHostel() {
    let hostels = JSON.parse(localStorage.getItem("hostels") || "[]");
    let id = document.getElementById("studentIDHostel").value;
    let room = document.getElementById("roomNumber").value;
    hostels.push({id, room});
    localStorage.setItem("hostels", JSON.stringify(hostels));
    alert(`Hostel allocated: Student ID ${id} to room ${room}`);
}

function parentPage() {
    return `
        <h2>Parent Login</h2>
        <input id="parentUser" placeholder="Username">
        <input id="parentPass" placeholder="Password" type="password">
        <button class="submit-btn" onclick="parentLogin()">Login</button>
    `;
}

function parentLogin() {
    navigate("parentDashboard");
    const content = document.getElementById("content");
    content.innerHTML = `
        <h2>Parent Dashboard</h2>
        <p><strong>Student Marks:</strong> Math: 85, Science: 90</p>
        <p><strong>Attendance:</strong> 95%</p>
    `;
}

// Define student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "Cayden",
    lastName: "Hartze",
    age: 20,
    location: "South Africa"
};

const student2: Student = {
    firstName: "Ismail",
    lastName: "Mahomed",
    age: 21,
    location: "Madinah"
};

// Create an array
const studentsList: Student[] = [student1, student2];

// Render table using Vanilla JavaScript
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach(student => {
    const row = document.createElement('tr');
    
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);

const { v4: uuidv4 } = require('uuid');

let projects = [
    {
        id: uuidv4(),
        name: "Proyecto A",
        description: "Este es el proyecto A",
        startDate: "2024-01-01",
        endDate: "2024-06-01",
        status: "pendiente",
        budget: 10000
    },
    {
        id: uuidv4(),
        name: "Proyecto B",
        description: "Este es el proyecto B",
        startDate: "2024-03-01",
        endDate: "2024-09-01",
        status: "en progreso",
        budget: 25000
    }
];

function getAllProjects() {
    return projects;
}

function createProyect(data) {
    const newProyect = {
        id: uuidv4(),
        name: data.name,
        description: data.description,
        startDate: data.startDate,
        endDate: data.endDate,
        status: data.status,
        budget: data.budget
    };
    projects.push(newProyect);
    return newProyect;
}

module.exports = {
    getAllProjects,
    createProyect
};

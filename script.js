const projects = [
    {
        title: "Jokes Generator - Random or Set-value Generator",
        description: "HTML / CSS / JavaScript",
        description2: "This program generates a simple webpage that displays jokes randomly fetched from a predefined array using JavaScript.",
        image: "images/joke_gen.gif" 
    },
    {
        title: "Brick Checker - Quality control",
        description: "Java",
        description2: "This Java program was developed to address a real-life quality control problem. The program is designed to evaluate measurements against a standard with a specified tolerance range. Users can input a measurement and determine whether it meets the required standard.",
        image: "images/brick_checker.gif" 
    },
    {
        title: "Database - Alcohol collection",
        description: "MS Access / SSMS / SQL",
        description2: "This database combines MS Access with SSMS to manage inventory and ratings for alcoholic beverages. Users can utilize forms to insert new data and update rating scores.",
        image: "images/dbms.png"
    },
    {
        title: "Database - Clinic record",
        description: "Postgre / SQL",
        description2: "This database was developed to monitor clinic employees and maintain patient treatment histories. Users can utilize SQL via PostgreSQL to update or edit data.",
        image: "images/postgre.png"
    }
];

let currentProjectIndex = 0;

// Function to display current project
function displayProject(index) {
    const project = projects[index];
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-description').textContent = project.description;
    document.getElementById('project-description2').textContent = project.description2;
    document.getElementById('project-image').src = project.image;
}

// Initial display
displayProject(currentProjectIndex);

// Event listeners for navigation buttons
document.getElementById('prevBtn').addEventListener('click', function() {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    displayProject(currentProjectIndex);
});

document.getElementById('nextBtn').addEventListener('click', function() {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    displayProject(currentProjectIndex);
});

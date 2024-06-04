document.addEventListener("DOMContentLoaded", function () {
    const chefs = [
        { name: "Coral Ayoroa", image: "assets/img/chef1.jpg", description: " Al concluir sus estudios superiores, trabajó en varias cocinas hasta que descubrió su vocación por la enseñanza. Impartió cursos en diferentes instituciones como CEFIM y la Universidad de Los Andes, donde alcanzó la posición de Directora de la Carrera de Gastronomía" },
        { name: "Marko Bonifaz", image: "assets/img/chef2.jpg", description: "Al concluir sus estudios superiores, trabajó en varias cocinas hasta que descubrió su vocación por la enseñanza. Impartió cursos en diferentes instituciones como CEFIM y la Universidad de Los Andes, donde alcanzó la posición de Directora de la Carrera de Gastronomí" },
        { name: "Marcos Gonzalez", image: "assets/img/chef3.jpg", description: "Al concluir sus estudios superiores, trabajó en varias cocinas hasta que descubrió su vocación por la enseñanza. Impartió cursos en diferentes instituciones como CEFIM y la Universidad de Los Andes, donde alcanzó la posición de Directora de la Carrera de Gastronomí" },
        { name: "Camila Lechin", image: "assets/img/chef4.jpg", description: "Al concluir sus estudios superiores, trabajó en varias cocinas hasta que descubrió su vocación por la enseñanza. Impartió cursos en diferentes instituciones como CEFIM y la Universidad de Los Andes, donde alcanzó la posición de Directora de la Carrera de Gastronomí" },
        { name: "Patricia Toro Mukled", image: "assets/img/chef5.jpg", description: "Al concluir sus estudios superiores, trabajó en varias cocinas hasta que descubrió su vocación por la enseñanza. Impartió cursos en diferentes instituciones como CEFIM y la Universidad de Los Andes, donde alcanzó la posición de Directora de la Carrera de Gastronomí" },
        { name: "Pablo Navarro", image: "assets/img/chef6.jpg", description: "Al concluir sus estudios superiores, trabajó en varias cocinas hasta que descubrió su vocación por la enseñanza. Impartió cursos en diferentes instituciones como CEFIM y la Universidad de Los Andes, donde alcanzó la posición de Directora de la Carrera de Gastronomí" },
        { name: "David Sevalos", image: "assets/img/chef7.png", description: "Al concluir sus estudios superiores, trabajó en varias cocinas hasta que descubrió su vocación por la enseñanza. Impartió cursos en diferentes instituciones como CEFIM y la Universidad de Los Andes, donde alcanzó la posición de Directora de la Carrera de Gastronomí" },
        { name: "Alan Sergio", image: "assets/img/chef8.jpg", description: "Al concluir sus estudios superiores, trabajó en varias cocinas hasta que descubrió su vocación por la enseñanza. Impartió cursos en diferentes instituciones como CEFIM y la Universidad de Los Andes, donde alcanzó la posición de Directora de la Carrera de Gastronomí" },
        { name: "Yusef Capri", image: "assets/img/chef9.jpg", description: "Al concluir sus estudios superiores, trabajó en varias cocinas hasta que descubrió su vocación por la enseñanza. Impartió cursos en diferentes instituciones como CEFIM y la Universidad de Los Andes, donde alcanzó la posición de Directora de la Carrera de Gastronomí" },
        { name: "Amilcar Gonzales", image: "assets/img/chef10.jpg", description: "Al concluir sus estudios superiores, trabajó en varias cocinas hasta que descubrió su vocación por la enseñanza. Impartió cursos en diferentes instituciones como CEFIM y la Universidad de Los Andes, donde alcanzó la posición de Directora de la Carrera de Gastronomí" }
    ];

    const chefsContainer = document.querySelector(".chefs");

    chefs.forEach(chef => {
        const chefCard = document.createElement("div");
        chefCard.className = "chef-card";
        chefCard.innerHTML = `
            <img src="${chef.image}" alt="${chef.name}">
            <h3>${chef.name}</h3>
        `;
        chefCard.addEventListener("click", () => {
            alert(chef.description);
        });
        chefsContainer.appendChild(chefCard);
    });
});

function buscar() {
    const receta = document.getElementById('nombre').value;
    alert('Buscando receta: ' + receta);
}

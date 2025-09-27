async function loadProjects() {
  try {
    const response = await fetch("js/assets/projects.json");
    const projects = await response.json();
    const container = document.getElementById("projects-container");

    // Divide em linhas de 3
    for (let i = 0; i < projects.length; i += 4) {
      const row = projects.slice(i, i + 4);

      const rowHTML = `
        <div class="projects-row">
          ${row
            .map(
              (p) => `
              <a href="${p.link}" class="project-tile">
                <img src="${p.image}" alt="${p.alt || ""}" />
                <div class="project-bottom-info">
                  <div class="two-color-text">
                    <h3>${p.category}</h3>
                    <h2><b>${p.title}</b></h2>
                  </div>
                  <div class="control" id="right-control">
                    <img src="${p.controlIcon}" alt="seta direita" />
                  </div>
                </div>
              </a>
            `
            )
            .join("")}
        </div>
      `;

      container.innerHTML += rowHTML;
    }
  } catch (err) {
    console.error("Erro ao carregar projetos:", err);
  }
}

loadProjects();

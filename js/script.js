document.addEventListener('DOMContentLoaded', function () {
    const contentDiv = document.getElementById('content');

    // Initial view
    showListView();

    function showListView() {
        // Fetch data from server or local storage
        const data = [
            { id: 1, name: 'Alfredo', species: 'Cachorro', age: "2 anos", owner: 'João' },
            { id: 2, name: 'Mia', species: 'Gato', age: "2 anos", owner: 'Maria' },
            // Add more data here
        ];

        const listView = `
        <h2>Lista Pets</h2>
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Espécie</th>
              <th>Idade</th>
              <th>Dono</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            ${data.map(item => `
              <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.species}</td>
                <td>${item.age}</td>
                <td>${item.owner}</td>
                <td>
                  <button class="btn btn-sm btn-info" onclick="showEditView(${item.id})">Editar</button>
                  <button class="btn btn-sm btn-danger" onclick="deleteItem(${item.id})">Deletar</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;

        contentDiv.innerHTML = listView;
    }
});


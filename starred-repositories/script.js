fetch('events.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const list = document.createElement('ul');
    data.forEach(repo => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<a href="${repo.url}" target="_blank">${repo.name}</a>: ${repo.description}`;
      list.appendChild(listItem);
    });
    document.body.appendChild(list);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
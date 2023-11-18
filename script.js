//your code here!

document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById('infi-list');

  // Add initial list items (10 by default)
  for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `List item ${i}`;
    list.appendChild(listItem);
  }

  // Function to add more list items when scrolled to the bottom
  function addMoreItems() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.offsetHeight;

    // Check if scrolled to the bottom of the page
    if (scrollPosition + windowHeight >= documentHeight) {
      // Add 2 more list items
      for (let i = 1; i <= 2; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `List item ${list.children.length + i}`;
        list.appendChild(listItem);
      }
    }
  }

  // Event listener for scrolling
  window.addEventListener('scroll', addMoreItems);
});

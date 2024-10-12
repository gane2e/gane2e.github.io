const loadHTML = async (elementId, filePath) => {
  const response = await fetch(filePath);
  const data = await response.text();
  document.getElementById(elementId).innerHTML = data;
};

document.addEventListener('DOMContentLoaded', async () => {
  await loadHTML('header', 'header.html');
  await loadHTML('footer', 'footer.html');
});

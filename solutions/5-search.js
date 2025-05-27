export default (document) => {
  // BEGIN
  const titleElement = document.querySelector('.content h1');
  const title = titleElement ? titleElement.textContent : '';

  const descriptionElement = document.querySelector('.content .description');
  const description = descriptionElement ? descriptionElement.textContent : '';

  const items = [];
  const articleElements = document.querySelectorAll('.links > div');

  articleElements.forEach((article) => {
    const linkElement = article.querySelector('h2 a');
    const articleTitle = linkElement ? linkElement.textContent : '';
    const articleDescriptionElement = article.querySelector('p');
    const articleDescription = articleDescriptionElement ? articleDescriptionElement.textContent : '';

    items.push({
      title: articleTitle,
      description: articleDescription,
    });
  });

  return {
    title,
    description,
    items,
  };
  // END
}; 

// {
//   title: 'Category Name',
//   description: 'Category Description',
//   items: [
//     { title: 'Article Name 1', description: 'Article Description 1' },
//     { title: 'Article Name 2', description: 'Article Description 2' }
//   ]
// }


/* 
<!DOCTYPE html>
<html lang="en">
  <head>
    <script type="module" src="../solutions/5-index.js" defer></script>
  </head>
  <body>
    <div class="content">
      <h1>Category Name</h1>
      <div class="description">Category Description</div>
      <div class="links">
        <div>
          <h2><a href="#">Article Name 1</a></h2>
          <p>Article Description 1</p>
        </div>
        <div>
          <h2><a href="#">Article Name 2</a></h2>
          <p>Article Description 2</p>
        </div>
      </div>
    </div>
  </body>
</html>
*/

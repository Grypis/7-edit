const categoriesItems = document
  .querySelector('#categories')
  .querySelectorAll('.item');
console.log(`Categories of item: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  console.log(`Category: ${categoryTitle}`);
  const categoryElem = item.querySelectorAll('ul li').length;
  console.log(`Elements: ${categoryElem}`);
});

import 'whatwg-fetch';

export default () => {
  // BEGIN
    // Находим все элементы input с атрибутом data-autocomplete
    const inputs = document.querySelectorAll('input[data-autocomplete]');
  
    inputs.forEach(input => {
      // Для каждого input добавляем обработчик события 'input'
      input.addEventListener('input', async (e) => {
        const searchTerm = e.target.value.trim(); // Получаем значение поля
        const autocompleteUrl = input.dataset.autocomplete; // URL из data-атрибута
        const listName = input.dataset.autocompleteName; // Имя связанного списка
  
        // Создаем URL для запроса, объединяя текущий хост и путь из data-autocomplete
        const url = new URL(autocompleteUrl, window.location.origin);
        url.searchParams.append('search', searchTerm); // Добавляем параметр поиска
  
        try {
          // Отправляем запрос и получаем данные
          const response = await fetch(url);
          const data = await response.json();
  
          // Находим соответствующий список по data-autocomplete-name
          const list = document.querySelector(
            `ul[data-autocomplete-name="${listName}"]`
          );
          if (!list) return;
  
          // Очищаем предыдущие результаты
          list.innerHTML = '';
  
          if (data.length > 0) {
            // Добавляем элементы списка из полученных данных
            data.forEach(item => {
              const li = document.createElement('li');
              li.textContent = item; // Безопасное заполнение через textContent
              list.appendChild(li);
            });
          } else {
            // Если данных нет, выводим "Nothing"
            const li = document.createElement('li');
            li.textContent = 'Nothing';
            list.appendChild(li);
          }
        } catch (err) {
          console.error('Error fetching autocomplete data:', err);
        }
      });
    });
  
  // END
};

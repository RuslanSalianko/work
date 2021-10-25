// data.csv
/**
 * key; value;
 * name; David;
 * lastName; Gav;
 * friend.name; Peter;
 * dob; 01/01/1990;
 */

// key => 'name' => 'friend.name' => 'friend[0].name'

// Read file
// Create object => { [key]: [value] } => { name: 'David', lastName: 'Gav', dob: Date(01/01/1990), frient: { name: 'Peter' } }
// Save data to file data.json



// Web app (Express)
/** View
 *  - текст ареа (большое текстовое поле), куда вставляется json
 *  - обычное текстовое поле, куда вводится слово.
 *  - область вывода (будет списком)
 */ 

/** Логика
 *  В поле вставляется JSON и вводится значение для поиска.
 *  Запрос отправляется на сервер и на сервере нужно получить список всех полей (путей) в значениях которых есть эта строка
 *  Далее список выводится на страницу
 */

/** Требования
 *  - использовать AJAX
 */
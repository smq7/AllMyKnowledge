// What is Middleware? It is those methods/functions/operations that are called 
// BETWEEN processing the Request and sending the Response in your 
// application method.

express.json();
// це крч шо мідлвера функція крч шо воно робить воно підключає до нашої приложухи
// шо всі запити які приходять тіпа в JSON файлі будуть оброблятись цьою штукою

//////////////////////////////////////////////////////////////////////////////

express.urlencoded({extended: false});
// це ми підключаємо можемо парсити входящі запити якшо вони є строкою чи массивом 
// якшо поміняти з False входящі запити будуть перетворюватись на об'єкт і пох шо там написано буде 
//////////////////////////////////////////////////////////////////////////////

express.static((path.join(__dirname, 'public')));
// запутано тож сук  це крч всі файли які є в заданій нами деректорії ми крч
// зможемо заходити на них коли сервер запущений за адресою 
// http://Сервер/тут наш файл 
// приклад http://localhost:3000/stylesheets/style.css
//////////////////////////////////////////////////////////////////////////////
express.Router();
// це крч настройка роутера шо буде відбуватись тіпа при переході на цей шлях
// і тд шото такоє

//////////////////////////////////////////////////////////////////////////////
app.use();
// app.use([path,] callback [, callback...])
// тоже потрібне для підключення тіпа міддлваре софта для настройки приложухи
// но тут ше можна задати тіпа шо буде виконуватись коли ми захочемо зайти на 
// якийсь конкретний шлях сайту тіпа
app.use('/', indexRouter);
// це то шо якшо ми запустим сервер і зайдем по / То буде виконуватись то шо
// в нас в indexRouter написано
//////////////////////////////////////////////////////////////////////////////

app.set(name,value);
// Окай set це настройка приложухи тіпа які "темплейти" будуть використовуватися
// і всяка така дікуха  СЛожна пока шо 
//////////////////////////////////////////////////////////////////////////////

app.get(path,callback);
// перенаправляє GET запити на заданий шлях PATH і виконує функцію CALLBACK
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
// Route parameters
// Route parameters are named URL segments used to capture values at specific positions in the URL. 
// The named segments are prefixed with a colon and then the name (E.g., /:your_parameter_name/). 
// The captured values are stored in the req.params object using the parameter names as keys (E.g., req.params.your_parameter_name).

// So for example, consider a URL encoded to contain information about users and 
// books: http://localhost:3000/users/34/books/8989.
//  We can extract this information as shown below, 
//  with the userId and bookId path parameters:
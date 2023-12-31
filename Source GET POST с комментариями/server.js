const http = require("http");
const router = require("./routes/index");

const server = http.createServer(router);
server.listen(3000);

// Для реализации REST модели на сервере необходимо реализовать следующие методы:

// 1. GET: Используется для получения данных. Метод должен возвращать запрошенные данные или список данных, если запрошенный ресурс является коллекцией.
// 2. POST: Используется для создания новых данных. Метод должен принимать данные, создавать новый ресурс и возвращать его идентификатор или ссылку на него.
// 3. PUT: Используется для обновления данных. Метод должен принимать данные и обновлять существующий ресурс с указанным идентификатором.
// 4. DELETE: Используется для удаления данных. Метод должен удалять существующий ресурс с указанным идентификатором.

// Эти методы должны быть реализованы для каждого ресурса, который вы хотите предоставить через REST API. Кроме того, вы также можете реализовать дополнительные методы, такие как PATCH для частичного обновления данных или OPTIONS для получения информации о доступных методах и параметрах.

import app from "./app";//arrastra el codigode app.js
import './databae';
import { PORT } from "./config";


app.listen(PORT);
console.log(`server in the http://localhost:${PORT}`);
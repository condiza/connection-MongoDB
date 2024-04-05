import express from 'express';
import indexRoputes from './routes/indexRoutes';
import exphbs from 'express-handlebars';
import path from 'path'; //modulo de node
import morgan from 'morgan';

const app = express();

app.set('views',path.join(__dirname,'views'));//dirname nos ayuda a optener la ruta de las carpetas 

app.engine(//reconoce el motor de la plantilla 
    '.hbs',//para que express reconosc que estamos usando helebarst
    exphbs({
        layoutsDir: path.join(app.get('views'),'layouts'),
        defaultLayout: 'main',
        extname:'.hbs'
    })
);

app.set('view engine', '.hbs');

//intermediario cliente servidor 
app.use(morgan('dev'));

app.use(express.urlencoded({extended : false}));

//rutas
app.use(indexRoputes);

//archivos estaticos 
app.use(express.static(path.join(__dirname, 'frontend')));



export default app;//exporta el objeto 
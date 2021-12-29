const express = require('express');
const path = require('path');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
var methodOverride = require('method-override');
const app = express();
const port = 8080;

const route = require('./routes');
const db = require('./config/db');
const sortMiddleware = require('./app/middlewares/SortMiddleware');
//Connect DB
db.connect();
//HTTP logger
app.use(morgan('combined'));
//Template engine
app.engine(
    'hbs',
    exphbs({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
            sortable: (field, sort) => {
                const sortType = field === sort.column ? sort.type : 'default';
                const icons = {
                    default: 'bi bi-chevron-expand',
                    asc: 'bi bi-sort-down-alt',
                    desc: 'bi bi-sort-down',
                };
                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                };
                const icon = icons[sortType];
                const type = types[sortType];
                return `<a href="?_sort&column=${field}&type=${type}"><i class="${icon}"></i></a>`;
            },
        },
    }),
);
//static file
app.use(express.static(path.join(__dirname, 'public')));
//Tao middleware de lay du lieu POST method
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
//xu dung methodoverride de xu dung cac phuong thuc
app.use(methodOverride('_method'));

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));

//use middlewares
app.use(sortMiddleware);

//route init
route(app);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);

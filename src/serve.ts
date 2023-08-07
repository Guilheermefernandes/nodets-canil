import express from 'express';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import path from 'path';
import router from './routers/index';

dotenv.config();

const serve = express();

serve.set('view engine', 'mustache');
serve.set('views', path.join(__dirname, 'views'));
serve.engine('mustache', mustache());

serve.use(express.static(path.join(__dirname, '../public')));

serve.use((req, res) => {
    res.render('pages/404');
})

serve.use(router);

serve.listen(process.env.PORT);


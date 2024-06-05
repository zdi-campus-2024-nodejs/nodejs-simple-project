import express, {Request, Response} from 'express';
import cors, {CorsOptions} from 'cors';
import http from 'http';
import {Logger} from "tslog";

const logger = new Logger({ type: 'pretty' });

const port = process.env.PORT || 3000;

const app = express()
    .use(cors({
        origin: (origin, callback) => {
            logger.info('[server]', 'cors', origin);
            callback(null, `${!!origin ? origin : `*`}`)
        },
        allowedHeaders: '*',
        methods: 'GET, OPTIONS, HEAD, POST, PUT, DELETE',
        credentials: true
    } as CorsOptions))
    .get('/', (req: Request, res: Response) => {
        logger.info('[server]', '/');
        res.send('Ts based Express server is online');
    })

http.createServer(app).listen(port, () => {
    logger.info(`[server]: Server is running at http://localhost:${port}`);
});
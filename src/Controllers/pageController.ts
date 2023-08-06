import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
    res.send('home');
    //res.render('pages/home');
}
export const dogs = (req: Request, res: Response) => {
    res.send('dogs');
    //res.render('pages/home');
}
export const cats = (req: Request, res: Response) => {
    res.send('cats');
    //res.render('pages/home');
}
export const fishes = (req: Request, res: Response) => {
    res.send('fish');
    //res.render('pages/home');
}
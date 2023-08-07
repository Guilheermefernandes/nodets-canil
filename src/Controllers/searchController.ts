import { Request, Response } from 'express';
import { createMenuObjects } from '../helpers/createMenuObjects';
import { Pet } from '../Models/pet';

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;
    let list = Pet.getFilterName(query);
    res.render('pages/page', {
        menu: createMenuObjects(''),
        list
    })
}
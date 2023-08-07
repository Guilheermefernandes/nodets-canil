import { Request, Response } from 'express';
import { createMenuObjects } from '../helpers/createMenuObjects';
import { Pet } from '../Models/pet';

export const home = (req: Request, res: Response) => {
    let list = Pet.getPet();
    res.render('pages/page', {
        menu: createMenuObjects('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
}
export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFilterPet('dog');
    res.render('pages/page', {
        menu: createMenuObjects('dog'),
        banner: {
            title: 'Todos os Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
}
export const cats = (req: Request, res: Response) => {
    let list = Pet.getFilterPet('cat');
    res.render('pages/page', {
        menu: createMenuObjects('cat'),
        banner: {
            title: 'Todos os Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
}
export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFilterPet('fish');
    res.render('pages/page', {
        menu: createMenuObjects('fish'),
        banner: {
            title: 'Todos os Peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
}
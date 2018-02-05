import {Character} from '../character/character';
export class Film {
    public noFilm: number;
    public budget: number;
    public dateSortie: string;
    public duree: number;
    public montantRecette: number;
    public titre: string;
    public synopsis: string;
    public img: string;
    public personnages: Character[];
    constructor() {}
}

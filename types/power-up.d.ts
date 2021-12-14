import {Trello} from './trello';

export interface Note {
    color: string;
    text: string;
}

export interface NoteWithCard extends Note {
    card: Trello.PowerUp.Card;
}

export interface CardWithNotes extends Trello.PowerUp.Card {
    notes?: Note[];
}

export interface CapabilityProps {
    baseUrl: string;
    icon: {
        light: 'https://cdn-icons-png.flaticon.com/128/1054/1054150.png';
        dark: 'https://cdn-icons-png.flaticon.com/128/1054/1054150.png';
    }
}

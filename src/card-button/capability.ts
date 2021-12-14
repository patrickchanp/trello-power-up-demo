import {Trello} from "../types/trello";
import {CapabilityProps} from "../types/power-up";

export function getCardButton(_t: Trello.PowerUp.IFrame, props: { baseUrl: string, icon: { light: string, dark: string } }): Trello.PowerUp.CardButton[] {
    return [{
        icon: props.baseUrl + props.icon.dark,
        text: 'Add a Note',
        callback: (tc: Trello.PowerUp.IFrame) => tc.popup({
            title: 'Add a Note',
            url: './model.html',
            height: 300
        })
    }];
}

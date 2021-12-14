import {Trello} from "../../types/trello";
import {CapabilityProps} from "../../types/power-up";

export function getCardButton(_t: Trello.PowerUp.IFrame, props: CapabilityProps): Trello.PowerUp.CardButton[] {
    return [{
        icon: 'https://cdn-icons-png.flaticon.com/128/1054/1054150.png',
        text: 'trello-power-up-demo',
        callback: (tc: Trello.PowerUp.IFrame) => tc.popup({
            title: 'trello-power-up-demo',
            url: './model.html',
            height: 300
        })
        // callback: (tc: Trello.PowerUp.IFrame) => tc.modal({
        //     title: 'trello-power-up-demo',
        //     accentColor: undefined,
        //     actions: [],
        //     args: {},
        //     fullscreen: true,
        //     // height: ,
        //     url: "",
        //     callback(): any[] {
        //         return [];
        //     }
        //
        // })
    }];
}

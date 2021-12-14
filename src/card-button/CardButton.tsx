import {Trello} from "../../types/trello";
import {CapabilityProps} from "../../types/power-up";

export function getCardButton(_t: Trello.PowerUp.IFrame, props: CapabilityProps): Trello.PowerUp.CardButton[] {
    return [{
        icon: 'https://cdn-icons-png.flaticon.com/128/1054/1054150.png',
        text: 'trello-power-up-demo',
        // callback: (tc: Trello.PowerUp.IFrame) => tc.popup({
        //     title: 'trello-power-up-demo',
        //     url: './card-button.html',
        //     height: 300
        // })
        callback: (tc: Trello.PowerUp.IFrame) => tc.modal({
            // the url to load for the iframe
            url: tc.authorize('https://google.com'),
            // optional arguments to be passed to the iframe as query parameters
            // access later with t.arg('text')
            args: { text: 'Hello' },
            // optional color for header chrome
            accentColor: '#F2D600',
            // initial height for iframe
            height: 500, // not used if fullscreen is true
            // whether the modal should stretch to take up the whole screen
            fullscreen: true,
            // optional function to be called if user closes modal (via `X` or escape, etc)
            callback: () => console.log('Goodbye.'),
            // optional title for header chrome
            title: 'appear.in meeting',
            // optional action buttons for header chrome
            // max 3, up to 1 on right side
            actions: [{
                icon: './images/icon.svg',
                url: 'https://google.com',
                alt: 'Leftmost',
                position: 'left',
            }, {
                icon: './images/icon.svg',
                callback: (tr) => tr.popup({
                    title: tr.localizeKey('appear_in_settings'),
                    url: 'settings.html',
                    height: 164,
                }),
                alt: 'Second from left',
                position: 'left',
            }, {
                icon: './images/icon.svg',
                callback: () => console.log(':tada:'),
                alt: 'Right side',
                position: 'right',
            }],
        })
    }];
}

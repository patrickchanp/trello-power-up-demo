const {getCardButton} = require("../card-button/CardButton");
console.log("hello world");

const  CapabilityProps = {
    baseUrl: window.location.href.replace(/\/$/, ''),
    icon: {
        dark: '/static/icon-dark.png',
        light: '/static/icon-light.png'
    }
}


window.TrelloPowerUp.initialize({
    'card-badges': function (t, opts) {
        return t.card('all').then(
            function (card) {
                console.log(card);
                return [{
                    text:card.name
                }];
            }
        );
    },
    'card-buttons':(t)=>getCardButton(t,CapabilityProps),
    // 'board-buttons':
})

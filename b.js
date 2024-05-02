var x = true;
const wait = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function drawCard() {
    const stuffs = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    const otherstuffs = ["of Hearts", "of Diamonds", "of Spades", "of Clubs"];
    const numIndex = Math.floor(Math.random() * stuffs.length);
    const num = stuffs[numIndex];
    const suitIndex = Math.floor(Math.random() * otherstuffs.length);
    const suit = otherstuffs[suitIndex];
    const card = num + " " + suit;
    return card;
}
function getValue(card) {
    const split = card.split(' ');
    const b = split[0].toLowerCase();
    switch (b) {
        case '2':
        case '10': {
            const value = Math.floor(Math.random() * 10) + 1;
            return value;
        }
        case '3':
        case '4': {
            const value = Math.floor(Math.random() * 3) + 1;
            return value;
        }
        case '5':
        case '7':
        case '9': {
            const value = Math.floor(Math.random() * 12) + 1;
            return value;
        }
        case '6':
        case '8': {
            const value = -3;
            return value;
        }
        case 'king':
        case 'ace': {
            const value = Math.floor(Math.random() * 19) + 1;
            return value;
        }
        case 'queen':
        case 'jack': {
            const value = -7;
            return value;
        }
        default: {
            const chance = Math.floor(Math.random() * 2) + 1;
            switch (chance) {
                case 2: {
                    const value = Math.floor(Math.random() * 20);
                    return value;
                }
                default: {
                    const value = -7;
                    return value;
                }
            }
        }
    }
}
const game = async () => {
    var score = 0;
    while (x === true) {
        const card = drawCard();
        const cardvalue = getValue(card);
        console.log(`Current Score: ${score}`);
        await wait (500);
        score += cardvalue;
        console.clear();
        console.log(`You Drew: ${card}\nValue: ${cardvalue}`);
        await wait (200);
        console.log(`New Score: ${score}`);
        if (score >= 100 || score <= -100) {
            x = false;
            console.log('Game Over!')
            break;
        }
        await wait(1500);
        console.clear();
        continue;
    }
}
game();
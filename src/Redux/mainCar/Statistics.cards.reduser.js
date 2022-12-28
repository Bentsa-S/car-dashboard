import energy from "../../icone/iconeSectionMain/money.png";
import arrow from "../../icone/iconeSectionMain/arrow.png";
import drop from "../../icone/iconeSectionMain/drop.png";
import money from "../../icone/iconeSectionMain/energy.png";

let defaultState = [
    {id: 1, backgroundLogoColor: 'rgba(166,111,240,0.61)', logo: energy, name: 'Energy', percent: 46},
    {id: 2, backgroundLogoColor: 'rgba(255,126,134,0.15)', logo: arrow, name: 'Range', percent: 56},
    {id: 3, backgroundLogoColor: 'rgba(161,98,247,0.15)', logo: drop, name: 'Break fluid', percent: 9},
    {id: 4, backgroundLogoColor: 'rgba(246,204,13,0.15)', logo: money, name: 'Tire Wear', percent: 25}
]


export const statisticsCardsReducer = (state = defaultState, action) =>{
    switch (action.type) {
        default:
            return state
    }
}
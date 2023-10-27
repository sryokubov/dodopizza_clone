// const chickenAddon: Addon = {
//     imageLink: '',
//     title: 'Chicken',
//     price: {
//         small: 4000, 
//         medium: 6000,
//         large: 8000
//     }
// }

export const chadder = {
    // size: {
    //     value: 'small',
    //     diameter: 25
    // },
    // doughType: 'traditional',
    // addons: [chickenAddon],
    // ingredients: [
    //     {
    //         title: 'Turkey', 
    //         removable: true
    //     }
    // ],
    title: 'Chadder', 
    price: 55
}



export class Pizza{
    constructor(public title: string, public price: number) {}
}

export const pizzas = [
    chadder,
    new Pizza('Margarita', 47),
    new Pizza('Пепперони', 59),
    new Pizza('Колбаски Барбекю', 59),
    new Pizza('Сырный цыпленок', 50),
]

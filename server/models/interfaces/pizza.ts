export type Size = 'small' | 'medium' | 'large'
export type Diameter = 25 | 30 | 35
export type DoughType = 'traditional' | 'thin'

export interface PizzaSize {
    value: Size
    diameter: Diameter
}

export interface AddonPrices {
    small: number
    medium: number
    large: number
}

export interface PizzaPrices extends AddonPrices {}

export interface PizzaImages {
    traditional: {
        small: string
        medium: string,
        large: string
    }

    thin: {
        medium: string,
        large: string
    }
}

export interface Addon {
    imageLink: string
    title: string
    price: AddonPrices
}

export interface Pizza {
    title: string
    size: PizzaSize
    doughType: DoughType
    addons: Addon[],
    ingredients: Ingredient[],
    prices: PizzaPrices,
    images: PizzaImages,    
}

export interface Nutritions {
    calories: number,
    protein: number,
    fats: number,
    sugars: number,
    weight: number,
    diameter: number
}

export interface PizzaNutritions {
    traditional: {
        small: Nutritions,
        medium: Nutritions,
        large: Nutritions
    },

    thin: {
        medium: Nutritions,
        large: Nutritions
    }
}

export interface Ingredient {
    title: string,
    removable: boolean
}










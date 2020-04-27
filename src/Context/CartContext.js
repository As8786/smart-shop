import React, { createContext, useReducer } from 'react';

import * as cartActions from "../actions/cartActions"

export const CartContext = createContext('')


let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case cartActions.ADD_PRODUCT_TO_CART:
            return state.filter(el => el.name === action.payload.name).length > 0 ? state.map(el => el.name === action.payload.name ? { ...el, cartQty: Number(el.cartQty) + Number(action.payload.cartQty) } : el)
                : [...state, action.payload]

        case cartActions.REMOVE_PRODUCT_TO_CART:
            return state.filter(el => el.name !== action.payload)

        case cartActions.CHANGE_QTE_PRODUCT_IN_CART:
            return state.map(el => el.name === action.payload.name ? action.payload : el)

        case cartActions.EMPTY_CART:
            return []

        default:
            return state
    }

}

const CartProvider = props => {

    let [cartState, dispatchCartState] = useReducer(cartReducer, defaultState)

    return <CartContext.Provider value={{ cartState, dispatchCartState }}>
        {props.children}
    </CartContext.Provider>;
}

export default CartProvider;

let defaultState = [
    {
        name: "SAMSUNG GALAXY S20 PLUS",
        price: 3700,
        brand: "Samsung",
        categorie: "Smartphone",
        model: "S20",
        availabilty: true,
        imgs: ["s20", "s20-1", "s20-2", 's20-3'],
        id: "SAMSUNGGALAXYS20PLUS",
        cartQty: 2,
        description: `Double SIM - Ecran Infinity 6.7" QHD+ (1440 x 3200px) Gorilla Glass 6 - Processeur Exynos 990 (7 nm+) - RAM 8 Go - Mémoire 128 Go - Android 10 - Appareils Photos: Triple capteur 64+12+12 MP (Arrière) / 10MP (Frontale) - Batterie 4500 mAh - Lecteur d'empreinte ultrasonique - Reconnaissance faciale - 4G - NFC - Bluetooth 5.0 - GPS - Wifi`
    },
    {
        name: "SAMSUNG GALAXY NOTE 10+",
        price: 3900,
        brand: "Samsung",
        model: "NOTE 10+",
        categorie: "Smartphone",
        availabilty: true,
        imgs: ["note10", "note10-1", "note10-2", "note10-3"],
        cartQty: 1,
        description: `Ecran Infinity 6.8" Dynamic AMOLED - Quad HD+ 1440 x 3040 - Processeur Exynos 9825 Octo-Core 2.7GHz - Android 9.0 Pie - RAM 12 Go - Mémoire 256 Go - APN: Quadruple capteur 12MP Dual Pixel + Ultra Grand Angle 16MP + Téléobjectif 12MP ToF, HDR10+, caméra frontale 10MP Dual Pixel - WiFi - Bluetooth - NFC - Capteur d'empreintes - S Pen`
    },
    {
        name: "HUAWEI P30 PRO",
        price: 4000,
        brand: "Huawei",
        model: "P30 Pro",
        categorie: "Smartphone",
        availabilty: true,
        imgs: ["p30", "p30-1", "p30-2", "p30-3"],
        cartQty: 4,
        description: `Double SIM - Ecran 6.47" OLED Full HD+ - Processeur Kirin 980 Octa-core, 2x 2.6 GHz (Cortex-A76) + 2x 1.92 GHz (Cortex-A76) + 4x 1.8 GHz (Cortex-A55) - Android 9 - RAM 8 Go - Mémoire 256 Go - Caméra arrière Leica: 40MP + 20MP + 8MP - Caméra avant: 32MP - Wifi - 4G - GPS - Bluetooth - NFC - Lecteur d'empreinte digitale - Batterie 4200 mAh - Étanche IP68`
    },

    {
        name: "APPLE IPHONE 11 PRO MAX",
        price: 4800,
        brand: "Apple",
        model: "IPHONE 11 PRO MAX",
        categorie: "Smartphone",
        availabilty: true,
        imgs: ["i11", "i11-1", "i11-2", "i11-3"],
        cartQty: 10,
        description: `Écran OLED Super Retina XDR 6.5" HDR (1242 x 2688px) - Etanche IP68 - Processeur Apple A13 Bionic Hexa-Core 3Gen - RAM 6 Go - Mémoire 64 Go - Système Apple iOS 13 - 3x Appareils Photos: 12 Megapixels F/2.4 (ultra grand-angle), F/1.8 (grand-angle), Téléobjectif F/2.0 (Arrière), 12MP TrueDepth F/2.2 (Avant) - Wifi - 4G+ - Bluetooth 5.0 - NFC - Batterie 3500 mAh`
    },

    {
        name: "SAMSUNG GALAXY A80",
        price: 2500,
        brand: "Samsung",
        categorie: "Smartphone",
        model: "A80",
        availabilty: true,
        imgs: ["a80", "a80-1", "a80-2", "a80-3"],
        cartQty: 1,
        description: `Double SIM - Ecran 6.7" FHD+ sAMOLED - Processeur Qualcomm Snapdragon 7150 Octo-Core, 2.2 GHz - RAM 8 Go - Mémoire 128 Go - Android 9.0 Pie + Surcouche Samsung One UI - Triple capteur rotatif: 48MP, f/2.0, Capteur ultra grand angle 8 MP, f/2.2 - lecteur d'empreinte digitale sous l'écran - 4G - Bluetooth 5.0 - GPS - Wifi - NFC - Batterie 3700 mAh`
    },

    {
        name: "SAMSUNG GALAXY NOTE 10 LITE",
        price: 2000,
        brand: "Samsung",
        model: "NOTE 10 LITE",
        categorie: "Smartphone",
        availabilty: true,
        cartQty: 1,
        imgs: ["note10Lite", "note10Lite-1", "note10Lite-2", "note10Lite-3"],
        description: `Ecran Infinity 6.7" FHD+ Super AMOLED - Résolution: 1080 x 2280 pixels - Processeur Exynos 9810 cta-Core 2.7GHz - Android 10.0 - RAM 6 Go - Mémoire 128 Go - Caméra: Triple capteur arrière 12MP + 12MP + 12MP, caméra frontale 32MP - 4G - WiFi - Bluetooth - NFC - Lecteur d'empreinte sur l'écran - S Pen`
    }

]
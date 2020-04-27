import React, { createContext, useReducer, useContext } from 'react';
import * as moment from "moment"

import * as ordersHistoryActions from "../actions/ordersHistoryActions"
import { FiltersContext } from './FiltersContext';


export const OrderHistoryContext = createContext('')



const OrderHistoryProvider = props => {

    let { filtersValues } = useContext(FiltersContext)

    let OrderHistoryReducer = (state = defaultState, action) => {

        switch (action.type) {

            case ordersHistoryActions.FILTER_ORDERS_HISTORY:
                return defaultState.filter(el => {
                    if (filtersValues.orderNumber !== "") {
                        let serachVal = new RegExp(filtersValues.orderNumber, "gi")
                        if (el.number.search(serachVal) === -1) return ""
                    }
                    if (filtersValues.orderDate[0] !== "" || filtersValues.orderDate[1] !== "") {
                        if (moment(el.date).isBefore(filtersValues.orderDate[0]) || moment(el.date).isAfter(filtersValues.orderDate[1])) return ""
                    }
                    if (filtersValues.orderStatus !== "") {
                        if (el.status !== filtersValues.orderStatus) return ""
                    }
                    if (filtersValues.orderAmount[0] !== 0 || filtersValues.orderAmount[1] !== 20000) {
                        if (el.amount < filtersValues.orderAmount[0] || el.amount > filtersValues.orderAmount[1]) return ""
                    }
                    return el
                })

            case ordersHistoryActions.UNFILTER_ORDERS_HISTORY:
                return defaultState

            default:
                return state
        }
    }

    let [ordersHistoryList, dispatchOrdersHistoryList] = useReducer(OrderHistoryReducer, defaultState)

    return <OrderHistoryContext.Provider value={{ ordersHistoryList, dispatchOrdersHistoryList }} >
        {props.children}
    </OrderHistoryContext.Provider>
}

export default OrderHistoryProvider;



var defaultState = [
    {
        number: "1",
        date: "04/10/2020",
        amount: 12500,
        status: true,
        deliveryDate: "02/02/2020",
        totalProducts: 3,
        products: [
            {
                name: "OPPO RENO 10X",
                price: 2000,
                brand: "Oppo",
                model: "RENO 10X",
                categorie: "Smartphone",
                orderQty: 2,
                availabilty: true,
                imgs: ["reno10", "reno10-1", "reno10-2", "reno10-3"],
                description: `Double SIM - Ecran 6.6" Full HD+ - Processeur Qualcomm SM8150 Snapdragon 855 Octa-core 2.8GHz - Android 9.0 - RAM 8 Go - Mémoire 256 Go - Appareil Photo: Triple caméra arrière 48MP + 8MP + 13MP / 16MP Avant - 4G - Wifi - Bluetooth - NFC - Reconnaissance faciale - Lecteur d'empreinte digitale sous l'écran - Batterie 4065 mAh`
            },
            {
                name: "OPPO RENO2 F",
                price: 1000,
                brand: "Oppo",
                model: "RENO2 F",
                categorie: "Smartphone",
                orderQty: 2,
                availabilty: true,
                imgs: ["RENO2", "RENO2-1", "RENO2-2", "RENO2-3"],
                description: `Double SIM - Ecran 6.5" - Processeur Mediatek MT6771V Helio P70 Octa-core (4x2.1 GHz Cortex-A73 & 4x2.0 GHz Cortex-A53) - Android 9.0 - RAM 8Go - Mémoire 128Go - Appareil Photo 48MP + 8MP + 2MP + 2MP (Arrière) / 16MP (Avant) - 4G - Wifi - Bluetooth - Batterie 4000mAh`
            },

            {
                name: "SAMSUNG GALAXY A71",
                price: 1600,
                brand: "Samsung",
                categorie: "Smartphone",
                model: "A71",
                orderQty: 2,
                availabilty: true,
                imgs: ["a71", "a71-1", "a71-2", "a71-3"],
                description: `Double SIM - Ecran Infinity-O 6.7" FHD+ sAMOLED - Processeur Qualcomm Snapdragon 730 Octo-Core cadencé à 2.2 GHz - RAM 8 Go - Mémoire 128 Go - Android 10 One UI 2 - Multiple caméra arrière: 64MP + 12MP + 5MP + 5MP / Caméra frontale: 32MP, F,2.2- Lecteur d'empreinte digitale - 4G - Bluetooth 5.0 - Wifi - NFC - Batterie 4500 mAh`
            }, {
                name: "SAMSUNG GALAXY S20 PLUS",
                price: 3700,
                brand: "Samsung",
                categorie: "Smartphone",
                model: "S20",
                availabilty: true,
                imgs: ["s20", "s20-1", "s20-2", 's20-3'],
                id: "SAMSUNGGALAXYS20PLUS",
                description: `Double SIM - Ecran Infinity 6.7" QHD+ (1440 x 3200px) Gorilla Glass 6 - Processeur Exynos 990 (7 nm+) - RAM 8 Go - Mémoire 128 Go - Android 10 - Appareils Photos: Triple capteur 64+12+12 MP (Arrière) / 10MP (Frontale) - Batterie 4500 mAh - Lecteur d'empreinte ultrasonique - Reconnaissance faciale - 4G - NFC - Bluetooth 5.0 - GPS - Wifi`
            },
            {
                name: "SAMSUNG GALAXY NOTE 10+",
                price: 3900,
                brand: "Samsung",
                model: "NOTE 10+",
                categorie: "Smartphone",
                orderQty: 2,
                availabilty: true,
                imgs: ["note10", "note10-1", "note10-2", "note10-3"],
                description: `Ecran Infinity 6.8" Dynamic AMOLED - Quad HD+ 1440 x 3040 - Processeur Exynos 9825 Octo-Core 2.7GHz - Android 9.0 Pie - RAM 12 Go - Mémoire 256 Go - APN: Quadruple capteur 12MP Dual Pixel + Ultra Grand Angle 16MP + Téléobjectif 12MP ToF, HDR10+, caméra frontale 10MP Dual Pixel - WiFi - Bluetooth - NFC - Capteur d'empreintes - S Pen`
            }, {
                name: "LENOVO IDEAPAD S540-15IWL",
                price: 2800,
                brand: "Lenovo",
                categorie: "Laptop",
                model: "IDEAPAD S540-15IWL",
                orderQty: 2,
                availabilty: true,
                imgs: ["IDEAPAD S540-15IWL", "IDEAPAD S540-15IWL-1", "IDEAPAD S540-15IWL-2", "IDEAPAD S540-15IWL-3"],
                description: `Ecran 15.6" LED Full HD - Processeur Intel Core i7-8565U, up to 4.6 Ghz, 8Mo de cache - 20Go de mémoire - Disque 1To + 128Go SSD M.2 - Carte graphique Nvidia GeForce GTX 1650, 4 Go de mémoire dédiée - Clavier rétroéclairé - Lecteur d'empreintes digitales - Wifi - Bluetooth - 1x USB 3.1 Type-C - 2x USB 3.1 - HDMI - Lecteur de cartes - Webcam HD 720p`
            },

            {
                name: "LENOVO IDEAPAD L340-15IRH GAMING",
                price: 2700,
                brand: "Lenovo",
                categorie: "Laptop",
                model: "IDEAPAD L340-15IRH GAMING",
                orderQty: 2,
                availabilty: true,
                imgs: ["IDEAPAD L340-15IRH GAMING", "IDEAPAD L340-15IRH GAMING-1", "IDEAPAD L340-15IRH GAMING-2", "IDEAPAD L340-15IRH GAMING-3"],
                description: `Ecran 15.6" LED Full HD - Processeur Intel Core i7-8565U, up to 4.6 Ghz, 8Mo de cache - 20Go de mémoire - Disque 1To + 128Go SSD M.2 - Carte graphique Nvidia GeForce GTX 1650, 4 Go de mémoire dédiée - Clavier rétroéclairé - Lecteur d'empreintes digitales - Wifi - Bluetooth - 1x USB 3.1 Type-C - 2x USB 3.1 - HDMI - Lecteur de cartes - Webcam HD 720p`
            },

            {
                name: "LENOVO THINKPAD T580",
                price: 4100,
                brand: "Lenovo",
                categorie: "Laptop",
                model: "THINKPAD T580",
                orderQty: 2,
                availabilty: true,
                imgs: ["THINKPAD T580", "THINKPAD T580-1", "THINKPAD T580-2", "THINKPAD T580-3"],
                description: `Ecran 15.6" LED Full HD - Processeur Intel Core i7-8565U, up to 4.6 Ghz, 8Mo de cache - 20Go de mémoire - Disque 1To + 128Go SSD M.2 - Carte graphique Nvidia GeForce GTX 1650, 4 Go de mémoire dédiée - Clavier rétroéclairé - Lecteur d'empreintes digitales - Wifi - Bluetooth - 1x USB 3.1 Type-C - 2x USB 3.1 - HDMI - Lecteur de cartes - Webcam HD 720p`
            },

            {
                name: "DELL XPS 13 7390",
                price: 6000,
                brand: "Dell",
                categorie: "Laptop",
                model: "XPS 13 7390",
                availabilty: true,
                imgs: ["XPS 13 7390", "XPS 13 7390-1", "XPS 13 7390-2", "XPS 13 7390-3"],
                description: `Ecran 13.3" 4K Ultra HD InfinityEdge Tactile - Processeur Intel Core i7-10510U 10è Génération , up to 4.9 GHz, 8 Mo de cache - Mémoire 16 Go - Disque Dur 512 Go SSD M.2 - Carte Graphique Intel UHD Graphics - WiFi - Bluetooth - USB 3.1 Type C - Thunderbolt - Lecteur de carte - Windows 10 64 bits`
            },
        ]
    }, {
        number: "2",
        date: "10/01/2020",
        amount: 500,
        deliveryDate: "02/02/2020",
        status: true,
        products: [{
            name: "SAMSUNG GALAXY S20 PLUS",
            price: 3700,
            brand: "Samsung",
            categorie: "Smartphone",
            model: "S20",
            availabilty: true,
            imgs: ["s20", "s20-1", "s20-2", 's20-3'],
            id: "SAMSUNGGALAXYS20PLUS",
            description: `Double SIM - Ecran Infinity 6.7" QHD+ (1440 x 3200px) Gorilla Glass 6 - Processeur Exynos 990 (7 nm+) - RAM 8 Go - Mémoire 128 Go - Android 10 - Appareils Photos: Triple capteur 64+12+12 MP (Arrière) / 10MP (Frontale) - Batterie 4500 mAh - Lecteur d'empreinte ultrasonique - Reconnaissance faciale - 4G - NFC - Bluetooth 5.0 - GPS - Wifi`
        },
        {
            name: "SAMSUNG GALAXY NOTE 10+",
            price: 3900,
            brand: "Samsung",
            model: "NOTE 10+",
            categorie: "Smartphone",
            orderQty: 2,
            availabilty: true,
            imgs: ["note10", "note10-1", "note10-2", "note10-3"],
            description: `Ecran Infinity 6.8" Dynamic AMOLED - Quad HD+ 1440 x 3040 - Processeur Exynos 9825 Octo-Core 2.7GHz - Android 9.0 Pie - RAM 12 Go - Mémoire 256 Go - APN: Quadruple capteur 12MP Dual Pixel + Ultra Grand Angle 16MP + Téléobjectif 12MP ToF, HDR10+, caméra frontale 10MP Dual Pixel - WiFi - Bluetooth - NFC - Capteur d'empreintes - S Pen`
        },
        {
            name: "HUAWEI P30 PRO",
            price: 4000,
            brand: "Huawei",
            model: "P30 Pro",
            categorie: "Smartphone",
            orderQty: 2,
            availabilty: true,
            imgs: ["p30", "p30-1", "p30-2", "p30-3"],
            description: `Double SIM - Ecran 6.47" OLED Full HD+ - Processeur Kirin 980 Octa-core, 2x 2.6 GHz (Cortex-A76) + 2x 1.92 GHz (Cortex-A76) + 4x 1.8 GHz (Cortex-A55) - Android 9 - RAM 8 Go - Mémoire 256 Go - Caméra arrière Leica: 40MP + 20MP + 8MP - Caméra avant: 32MP - Wifi - 4G - GPS - Bluetooth - NFC - Lecteur d'empreinte digitale - Batterie 4200 mAh - Étanche IP68`
        }],
        totalProducts: 3
    }, {
        number: "3",
        date: "10/01/2018",
        amount: 3000,
        status: true,
        totalProducts: 3,
        deliveryDate: "02/02/2020",
        products: [
            {
                name: "OPPO RENO 10X",
                price: 2000,
                brand: "Oppo",
                model: "RENO 10X",
                categorie: "Smartphone",
                orderQty: 2,
                availabilty: true,
                imgs: ["reno10", "reno10-1", "reno10-2", "reno10-3"],
                description: `Double SIM - Ecran 6.6" Full HD+ - Processeur Qualcomm SM8150 Snapdragon 855 Octa-core 2.8GHz - Android 9.0 - RAM 8 Go - Mémoire 256 Go - Appareil Photo: Triple caméra arrière 48MP + 8MP + 13MP / 16MP Avant - 4G - Wifi - Bluetooth - NFC - Reconnaissance faciale - Lecteur d'empreinte digitale sous l'écran - Batterie 4065 mAh`
            },
            {
                name: "OPPO RENO2 F",
                price: 1000,
                brand: "Oppo",
                model: "RENO2 F",
                categorie: "Smartphone",
                orderQty: 2,
                availabilty: true,
                imgs: ["RENO2", "RENO2-1", "RENO2-2", "RENO2-3"],
                description: `Double SIM - Ecran 6.5" - Processeur Mediatek MT6771V Helio P70 Octa-core (4x2.1 GHz Cortex-A73 & 4x2.0 GHz Cortex-A53) - Android 9.0 - RAM 8Go - Mémoire 128Go - Appareil Photo 48MP + 8MP + 2MP + 2MP (Arrière) / 16MP (Avant) - 4G - Wifi - Bluetooth - Batterie 4000mAh`
            },

            {
                name: "SAMSUNG GALAXY A71",
                price: 1600,
                brand: "Samsung",
                categorie: "Smartphone",
                orderQty: 2,
                model: "A71",
                availabilty: true,
                imgs: ["a71", "a71-1", "a71-2", "a71-3"],
                description: `Double SIM - Ecran Infinity-O 6.7" FHD+ sAMOLED - Processeur Qualcomm Snapdragon 730 Octo-Core cadencé à 2.2 GHz - RAM 8 Go - Mémoire 128 Go - Android 10 One UI 2 - Multiple caméra arrière: 64MP + 12MP + 5MP + 5MP / Caméra frontale: 32MP, F,2.2- Lecteur d'empreinte digitale - 4G - Bluetooth 5.0 - Wifi - NFC - Batterie 4500 mAh`
            },
        ]
    }
]

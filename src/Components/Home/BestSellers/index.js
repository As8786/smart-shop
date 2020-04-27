import React, { useEffect } from 'react';
import { Link } from "react-router-dom"

import AOS from 'aos';
import 'aos/dist/aos.css';

import "./style.css"

const BestSelling = () => {

    useEffect(() => {
        AOS.init({
            duration: 3000
        })
    })

    return <div className="best-selling-container" id="best-selling-container">
        < div className="section-title" >
            Best Selling
         </div >
        <div className="products-display">
            {products.map((product, i) => {
                return <div className="product-item" data-aos={i % 2 !== 0 ? 'fade-up-left' : 'fade-up-right'} key={i}>
                    <Link to={`/product/${product.name}`} >
                        <div className='img-container'>
                            <img src={`./imgs/${product.imgs[0]}.jpg`} />
                        </div>
                        <div className="product-name">
                            {product.name}
                        </div>
                    </Link>
                </div>
            })}
        </div>
    </div >
}

export default BestSelling;

// style={{ marginTop: i % 2 !== 0 ? "157px" : "27px" }}

const products = [
    {
        name: `SONY PS4`,
        price: 1600,
        brand: "Sony",
        categorie: "Console",
        model: "PS4",
        availabilty: true,
        imgs: ["carr4", "ps4-1", "ps4-2", "ps4-3"],
        description: `Console de jeux PlayStation 4 nouvelle génération - Processeur AMD Jaguar octo-core, 1.6 GHz - Chipset graphique AMD Radeon Next-Gen - Mémoire 8 Go - Stockage 500 Go amovible - Port Ethernet - WiFi - Bluetooth - USB 3.0 - HDMI - Dimensions 305 x 275 x 53 mm - Poids 2.8 kg`
    },
    // {
    //     name: "SAMSUNG GALAXY S20 PLUS",
    //     price: 3700,
    //     brand: "Samsung",
    //     categorie: "Smartphone",
    //     model: "S20",
    //     availabilty: true,
    //     imgs: ["s20-1", "s20-1", "s20-2", 's20-3'],
    //     id: "SAMSUNGGALAXYS20PLUS",
    //     description: `Double SIM - Ecran Infinity 6.7" QHD+ (1440 x 3200px) Gorilla Glass 6 - Processeur Exynos 990 (7 nm+) - RAM 8 Go - Mémoire 128 Go - Android 10 - Appareils Photos: Triple capteur 64+12+12 MP (Arrière) / 10MP (Frontale) - Batterie 4500 mAh - Lecteur d'empreinte ultrasonique - Reconnaissance faciale - 4G - NFC - Bluetooth 5.0 - GPS - Wifi`
    // },

    {
        name: "APPLE IPHONE 11 PRO MAX",
        price: 4800,
        brand: "Apple",
        model: "IPHONE 11 PRO MAX",
        categorie: "Smartphone",
        availabilty: true,
        imgs: ["carr1", "i11-1", "i11-2", "i11-3"],
        description: `Écran OLED Super Retina XDR 6.5" HDR (1242 x 2688px) - Etanche IP68 - Processeur Apple A13 Bionic Hexa-Core 3Gen - RAM 6 Go - Mémoire 64 Go - Système Apple iOS 13 - 3x Appareils Photos: 12 Megapixels F/2.4 (ultra grand-angle), F/1.8 (grand-angle), Téléobjectif F/2.0 (Arrière), 12MP TrueDepth F/2.2 (Avant) - Wifi - 4G+ - Bluetooth 5.0 - NFC - Batterie 3500 mAh`
    },

    {
        name: `SAMSUNG GALAXY TAB A`,
        price: 600,
        brand: "Samsung",
        categorie: "Tablet",
        model: "GALAXY TAB A",
        availabilty: true,
        imgs: ["carr3", "GALAXY TAB A-1", "GALAXY TAB A-2", "GALAXY TAB A-3"],
        description: `Ecran 8" (1200 x 800 pixels) - Processeur Qualcomm Snapdragon Octa Core 429, 2.0 GHz - Android Android 9.0 - RAM 2 Go - Mémoire 32 Go extensible jusqu’à 128Go - Appareil Photo 8MP (Arrière) avec Autofocus, 2MP (Frontale) - 4G LTE - Wifi - GPS - Bluetooth - Batterie 5100 mAh`
    },
    {
        name: "ASUS ZENBOOK 13",
        price: 3700,
        brand: "Assus",
        categorie: "Laptop",
        model: "ZENBOOK 13",
        availabilty: true,
        imgs: ["carr2", "ZENBOOK 13-1", "ZENBOOK 13-2", "ZENBOOK 13-3"],
        description: `Ecran 13.3" Full HD LED - Processeur Intel Core i7-10510U, up to 4.9 Ghz, 8 Mo de mémoire cache - Mémoire 8 Go - Disque 512 Go SSD M.2 - Carte graphique Nvidia GeForce MX250, 2 Go de mémoire dédiée - Lecteur de cartes - 1x USB 3.1 Type-C - 1x USB 3.1 - 1x USB 2.0 - 1x HDMI - Wifi - Bluetooth - Caméra HD - Windows 10`
    },
    // {
    //     name: `SAMSUNG 65 QLED 4K`,
    //     price: 7400,
    //     brand: "Samsung",
    //     categorie: "TV",
    //     model: "65 QLED 4K",
    //     availabilty: true,
    //     imgs: ["SAMSUNG 65 QLED 4K-3", "SAMSUNG 65 QLED 4K-1", "SAMSUNG 65 QLED 4K-2", "SAMSUNG 65 QLED 4K-3"],
    //     description: `Téléviseur Samsung 65" Smart QLED Série Q - Résolution 3840 x 2160 - Wifi - Puissance en sortie (RMS) 40W - Audio Dolby Digital Plus - Q Engine - Q HDR Elite - Q Constrast - Wi-Fi Direct - Tuner analogique - DVB-TS2 - 4x HDMI - 2x USB - Ethernet (LAN) - ConnectShare (USB 2.0/HDD) - Dimensions: 1446.3 x 909.4 x 285.7 mm - Poids: 24.8 Kg`
    // },
]

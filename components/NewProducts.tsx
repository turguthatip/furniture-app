import React from "react";
import Card from "./Card";
import Image from "next/image";

const productData = [
        { "title": "Bodrum Koltuk Takımı", "img": "bodrum" },
        { "title": "Çeşme Koltuk Takımı", "img": "cesme" },
        { "title": "Begonya Koltuk Takımı", "img": "begonya" },
        { "title": "Dikili Koltuk Takımı", "img": "dikili" },
        { "title": "Asel Koltuk Takımı", "img": "asel" },
        { "title": "Belinay Koltuk Takımı", "img": "belinay" },
        { "title": "Solo Koltuk Takımı", "img": "solo2" },
        { "title": "Boheem Koltuk Takımı", "img": "boheem" },
        { "title": "Riva Koltuk Takımı", "img": "riva2" },
        { "title": "Foça Koltuk Takımı", "img": "foca" },
        { "title": "Eva Koltuk Takımı", "img": "eva" },
        { "title": "Milda Koltuk Takımı", "img": "milda2" },
        { "title": "Star Koltuk Takımı", "img": "star2" },
        { "title": "Eylul Koltuk Takımı", "img": "eylul2" },
        { "title": "Seul Koltuk Takımı", "img": "seul2" },
        { "title": "Verona Koltuk Takımı", "img": "verona2" },
        { "title": "Viyana Koltuk Takımı", "img": "viyana2" },
        { "title": "Hazel Koltuk Takımı", "img": "hazel2" },
        { "title": "Tila Koltuk Takımı", "img": "tila2" },
        { "title": "Puzzle Köşe Takımı", "img": "puzzle2" },
        { "title": "Centa Köşe Takımı", "img": "centa2" },
        { "title": "Pukon Kanepe Takımı", "img": "pukon2" },
        { "title": "Didim Koltuk Takımı", "img": "didim" },
        { "title": "Versac Koltuk Takımı", "img": "versac2" },
        { "title": "Kongo Koltuk Takımı", "img": "kongo" },
        { "title": "Nijer Koltuk Takımı", "img": "nijer" },
        { "title": "Viyana Koltuk Takımı", "img": "viyana", "hidden": true },
        { "title": "Verona Koltuk Takımı", "img": "verona", "hidden": true },
        { "title": "Diva Koltuk Takımı", "img": "diva" },
        { "title": "Hazel Koltuk Takımı", "img": "hazel", "hidden": true },
        { "title": "Nefes Koltuk Takımı", "img": "nefes" },
        { "title": "Eylül Koltuk Takımı", "img": "eylul", "hidden": true },
        { "title": "Riva Koltuk Takımı", "img": "riva", "hidden": true },
        { "title": "Barselona Koltuk Takımı", "img": "barselona" },
        { "title": "Seul Koltuk Takımı", "img": "seul", "hidden": true },
        { "title": "Solo Koltuk Takımı", "img": "solo", "hidden": true },
        { "title": "Orkide Koltuk Takımı", "img": "orkide" },
        { "title": "Tila Koltuk Takımı", "img": "tila", "hidden": true },
        { "title": "Milda Koltuk Takımı", "img": "milda", "hidden": true },
        { "title": "Versac Koltuk Takımı", "img": "versac", "hidden": true },
        { "title": "Star Koltuk Takımı", "img": "star", "hidden": true },
        { "title": "Nepal Koltuk Takımı", "img": "nepal" },
        { "title": "Sümbül Koltuk Takımı", "img": "sumbul" },
        { "title": "Safir Koltuk Takımı", "img": "safir" },
        { "title": "Milda Köşe Takımı", "img": "mildakose" },
        { "title": "Centa Koltuk Takımı", "img": "centa" },
        { "title": "Puzzle Köşe Takımı", "img": "puzzle", "hidden": true },
        { "title": "Bafra Köşe Takımı", "img": "bafra" },
        { "title": "Kozmos Köşe Takımı", "img": "kozmos" },
        { "title": "Pera Köşe Takımı", "img": "pera" },
        { "title": "Tila Köşe Takımı", "img": "tilakose" },
        { "title": "Pukon Koltuk Takımı", "img": "pukon" },
        { "title": "Sedef Koltuk Takımı", "img": "sedef" },
        { "title": "Kozimo Koltuk Takımı", "img": "kozimo" }
    
];

const NewProducts = () => {
    return (
        <div>
            <div className="container pt-16">
                <h2 className="font-medium text-2xl pb-4">Yeni Ürünler</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {productData.map((item, index) => (
                        <Card key={index} title={item.title} img={item.img} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default NewProducts;

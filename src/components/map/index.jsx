"use client";

import { useEffect } from "react";
import Image from "next/image";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // Default Tippy.js styling
import "tippy.js/themes/light.css"; // Light theme
import WorldMap from "@/assets/img/worldmap.png"; // Replace with your actual image path
import India from "@/assets/img/india.webp"; // Replace with your actual image path
import Argen from "@/assets/img/map/argentina.png"; // Replace with your actual image path
import Aus from "@/assets/img/map/austrila.png"; // Replace with your actual image path
import Brazil from "@/assets/img/map/brazil.png"; // Replace with your actual image path
import China from "@/assets/img/map/china.png"; // Replace with your actual image path
import Colombia from "@/assets/img/map/colmbia.png"; // Replace with your actual image path
import Mexio from "@/assets/img/map/maxio.png"; // Replace with your actual image path
import Panama from "@/assets/img/map/panama.png"; // Replace with your actual image path
import Russia from "@/assets/img/map/russia.png"; // Replace with your actual image path
import Suadi from "@/assets/img/map/suadi.png"; // Replace with your actual image path
import Turkey from "@/assets/img/map/turkey.png"; // Replace with your actual image path
import Usa from "@/assets/img/map/usa.png"; // Replace with your actual image path
import Veni from "@/assets/img/map/venezuela.png"; // Replace with your actual image path
import Japan from "@/assets/img/map/japan.png"; // Replace with your actual image path

const locations = [
    { name: "Venezuela", top: "54%", left: "24%", country: Veni },
    { name: "Brazil", top: "64%", left: "28%", country: Brazil },
    { name: "Argentina", top: "77%", left: "27%", country: Argen },
    { name: "Colombia", top: "55%", left: "21%", country: Colombia },
    { name: "Panama", top: "51%", left: "18%", country: Panama },
    { name: "Mexico", top: "38%", left: "12%", country: Mexio },
    { name: "USA", top: "26%", left: "17%", country: Usa },
    { name: "Saudi Arabia", top: "40%", left: "53%", country: Suadi },
    { name: "Turkey", top: "31%", left: "57%", country: Turkey },
    { name: "Russia", top: "16%", left: "67%", country: Russia },
    { name: "India", top: "40%", left: "69%", country: India },
    { name: "Japan", top: "34%", left: "86%", country: Japan },
    { name: "Australia", top: "72%", left: "86%", country: Aus },
];

export default function MapWithPoints() {
    return (
        <div className="relative flex items-center justify-center">
            {/* Map Image */}
            <div className="relative w-full max-w-4xl">
                <Image src={WorldMap} alt="World Map" className="w-full h-auto" />

                {/* Location Points */}
                {locations.map((location, index) => (
                    <Tippy
                        key={index}
                        content={
                            <div className="p-2 text-center">
                                <Image
                                    src={location.country}
                                    alt={location.name}
                                    width={100}
                                    height={60}
                                    className="rounded-lg"
                                />
                                <p className="mt-2 text-sm font-semibold">{location.name}</p>
                            </div>
                        }
                        theme="light"
                        arrow={true}
                    >
                        <div
                            className="absolute w-4 h-4 bg-black rounded-full shadow-md cursor-pointer animate-pulse hover:scale-125 transition-transform overflow-hidden"
                            style={{ top: location.top, left: location.left }}
                        >
                            <Image
                                src={location.country}
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>

                    </Tippy>
                ))}
            </div>
        </div>
    );
}

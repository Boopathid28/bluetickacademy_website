"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Round from "@/assets/img/round.svg";
import Swiggy from "@/assets/img/round/swiggy.svg";
import Filpkart from "@/assets/img/round/filpkartsvg.svg";
import Amazon from "@/assets/img/round/amazonsvg.svg";
import Google from "@/assets/img/round/googlesvg.svg";

export default function OrbitAnimation() {
  const [mounted, setMounted] = useState(false);
  const [radius, setRadius] = useState(170); // Default radius for large screens

  useEffect(() => {
    setMounted(true);

    // Function to update radius based on screen width
    const updateRadius = () => {
      if (window.innerWidth < 768) {
        setRadius(120); // Set radius to 100px for small screens
      } else {
        setRadius(170); // Set radius to 170px for larger screens
      }
    };

    updateRadius(); // Set on first load
    window.addEventListener("resize", updateRadius); // Update on resize

    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  if (!mounted) return null;

  // Function to calculate proper circular positioning
  const calculatePosition = (index, total, radius) => {
    const angle = (index / total) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  const orbitingElements = [
    { src: Swiggy, alt: "Swiggy" },
    { src: Amazon, alt: "Amazon" },
    { src: Filpkart, alt: "Flipkart" },
    { src: Google, alt: "Google" },
  ];

  return (
    <div className="flex items-center justify-center w-full h-auto p-4">
      <div className="relative w-full max-w-[600px] h-[80vw] max-h-[430px] xl:right-25">
        {/* Central Globe */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[85%] lg:w-[70%] max-w-[300px]">
          <Image
            src={Round}
            alt="Globe"
            width={500}
            height={500}
            className="w-full h-auto"
          /> 
          {/* text-[clamp(16px, 4vw, 28px)]  */}
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold text-[19px] text-white w-[150px]">
            Our Learners Thrive at Top Global Companies
          </p>
        </div>

        {/* Rotating Orbit Icons */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          {orbitingElements.map((svg, index) => {
            const position = calculatePosition(index, orbitingElements.length, radius);

            return (
              <motion.div
                key={index}
                className="absolute flex items-center justify-center"
                style={{
                  top: `calc(50% + ${position.y}px - 40px)`,
                  left: `calc(50% + ${position.x}px - 40px)`,
                  width: "80px",
                  height: "80px",
                }}
              >
                <Image
                  src={svg.src || "/placeholder.svg"}
                  alt={svg.alt}
                  width={80}
                  height={80}
                  className="w-18 h-18"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

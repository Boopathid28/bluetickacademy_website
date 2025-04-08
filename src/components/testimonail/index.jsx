import Image from "next/image";
import Testimonial from "@/assets/img/testimonial.svg";
import Testimonial1 from "@/assets/img/testimonial_1.svg";
import Testimonial2 from "@/assets/img/testimonial_2.svg";
import Testimonial3 from "@/assets/img/testimonial_3.svg";
import Bulb from "@/assets/img/bulb1.svg";

const testimonials = [
  {
    img: Testimonial,
    title: "100% Job Guaranteed Program",
    stats: [
      { label: "Avg CTC", value: "4.5 LPA" },
      { label: "Highest CTC offered", value: "22 LPA" },
    ],
    note: "Placement support until you get the job",
    alt : "Digital Marketing Course"
  },
  {
    img: Testimonial1,
    title: (
      <>
       15<span className="text-red-500">+</span> Global Certifications
      </>
    ),
    description:
      "Become a Google Certified digital marketer and start your career anywhere across the world.",
      alt : "Digital marketing training institute in Bangalore"
  },
  {
    img: Testimonial2,
    title: (
      <>
        Access to Premium 50<span className="text-red-500">+</span> AI Tools
      </>
    ),
    description:
      "You’ll get trial access to learn premium AI tools worth ₹1,00,000+.",
      alt : "Best digital marketing training institute in Bangalore,"
  },
  {
    img: Testimonial3,
    title: "Expert Trainers from Industries",
    description: (
      <>
        All our faculties hold <strong>6+ years</strong> of experience in top digital marketing industries.
      </>
    ),
    alt : "Digital marketing training in Bangalore"
  },
];

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-1 mt-5 md:p-5">
      {testimonials.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 max-[640px]:max-w-[350px] mx-auto w-full"
        >
          <Image
            className="w-full h-40 object-cover"
            src={item.img}
            alt={item.alt}
            width={300}
            height={200}
          />
          <div className="p-5 flex flex-col h-full">
            <h5 className="mb-3 text-[18px] md:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </h5>
            {item.stats ? (
              <ul className="list-disc pl-4 md:pl-6 flex justify-between gap-4">
                {item.stats.map((stat, i) => (
                  <li key={i} className="marker:text-blue-500 marker:text-[25px] text-[13px] md:text-sm">
                    <strong className="text-base">{stat.value}</strong>
                    <br />
                    {stat.label}
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="list-disc pl-4 md:pl-6 flex justify-between gap-4">
                <li className="marker:text-blue-500 marker:text-[25px] text-[14px] md:text-sm">
                  {item.description}
                </li>
              </ul>
            )}
            {item.note && (
              <span className="flex items-center gap-2 px-3 mt-2 py-1 bg-blue-100 rounded-md">
                <Image src={Bulb} alt="bulb-icon" width={16} height={16} />
                <p className="text-[10px] md:text-sm">{item.note}</p>
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import Background from "@/assets/img/banner.jpg";

export default function TermsAndConditions() {
    return (
        <>
            <section style={{
                backgroundImage: `url(${Background.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>
                <div className="container min-[1440px]:max-w-[1440px] mx-auto px-4 pt-[110px] max-[768px]:mt-[-55px] md:pt-[80px] pb-[30px] md:pb-[50px]">

                    <p className="text-[#F3F3F3] text-[25px] md:text-[48px] font-bold font-['Montserrat'] capitalize leading-[28px] md:leading-[60px] mt-[5px] md:mt-[10px] text-center">Terms And Condition</p>
                    <div className="flex justify-center">
                        <nav className="mt-[5px] md:mt-[8px]">
                            <ol className="list-reset flex">
                                <li className="font-normal text-[11px] md:text-[15px] leading-[33px] text-[#E4E4E4]">
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <span className="mx-2 font-normal text-[15px] leading-[33px] text-[#E4E4E4]">
                                        /
                                    </span>
                                </li>
                                <li className="font-semibold text-[11px] md:text-[15px] leading-[33px] text-[#FAB019]">
                                    Terms And Condition
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>

            <section>
                <div className="container min-[1440px]:max-w-[1440px] mx-auto px-4">
                    <div class="mx-auto md:p-6 mt-10">
                        <h1 class="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-6">Terms and Conditions</h1>
                        {/* <p class="text-xs sm:text-sm text-gray-500 text-center">Effective Date: 01/04/2025 onwards</p> */}

                        <p class="mt-4 text-sm sm:text-base">Welcome to <strong>Blue Tick Academy</strong> ("we," "our," or "us"). By accessing or using our website <a href="https://bluetickacademy.com" class="text-blue-500 underline">https://bluetickacademy.com</a> ("Website") and our services, you agree to comply with and be bound by these Terms and Conditions ("Terms"). If you do not agree with any part of these Terms, please do not use our services.</p>

                        <h2 class="text-lg sm:text-xl font-semibold mt-6">1. Definitions</h2>
                        <ul class="list-disc ml-6 text-sm sm:text-base">
                            <li><strong>"User," "You," or "Your"</strong> refers to any individual or entity using our services.</li>
                            <li><strong>"Services"</strong> refer to all courses, training programs, and related offerings provided by Blue Tick Academy.</li>
                            <li><strong>"Website"</strong> refers to <a href="https://bluetickacademy.com" class="text-blue-500 underline">https://bluetickacademy.com</a></li>
                        </ul>

                        <h2 class="text-lg sm:text-xl font-semibold mt-6">2. Eligibility</h2>
                        <ul class="list-disc ml-6 text-sm sm:text-base">
                            <li>You must be at least 18 years old or have parental/guardian consent to use our services.</li>
                            <li>You must provide accurate, complete, and current information when registering for courses or services.</li>
                        </ul>

                        <h2 class="text-lg sm:text-xl font-semibold mt-6">3. Enrollment & Payments</h2>
                        <ul class="list-disc ml-6 text-sm sm:text-base">
                            <li>Course fees must be paid in full or as per the installment plan mutually agreed before the commencement of the course.</li>
                            <li>Fees are non-refundable.</li>
                            <li>We reserve the right to change course fees, duration, and availability at any time. However, changes will not apply after course commencement.</li>
                            <li>Any applicable taxes will be added to the total price of services.</li>
                        </ul>

                        <h2 class="text-lg sm:text-xl font-semibold mt-6">4. Refund & Cancellation Policy</h2>
                        <ul class="list-disc ml-6 text-sm sm:text-base">
                            <li>Cancellations before 7 working days of course start date are eligible for a full refund.</li>
                            <li>Refund requests must be made in writing and sent to <a href="mailto:info@bluetickacademy.com" class="text-blue-500 underline">info@bluetickacademy.com</a></li>
                            <li>No refunds will be provided after the course has commenced.</li>
                        </ul>

                        <h2 class="text-lg sm:text-xl font-semibold mt-6">5. Course Conduct & Code of Ethics</h2>
                        <ul class="list-disc ml-6 text-sm sm:text-base">
                            <li>Maintain professional behavior and respect instructors, fellow students, and staff.</li>
                            <li>Harassment, discrimination, or disruptive behavior results in immediate termination without a refund.</li>
                            <li>Course materials are for personal learning only; sharing, copying, or redistributing is prohibited.</li>
                        </ul>

                        <h2 class="text-lg sm:text-xl font-semibold mt-6">6. Intellectual Property</h2>
                        <p class="text-sm sm:text-base">All content, course materials, and training materials are the property of Blue Tick Academy and protected by copyright laws. Unauthorized reproduction or distribution may lead to legal action.</p>

                        <h2 class="text-lg sm:text-xl font-semibold mt-6">7. Disclaimer of Warranties</h2>
                        <p class="text-sm sm:text-base">Our services are provided "as is" without guarantees of specific results. While we strive for accuracy, we do not warrant uninterrupted or error-free services.</p>

                        <h2 class="text-lg sm:text-xl font-semibold mt-6">8. Limitation of Liability</h2>
                        <p class="text-sm sm:text-base">We are not liable for indirect, incidental, or consequential damages arising from your use of our services. Our total liability shall not exceed the course fee paid.</p>

                        <h2 class="text-lg sm:text-xl font-semibold mt-6">9. Privacy Policy</h2>
                        <p class="text-sm sm:text-base">Your use of our Website and services is governed by our <a href="https://bluetickacademy.com/privacy-policy" class="text-blue-500 underline">Privacy Policy</a>.</p>

                        <h2 class="text-lg sm:text-xl font-semibold mt-6">10. Third-Party Links & Services</h2>
                        <p class="text-sm sm:text-base">We are not responsible for third-party websites or services linked on our site. Use them at your own risk.</p>

                        <h2 class="text-lg sm:text-xl font-semibold mt-6">11. Modification of Terms</h2>
                        <p class="text-sm sm:text-base">We may update these Terms at any time, with changes posted on this page. Continued use of services implies acceptance of revised Terms.</p>

                        <h2 class="text-lg sm:text-xl font-semibold mt-6">12. Termination</h2>
                        <p class="text-sm sm:text-base">We may terminate your access for violating these Terms or at our discretion. Upon termination, all granted rights cease immediately.</p>

                        <h2 class="text-lg sm:text-xl font-semibold mt-6">13. Governing Law & Dispute Resolution</h2>
                        <p class="text-sm sm:text-base">These Terms are governed by the laws of Bangalore, Karnataka. Disputes will be resolved through arbitration in Bangalore unless both parties agree otherwise.</p>

                        <h2 class="text-lg sm:text-xl font-semibold mt-6">14. Contact Us</h2>
                        <p class="text-sm sm:text-base">For questions regarding these Terms and Conditions, please contact us:</p>
                        <p class="font-semibold text-sm sm:text-base">Blue Tick Academy</p>
                        <p class="text-sm sm:text-base">No.545, 2nd Floor, CMH Road, Indiranagar Stage 2, Bangalore - 560038</p>
                        <p class="text-sm sm:text-base">Email: <a href="mailto:sandya@bluetickacademy.com" class="text-blue-500 underline">sandya@bluetickacademy.com</a></p>
                        <p class="text-sm sm:text-base">Phone: <a href="tel:+919606995525" class="text-blue-500 underline">9606-9955-25</a></p>
                    </div>
                </div>
            </section>

        </>
    );
}






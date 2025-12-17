"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const page = () => {
  const swiperRef = useRef(null);

  return (
    <>
      {/* <Navbar /> */}

      {/* Discover Section */}
      <div className="blog-section mt-100">
        <div className="container mx-auto">
          <div className="text-center mb-7.5">
            <h2>Discover More</h2>
          </div>
          <div className="flex flex-wrap justify-center">
            <Link href="#" className="tag">
              LegalTech
            </Link>
            <Link href="#" className="tag">
              Data Science
            </Link>
            <Link href="#" className="tag">
              AI Tools
            </Link>
            <Link href="#" className="tag">
              Workforce Training
            </Link>
            <Link href="#" className="tag">
              Data Analytics
            </Link>
            <Link href="#" className="tag">
              AI in Marketing
            </Link>
            <Link href="#" className="tag">
              Solutions development
            </Link>
            <Link href="#" className="tag">
              AI in Healthcare
            </Link>
            <Link href="#" className="tag">
              Machine Learning
            </Link>
            <Link href="#" className="tag">
              AI for Schools
            </Link>
            <Link href="#" className="tag">
              Hiring Talents
            </Link>
            <Link href="#" className="tag">
              Data Engineering
            </Link>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="blog-section mt-100">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="flex w-[50%]">
              <h2>Real Stories &amp; Breakthroughs </h2>
            </div>
            <div className="flex w-[50%] justify-center gap-2.5 blog-navigation">
              <Link href="#" className="navigation-btn">
                <Image
                  src={
                    "https://zaka.ai/wp-content/themes/zaka-theme/assets/images/icons/left-arrow-normal.svg"
                  }
                  alt="prev"
                  height={24}
                  width={24}
                  unoptimized={true}
                  className=""
                />
              </Link>
              <Link href="#" className="navigation-btn">
                <Image
                  src={
                    "https://zaka.ai/wp-content/themes/zaka-theme/assets/images/icons/right-arrow-normal.svg"
                  }
                  alt="prev"
                  height={24}
                  width={24}
                  unoptimized={true}
                  className=""
                />
              </Link>
            </div>
          </div>
          <div className="flex blog-slider-wrapper">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={12}
              slidesPerView={4}
              breakpoints={{
                1399.97: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1199.97: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                },
                1023.97: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                },
                767.97: {
                  slidesPerView: 2,
                  spaceBetween: 12,
                },
                575.97: {
                  slidesPerView: 1,
                  spaceBetween: 12,
                },
                399.97: {
                  slidesPerView: 1,
                  spaceBetween: 12,
                },
                319.97: {
                  slidesPerView: 1,
                  spaceBetween: 12,
                },
              }}
            >
              <SwiperSlide>
                <Link href="#" className="cursor-pointer blog-card">
                  <div className="image-wrapper">
                    <Image
                      src={
                        "https://zaka.ai/wp-content/uploads/2025/12/Blog-Cover-Photos-Website.png"
                      }
                      width={375}
                      height={246}
                      alt={"blog-image"}
                      unoptimized={true}
                      className="rounded-[24px]"
                    />
                  </div>

                  <div className="p-5">
                    <p className="font-medium">10-12-2025</p>
                    <div className="blog-title">
                      New Website Launch: Your Gateway to AI Education &
                      Solutions
                    </div>
                    <p className="">
                      Nabra, developed by ZAKA graduates, is an AI platform that
                      turns children’s speech recordings into clear, actionable
                      insights for therapists, all within a safe and playful
                      environment. Its success at the AI for Good Sandbox finals
                      highlights the impact of human-centered AI in real-world
                      healthcare.
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="#" className="cursor-pointer blog-card">
                  <div className="image-wrapper">
                    <Image
                      src={
                        "https://zaka.ai/wp-content/uploads/2025/12/Blog-Cover-Photos-Website.png"
                      }
                      width={375}
                      height={246}
                      alt={"blog-image"}
                      unoptimized={true}
                      className="rounded-[24px]"
                    />
                  </div>

                  <div className="p-5">
                    <p className="font-medium">10-12-2025</p>
                    <div className="blog-title">
                      New Website Launch: Your Gateway to AI Education &
                      Solutions
                    </div>
                    <p className="">
                      Nabra, developed by ZAKA graduates, is an AI platform that
                      turns children’s speech recordings into clear, actionable
                      insights for therapists, all within a safe and playful
                      environment. Its success at the AI for Good Sandbox finals
                      highlights the impact of human-centered AI in real-world
                      healthcare.
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="#" className="cursor-pointer blog-card">
                  <div className="image-wrapper">
                    <Image
                      src={
                        "https://zaka.ai/wp-content/uploads/2025/12/Blog-Cover-Photos-Website.png"
                      }
                      width={375}
                      height={246}
                      alt={"blog-image"}
                      unoptimized={true}
                      className="rounded-[24px]"
                    />
                  </div>

                  <div className="p-5">
                    <p className="font-medium">10-12-2025</p>
                    <div className="blog-title">
                      New Website Launch: Your Gateway to AI Education &
                      Solutions
                    </div>
                    <p className="">
                      Nabra, developed by ZAKA graduates, is an AI platform that
                      turns children’s speech recordings into clear, actionable
                      insights for therapists, all within a safe and playful
                      environment. Its success at the AI for Good Sandbox finals
                      highlights the impact of human-centered AI in real-world
                      healthcare.
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="#" className="cursor-pointer blog-card">
                  <div className="image-wrapper">
                    <Image
                      src={
                        "https://zaka.ai/wp-content/uploads/2025/12/Blog-Cover-Photos-Website.png"
                      }
                      width={375}
                      height={246}
                      alt={"blog-image"}
                      unoptimized={true}
                      className="rounded-[24px]"
                    />
                  </div>

                  <div className="p-5">
                    <p className="font-medium">10-12-2025</p>
                    <div className="blog-title">
                      New Website Launch: Your Gateway to AI Education &
                      Solutions
                    </div>
                    <p className="">
                      Nabra, developed by ZAKA graduates, is an AI platform that
                      turns children’s speech recordings into clear, actionable
                      insights for therapists, all within a safe and playful
                      environment. Its success at the AI for Good Sandbox finals
                      highlights the impact of human-centered AI in real-world
                      healthcare.
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* NewsLetter Section */}
      <div className="newsletter-section mt-100">
        <div className="container mx-auto">
          <div className="bg-newsletter">
            <div className="flex flex-col items-center text-center">
              <h2 className="pb-15">Subscribe to Our Newsletter</h2>
              <p className="pb-15">
                Stay up-to-date with AI news and events by subscribing to our
                newsletter.
              </p>
              <a className="btn-newsletter" href="/subscribe">
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="social-media-section mt-100">
        <div className="container mx-auto">
          <div className="flex flex-row mb-16">
            <div className="w-[58.33%]">
              <h2>Experience the Pulse Of AI, Follow us On Social Media</h2>
            </div>
            <div className="flex w-[41.67%] justify-end items-end">
              <div className="flex gap-2.5">
                <div className="flex items-center justify-center social-icons">
                  <Link
                    href="https://zaka.ai/wp-content/themes/zaka-theme/assets/images/icons/facebook-fi.svg"
                    target="_blank"
                  >
                    <Image
                      src={
                        "https://zaka.ai/wp-content/themes/zaka-theme/assets/images/icons/facebook-fi.svg"
                      }
                      alt="Facebook"
                      height={40}
                      width={40}
                      unoptimized={true}
                      className=""
                    />
                  </Link>
                </div>

                <div className="flex items-center justify-center social-icons">
                  <Link
                    href="https://zaka.ai/wp-content/themes/zaka-theme/assets/images/icons/x-fi.svg"
                    target="_blank"
                  >
                    <Image
                      src={
                        "https://zaka.ai/wp-content/themes/zaka-theme/assets/images/icons/x-fi.svg"
                      }
                      alt="Twitter"
                      height={40}
                      width={40}
                      unoptimized={true}
                      className=""
                    />
                  </Link>
                </div>

                <div className="flex items-center justify-center social-icons">
                  <Link
                    href="https://zaka.ai/wp-content/themes/zaka-theme/assets/images/icons/linkedin-fi.svg"
                    target="_blank"
                  >
                    <Image
                      src={
                        "https://zaka.ai/wp-content/themes/zaka-theme/assets/images/icons/linkedin-fi.svg"
                      }
                      alt="Linkedin"
                      height={40}
                      width={40}
                      unoptimized={true}
                      className=""
                    />
                  </Link>
                </div>

                <div className="flex items-center justify-center social-icons">
                  <Link
                    href="https://zaka.ai/wp-content/themes/zaka-theme/assets/images/icons/instagram-fi.svg"
                    target="_blank"
                  >
                    <Image
                      src={
                        "https://zaka.ai/wp-content/themes/zaka-theme/assets/images/icons/instagram-fi.svg"
                      }
                      alt="Instagram"
                      height={40}
                      width={40}
                      unoptimized={true}
                      className=""
                    />
                  </Link>
                </div>

                <div className="flex items-center justify-center social-icons">
                  <Link
                    href="https://zaka.ai/wp-content/themes/zaka-theme/assets/images/icons/tiktok-fi.svg"
                    target="_blank"
                  >
                    <Image
                      src={
                        "https://zaka.ai/wp-content/themes/zaka-theme/assets/images/icons/tiktok-fi.svg"
                      }
                      alt="Tiktok"
                      height={40}
                      width={40}
                      unoptimized={true}
                      className=""
                    />
                  </Link>
                </div>

                <div className="flex items-center justify-center social-icons">
                  <Link
                    href="https://zaka.ai/wp-content/themes/zaka-theme/assets/images/icons/youtube-fi.svg"
                    target="_blank"
                  >
                    <Image
                      src={
                        "https://zaka.ai/wp-content/themes/zaka-theme/assets/images/icons/youtube-fi.svg"
                      }
                      alt="YouTube"
                      height={40}
                      width={40}
                      unoptimized={true}
                      className=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="social-media-cards px-12.5 py-10">
            <div className="grid grid-cols-3 gap-5">
              <div className="card">
                <Image
                  src={
                    "https://zaka.ai/wp-content/uploads/2025/11/Screenshot-2025-11-11-at-4.26.53-PM.png"
                  }
                  alt="card"
                  height={345}
                  width={350}
                  unoptimized={true}
                  className="img"
                />
              </div>
              <div className="card">
                <Image
                  src={
                    "https://zaka.ai/wp-content/uploads/2025/11/Screenshot-2025-11-11-at-4.32.10-PM.png"
                  }
                  alt="card"
                  height={345}
                  width={350}
                  unoptimized={true}
                  className="img"
                />
              </div>
              <div className="card">
                <Image
                  src={
                    "https://zaka.ai/wp-content/uploads/2025/11/Screenshot-2025-11-11-at-3.35.07-PM.png"
                  }
                  alt="card"
                  height={345}
                  width={350}
                  unoptimized={true}
                  className="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact-Section */}
      <section className="contact-section mt-100">
        <div className="container mx-auto rounded-[20px]">
          <div className="contact-box flex flex-col w-full">
            <form>
              <h2 className="mb-10">Do you have any questions?</h2>

              <div className="flex flex-col">
                <div className="flex flex-row gap-6">
                  <div className="flex flex-col w-full">
                    <label htmlFor="username" className="mb-2.5">
                      Full name
                    </label>
                    <input
                      id="username"
                      type="text"
                      name="username"
                      placeholder="John Smith"
                      className="w-full mb-9 placeholder-[#E5E5E5] bg-[#404040] p-[20px] rounded-[8px] focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <label htmlFor="email" className="mb-2.5">
                      Your email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="Enter your email address"
                      className="w-full mb-9 placeholder-[#E5E5E5] bg-[#404040] p-[20px] rounded-[8px] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="Subject" className="mb-2.5">
                    Subject
                  </label>
                  <input
                    id="Subject"
                    type="text"
                    name="Subject"
                    placeholder="John Smith"
                    className="w-full mb-9 placeholder-[#E5E5E5] bg-[#404040] p-[20px] rounded-[8px] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="Message" className="mb-2.5">
                    Message
                  </label>
                  <textarea
                    id="Message"
                    name="Message"
                    rows="3"
                    placeholder="How can we assist you?"
                    className="w-full mb-9 placeholder-[#E5E5E5] bg-[#404040] p-[20px] rounded-[8px] focus:outline-none"
                  ></textarea>
                </div>
                <div>
                  <Link href="#" className="contact-btn">
                    Send
                  </Link>
                </div>
                <p className="text-[10px] text-[#888] leading-[1.3] mt-12">
                  <br />
                  This site is protected by reCAPTCHA and the Google
                  <br />
                  <Link
                    href="https://policies.google.com/privacy"
                    className="text-[#888] underline underline-offset-2 decoration-1"
                  >
                    Privacy Policy
                  </Link>
                  {" and "}
                  <br />
                  <Link
                    href="https://policies.google.com/terms"
                    className="text-[#888] underline underline-offset-2 decoration-1"
                  >
                    Terms of Service
                  </Link>
                  apply.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default page;

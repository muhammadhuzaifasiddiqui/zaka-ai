import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const page = () => {
  return (
    <>
      {/* <Navbar /> */}

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
              <h2>Do you have any questions?</h2>

              <div className="flex flex-col">
                <div className="flex flex-row gap-6">
                  <div className="flex flex-col">
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

                  <div className="flex flex-col">
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
              </div>
              <div className="xl:mt-6 lg:mt-5 mt-4 flex">
                <div className="flex group">
                  <Link
                    href="#"
                    className="contact-btn"
                  >
                    SUBMIT
                  </Link>
                </div>
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

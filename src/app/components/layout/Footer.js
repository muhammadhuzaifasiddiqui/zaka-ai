"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer mt-50">
      <div className="container mx-auto">
        <div className="footer-top">
          <div className="flex flex-wrap">
            <div className="col-lg-3 footer-brand order-1">
              <div className="image-wrapper mb-16">
                <Image
                  src={
                    "https://zaka.ai/wp-content/uploads/2025/06/ZAKA-FINAL-LOGOS-06-scaled-e1753871364260.png"
                  }
                  alt="Zaka Logo"
                  height={45}
                  width={200}
                  unoptimized={true}
                  className=""
                />
              </div>

              <p className="text-gray mb-50">Your Intelligent Transformation</p>

              <div className="flex social-icons-wrapper">
                <div className="flex items-center gap-4 social-icons">
                  <Link
                    href="https://www.facebook.com/zaka4ai/"
                    target="_blank"
                  >
                    <Image
                      src={
                        "https://zaka.ai/wp-content/themes/zaka-theme/assets/images/icons/facebook.svg"
                      }
                      alt="Facebook"
                      height={34}
                      width={34}
                      unoptimized={true}
                      className="footer-icon"
                    />
                  </Link>
                  <Link href="https://www.youtube.com/@zaka-ai" target="_blank">
                    <Image
                      src={
                        "https://zaka.ai/wp-content/themes/zaka-theme/assets/images/icons/youtube.svg"
                      }
                      alt="Youtube"
                      height={34}
                      width={34}
                      unoptimized={true}
                      className="footer-icon"
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/school/zaka-ai/"
                    target="_blank"
                  >
                    <Image
                      src={
                        "https://zaka.ai/wp-content/themes/zaka-theme/assets/images/icons/linkedin.svg"
                      }
                      alt="Linkedin"
                      height={34}
                      width={34}
                      unoptimized={true}
                      className="footer-icon"
                    />
                  </Link>
                  <Link
                    href="https://www.instagram.com/zaka.ai/?hl=en"
                    target="_blank"
                  >
                    <Image
                      src={
                        "https://zaka.ai/wp-content/themes/zaka-theme/assets/images/icons/instagram.svg"
                      }
                      alt="Instagram"
                      height={34}
                      width={34}
                      unoptimized={true}
                      className="footer-icon"
                    />
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@zaka.ai?lang=en"
                    target="_blank"
                  >
                    <Image
                      src={
                        "https://zaka.ai/wp-content/themes/zaka-theme/assets/images/icons/tiktok.svg"
                      }
                      alt="Tiktok"
                      height={34}
                      width={34}
                      unoptimized={true}
                      className="footer-icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">Footer Bottom</div>
      </div>
    </div>
  );
};

export default Footer;

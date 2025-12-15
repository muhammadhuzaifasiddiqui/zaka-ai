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
                        <div className="w-[40%]">
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

                            <div className="flex w-[43.5%] social-icons-wrapper">
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
                        <div className="w-[20%]">
                            <div className="csn">
                                <h4>Email</h4>
                                <p>
                                    <a href="mailto:hello@zaka.ai" target="_blank">
                                        hello@zaka.ai
                                    </a>
                                </p>
                            </div>
                            <div className="csn">
                                <h4>Phone</h4>
                                <p>
                                    <Link href="tel:+96176855988" target="_blank">
                                        +96176855988
                                    </Link>{" "}
                                </p>
                            </div>
                            <div className="csn">
                                <h4>WhatsApp Number</h4>
                                <p>
                                    <Link href="https://wa.me/+12565680819" target="_blank">
                                        +12565680819
                                    </Link>
                                </p>
                            </div>
                            <div className="klpp">
                                <h4>Location</h4>
                                <p>
                                    651 N Broad St, Suite 206,
                                    <br />
                                    Middletown, New Castle, Delaware 19709
                                </p>
                            </div>
                        </div>
                        <div className="w-[20%]">
                            <h4>Quick Links</h4>
                            <ul id="menu-quick-links" className="footer-links-list">
                                <li
                                    id="menu-item-328"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-27 current_page_item menu-item-328"
                                >
                                    <Link href="https://zaka.ai/" aria-current="page">
                                        Home
                                    </Link>
                                </li>
                                <li
                                    id="menu-item-329"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-329"
                                >
                                    <Link href="https://zaka.ai/about-us/">About Us</Link>
                                </li>
                                <li
                                    id="menu-item-25034"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25034"
                                >
                                    <Link href="https://zaka.ai/hire-our-graduates/">
                                        Hire Our Graduates
                                    </Link>
                                </li>
                                <li
                                    id="menu-item-25035"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25035"
                                >
                                    <Link href="https://zaka.ai/corporate-training/">
                                        Corporate Training
                                    </Link>
                                </li>
                                <li
                                    id="menu-item-19671"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19671"
                                >
                                    <Link href="https://zaka.ai/mastery/">Mastery</Link>
                                </li>
                                <li
                                    id="menu-item-334"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-334"
                                >
                                    <Link href="https://zaka.ai/success-stories/">
                                        Success Stories
                                    </Link>
                                </li>
                            </ul>{" "}
                        </div>
                        <div className="w-[20%]">
                            <h4>Useful Links</h4>
                            <ul id="menu-useful-links" className="footer-links-list">
                                <li
                                    id="menu-item-19674"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19674"
                                >
                                    <Link href="https://zaka.ai/blogs/">Blogs</Link>
                                </li>
                                <li
                                    id="menu-item-19675"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19675"
                                >
                                    <Link href="https://zaka.ai/events/">Events</Link>
                                </li>
                                <li
                                    id="menu-item-19676"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19676"
                                >
                                    <Link href="https://zaka.ai/tools/">Tools</Link>
                                </li>
                                <li
                                    id="menu-item-309"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-309"
                                >
                                    <Link href="https://zaka.ai/contact-us/">Contact us</Link>
                                </li>
                                <li
                                    id="menu-item-25036"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25036"
                                >
                                    <Link target="_blank" href="https://zaka.ai/virtual-cafe/">
                                        Virtual Cafe
                                    </Link>
                                </li>
                                <li
                                    id="menu-item-25535"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25535"
                                >
                                    <Link href="https://zaka.ai/fulfillment-policy/">
                                        Fulfillment Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">Footer Bottom</div>
            </div>
        </div>
    );
};

export default Footer;

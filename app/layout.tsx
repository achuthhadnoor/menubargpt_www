import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | MenubarGPT",
  description: `Revolutionize Your ChatGPT Experience: Unleash the Power of Conversation from Your Mac's Menubar!`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer
          className="  flex flex-col items-center justify-center text-center tracking-wider gap-5 min-h-[500px] mb-8 "
          id="download"
        >
          <span>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="44"
                height="44"
                rx="10"
                fill="url(#paint0_linear_6535_66)"
              />
              <circle
                cx="22"
                cy="22"
                r="12"
                fill="url(#paint1_linear_6535_66)"
              />
              <rect
                x="0.5"
                y="0.5"
                width="43"
                height="43"
                rx="9.5"
                stroke="url(#paint2_linear_6535_66)"
                strokeOpacity="0.2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_6535_66"
                  x1="22"
                  y1="0"
                  x2="22"
                  y2="44"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#002426" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_6535_66"
                  x1="22"
                  y1="10"
                  x2="22"
                  y2="34"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#008787" />
                  <stop offset="1" stopColor="#010707" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_6535_66"
                  x1="22"
                  y1="0"
                  x2="22"
                  y2="44"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#017C7C" />
                  <stop offset="1" stopColor="#187D77" stopOpacity="0.41" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <h2 className="text-3xl font-bold">MenubarGPT</h2>
          <p>Screen recording without editing into time-lapse videos</p>
          <Link href="/#download">
            <button className="p-[1px] bg-gradient-to-r from-cyan-600 to-cyan-950 flex rounded">
              <span className="bg-gradient-to-r from-cyan-800 to-neutral-950 p-2 rounded flex gap-2 items-center">
                Download $3.99
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.861 4.55483C13.3623 3.95654 13.71 3.13997 13.71 2.31531C13.71 2.20212 13.7019 2.08893 13.6776 2C12.8772 2.03234 11.907 2.5336 11.3249 3.21273C10.8722 3.73017 10.4517 4.55483 10.4517 5.37948C10.4517 5.50884 10.4679 5.63012 10.4841 5.67054C10.5326 5.67863 10.6134 5.6948 10.6943 5.6948C11.4219 5.6948 12.3274 5.2097 12.861 4.55483ZM13.4351 5.86458C12.2223 5.86458 11.2441 6.6003 10.6134 6.6003C9.9424 6.6003 9.06923 5.91309 8.01819 5.91309C6.02122 5.91309 4 7.56241 4 10.667C4 12.6074 4.74381 14.6529 5.67357 15.9707C6.46589 17.0864 7.16119 18 8.15563 18C9.15008 18 9.58666 17.3451 10.8075 17.3451C12.0606 17.3451 12.3355 17.9838 13.4351 17.9838C14.5184 17.9838 15.238 16.9894 15.9171 16.0111C16.6852 14.8873 17.0005 13.7959 17.0167 13.7393C16.952 13.7231 14.8742 12.8742 14.8742 10.5053C14.8742 8.45174 16.5073 7.53007 16.5963 7.4573C15.5291 5.91309 13.8878 5.86458 13.4351 5.86458Z"
                    fill="#999999"
                  />
                </svg>
              </span>
            </button>
          </Link>
          <p>
            Become an <Link href="/affiliate">affiliate</Link>
            <Link href="changelog">Changelog</Link>
          </p>
          <p>Made by Achuth Hadnoor. All rights reserved</p>
        </footer>
      </body>
    </html>
  );
}

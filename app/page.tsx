import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen max-w-6xl mx-auto leading-loose">
      <header className="flex justify-between mt-16 px-2">
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
            <circle cx="22" cy="22" r="12" fill="url(#paint1_linear_6535_66)" />
            <rect
              x="0.5"
              y="0.5"
              width="43"
              height="43"
              rx="9.5"
              stroke="url(#paint2_linear_6535_66)"
              stroke-opacity="0.2"
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
        <nav className="p-2 flex gap-4 text-neutral-400">
          <Link href={"/#Features"}>Features</Link>
          <Link href={"/#changelog"}>Changelog</Link>
        </nav>
        {/* <span>
          <button className="p-[1px] bg-gradient-to-r from-cyan-600 to-cyan-950 flex rounded">
            <span className="bg-gradient-to-r from-cyan-800 to-neutral-950 p-2 rounded flex gap-2">
              <b>
                Buy <s className="text-neutral-500">9.99$</s> 3.99$
              </b>
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
        </span> */}
      </header>
      <section className=" p-4 text-center flex flex-col gap-6 tracking-widest justify-center min-h-[800px] mb-16">
        <h1 className="mt-24 md:text-6xl text-3xl font-bold bg-gradient-to-b from-cyan-500 to-cyan-900 bg-clip-text text-transparent w-full">
          Superfast chatGPT in menubar
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto text-xl">
          {`Revolutionize Your ChatGPT Experience: Unleash the Power of
          Conversation from Your Mac's Menubar!`}
        </p>
        <div className="flex justify-center">
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
        </div>
        <div className="items-center mt-8 max-w-3xl mx-auto w-full menubar ring-1 ring-cyan-950 rounded-lg p-2 bg-gradient-to-l from-cyan-950 to-neutral-950 flex justify-between">
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
          <div className="text-right flex items-center gap-4 align-middle">
            <span className="px-4">⚪️</span>
            <svg
              className="scale-125 text-gray-500"
              width="104"
              height="24"
              viewBox="0 0 104 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_6538_439)">
                <path
                  d="M8.10783 13.9252H17.0316C17.5084 13.9252 17.9443 13.886 18.3391 13.8078C18.734 13.7295 19.073 13.5489 19.3561 13.2658C19.643 12.9789 19.8237 12.6399 19.8981 12.2488C19.9727 11.8576 20.0099 11.4218 20.0099 10.9412V9.05256C20.0099 8.57571 19.9727 8.14171 19.8981 7.75057C19.8237 7.35942 19.643 7.02043 19.3561 6.73359C19.0693 6.45047 18.7284 6.26979 18.3336 6.19156C17.9424 6.11334 17.5084 6.07422 17.0316 6.07422H8.09665C7.62728 6.07422 7.19515 6.11334 6.80027 6.19156C6.40913 6.26979 6.07013 6.45233 5.78329 6.73917C5.50018 7.02229 5.3195 7.35942 5.24127 7.75057C5.16677 8.14171 5.12952 8.57198 5.12952 9.04133V10.9412C5.12952 11.4218 5.16677 11.8576 5.24127 12.2488C5.31577 12.6399 5.49645 12.9789 5.78329 13.2658C6.07013 13.5489 6.40913 13.7295 6.80027 13.8078C7.19515 13.886 7.631 13.9252 8.10783 13.9252ZM7.95696 13.0255C7.67012 13.0255 7.387 12.9976 7.10761 12.9417C6.83195 12.8858 6.60843 12.774 6.43707 12.6064C6.26944 12.4387 6.15954 12.2171 6.10739 11.9414C6.05523 11.6658 6.02916 11.3845 6.02916 11.0977V8.91843C6.02916 8.62413 6.05523 8.33916 6.10739 8.06349C6.15954 7.78409 6.26944 7.55872 6.43707 7.38736C6.60471 7.21972 6.82822 7.10983 7.10761 7.05768C7.39073 7.0018 7.67943 6.97386 7.97372 6.97386H17.1825C17.4693 6.97386 17.7506 7.0018 18.0262 7.05768C18.3057 7.10983 18.531 7.22159 18.7024 7.39295C18.87 7.56058 18.9799 7.78223 19.0321 8.0579C19.0842 8.33356 19.1103 8.61482 19.1103 8.90166V11.0977C19.1103 11.3845 19.0842 11.6658 19.0321 11.9414C18.9799 12.2171 18.87 12.4387 18.7024 12.6064C18.531 12.7778 18.3057 12.8913 18.0262 12.9473C17.7506 12.9994 17.4693 13.0255 17.1825 13.0255H7.95696ZM20.7699 11.4441C20.9189 11.433 21.0735 11.3677 21.2336 11.2486C21.3939 11.1256 21.5298 10.958 21.6416 10.7456C21.7533 10.5333 21.8092 10.2837 21.8092 9.9969C21.8092 9.71373 21.7533 9.46604 21.6416 9.25369C21.5298 9.04133 21.3939 8.87372 21.2336 8.75079C21.0735 8.62786 20.9189 8.56267 20.7699 8.55522V11.4441ZM7.73344 12.3159H17.4116C17.6053 12.3159 17.7617 12.3009 17.8809 12.2712C18.0002 12.2413 18.1026 12.1855 18.1883 12.1035C18.2703 12.0215 18.3261 11.921 18.3559 11.8017C18.3894 11.6788 18.4062 11.5205 18.4062 11.3268V8.67256C18.4062 8.47885 18.3894 8.32239 18.3559 8.20318C18.3261 8.08025 18.2703 7.97781 18.1883 7.89586C18.1026 7.81017 18.0002 7.7543 17.8809 7.72822C17.7617 7.69841 17.6053 7.68352 17.4116 7.68352H7.73344C7.53601 7.68352 7.37769 7.69841 7.25848 7.72822C7.13927 7.7543 7.03869 7.81017 6.95674 7.89586C6.87478 7.97781 6.81704 8.08025 6.78352 8.20318C6.75371 8.32239 6.73881 8.47885 6.73881 8.67256V11.3268C6.73881 11.5205 6.75371 11.6788 6.78352 11.8017C6.81704 11.921 6.87478 12.0215 6.95674 12.1035C7.04242 12.1855 7.143 12.2413 7.25848 12.2712C7.37769 12.3009 7.53601 12.3159 7.73344 12.3159Z"
                  fill="currentColor"
                />
              </g>
              <g filter="url(#filter1_d_6538_439)">
                <path
                  d="M39.9061 14.625H43.463C43.8517 14.625 44.2045 14.54 44.5213 14.3702C44.8381 14.2036 45.0896 13.9684 45.2758 13.6647C45.4652 13.3641 45.56 13.013 45.56 12.6113C45.56 12.2096 45.4652 11.8584 45.2758 11.5579C45.0896 11.2542 44.8381 11.0191 44.5213 10.8524C44.2045 10.6826 43.8517 10.5977 43.463 10.5977H39.9061C39.5174 10.5977 39.1646 10.6826 38.8478 10.8524C38.531 11.0191 38.2779 11.2542 38.0885 11.5579C37.9023 11.8584 37.8092 12.2096 37.8092 12.6113C37.8092 13.013 37.9023 13.3641 38.0885 13.6647C38.2779 13.9684 38.531 14.2036 38.8478 14.3702C39.1646 14.54 39.5174 14.625 39.9061 14.625ZM43.5904 13.8852C43.3552 13.8819 43.1413 13.8231 42.9486 13.7087C42.7559 13.5944 42.6024 13.4409 42.488 13.2482C42.377 13.0555 42.3215 12.8416 42.3215 12.6064C42.3215 12.3745 42.377 12.1622 42.488 11.9695C42.6024 11.7768 42.7559 11.6233 42.9486 11.509C43.1413 11.3946 43.3552 11.3375 43.5904 11.3375C43.8256 11.3375 44.0395 11.3946 44.2322 11.509C44.4282 11.6233 44.5834 11.7768 44.6977 11.9695C44.812 12.159 44.8675 12.3696 44.8642 12.6015C44.8642 12.8367 44.8054 13.0523 44.6878 13.2482C44.5735 13.4442 44.4201 13.5993 44.2273 13.7136C44.0379 13.828 43.8256 13.8852 43.5904 13.8852ZM40.107 9.84321H43.267C43.6851 9.84321 44.0673 9.75009 44.4135 9.5639C44.763 9.37777 45.0406 9.11646 45.2464 8.78004C45.4554 8.44361 45.56 8.0533 45.56 7.60909C45.56 7.16489 45.4554 6.77457 45.2464 6.43816C45.0406 6.10174 44.763 5.84044 44.4135 5.65427C44.0673 5.46809 43.6851 5.375 43.267 5.375H40.107C39.6857 5.375 39.3002 5.46809 38.9507 5.65427C38.6045 5.84044 38.3269 6.10174 38.1179 6.43816C37.9121 6.77457 37.8092 7.16489 37.8092 7.60909C37.8092 8.0533 37.9121 8.44361 38.1179 8.78004C38.3269 9.11646 38.6045 9.37777 38.9507 9.5639C39.3002 9.75009 39.6857 9.84321 40.107 9.84321ZM40.107 9.10339C39.8327 9.10339 39.5762 9.04134 39.3378 8.91722C39.1026 8.78984 38.9115 8.61509 38.7645 8.39299C38.6209 8.16762 38.549 7.90632 38.549 7.60909C38.549 7.31187 38.6209 7.0522 38.7645 6.83011C38.9115 6.60473 39.1026 6.42999 39.3378 6.30588C39.5762 6.17849 39.8327 6.1148 40.107 6.1148H43.267C43.5381 6.1148 43.7912 6.17849 44.0264 6.30588C44.2649 6.42999 44.4559 6.60473 44.5997 6.83011C44.7467 7.0522 44.8202 7.31187 44.8202 7.60909C44.8202 7.90632 44.7467 8.16762 44.5997 8.39299C44.4559 8.61509 44.2649 8.78984 44.0264 8.91722C43.7912 9.04134 43.5381 9.10339 43.267 9.10339H40.107ZM40.107 8.77023C40.3226 8.7735 40.5169 8.72287 40.69 8.61836C40.8664 8.51057 41.0068 8.36849 41.1113 8.19212C41.2191 8.01247 41.273 7.81487 41.273 7.5993C41.2763 7.38373 41.2257 7.18939 41.1211 7.01628C41.0166 6.8399 40.8745 6.70109 40.6949 6.59984C40.5185 6.49531 40.3226 6.44306 40.107 6.44306C39.8914 6.44306 39.6954 6.49531 39.5191 6.59984C39.3427 6.70435 39.2022 6.8448 39.0977 7.02117C38.9965 7.19755 38.9458 7.39189 38.9458 7.6042C38.9458 7.81977 38.9965 8.01574 39.0977 8.19212C39.2022 8.36849 39.3427 8.50894 39.5191 8.61346C39.6954 8.71798 39.8914 8.77023 40.107 8.77023Z"
                  fill="currentColor"
                />
              </g>
              <g filter="url(#filter2_d_6538_439)">
                <path
                  d="M64.9418 11.8539C65.3053 11.8539 65.6469 11.785 65.9664 11.6472C66.286 11.5095 66.5674 11.3189 66.8108 11.0755C67.0541 10.8293 67.2447 10.5464 67.3825 10.2268C67.5232 9.90724 67.5936 9.56567 67.5936 9.20214C67.5936 8.8386 67.5232 8.49705 67.3825 8.17748C67.2447 7.85791 67.0541 7.57646 66.8108 7.33312C66.5674 7.08978 66.286 6.89921 65.9664 6.76142C65.6469 6.62069 65.3053 6.55033 64.9418 6.55033C64.5782 6.55033 64.2367 6.62069 63.9171 6.76142C63.5975 6.89921 63.3146 7.08978 63.0684 7.33312C62.825 7.57646 62.6344 7.85791 62.4966 8.17748C62.3588 8.49705 62.29 8.8386 62.29 9.20214C62.29 9.56567 62.3588 9.90724 62.4966 10.2268C62.6344 10.5464 62.825 10.8293 63.0684 11.0755C63.3146 11.3189 63.5975 11.5095 63.9171 11.6472C64.2367 11.785 64.5782 11.8539 64.9418 11.8539ZM64.9418 12.584C64.4756 12.584 64.0387 12.496 63.6313 12.3201C63.2237 12.1442 62.8646 11.9009 62.5538 11.5901C62.243 11.2793 61.9997 10.9202 61.8238 10.5126C61.6479 10.1052 61.5599 9.66829 61.5599 9.20214C61.5599 8.73599 61.6479 8.29915 61.8238 7.89163C61.9997 7.48118 62.243 7.12203 62.5538 6.81419C62.8646 6.50342 63.2237 6.26008 63.6313 6.08417C64.0417 5.90827 64.4785 5.82031 64.9418 5.82031C65.4079 5.82031 65.8448 5.90827 66.2523 6.08417C66.6598 6.26008 67.0189 6.50342 67.3297 6.81419C67.6405 7.12496 67.8838 7.48411 68.0598 7.89163C68.2356 8.29915 68.3236 8.73599 68.3236 9.20214C68.3236 9.66829 68.2356 10.1052 68.0598 10.5126C67.8838 10.9202 67.6405 11.2793 67.3297 11.5901C67.0189 11.9009 66.6598 12.1442 66.2523 12.3201C65.8448 12.496 65.4079 12.584 64.9418 12.584ZM69.3526 14.1803C69.2852 14.1803 69.2207 14.1686 69.1592 14.1452C69.0976 14.1217 69.0419 14.0851 68.992 14.0352L66.6569 11.7L67.3781 11.0008L69.7001 13.3272C69.7499 13.3741 69.7851 13.4283 69.8056 13.4899C69.8291 13.5515 69.8408 13.6145 69.8408 13.679C69.8408 13.7728 69.8188 13.8564 69.7748 13.9296C69.7338 14.0059 69.6766 14.066 69.6033 14.1099C69.53 14.1569 69.4465 14.1803 69.3526 14.1803Z"
                  fill="currentColor"
                />
              </g>
              <g filter="url(#filter3_d_6538_439)">
                <path
                  d="M92.4228 14.7539C92.4867 14.7539 92.5499 14.734 92.6131 14.6945C92.6808 14.6548 92.7699 14.5814 92.881 14.4744L94.2723 13.1366C94.3202 13.0929 94.3453 13.0434 94.3499 12.9879C94.3575 12.9285 94.3415 12.8729 94.302 12.8214C94.1155 12.5796 93.856 12.3695 93.5234 12.1911C93.1938 12.0127 92.8277 11.9235 92.4228 11.9235C92.0111 11.9235 91.6366 12.0167 91.2994 12.203C90.9661 12.3893 90.7065 12.6074 90.5201 12.8571C90.4927 12.9007 90.4828 12.9483 90.4904 12.9998C90.5026 13.0474 90.5322 13.0929 90.5802 13.1366L91.9715 14.4744C92.078 14.5814 92.1656 14.6548 92.2325 14.6945C92.3003 14.734 92.3634 14.7539 92.4228 14.7539ZM89.0816 11.6322C89.1409 11.6917 89.2064 11.7194 89.2779 11.7154C89.3487 11.7115 89.4142 11.6778 89.4735 11.6144C89.8145 11.2299 90.2491 10.9147 90.7758 10.6689C91.3032 10.4232 91.852 10.3022 92.4228 10.3062C93.002 10.3022 93.5546 10.4271 94.082 10.6808C94.6094 10.9306 95.0471 11.2477 95.3964 11.6322C95.452 11.6917 95.5129 11.7214 95.5806 11.7214C95.6476 11.7174 95.7092 11.6857 95.7648 11.6262L96.6507 10.7522C96.6987 10.7046 96.7238 10.6531 96.7283 10.5975C96.7321 10.5381 96.7139 10.4826 96.6743 10.4311C96.3851 10.0783 96.0228 9.76314 95.5867 9.48564C95.1506 9.20419 94.6627 8.98423 94.1239 8.82562C93.5842 8.66312 93.018 8.58184 92.4228 8.58184C91.8284 8.58184 91.2614 8.66312 90.7225 8.82562C90.1875 8.98423 89.7019 9.20419 89.2658 9.48564C88.8297 9.76314 88.4674 10.0783 88.1774 10.4311C88.134 10.4826 88.1142 10.5361 88.118 10.5916C88.1218 10.6472 88.1477 10.7007 88.1957 10.7522L89.0816 11.6322ZM86.7031 9.2478C86.7587 9.30724 86.8219 9.337 86.8934 9.337C86.9688 9.33304 87.0319 9.3013 87.0837 9.24186C87.7892 8.49659 88.596 7.93175 89.5032 7.54723C90.4112 7.15875 91.3847 6.96451 92.4228 6.96451C93.4655 6.96451 94.4405 7.15875 95.3485 7.54723C96.2603 7.9357 97.067 8.50253 97.7688 9.2478C97.8205 9.29933 97.8814 9.32513 97.9529 9.32513C98.0245 9.32513 98.0861 9.29537 98.1371 9.23593L98.9226 8.44507C98.9736 8.3975 98.9995 8.34399 98.9995 8.28455C99.0033 8.22112 98.9858 8.16562 98.9462 8.11805C98.4979 7.56705 97.9332 7.07551 97.2512 6.64343C96.5693 6.20738 95.8143 5.86647 94.9862 5.6207C94.1612 5.37096 93.3072 5.24609 92.4228 5.24609C91.5392 5.24609 90.6829 5.37096 89.8541 5.6207C89.026 5.86647 88.271 6.20738 87.5891 6.64343C86.9109 7.07551 86.3485 7.56705 85.9002 8.11805C85.8606 8.16562 85.8408 8.22112 85.8408 8.28455C85.8446 8.34399 85.8705 8.3975 85.9185 8.44507L86.7031 9.2478Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_6538_439"
                  x="1.12952"
                  y="4.07422"
                  width="24"
                  height="24"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_6538_439"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_6538_439"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d_6538_439"
                  x="33.8092"
                  y="3.375"
                  width="15.7507"
                  height="17.25"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_6538_439"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_6538_439"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter2_d_6538_439"
                  x="57.5599"
                  y="3.82031"
                  width="16.2809"
                  height="16.3594"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_6538_439"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_6538_439"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter3_d_6538_439"
                  x="81.8408"
                  y="3.24609"
                  width="21.1592"
                  height="17.5078"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_6538_439"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_6538_439"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <span className="text-gray-500">Sun 8 April 11:00AM</span>
          </div>
        </div>
        <p className="text-center text-xs text-neutral-500">
          {" "}
          Access menubarGPT from here
        </p>
      </section>
      <section className="  flex flex-col justify-center text-center tracking-wider min-h-[500px] my-48 gap-10 mb-40">
        <h2 className="text-4xl">
          Seamlessly Access ChatGPT as an App on Your Mac Menubar!
        </h2>
        <p className="p-2 text-neutral-400 max-w-3xl mx-auto">
          Tired of navigating through multiple browser tabs to access ChatGPT?
          Want a more streamlined and efficient way to engage with this powerful
          AI-powered tool? Look no further! With the ChatGPT Menubar App, you
          can transform the way you interact with ChatGPT on your Mac.
        </p>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
            <div>
              <div className="relative flex items-center justify-center mx-auto">
                <svg
                  className="text-blue-100"
                  width="72"
                  height="75"
                  viewBox="0 0 72 75"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                </svg>
                <svg
                  className="absolute text-blue-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold ">Save Time</h3>
              <p className="mt-4 text-base text-gray-600">
                Access from menubar on any app to get solution to any query
                faster. Auto focus on the textbox to start typing...
              </p>
            </div>

            <div>
              <div className="relative flex items-center justify-center mx-auto">
                <svg
                  className="text-orange-100"
                  width="62"
                  height="64"
                  viewBox="0 0 62 64"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z" />
                </svg>
                <svg
                  className="absolute text-orange-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold ">Auto launch</h3>
              <p className="mt-4 text-base text-gray-600">
                Launch when you start your macOs, so that it will always be with
                you.
              </p>
            </div>

            <div>
              <div className="relative flex items-center justify-center mx-auto">
                <svg
                  className="text-green-100"
                  width="66"
                  height="68"
                  viewBox="0 0 66 68"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
                </svg>
                <svg
                  className="absolute text-green-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold ">Always on top</h3>
              <p className="mt-4 text-base text-gray-600">
                Allows you to have the window always on top of all the apps,
                even on fullscreen apps.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="  flex flex-col justify-center text-center tracking-wider gap-5 min-h-[500px] mb-40"
        id="download"
      >
        <h2 className="text-4xl">One time payment</h2>
        <p className="p-2 text-neutral-400 max-w-3xl mx-auto">
          7-day money back. one year of free updates included.
        </p>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 mx-auto mt-8 text-center md:max-w-5xl sm:grid-cols-3 md:gap-8 sm:mt-16">
            <div className="">
              <div className="relative overflow-hidden ring ring-cyan-800 rounded-md">
                <div className="absolute hidden top-3 right-3">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>

                <div className="px-4 py-5 lg:p-8">
                  <p className="text-lg font-medium text-gray-500">1 device</p>
                  <p className="mt-4 text-5xl font-bold ">$3.99</p>
                  <ul className="flex flex-col mt-8 space-y-1">
                    <li className="text-base font-medium text-gray-600 lg:text-xl">
                      Less than $1 a day
                    </li>
                    <li className="text-base font-medium text-gray-400 lg:text-xl">
                      Billed every week
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden  ring ring-cyan-800 rounded-md">
              <div className="absolute hidden top-3 right-3">
                <svg
                  className="w-6 h-6 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <div className="px-4 py-5 lg:p-8">
                <p className="text-lg font-medium text-gray-500">5 devices</p>
                <p className="mt-4 text-5xl font-bold ">$19.99</p>
                <ul className="flex flex-col mt-8 space-y-1">
                  <li className="text-base font-medium text-gray-600 lg:text-xl">
                    Less than $5 a week
                  </li>
                  <li className="text-base font-medium text-gray-400 lg:text-xl">
                    Billed every month
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-cyan-950 to-black border-2 border-cyan-300 rounded-md shadow">
              <div className="absolute top-3 right-3">
                <svg
                  className="w-6 h-6 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <div className="px-4 py-5 lg:p-8">
                <p className="text-lg font-medium text-gray-500">lifetime</p>
                <p className="mt-4 text-5xl font-bold ">$99.99</p>
                <ul className="flex flex-col mt-8 space-y-1">
                  <li className="text-base font-medium text-gray-600 lg:text-xl">
                    Less than $2 a week
                  </li>
                  <li className="text-base font-medium text-gray-400 lg:text-xl">
                    Billed every year
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-400">
          Prices in USD. VAT may apply. Secure payment via Lemonsqueezy. macOS
          10.13+ Required.
        </p>
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16 bg-[#001317] rounded-md">
            <div className="transition-all duration-200 shadow-lg cursor-pointer ">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold ">
                  {" "}
                  How to create an account?{" "}
                </span>

                <svg
                  className="w-6 h-6 text-gray-400 rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Amet minim mollit non deserunt ullamco est sit{" "}
                  <a
                    href="#"
                    title=""
                    className="text-blue-600 transition-all duration-200 hover:underline"
                  >
                    aliqua dolor
                  </a>{" "}
                  do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div className="transition-all duration-200 cursor-pointer ">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold ">
                  {" "}
                  How can I make payment using Paypal?{" "}
                </span>

                <svg
                  className="w-6 h-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Amet minim mollit non deserunt ullamco est sit{" "}
                  <a
                    href="#"
                    title=""
                    className="text-blue-600 transition-all duration-200 hover:underline"
                  >
                    aliqua dolor
                  </a>{" "}
                  do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div className="transition-all duration-200 cursor-pointer ">
              <div className="">
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                >
                  <span className="flex text-lg font-semibold ">
                    {" "}
                    Can I cancel my plan?{" "}
                  </span>

                  <svg
                    className="w-6 h-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit{" "}
                    <a
                      href="#"
                      title=""
                      className="text-blue-600 transition-all duration-200 hover:underline"
                    >
                      aliqua dolor
                    </a>{" "}
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>
            </div>

            <div className="transition-all duration-200 cursor-pointer ">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold ">
                  {" "}
                  How can I reach to support?{" "}
                </span>

                <svg
                  className="w-6 h-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Amet minim mollit non deserunt ullamco est sit{" "}
                  <a
                    href="#"
                    title=""
                    className="text-blue-600 transition-all duration-200 hover:underline"
                  >
                    aliqua dolor
                  </a>{" "}
                  do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-600 textbase mt-9">
            Didn’t find the answer you are looking for?{" "}
            <a
              href="#"
              title=""
              className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              Contact our support
            </a>
          </p>
        </div>
      </section>
      <section
        className="  flex flex-col justify-center text-center tracking-wider gap-5 min-h-[500px] mb-40"
        id="faq"
      >
        <h2 className="text-4xl">FAQ</h2>
        {/* <p className="p-2 text-neutral-400 max-w-3xl mx-auto">
          7-day money back. one year of free updates included.
        </p> */}
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16 bg-[#001317] rounded-md">
            <div className="transition-all duration-200 shadow-lg cursor-pointer ">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold ">
                  {" "}
                  How to create an account?{" "}
                </span>

                <svg
                  className="w-6 h-6 text-gray-400 rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Amet minim mollit non deserunt ullamco est sit{" "}
                  <a
                    href="#"
                    title=""
                    className="text-blue-600 transition-all duration-200 hover:underline"
                  >
                    aliqua dolor
                  </a>{" "}
                  do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div className="transition-all duration-200 cursor-pointer ">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold ">
                  {" "}
                  How can I make payment using Paypal?{" "}
                </span>

                <svg
                  className="w-6 h-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Amet minim mollit non deserunt ullamco est sit{" "}
                  <a
                    href="#"
                    title=""
                    className="text-blue-600 transition-all duration-200 hover:underline"
                  >
                    aliqua dolor
                  </a>{" "}
                  do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div className="transition-all duration-200 cursor-pointer ">
              <div className="">
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                >
                  <span className="flex text-lg font-semibold ">
                    {" "}
                    Can I cancel my plan?{" "}
                  </span>

                  <svg
                    className="w-6 h-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit{" "}
                    <a
                      href="#"
                      title=""
                      className="text-blue-600 transition-all duration-200 hover:underline"
                    >
                      aliqua dolor
                    </a>{" "}
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>
            </div>

            <div className="transition-all duration-200 cursor-pointer ">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold ">
                  {" "}
                  How can I reach to support?{" "}
                </span>

                <svg
                  className="w-6 h-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Amet minim mollit non deserunt ullamco est sit{" "}
                  <a
                    href="#"
                    title=""
                    className="text-blue-600 transition-all duration-200 hover:underline"
                  >
                    aliqua dolor
                  </a>{" "}
                  do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-600 textbase mt-9">
            Didn’t find the answer you are looking for?{" "}
            <a
              href="#"
              title=""
              className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              Contact our support
            </a>
          </p>
        </div>
      </section>
      <section
        className="  flex flex-col items-center justify-center text-center tracking-wider gap-5 min-h-[500px] mb-24 "
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
            <circle cx="22" cy="22" r="12" fill="url(#paint1_linear_6535_66)" />
            <rect
              x="0.5"
              y="0.5"
              width="43"
              height="43"
              rx="9.5"
              stroke="url(#paint2_linear_6535_66)"
              stroke-opacity="0.2"
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
      </section>
    </main>
  );
}

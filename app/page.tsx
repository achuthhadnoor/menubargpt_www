import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen max-w-6xl mx-auto leading-loose p-4">
      <header className="flex justify-between mt-4 md:mt-16 px-2">
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
      <section className=" p-4 text-center flex flex-col gap-6 tracking-widest justify-center md:min-h-[800px] mb-16">
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
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.861 4.55483C13.3623 3.95654 13.71 3.13997 13.71 2.31531C13.71 2.20212 13.7019 2.08893 13.6776 2C12.8772 2.03234 11.907 2.5336 11.3249 3.21273C10.8722 3.73017 10.4517 4.55483 10.4517 5.37948C10.4517 5.50884 10.4679 5.63012 10.4841 5.67054C10.5326 5.67863 10.6134 5.6948 10.6943 5.6948C11.4219 5.6948 12.3274 5.2097 12.861 4.55483ZM13.4351 5.86458C12.2223 5.86458 11.2441 6.6003 10.6134 6.6003C9.9424 6.6003 9.06923 5.91309 8.01819 5.91309C6.02122 5.91309 4 7.56241 4 10.667C4 12.6074 4.74381 14.6529 5.67357 15.9707C6.46589 17.0864 7.16119 18 8.15563 18C9.15008 18 9.58666 17.3451 10.8075 17.3451C12.0606 17.3451 12.3355 17.9838 13.4351 17.9838C14.5184 17.9838 15.238 16.9894 15.9171 16.0111C16.6852 14.8873 17.0005 13.7959 17.0167 13.7393C16.952 13.7231 14.8742 12.8742 14.8742 10.5053C14.8742 8.45174 16.5073 7.53007 16.5963 7.4573C15.5291 5.91309 13.8878 5.86458 13.4351 5.86458Z"
                    fill="#c0c0c0"
                  />
                </svg>
                Download $3.99
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
          <div className="text-right flex items-center gap-4 align-middle px-2 ">
            <span className="px-4">⚪️</span>
            <svg
              width="175"
              height="34"
              viewBox="0 0 175 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_6558_60)">
                <path
                  d="M13.6333 24.422H30.5122C31.414 24.422 32.2385 24.3478 32.9852 24.1999C33.7322 24.0518 34.3734 23.7102 34.9088 23.1748C35.4515 22.6321 35.7933 21.9909 35.934 21.2512C36.0751 20.5112 36.1455 19.6869 36.1455 18.7779V15.2056C36.1455 14.3037 36.0751 13.4828 35.934 12.743C35.7933 12.0032 35.4515 11.362 34.9088 10.8194C34.3664 10.2839 33.7216 9.94218 32.9748 9.79421C32.2349 9.64626 31.414 9.57227 30.5122 9.57227H13.6122C12.7244 9.57227 11.907 9.64626 11.1601 9.79421C10.4203 9.94218 9.77912 10.2874 9.23657 10.83C8.70108 11.3655 8.35934 12.0032 8.21137 12.743C8.07046 13.4828 8 14.2967 8 15.1844V18.7779C8 19.6869 8.07046 20.5112 8.21137 21.2512C8.35228 21.9909 8.69403 22.6321 9.23657 23.1748C9.77912 23.7102 10.4203 24.0518 11.1601 24.1999C11.907 24.3478 12.7314 24.422 13.6333 24.422ZM13.348 22.7203C12.8054 22.7203 12.2699 22.6675 11.7415 22.5618C11.2201 22.456 10.7973 22.2446 10.4732 21.9275C10.1561 21.6104 9.94823 21.1912 9.84959 20.6697C9.75093 20.1485 9.70162 19.6164 9.70162 19.0739V14.9519C9.70162 14.3953 9.75093 13.8563 9.84959 13.3349C9.94823 12.8064 10.1561 12.3801 10.4732 12.056C10.7902 11.7389 11.213 11.5311 11.7415 11.4324C12.277 11.3267 12.823 11.2739 13.3797 11.2739H30.7976C31.3401 11.2739 31.8721 11.3267 32.3934 11.4324C32.9221 11.5311 33.3482 11.7425 33.6724 12.0666C33.9894 12.3836 34.1973 12.8029 34.296 13.3243C34.3946 13.8457 34.4439 14.3777 34.4439 14.9202V19.0739C34.4439 19.6164 34.3946 20.1485 34.296 20.6697C34.1973 21.1912 33.9894 21.6104 33.6724 21.9275C33.3482 22.2517 32.9221 22.4664 32.3934 22.5723C31.8721 22.6709 31.3401 22.7203 30.7976 22.7203H13.348ZM37.583 19.7291C37.8648 19.7081 38.1572 19.5846 38.46 19.3593C38.7632 19.1267 39.0203 18.8097 39.2317 18.4079C39.443 18.0064 39.5488 17.5343 39.5488 16.9918C39.5488 16.4562 39.443 15.9877 39.2317 15.5861C39.0203 15.1844 38.7632 14.8674 38.46 14.6349C38.1572 14.4023 37.8648 14.279 37.583 14.2649V19.7291ZM12.9252 21.3781H31.2309C31.5973 21.3781 31.8931 21.3497 32.1186 21.2935C32.3442 21.237 32.5379 21.1314 32.7 20.9763C32.8551 20.8212 32.9607 20.6311 33.017 20.4055C33.0804 20.173 33.1122 19.8736 33.1122 19.5073V14.4869C33.1122 14.1205 33.0804 13.8246 33.017 13.5991C32.9607 13.3666 32.8551 13.1728 32.7 13.0178C32.5379 12.8557 32.3442 12.7501 32.1186 12.7007C31.8931 12.6443 31.5973 12.6162 31.2309 12.6162H12.9252C12.5518 12.6162 12.2523 12.6443 12.0268 12.7007C11.8013 12.7501 11.6111 12.8557 11.4561 13.0178C11.3011 13.1728 11.1919 13.3666 11.1285 13.5991C11.0721 13.8246 11.0439 14.1205 11.0439 14.4869V19.5073C11.0439 19.8736 11.0721 20.173 11.1285 20.4055C11.1919 20.6311 11.3011 20.8212 11.4561 20.9763C11.6182 21.1314 11.8084 21.237 12.0268 21.2935C12.2523 21.3497 12.5518 21.3781 12.9252 21.3781Z"
                  fill="#545454"
                />
              </g>
              <g filter="url(#filter1_d_6558_60)">
                <path
                  d="M67.515 25.7459H74.2427C74.9779 25.7459 75.6452 25.5851 76.2444 25.264C76.8436 24.9488 77.3193 24.504 77.6715 23.9295C78.0298 23.361 78.2091 22.6969 78.2091 21.9371C78.2091 21.1773 78.0298 20.513 77.6715 19.9446C77.3193 19.3702 76.8436 18.9255 76.2444 18.6102C75.6452 18.2891 74.9779 18.1285 74.2427 18.1285H67.515C66.7798 18.1285 66.1125 18.2891 65.5133 18.6102C64.9141 18.9255 64.4354 19.3702 64.0771 19.9446C63.7249 20.513 63.5488 21.1773 63.5488 21.9371C63.5488 22.6969 63.7249 23.361 64.0771 23.9295C64.4354 24.504 64.9141 24.9488 65.5133 25.264C66.1125 25.5851 66.7798 25.7459 67.515 25.7459ZM74.4837 24.3466C74.0388 24.3404 73.6342 24.2291 73.2697 24.0128C72.9053 23.7966 72.6149 23.5062 72.3985 23.1418C72.1886 22.7773 72.0836 22.3727 72.0836 21.9278C72.0836 21.4892 72.1886 21.0876 72.3985 20.7232C72.6149 20.3587 72.9053 20.0683 73.2697 19.8521C73.6342 19.6358 74.0388 19.5278 74.4837 19.5278C74.9285 19.5278 75.3331 19.6358 75.6976 19.8521C76.0683 20.0683 76.3619 20.3587 76.5781 20.7232C76.7943 21.0816 76.8992 21.4799 76.893 21.9186C76.893 22.3634 76.7818 22.7712 76.5593 23.1418C76.3432 23.5125 76.053 23.8058 75.6883 24.022C75.3301 24.2384 74.9285 24.3466 74.4837 24.3466ZM67.895 16.7014H73.872C74.6628 16.7014 75.3857 16.5253 76.0405 16.1731C76.7016 15.821 77.2266 15.3268 77.6159 14.6905C78.0112 14.0541 78.2091 13.3159 78.2091 12.4757C78.2091 11.6355 78.0112 10.8972 77.6159 10.2609C77.2266 9.62459 76.7016 9.13036 76.0405 8.77823C75.3857 8.42608 74.6628 8.25 73.872 8.25H67.895C67.0981 8.25 66.369 8.42608 65.7079 8.77823C65.0531 9.13036 64.528 9.62459 64.1327 10.2609C63.7435 10.8972 63.5488 11.6355 63.5488 12.4757C63.5488 13.3159 63.7435 14.0541 64.1327 14.6905C64.528 15.3268 65.0531 15.821 65.7079 16.1731C66.369 16.5253 67.0981 16.7014 67.895 16.7014ZM67.895 15.3021C67.3762 15.3021 66.891 15.1847 66.4401 14.9499C65.9952 14.709 65.6338 14.3785 65.3557 13.9584C65.0841 13.5321 64.9481 13.0379 64.9481 12.4757C64.9481 11.9135 65.0841 11.4223 65.3557 11.0023C65.6338 10.576 65.9952 10.2455 66.4401 10.0107C66.891 9.76976 67.3762 9.64929 67.895 9.64929H73.872C74.3847 9.64929 74.8635 9.76976 75.3083 10.0107C75.7595 10.2455 76.1207 10.576 76.3927 11.0023C76.6708 11.4223 76.8098 11.9135 76.8098 12.4757C76.8098 13.0379 76.6708 13.5321 76.3927 13.9584C76.1207 14.3785 75.7595 14.709 75.3083 14.9499C74.8635 15.1847 74.3847 15.3021 73.872 15.3021H67.895ZM67.895 14.6719C68.3028 14.6781 68.6703 14.5823 68.9977 14.3846C69.3314 14.1808 69.5969 13.912 69.7946 13.5784C69.9985 13.2386 70.1004 12.8649 70.1004 12.4571C70.1067 12.0494 70.011 11.6818 69.8131 11.3544C69.6155 11.0208 69.3467 10.7582 69.007 10.5667C68.6733 10.369 68.3028 10.2702 67.895 10.2702C67.4872 10.2702 67.1165 10.369 66.783 10.5667C66.4494 10.7644 66.1836 11.0301 65.986 11.3636C65.7945 11.6973 65.6986 12.0648 65.6986 12.4664C65.6986 12.8742 65.7945 13.2448 65.986 13.5784C66.1836 13.912 66.4494 14.1777 66.783 14.3754C67.1165 14.5731 67.4872 14.6719 67.895 14.6719Z"
                  fill="#545454"
                />
              </g>
              <g filter="url(#filter2_d_6558_60)">
                <path
                  d="M108.606 20.504C109.293 20.504 109.939 20.3737 110.544 20.1131C111.148 19.8526 111.68 19.4921 112.141 19.0317C112.601 18.566 112.961 18.031 113.222 17.4264C113.488 16.822 113.621 16.176 113.621 15.4884C113.621 14.8007 113.488 14.1547 113.222 13.5503C112.961 12.9458 112.601 12.4135 112.141 11.9532C111.68 11.4929 111.148 11.1325 110.544 10.8719C109.939 10.6057 109.293 10.4726 108.606 10.4726C107.918 10.4726 107.272 10.6057 106.668 10.8719C106.063 11.1325 105.528 11.4929 105.062 11.9532C104.602 12.4135 104.241 12.9458 103.981 13.5503C103.72 14.1547 103.59 14.8007 103.59 15.4884C103.59 16.176 103.72 16.822 103.981 17.4264C104.241 18.031 104.602 18.566 105.062 19.0317C105.528 19.4921 106.063 19.8526 106.668 20.1131C107.272 20.3737 107.918 20.504 108.606 20.504ZM108.606 21.885C107.724 21.885 106.898 21.7185 106.127 21.3858C105.356 21.0531 104.677 20.5929 104.089 20.0051C103.501 19.4172 103.041 18.738 102.708 17.967C102.375 17.1964 102.209 16.3701 102.209 15.4884C102.209 14.6067 102.375 13.7804 102.708 13.0096C103.041 12.2332 103.501 11.5539 104.089 10.9717C104.677 10.3839 105.356 9.9236 106.127 9.59087C106.903 9.25817 107.729 9.0918 108.606 9.0918C109.487 9.0918 110.314 9.25817 111.084 9.59087C111.855 9.9236 112.534 10.3839 113.122 10.9717C113.71 11.5595 114.17 12.2388 114.503 13.0096C114.836 13.7804 115.002 14.6067 115.002 15.4884C115.002 16.3701 114.836 17.1964 114.503 17.967C114.17 18.738 113.71 19.4172 113.122 20.0051C112.534 20.5929 111.855 21.0531 111.084 21.3858C110.314 21.7185 109.487 21.885 108.606 21.885ZM116.948 24.9043C116.821 24.9043 116.699 24.8822 116.583 24.8379C116.466 24.7935 116.361 24.7242 116.266 24.6298L111.85 20.2129L113.214 18.8904L117.606 23.2907C117.7 23.3794 117.767 23.4819 117.805 23.5984C117.85 23.7149 117.872 23.8341 117.872 23.9561C117.872 24.1335 117.83 24.2916 117.747 24.4301C117.67 24.5744 117.561 24.6881 117.423 24.7711C117.284 24.86 117.126 24.9043 116.948 24.9043Z"
                  fill="#545454"
                />
              </g>
              <g filter="url(#filter3_d_6558_60)">
                <path
                  d="M154.321 25.9894C154.442 25.9894 154.562 25.9518 154.681 25.877C154.809 25.802 154.978 25.6631 155.188 25.4607L157.82 22.9304C157.91 22.8477 157.958 22.7541 157.966 22.6491C157.981 22.5367 157.95 22.4316 157.876 22.3342C157.523 21.8768 157.032 21.4794 156.403 21.142C155.78 20.8046 155.087 20.6358 154.321 20.6358C153.543 20.6358 152.834 20.8121 152.196 21.1645C151.566 21.5169 151.075 21.9294 150.722 22.4017C150.671 22.4842 150.652 22.5742 150.666 22.6716C150.689 22.7616 150.745 22.8477 150.836 22.9304L153.468 25.4607C153.669 25.6631 153.835 25.802 153.961 25.877C154.09 25.9518 154.209 25.9894 154.321 25.9894ZM148.002 20.0849C148.114 20.1974 148.238 20.2498 148.373 20.2422C148.507 20.2348 148.631 20.1711 148.743 20.0512C149.388 19.3239 150.21 18.7277 151.206 18.2628C152.204 17.7981 153.242 17.5692 154.321 17.5768C155.417 17.5692 156.462 17.8055 157.46 18.2853C158.457 18.7578 159.285 19.3576 159.946 20.0849C160.051 20.1974 160.166 20.2536 160.294 20.2536C160.421 20.246 160.537 20.1861 160.643 20.0735L162.318 18.4204C162.409 18.3304 162.456 18.2329 162.465 18.1278C162.472 18.0154 162.438 17.9104 162.363 17.813C161.816 17.1457 161.131 16.5496 160.306 16.0247C159.481 15.4924 158.558 15.0764 157.539 14.7764C156.518 14.469 155.447 14.3153 154.321 14.3153C153.197 14.3153 152.125 14.469 151.105 14.7764C150.093 15.0764 149.175 15.4924 148.35 16.0247C147.525 16.5496 146.84 17.1457 146.291 17.813C146.209 17.9104 146.172 18.0116 146.179 18.1166C146.186 18.2218 146.235 18.323 146.326 18.4204L148.002 20.0849ZM143.503 15.5749C143.608 15.6873 143.728 15.7436 143.863 15.7436C144.005 15.7361 144.125 15.6761 144.223 15.5637C145.557 14.154 147.083 13.0856 148.799 12.3583C150.517 11.6236 152.358 11.2562 154.321 11.2562C156.294 11.2562 158.138 11.6236 159.855 12.3583C161.58 13.0931 163.106 14.1652 164.433 15.5749C164.531 15.6724 164.646 15.7212 164.781 15.7212C164.917 15.7212 165.033 15.6649 165.13 15.5524L166.615 14.0566C166.712 13.9666 166.761 13.8654 166.761 13.7529C166.768 13.633 166.735 13.528 166.66 13.438C165.812 12.3958 164.744 11.4661 163.454 10.6489C162.164 9.82409 160.736 9.17928 159.17 8.71441C157.609 8.24204 155.994 8.00586 154.321 8.00586C152.65 8.00586 151.03 8.24204 149.463 8.71441C147.896 9.17928 146.468 9.82409 145.179 10.6489C143.896 11.4661 142.832 12.3958 141.984 13.438C141.909 13.528 141.872 13.633 141.872 13.7529C141.879 13.8654 141.928 13.9666 142.019 14.0566L143.503 15.5749Z"
                  fill="#545454"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_6558_60"
                  x="4"
                  y="7.57227"
                  width="39.5488"
                  height="22.8496"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                    result="effect1_dropShadow_6558_60"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_6558_60"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d_6558_60"
                  x="59.5488"
                  y="6.25"
                  width="22.6602"
                  height="25.4961"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                    result="effect1_dropShadow_6558_60"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_6558_60"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter2_d_6558_60"
                  x="98.209"
                  y="7.0918"
                  width="23.6628"
                  height="23.8125"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                    result="effect1_dropShadow_6558_60"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_6558_60"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter3_d_6558_60"
                  x="137.872"
                  y="6.00586"
                  width="32.8899"
                  height="25.9844"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                    result="effect1_dropShadow_6558_60"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_6558_60"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            <span className="text-gray-500 hidden md:inline">
              Sun 8 April 11:00AM
            </span>
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold ">Save Time</h3>
              <p className="mt-4 text-base text-gray-400 pb-10">
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold ">Auto launch</h3>
              <p className="mt-4 text-base text-gray-400 pb-10">
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold ">Always on top</h3>
              <p className="mt-4 text-base text-gray-400 pb-10">
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
        <div className="px-4 md:mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 w-full md:mx-auto mt-8 text-center md:max-w-5xl sm:grid-cols-3 md:gap-8 sm:mt-16">
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
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div className="px-4 py-5 lg:p-8">
                  <p className="text-lg font-medium text-gray-500">1 device</p>
                  <p className="mt-4 text-5xl font-bold ">$3.99</p>
                  <ul className="flex flex-col mt-8 space-y-1">
                    <li className="text-base font-medium text-gray-400 pb-10 lg:text-xl">
                      Less than $1 a day
                    </li>
                    <button className="px-4 py-2 bg-gradient-r from-slate-300 to-gray-600 text-800 ring ring-cyan-900 rounded-md">
                      Buy now
                    </button>
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
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div className="px-4 py-5 lg:p-8">
                <p className="text-lg font-medium text-gray-500">5 devices</p>
                <p className="mt-4 text-5xl font-bold ">$19.99</p>
                <ul className="flex flex-col mt-8 space-y-1">
                  <li className="text-base font-medium text-gray-400 pb-10 lg:text-xl">
                    Less than $5 a week
                  </li>
                  <button className="px-4 py-2 bg-gradient-r from-slate-300 to-gray-600 text-800 ring ring-cyan-900 rounded-md">
                    Buy now
                  </button>
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
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div className="px-4 py-5 lg:p-8">
                <p className="text-lg font-medium text-gray-500">lifetime</p>
                <p className="mt-4 text-5xl font-bold ">$99.99</p>
                <ul className="flex flex-col mt-8 space-y-1">
                  <li className="text-base font-medium text-gray-400 pb-10 lg:text-xl">
                    Less than $2 a week
                  </li>
                  <button className="px-4 py-2 rounded text-gray-900 bg-cyan-300">
                    Buy now
                  </button>
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
          <p className="text-center text-gray-400 pb-10 textbase mt-9">
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
        className="  flex flex-col justify-center text-center tracking-wider gap-5 min-h-[500px] mb-8 md:mb-40"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
          <p className="text-center text-gray-400 pb-10 textbase mt-9">
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
    </main>
  );
}

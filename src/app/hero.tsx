import styles from "./style";

const Hero = () => {

  const pink_gradiant = 'bg-gradient-to-r from-pink-300 to-pink-600 filter blur-[900px]'
  const white_gradiant = 'bg-white bg-opacity-60 filter blur-[750px]'
  const blue_gradiant = 'bg-gradient-to-t from-transparent via-blue-800 to-transparent filter blur-[123px]'
  const bg_discount_gradient = 'bg-gradient-to-tr from-gray-700 to-indigo-900'
  const bg_discount_gradient2 = 'bg-white'
  const text_gradient = ' bg-gradient-to-br from-teal-100 via-teal-200 to-teal-500 text-transparent bg-clip-text'

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Exchange <br className="sm:block hidden" />{" "}
            <span className={`${text_gradient}`}>Private NFTs</span>{" "}
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Powered by the ZK technology and the Aleo blockchain. 
        </p>
        <div className="flex flex-row">
            <button className={`flex flex-row items-center py-[10px] px-20 ${bg_discount_gradient} text-lg rounded-[10px] my-4 mr-4 font-bold`}>
                Create
            </button>
            <button className={`flex flex-row items-center py-[10px] px-20 ${bg_discount_gradient2} text-lg rounded-[10px] my-4 text-gray-700 font-bold`}>
                Explore
            </button>
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={'https://i.imgur.com/8RJDGMU.png'} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className={`absolute z-[0] w-[40%] h-[35%] top-0 ${pink_gradiant} `} />
        <div className={`absolute z-[1] w-[80%] h-[80%] rounded-full ${white_gradiant} bottom-40`} />
        <div className={`absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 ${blue_gradiant}`} />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
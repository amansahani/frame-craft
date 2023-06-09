const About = () => {
    return (
      <div className="container min-w-full my-auto min-h-screen flex flex-col justify-stretch items-stretch gap-8 mx-auto py-8 px-4 bg-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 text-gray-900">
          About Us
        </h1>
        <div>
        <p className="text-lg text-gray-800 mb-8">
          We have been building frames and nurturing memories of our clients for over 4 years.
          With a passion for our craft, we have successfully served more than 100 clients,
          helping them preserve their precious moments in beautifully personalized frames.
        </p>
        <p className="text-lg text-gray-800">
          We love what we do and take great pride in creating unique and high-quality frames.
          Each frame is carefully handcrafted with attention to detail, ensuring that every
          client{''}s memories are beautifully showcased and cherished for years to come.
        </p>
        </div>
      </div>
    );
  };
  
  export default About;
  
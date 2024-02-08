import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="h-screen  max-h-screen overflow-auto  flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative mb-0 mr-12 p-4">
      <Image
          src="/images/_55aae26b-84c9-4cc9-bf1e-4e384b6ac7d9.jpeg"
          objectFit="cover"
          fill
          alt="Image description"
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col justify-center">
        {/* TITLE */}
        <h2 className="text-4xl font-bold text-black mb-4">Tech experience, designing today</h2>
        {/* DESCRIPTION */}
        <p className="md:text-xl">
          I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, Next.js, React, Redux, Node.js, Express, MongoDB, HTML, CSS, Tailwind CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
        </p>
        {/* BUTTONS */}
        <div className="flex gap-4 mt-4">
          <button className="bg-red-700 ring-1 ring-black text-white px-4 py-2 rounded">View my work</button>
          <button className="px-4 py-2 ring-1 ring-black rounded text-black">Contact me</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

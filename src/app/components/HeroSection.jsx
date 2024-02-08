
import Image from 'next/image'
const HeroSection = () => {
  return (
   
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
         {/*IMAGE CONTAINER */}
        <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
        <Image
            src="/images/_55aae26b-84c9-4cc9-bf1e-4e384b6ac7d9.jpeg"
            className='object-contain'
            width={500} height={500}
            
            alt="Image description"
          />
        </div>
     {/*TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
         {/*TITLE*/}
        <h2 className="text-4xl font-bold text-black mb-4 "> Digital expriences,designing today</h2>
         {/*DESCRIPTION */}
        <p className="md:text-xl">
          I am a full stack web developer with a passion for creating
          interactive and responsive web applications. I have experience
          working with JavaScript,Nextjs, React, Redux, Node.js, Express, MongoDB,
          , HTML, CSS,Tailwindcss and Git. I am a quick learner and I am always
          looking to expand my knowledge and skill set. I am a team player and
          I am excited to work with others to create amazing applications.
        </p>
         {/*BUTTONS */}
        <div class=" flex gap-4">
    <button class="bg-red-400 ring-1 ring-black text-white px-4 py-2 rounded">View my work</button>
    <button class="px-4 py-2 ring-1 ring-black rounded text-black ">Contact me</button>
</div>

        
      </div>
    </div>

  )
}

export default HeroSection
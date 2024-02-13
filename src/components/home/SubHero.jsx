import Image from "next/image";
const SubHero = () => {
  return (
    <div className="py-16 bg-gray-100">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Empowering Your Online Presence</h2>
          <p className="text-lg mb-6">
            In todays digital world, your online presence is your new storefront. Our comprehensive suite of services ensures that your brand stands out, engages effectively with your target audience, and drives success across all digital platforms.
          </p>
          <ul className="list-disc pl-5 text-lg">
            <li>Strategic Social Media Campaigns</li>
            <li>Innovative Graphic Design</li>
            <li>Responsive Website Development</li>
            <li>Intuitive UI/UX Design</li>
          </ul>
        </div>
        {/* Imagery */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <Image src="/Banner.jpg" alt="Empowering Online Presence" width={500} height={300} className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default SubHero
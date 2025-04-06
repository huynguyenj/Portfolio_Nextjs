import Image from "next/image";

export default function GridBox({title,description,link,image}:{title:string, description:string, link:string, image:string}) {
  return (
    <div className="w-full h-[250px] min-w-[200px] bg-gray-900 p-5 rounded-2xl hover:transform-[scale(1.1)] duration-500 ease-in-out cursor-pointer flex gap-3 items-center">
      <Image src={image} width={200} height={200} alt={title} className="w-30 h-30 mb-5"/>
      <div>
      <p className="text-3xl font-bold">{title}</p>
      <p className="text-[1.2rem]">{description}</p>
      <a href={link} className="hover:underline hover:text-purple-500">🔗Link github</a>
      </div>
    </div>
  )
}

import GridBox from "./common/GridBox";

export default function ProjectsSection() {
  return (
    <section className="min-h-[100vh] p-10 flex flex-col lg:flex-row gap-5 items-center">
      <h1 className="text-7xl text-center">Projects</h1>
      <div className="h-50 w-1 bg-white hidden lg:block"></div>
      <div className="grid xl:grid-cols-2 gap-2">
      <GridBox title="Koicare System" description="🚀This website allow user to take care their koi, tracking their development, buy and sold items to take care koi." image="/assets/Logo.png" link="https://github.com/huynguyenj/Project_KoicareSystem"/>
      <GridBox title="Claim System" description="🚀This website manage OT for each employee and checking claim request, pay OT. " image="/assets/claim_website.png" link="https://github.com/huynguyenj/claim_website"/>
      </div>
    </section>
  )
}

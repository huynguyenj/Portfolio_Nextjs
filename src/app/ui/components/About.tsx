import Box from "./common/Box";

export default function About() {
  return (
    <section className="min-h-[100vh] p-10">
      <h1 className="text-7xl font-bold text-center">Skills</h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
      <Box title="JavaScript" description="I have understand many vital concepts in javascript and ready for any challenges." image="/assets/js.webp"/>
      <Box title="TypeScript" description="By understanding JavaScript, I also can using TypeScript to make my project more understandable and easily the maintenance." image="/assets/typescript-logo.png"/>
      <Box title="Reactjs" description="I can using Reactjs to make many good websites. By understanding many concepts in Reactjs help me easily to using this framework more productive." image="/assets/react.png"/>
      <Box title="Nodejs Express" description="I have several knowledge about backend using nodejs and express to write API, connect to database by mongoDB, CRUD." image="/assets/nodejs-express.jpg"/>
      <Box title="TailwindCss" description="I can apply tailwindcss style for my website, understand clearly about styling." image="/assets/tailwind.png"/>
      <Box title="Nextjs" description="I can using nextjs, understanding nextjs concepts." image="/assets/nextjs.jpg"/>
      </div>
    </section>
  )
}

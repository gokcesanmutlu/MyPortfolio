import Layout from "@/components/Layout"
import { motion } from "framer-motion"
import React from "react"
import Typical from "react-typical"

import GithubIcon from "@/components/icons/Github.js";
import LinkedinIcon from "@/components/icons/Linkedin.js";


const TypingAnimation = React.memo(
  () => {
    return (
      <Typical
        loop={Infinity}
        wrapper="p"
        steps={[
          "React Developer",
          2000,
          "Front-end Developer",
          2000,
          "Formerly, Lawyer",
          2000,
        ]} />
    )
  },
  (props, prevProps) => true
)

export default function Home() {
  return (
    <Layout title={"Portfolio"} description={"My Portfolio"}>
      <motion.img src="/images/ball-1.svg"
        alt="ball-1"
        className="hidden md:block h-auto absolute top-48 right-10 z-[1]"
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{
          top: 0, left: 0, right: 0, bottom: 0
        }} />

      <motion.img
        src="/images/ball-2.svg"
        alt="ball-2"
        className="hidden md:block h-auto absolute bottom-10 left-10 z-[1]"
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{
          top: 0, left: 0, right: 0, bottom: 0
        }} />

      <main className="w-full h-full ">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col ites-center justify-center md:items-start">
            <h4 className="text-lg text-gray-800 dark:text-white">
              <span className="text-xl font-normal">Hello, I'm </span>
            </h4>
            <h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-white">
              Gökçe ŞAN MUTLU
            </h1>
            <div className="mt-5 text-2xl font-normal text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 bg-clip-text md:mt-3">
              <TypingAnimation />
            </div>

            {/* Social Accounts */}
            <div className="flex items-center mt-8 space-x-6 md:mt-4">
              <motion.a href="https://github.com/gokcesanmutlu" target={"blank"} rel="noopener noreferrer"
              className="flex items center justify-center text-gray-800 transition-colors duration-300
              dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
              whileHover={{scale:1.1}}>
                <GithubIcon className={"w-8 h-8 fill-current"}/>
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/gokcesan/" target={"blank"} rel="noopener noreferrer"
              className="flex items center justify-center text-gray-800 transition-colors duration-300
              dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
              whileHover={{scale:1.1}}>
                <LinkedinIcon className={"w-8 h-8 fill-current"}/>
              </motion.a>
            </div>
          </div>
        </section>
      </main>
    </Layout>


  )
}

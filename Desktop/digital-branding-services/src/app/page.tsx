'use client'
import Image from "next/image";
import { motion } from 'framer-motion';
import Hero from '@/components/home/Hero'
import SubHero from '@/components/home/SubHero'
import Services from '@/components/home/Services'
import About from '@/components/home/About'
import Contact from '@/components/home/Contact'
export default function Home() {
  
  
  return (
    <>
      <Hero />
      <SubHero />
      <Services />
      <About />
      <Contact />
    </>
  );
}

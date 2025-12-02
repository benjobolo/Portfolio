import Image from "next/image";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";
import { Skills } from "./_components/Skills";
import { Contacts } from "./_components/Contacts";
import { Footer } from "./_components/Footer";
import { Skills2 } from "./_components/Skills2";


import React, { useState } from 'react';

export default function Home() {
  return (
    <main>
      <Header />

      <Spacing size="md" />

      <Hero />

      <Spacing size="md" />

      <Status />

      <Spacing size="md" />

      <Skills2 />

      <Spacing size="md" />

      <Contacts />
      
      <Spacing size="md" />
      
      <Footer />

    </main>
  );
}

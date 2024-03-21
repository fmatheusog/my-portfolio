'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <section className="flex flex-col gap-[10px] mb-[62px] rounded mx-auto py-5 w-full">
        <motion.div
          className="w-full h-fit flex justify-start px-4"
          initial={{ x: -600 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.3 }}
        >
          <h1 className="text-3xl font-bold">
            Felipe Matheus - FullStack Developer
          </h1>
        </motion.div>
        <motion.div
          className="w-full px-4"
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.3 }}
        >
          <h2 className="text-lg">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </h2>
        </motion.div>
      </section>

      <motion.p
        className="px-[10px] w-full"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Voluptatibus maxime odio quo, vitae
        repudiandae possimus quia laborum ipsum a cum
        blanditiis beatae tempora aspernatur magni
        dignissimos voluptatum dicta assumenda rerum!
      </motion.p>
    </main>
  );
}

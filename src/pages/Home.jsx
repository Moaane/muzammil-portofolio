import React from "react";
import Navbar from "../components/Navbar";
import DefaultLayout from "../layout/DefaultLayout";
import { motion } from "framer-motion";

export default function Home() {
  const entranceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="bg-background">
      <Navbar />
      <DefaultLayout>
        <motion.div
          className="hero min-h-screen flex flex-col items-center justify-between px-4 md:px-8 lg:flex-row lg:min-h-[82vh]"
          variants={entranceVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-1 flex-col items-center text-neutral mt-4 space-y-8 lg:items-start sm:mt-0">
            <div className="text-sm font-bold text-center lg:text-left sm:text-sm md:text-sm lg:text-sm">
              <h1>
                HI, I'M MUZAMMIL{" "}
                <span className="block leading-relaxed">A CREATIVE DESIGNER</span>{" "}
                BASED IN INDONESIA
              </h1>
            </div>
            <div className="flex flex-wrap justify-center space-x-5 lg:space-x-5 lg:justify-start">
              <h1 className="text-md sm:text-lg font-bold">DESIGN</h1>
              <h1 className="text-md sm:text-lg font-bold">DEVELOPMENT</h1>
              <h1 className="text-md sm:text-lg font-bold">WEBFLOW</h1>
            </div>
            <div className="border-neutral border flex justify-center lg:justify-start space-x-2">
              <div className="text-white bg-black font-semibold py-3 px-10">
                Got a project?
              </div>
              <div className="bg-background font-semibold px-8 py-3">
                Let's talk
              </div>
            </div>
          </div>
          <img
            src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczkzLXBhLTU3OThfMS5wbmc.png"
            alt="Gambar Hero"
            className="w-full max-w-md mx-auto mt-6 rounded-lg shadow-lg lg:max-w-lg lg:mt-0"
          />
        </motion.div>

        <motion.section
          className="py-20"
          variants={entranceVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-primary">
                Jelajahi Karya Kami
              </h2>
              <p className="text-lg mt-4 text-neutral">
                Temukan proyek yang telah kami kerjakan dan dampak yang kami
                buat
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-base-100 shadow-xl card">
                <figure>
                  <img
                    src="https://source.unsplash.com/random/400x225?architecture"
                    alt="Proyek 1"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">ProProyek 1</h2>
                  <p>
                    Deskripsi proyek ada di sini. Menyoroti aspek kunci dan
                    teknologi yang digunakan.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                      Pelajari Lebih Lanjut
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-base-100 shadow-xl card">
                <figure>
                  <img
                    src="https://source.unsplash.com/random/400x225?nature"
                    alt="Proyek 2"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Proyek 2</h2>
                  <p>
                    Deskripsi proyek ada di sini. Menyoroti aspek kunci dan
                    teknologi yang digunakan.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                      Pelajari Lebih Lanjut
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-base-100 shadow-xl card">
                <figure>
                  <img
                    src="https://source.unsplash.com/random/400x225?technology"
                    alt="Proyek 3"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Proyek 3</h2>
                  <p>
                    Deskripsi proyek ada di sini. Menyoroti aspek kunci dan
                    teknologi yang digunakan.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                      Pelajari Lebih Lanjut
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="py-12"
          variants={entranceVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container mx-auto">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Portofolio</h1>
              <p className="text-lg mb-12">
                Berikut adalah beberapa proyek yang telah saya kerjakan.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card components */}
            </div>
          </div>
        </motion.section>
      </DefaultLayout>
    </div>
  );
}

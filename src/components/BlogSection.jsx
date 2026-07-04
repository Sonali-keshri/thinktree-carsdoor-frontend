'use client';

import Image from "next/image";

const blogs = [
  {
    id: 1,
    image: "/blogimg1.png",
    title: "Best Alloy Wheel Brands in India 2025 Update",
  },
  {
    id: 2,
    image: "/blogimg2.png",
    title: "10 Best Car Decor Ideas to Transform Your Ride in 2025",
  },
  {
    id: 3,
    image: "/blogimg3.png",
    title: "Must-Have Car Accessories 2025: Upgrade Your Ride with Style & Utility",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full bg-black pb-24" id="blog">

      <div className="mx-auto max-w-[1280px] px-6">

        <div className="mb-14 text-center">

          <h2 className="font-orbitron text-[40px] text-white">
            Blogs
          </h2>

        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {blogs.map((blog) => (

            <article
              key={blog.id}
              className="group"
            >
              <div className="overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className=" h-[220px] w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>

              <div className="pt-4">
                <h3 className=" font-ptsans text-[18px] leading-7 text-white transition-colors duration-300 group-hover:text-brand-600">
                  {blog.title}
                </h3>

                <button className=" mt-6 bg-[#5f5f5f] px-5 py-3 text-[13px] text-white transition-all duration-300 hover:bg-brand-600">
                  Read More
                </button>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}
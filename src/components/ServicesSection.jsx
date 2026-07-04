'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { productAPI } from '@/lib/api';

export default function ServicesSection() {

    const [products, setProducts] = useState([]);
    const [active, setActive] = useState(null);
    const [loading, setLoading] = useState(false);

    const [page] = useState(1);
    const [search] = useState('');
    const [category] = useState('all');
    const [sort] = useState('latest');

    const fetchProducts = useCallback(async () => {
        setLoading(true);

        try {
            const { data } = await productAPI.getAll({
                page,
                limit: 8,
                sort,
            });

            setProducts(data.data.products);

        } catch (err) {
            console.log(err);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    }, [page, search, category, sort]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <section className="bg-black py-10" id="services">

            <div className="mx-auto max-w-[1400px] px-6">

                <div className="mb-16 text-center">

                    <h2 className="font-orbitron text-[26px] md:text-[32px] text-brand-600 leading-snug">
                        We know your car deserves
                        <br />
                        the best, so we've got you covered!
                    </h2>

                </div>

                {loading ? (
                    <div className="text-center text-white">
                        Loading...
                    </div>
                ) : (

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 place-items-start">

                        {products.map((product) => {

                            const isActive = active === product._id;

                            return (

                                <motion.div
                                    key={product._id}
                                    onMouseEnter={() => setActive(product._id)}
                                    onMouseLeave={() => setActive(null)}
                                    className="overflow-hidden bg-[#1b1b1b] shadow-lg cursor-pointer"
                                >

                                    <motion.div
                                        animate={{
                                            height: isActive ? 470 : 320,
                                        }}
                                        transition={{
                                            duration: 0.35,
                                        }}
                                        className="flex flex-col"
                                    >

                                        <div className="px-5 pt-5">
                                            <h3
                                                className={`font-orbitron text-[15px] font-bold transition-colors duration-300 ${isActive
                                                    ? 'text-brand-600'
                                                    : 'text-white'
                                                    }`}
                                            >
                                                {product.category}:
                                            </h3>
                                            <p className="pt-2  text-[11px] uppercase tracking-[2px] text-gray-500">
                                                {product.name}
                                            </p>

                                            <p className="mt-2 text-xs uppercase tracking-wider text-gray-400">
                                                {product.shortTitle}
                                            </p>

                                        </div>
                                        <motion.div
                                            animate={{
                                                height: isActive ? 170 : 220,
                                            }}
                                            transition={{
                                                duration: 0.35,
                                            }}
                                            className="relative mt-5 overflow-hidden"
                                        >

                                            <Image
                                                // src={`http://localhost:5000/uploads/${product.image}`}
                                                src={`https://thinktree-carsdoor-backend.onrender.com/uploads/${product.image}`}
                                                alt={product.name}
                                                fill
                                                className="object-cover"
                                            />

                                            {console.log("Img path", product.image)}

                                        </motion.div>
                                        <motion.div
                                            animate={{
                                                opacity: isActive ? 1 : 0,
                                                height: isActive ? 'auto' : 0,
                                                y: isActive ? 0 : 20,
                                            }}
                                            transition={{
                                                duration: 0.35,
                                            }}
                                            className="overflow-hidden"
                                        >

                                            <div className="px-5 py-3 font-ptsans">

                                                <p className="text-gray-300 leading-7">
                                                    {product.description}
                                                </p>

                                                <button className=" mt-6 bg-[#555] px-6 py-3 text-white hover:bg-brand-600 transition"                                           >
                                                    Know More
                                                </button>

                                            </div>

                                        </motion.div>

                                    </motion.div>

                                </motion.div>

                            );
                        })}

                    </div>

                )}

            </div>

        </section>
    );
}
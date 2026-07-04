'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { productAPI } from '@/lib/api';

export default function ServicesSection({zIndex=2}) {

    const [products, setProducts] = useState([]);
    const [active, setActive] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [page] = useState(1);
    const [search] = useState('');
    const [category] = useState('all');
    const [sort] = useState('latest');

    const fetchProducts = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const { data } = await productAPI.getAll({
                page,
                limit: 8,
                sort,
            });

            setProducts(data?.data?.products || []);

        } catch (err) {
            console.error('ServicesSection: failed to fetch products', err);
            setProducts([]);
            setError(
                err?.response?.status
                    ? `Failed to load products (status ${err.response.status}).`
                    : 'Failed to load products. The server may be waking up — please refresh in a few seconds.'
            );
        } finally {
            setLoading(false);
        }
    }, [page, search, category, sort]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <section className="relative bg-black py-10" id="services" style={{zIndex}}>

            <div className="mx-auto max-w-[1400px] px-6">

                <div className="mb-16 text-center">

                    <h2 className="font-orbitron text-[26px] md:text-[32px] text-brand-600 leading-snug">
                        We know your car deserves
                        <br />
                        the best, so we've got you covered!
                    </h2>

                </div>

                {loading && (
                    <div className="text-center text-white">
                        Loading...
                    </div>
                )}

                {!loading && error && (
                    <div className="mx-auto max-w-md rounded-lg border border-red-500/30 bg-red-500/10 px-6 py-4 text-center text-sm text-red-400">
                        {error}
                        <button
                            onClick={fetchProducts}
                            className="mt-3 block w-full rounded-md bg-red-500/20 py-2 text-red-300 hover:bg-red-500/30"
                        >
                            Retry
                        </button>
                    </div>
                )}

                {!loading && !error && products.length === 0 && (
                    <div className="text-center text-gray-400">
                        No products available right now.
                    </div>
                )}

                {!loading && !error && products.length > 0 && (

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
                                                src={`${product.imageUrl}`}
                                                alt={product.name}
                                                fill
                                                className="object-cover"
                                            />

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
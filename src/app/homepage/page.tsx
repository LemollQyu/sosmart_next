'use client'

import React, { useState } from 'react'
import ProductCard from '@/app/homepage/product-card/page' // Update with your ProductCard component
import ProductFlashsale from '@/app/homepage/product-flashsale/page' // Update with the correct path for your ProductFlashsale component
import Link from 'next/link'

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories: string[] = [
    'Pria',
    'Wanita',
    'Elektronik',
    'Fashion',
    'Harian',
    'Mainan',
    'Olahraga',
    'Hewan',
  ]

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <div className="homepage max-w-[500px] mx-auto">
      <div
        className="promo-banner w-full h-[220px] bg-cover bg-center text-white flex flex-col items-center justify-center shadow-lg relative bg-blend-darken"
        style={{
          backgroundImage: 'url(/banner.jpg)',
          backgroundPosition: '50%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'lightgray',
        }}
      >
        {/* Search Bar and Icons */}
        <div className="rounded-md flex justify-between items-center absolute top-5 gap-6 mx-4 mt-0">
          {/* Input Pencarian dengan Icon */}
          <div className="flex items-center w-[184px] h-[36px] border rounded-md px-4 bg-white ml-4 shadow-lg">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
                fill="#51D7B1"
              />
            </svg>

            <input
              className="ml-2 w-full h-full border-none focus:outline-none text-gray-700"
              type="text"
              placeholder="Pencarian"
            />
          </div>

          {/* Icons Container */}
          <div className="px-4 py-2 flex gap-2">
            {/* Icon Chat */}
            <div className="w-[36px] h-[36px] rounded-md border flex justify-center items-center bg-white hover:bg-gray-50 transition cursor-pointer shadow-md">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242ZM7.58075 18.711L8.23428 19.0605C9.38248 19.6745 10.6655 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.3345 4.32549 14.6175 4.93949 15.7657L5.28896 16.4192L4.63416 19.3658L7.58075 18.711Z"
                  fill="#51D7B1"
                />
              </svg>
            </div>

            {/* Icon Filter */}
            <div className="w-[36px] h-[36px] rounded-md border flex justify-center items-center bg-white hover:bg-gray-50 transition shadow-md">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7C5 6.17157 5.67157 5.5 6.5 5.5C7.32843 5.5 8 6.17157 8 7C8 7.82843 7.32843 8.5 6.5 8.5C5.67157 8.5 5 7.82843 5 7ZM6.5 3.5C4.567 3.5 3 5.067 3 7C3 8.933 4.567 10.5 6.5 10.5C8.433 10.5 10 8.933 10 7C10 5.067 8.433 3.5 6.5 3.5ZM12 8H20V6H12V8ZM16 17C16 16.1716 16.6716 15.5 17.5 15.5C18.3284 15.5 19 16.1716 19 17C19 17.8284 18.3284 18.5 17.5 18.5C16.6716 18.5 16 17.8284 16 17ZM17.5 13.5C15.567 13.5 14 15.067 14 17C14 18.933 15.567 20.5 17.5 20.5C19.433 20.5 21 18.933 21 17C21 15.067 19.433 13.5 17.5 13.5ZM4 16V18H12V16H4Z"
                  fill="#51D7B1"
                />
              </svg>
            </div>

            {/* Icon Notifikasi */}
            <div className="w-[36px] h-[36px] rounded-md border flex justify-center items-center bg-white hover:bg-gray-50 transition shadow-md">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C16.9706 2 21 6.04348 21 11.0314V20H3V11.0314C3 6.04348 7.02944 2 12 2ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"
                  fill="#51D7B1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Kategori */}
      <div className="categories flex justify-around gap-2.5 mt-4 bg-gray-100 rounded-md shadow-md overflow-x-scroll">
        {categories.map((category: string) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md text-xs flex items-center justify-center transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-[#83E69B] to-[#00BAE1] text-white shadow-md'
                : 'bg-white text-gray-700'
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Flash Sale Section */}
      <section className="mt-6 bg-gray-100 rounded-md shadow-md p-4">
        <div className="px-6 py-1 flex justify-between items-center mb-1">
          <h2 className="text-black font-nunito text-[13px] font-semibold leading-[18px] tracking-[-0.276px]">
            Penawaran Hari ini
          </h2>
          <Link href="/semua-produk" legacyBehavior>
            <a className="flex items-center gap-1 text-black font-nunito text-[13px] font-semibold leading-[18px] tracking-[-0.276px]">
              <span>Lihat Semua</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.5858 5.99995L4.1109 3.5251L4.818 2.81799L8 5.99995L4.818 9.18195L4.1109 8.47485L6.5858 5.99995Z" fill="black" />
              </svg>
            </a>
          </Link>
        </div>

        <div className="px-6 py-0 flex justify-start items-center gap-2 -mt-1">
          <h3 className="flex justify-center items-center gap-2 w-[99px] h-[24px] p-0 rounded-[6px] bg-[#949494] text-white text-[7px] font-semibold leading-[18px]">
            11 Jam 15 Mnt 20 Dtk
          </h3>
        </div>

        {/* Product Flash Sale Grid */}
        <div className="product-grid grid grid-cols-2 gap-y-8 gap-x-5 mt-4 mx-auto justify-items-center">
          <ProductFlashsale />
          <ProductFlashsale />
          <ProductFlashsale />
          <ProductFlashsale />
        </div>
      </section>

      {/* Product Grid */}
      <div className="product-grid grid grid-cols-2 gap-y-8 gap-x-5 px-4 py-4 mx-auto justify-items-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        {/* Tambahkan lebih banyak ProductCard di sini */}
      </div>
    </div>
  )
}

export default HomePage

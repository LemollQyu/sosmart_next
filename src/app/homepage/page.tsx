import React from 'react'
import { CiSearch } from 'react-icons/ci' // Search icon
import { CiChat1 } from 'react-icons/ci' // Chat icon
import { VscSettings } from 'react-icons/vsc' // Settings icon
import { RiNotificationLine } from 'react-icons/ri' // Notification icon
import ProductCard from '@/app/product-card/page' // Update with your ProductCard component

const HomePage = () => {
  return (
    <div className="homepage max-w-[500px] mx-auto">
      {' '}
      <div
        className="promo-banner w-full h-[220px] bg-cover bg-center text-white flex flex-col items-center justify-center rounded-md shadow-lg relative"
        style={{
          backgroundImage: 'url(/banner.jpg)', // Set the background image here
        }}
      >
        {/* Search Bar and Icons */}
        <div className="w-md grid grid-cols-2 items-center gap-6 mx-4 mt-0">
          {' '}
          {/* mt-5 untuk margin top 5 */}
          {/* Input Pencarian dengan Icon */}
          <div className="flex items-center w-[230px] h-[40px] border rounded-md px-4 bg-white shadow-lg">
            <CiSearch className="w-6 h-6 text-gray-500" />
            <input
              className="ml-2 w-full h-full border-none focus:outline-none text-gray-700"
              type="text"
              placeholder="Pencarian"
            />
          </div>
          {/* Icons Container */}
          <div className="flex justify-self-end space-x-1">
            {/* Icon Chat */}
            <div className="w-[40px] h-[40px] rounded-md border flex justify-center items-center hover:bg-gray-100 transition cursor-pointer shadow-md">
              <CiChat1 className="w-4 h-4 text-gray-700" />
            </div>
            {/* Icon Filter */}
            <div className="w-[40px] h-[40px] rounded-md border flex justify-center items-center hover:bg-gray-100 transition shadow-md">
              <VscSettings className="w-4 h-4 text-gray-700" />
            </div>
            {/* Icon Notifikasi */}
            <div className="w-[40px] h-[40px] rounded-md border flex justify-center items-center hover:bg-gray-100 transition shadow-md">
              <RiNotificationLine className="w-4 h-4 text-gray-700" />
            </div>
          </div>
        </div>

        {/* Location Info */}
        <div className="absolute left-4 top-40 text-gray-500">
          {' '}
          {/* Adjusted positioning */}
          <span>Location</span>
          <p className="font-medium">Semarang, Sampangan</p>
        </div>
      </div>
      {/* Kategori */}
      <div className="categories flex justify-around gap-2.5 mt-4 bg-gray-100 rounded-md shadow-md overflow-x-scroll">
        <button className="px-4 py-2 rounded-md bg-white text-gray-700 text-xs flex items-center justify-center">
          Pria
        </button>
        <button className="px-4 py-2 rounded-md bg-white text-gray-700 text-xs flex items-center justify-center">
          Wanita
        </button>
        <button className="px-4 py-2 rounded-md bg-white text-gray-700 text-xs flex items-center justify-center">
          Elektronik
        </button>
        <button className="px-4 py-2 rounded-md bg-white text-gray-700 text-xs flex items-center justify-center">
          Fashion
        </button>
        <button className="px-4 py-2 rounded-md bg-white text-gray-700 text-xs flex items-center justify-center">
          Harian
        </button>
        <button className="px-4 py-2 rounded-md bg-white text-gray-700 text-xs flex items-center justify-center">
          Mainan
        </button>
        <button className="px-4 py-2 rounded-md bg-white text-gray-700 text-xs flex items-center justify-center">
          Olahraga
        </button>
        <button className="px-4 py-2 rounded-md bg-white text-gray-700 text-xs flex items-center justify-center">
          Hewan
        </button>
      </div>
      {/* Product Grid */}
      <div className="product-grid grid grid-cols-2 gap-y-8 gap-x-5 mt-4 mx-auto justify-items-center">
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

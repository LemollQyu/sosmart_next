import React from 'react';
import { CiSearch } from 'react-icons/ci'; // Search icon
import { CiChat1 } from 'react-icons/ci'; // Chat icon
import { VscSettings } from 'react-icons/vsc'; // Settings icon
import { RiNotificationLine } from 'react-icons/ri'; // Notification icon
import ProductCard from '@/app/product-card/page'; // Update with your ProductCard component

const Pembayaran = () => {
  return (
    <div className="max-w-[500px] mx-auto p-4">
      {/* Promo Banner */}
      <div
        className="promo-banner w-full h-[220px] bg-cover bg-center text-white flex flex-col items-center justify-center rounded-md shadow-lg relative"
        style={{
          backgroundImage: 'url(/banner.jpg)', // Set your background image here
        }}
      >
        {/* Search Bar and Icons */}
        <div className="w-full grid grid-cols-2 items-center gap-4 mx-4 mt-0">
          {/* Input Pencarian dengan Icon */}
          <div className="flex items-center w-full h-[40px] border rounded-md px-4 bg-white shadow-lg">
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
          <span>Location</span>
          <p className="font-medium">Semarang, Sampangan</p>
        </div>
      </div>

      {/* Product Section */}
      <section className="mt-6 bg-gray-100 rounded-md shadow-md p-4">
        <h2 className="text-lg font-bold mb-2">Rincian Pesanan</h2>
        <div className="product-grid grid grid-cols-2 gap-y-8 gap-x-5 mt-4 mx-auto justify-items-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          {/* Tambahkan lebih banyak ProductCard di sini */}
        </div>
      </section>

      {/* Additional Sections */}
      <section className="mt-4">
        <h3 className="text-sm font-bold">Pilih metode pembayaran</h3>
        {/* Payment methods could go here */}
      </section>

      <section className="mt-4">
        <h3 className="text-sm font-bold">Pengiriman</h3>
        {/* Shipping details could go here */}
      </section>

      <section className="mt-4">
        <h3 className="text-sm font-bold">Total</h3>
        {/* Total amount could go here */}
      </section>
    </div>
  );
};

export default Pembayaran;

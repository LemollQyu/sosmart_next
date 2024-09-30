// pages/account.tsx

'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { IoIosArrowBack } from 'react-icons/io'
import { LuPencil, LuSettings } from 'react-icons/lu'
import { MdStarOutline } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'
import { LuEye } from 'react-icons/lu'
import { BsShopWindow } from 'react-icons/bs'
import { MdHelpOutline } from 'react-icons/md'
import { PiHeadsetThin } from 'react-icons/pi'
import { RiAccountPinCircleLine } from 'react-icons/ri'
import { FaAngleRight } from 'react-icons/fa6'

const UserSettings: React.FC = () => {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="max-w-[500px] w-full mx-auto p-4">
        {/* Header */}
        <header className="bg-white shadow mb-4">
          <div className="flex justify-between items-center px-4 py-4">
            <button
              onClick={handleBack}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <IoIosArrowBack className="mr-2" size={24} />
            </button>
            <h1 className="text-xl font-semibold">Akun Saya</h1>
            <div className="w-8"></div>
          </div>
        </header>

        {/* Content */}
        <main>
          {/* Profile Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Flex container for avatar, user info, and settings icon */}
            <div className="flex items-center justify-between w-full">
              {/* Avatar */}
              <div className="flex items-center">
                <img
                  src="/profile.jpg"
                  alt="User Avatar"
                  className="w-20 h-20 rounded-full"
                />
              </div>

              {/* User Information */}
              <div className="flex-1 mx-6">
                <h2 className="text-lg font-semibold">Nama User</h2>
                <p className="text-sm text-gray-500">08712345678</p>
                <p className="text-sm text-gray-500">lilnash@gmail.com</p>
              </div>

              {/* Settings Icon */}
              <div className="flex items-center">
                <button className="text-gray-500 hover:text-gray-900">
                  <LuSettings size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between mt-4">
            <button className="flex-1 bg-gray-200 rounded-md py-2 mr-2 flex items-center justify-center">
              Daftar Toko
              <FaAngleRight className="ml-2" />
            </button>
            <button className="flex-1 bg-gray-200 rounded-md py-2 flex items-center justify-center">
              Daftar Affiliate
              <FaAngleRight className="ml-2" />
            </button>
          </div>

          {/* User Activities */}
          <div className="bg-white rounded-lg shadow-md mt-6 p-4">
            <h3 className="text-sm font-semibold mb-3">Aktivitas Saya</h3>
            <div className="flex flex-col space-y-2">
              <ActivityItem icon={<LuPencil />} label="Informasi Akun" />
              <ActivityItem icon={<MdStarOutline />} label="Ulasan" />
              <ActivityItem icon={<FiSearch />} label="Riwayat Pencarian" />
              <ActivityItem icon={<LuEye />} label="Terakhir Dilihat" />
              <ActivityItem icon={<BsShopWindow />} label="Toko yang diikuti" />
            </div>
          </div>

          {/* Help Center */}
          <div className="bg-white rounded-lg shadow-md mt-6 p-4">
            <h3 className="text-sm font-semibold mb-3">Pusat Bantuan</h3>
            <div className="flex flex-col space-y-2">
              <ActivityItem icon={<MdHelpOutline />} label="Pusat Bantuan" />
              <ActivityItem icon={<PiHeadsetThin />} label="Live Chat" />
              <ActivityItem
                icon={<RiAccountPinCircleLine />}
                label="Hapus Akun"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

// Reusable component for activity/help items with types
interface ActivityItemProps {
  icon: React.ReactNode
  label: string
}

const ActivityItem: React.FC<ActivityItemProps> = ({ icon, label }) => (
  <div className="flex items-center text-sm text-gray-700 hover:bg-gray-100 rounded-md p-2 cursor-pointer">
    <span className="mr-3">{icon}</span>
    {label}
  </div>
)

export default UserSettings

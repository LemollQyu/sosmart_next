'use client' // Add this line to mark the component as a Client Component

import React, { useState } from 'react'
import { MdLocationOn } from 'react-icons/md'
import { AiFillStar } from 'react-icons/ai'
import { FaPlus } from 'react-icons/fa' // Icon for increment button

const ProductCard = () => {
  const [count, setCount] = useState(1) // State for count increment

  // Function to handle increment
  const handleIncrement = () => {
    setCount(count + 1)
  }

  return (
    <div style={{ width: 146, height: 190, position: 'relative' }}>
      {/* Outer Card */}
      <div
        style={{
          width: 146,
          height: 190,
          position: 'absolute',
          background: 'white',
          borderRadius: 13,
          border: '1px solid black',
        }}
      />

      {/* Inner Image Container */}
      <div
        style={{
          width: 122,
          height: 97,
          position: 'absolute',
          top: 12,
          left: 12,
          background: 'white',
          borderRadius: 6,
          border: '1px solid black',
        }}
      />

      {/* Discount Label */}
      <div
        style={{
          width: 75,
          height: 19,
          position: 'absolute',
          top: 85,
          left: 17,
          background: 'white',
          borderRadius: 6,
          border: '1px solid #999999',
          padding: '2px 4px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            color: '#6B6B6B',
            fontSize: 8,
            fontFamily: 'Nunito',
            fontWeight: 700,
            lineHeight: '15px',
            wordWrap: 'break-word',
          }}
        >
          Diskon Terbaik
        </div>
      </div>

      {/* Product Title */}
      <div
        style={{
          width: 119,
          position: 'absolute',
          top: 113,
          left: 14,
          color: 'black',
          fontSize: 10,
          fontFamily: 'Nunito',
          fontWeight: 400,
          lineHeight: '15px',
          wordWrap: 'break-word',
        }}
      >
        Kremlin T-Shirt Kaos Black - Crew
      </div>

      {/* Discounted Price */}
      <div
        style={{
          position: 'absolute',
          top: 143,
          left: 14,
          color: '#1B1E28',
          fontSize: 8,
          fontFamily: 'Nunito',
          fontWeight: 700,
          lineHeight: '12px',
          textAlign: 'center',
          wordWrap: 'break-word',
        }}
      >
        Rp 99.000
      </div>

      {/* Original Price */}
      <div
        style={{
          position: 'absolute',
          top: 143,
          left: 54,
          color: '#1B1E28',
          fontSize: 8,
          fontFamily: 'Nunito',
          fontWeight: 700,
          lineHeight: '12px',
          textAlign: 'center',
          wordWrap: 'break-word',
          textDecoration: 'line-through', // Add this line for strikethrough effect
        }}
      >
        Rp 199.000
      </div>


      {/* Price Tag Circle with Increment Button */}
      <div
        style={{
          width: 28,
          height: 28,
          position: 'absolute',
          top: 140,
          left: 108,
          background: 'white',
          borderRadius: 8,
          border: '1px solid black',
          display: 'flex', // Use flex to center the button
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Increment Button */}
        <div
          style={{
            width: '50%', // Size of the button
            height: '50%',
            background: '#ddd',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'background 0.3s',
          }}
          onClick={handleIncrement}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#ccc')} // Change background on hover
          onMouseLeave={(e) => (e.currentTarget.style.background = '#ddd')}
        >
          <FaPlus size={10} color="black" />
        </div>
      </div>

      {/* Rating Section */}
      <div
        style={{
          position: 'absolute',
          top: 154,
          left: 14,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <AiFillStar size={8} color="#727272" />
        <div
          style={{
            color: '#727272',
            fontSize: 8,
            fontFamily: 'Nunito',
            fontWeight: 600,
            lineHeight: '12px',
          }}
        >
          4,1
        </div>
      </div>

      {/* Location Section */}
      <div
        style={{
          position: 'absolute',
          top: 166,
          left: 14,
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          color: '#1B1E28',
          fontSize: 8,
          fontFamily: 'Nunito',
          fontWeight: 600,
          lineHeight: '12px',
        }}
      >
        <MdLocationOn size={8} color="#1B1E28" />
        Semarang, Sampangan
      </div>
    </div>
  )
}

export default ProductCard

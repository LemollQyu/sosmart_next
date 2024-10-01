'use client' // Add this line to mark the component as a Client Component

import React, { useState } from 'react'

const ProductFlashsale = () => {
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
          position: 'relative',
          background: 'white',
          borderRadius: 12,
          border: '1px solid black',
        }}
      >
        {/* Outer Container */}
        <div
          className="absolute w-[145px] h-[109px] bg-white border border-black rounded-t-lg"
          style={{
            backgroundImage: 'url(/sepatu.jpg)', // Set the background image here
            backgroundSize: 'cover', // Ensures the image covers the entire container
            backgroundPosition: 'center', // Centers the image within the container
          }}
        ></div>

        {/* Discount Label */}
        <div
          style={{
            width: 83,
            height: 19,
            position: 'absolute',
            top: 85,
            left: 10,
            background: '#EE443F',
            borderRadius: 6,
            border: '1px solid #EE443F',
            padding: '2px 4px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              color: '#FFF',
              fontSize: 7,
              fontFamily: 'Nunito',
              fontWeight: 700,
              lineHeight: '12px',
              wordWrap: 'break-word',
            }}
          >
            Diskon Terbaik -65%
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
            fontSize: 9,
            fontFamily: 'Nunito',
            fontWeight: 400,
            lineHeight: '15px',
            wordWrap: 'break-word',
          }}
        >
          Sepatu Sneakers Kekinian Semua Ukuran | Murah d...
        </div>

        {/* Price Section */}
        <div
          style={{
            display: 'flex', // Use flex to align the prices horizontally
            alignItems: 'center',
            gap: '2px', // This creates the 2px gap between the discounted and original prices
            position: 'absolute',
            top: 143,
            left: 14,
          }}
        >
          {/* Discounted Price */}
          <div
            style={{
              color: '#1B1E28',
              fontSize: 8,
              fontFamily: 'Nunito',
              fontWeight: 700,
              lineHeight: '12px',
              textAlign: 'center',
              wordWrap: 'break-word',
            }}
          >
            Rp 195.000
          </div>

          {/* Original Price */}
          <div
            style={{
              color: '#1B1E28',
              fontSize: 8,
              fontFamily: 'Nunito',
              fontWeight: 700,
              lineHeight: '12px',
              textAlign: 'center',
              wordWrap: 'break-word',
              textDecoration: 'line-through', // Strikethrough effect for the original price
            }}
          >
            Rp 300.000
          </div>
        </div>

        {/* Price Tag Circle with Increment Button */}
        <div
          style={{
            width: 28,
            height: 28,
            position: 'absolute',
            top: 140,
            left: 108,
            background: '#51D7B1',
            borderRadius: 8,
            border: '1px solid #51D7B1',
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
              background: '#51D7B1',
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
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="4.0556" x2="4.0556" y2="8" stroke="white" />
              <line y1="3.94409" x2="8" y2="3.94409" stroke="white" />
            </svg>
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
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_929_3175)">
              <path
                d="M4.00022 6.0865L1.64907 7.40257L2.17418 4.7598L0.195984 2.93044L2.87166 2.61319L4.00022 0.166504L5.12875 2.61319L7.80442 2.93044L5.82625 4.7598L6.35135 7.40257L4.00022 6.0865Z"
                fill="#FFCD29"
              />
            </g>
            <defs>
              <clipPath id="clip0_929_3175">
                <rect width="8" height="8" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div
            style={{
              color: '#727272',
              fontSize: 8,
              fontFamily: 'Nunito',
              fontWeight: 600,
              lineHeight: '12px',
            }}
          >
            4,8
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
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.12133 5.78784L4 7.90914L1.87868 5.78784C0.707107 4.61624 0.707107 2.71676 1.87868 1.54518C3.05025 0.373611 4.94973 0.373611 6.12133 1.54518C7.2929 2.71676 7.2929 4.61624 6.12133 5.78784ZM4 4.33317C4.3682 4.33317 4.66667 4.0347 4.66667 3.6665C4.66667 3.29831 4.3682 2.99984 4 2.99984C3.6318 2.99984 3.33333 3.29831 3.33333 3.6665C3.33333 4.0347 3.6318 4.33317 4 4.33317Z"
              fill="#0095FF"
            />
          </svg>
          Semarang, Jawa Tengah
        </div>
      </div>
    </div>
  )
}

export default ProductFlashsale

'use client'

import { Phone } from 'lucide-react'

export default function Header() {
  return (
    <header style={{ 
      backgroundColor: 'white', 
      borderBottom: '1px solid #f3f4f6',
      padding: '16px 0'
    }}>
      <div className="section-container">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center'
        }}>
          {/* Logo - Better styled to match reference */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ 
              fontSize: '28px', 
              fontWeight: 'bold',
              color: '#37405E',
              letterSpacing: '-0.5px'
            }}>
              <span style={{ 
                color: '#937B37',
                fontSize: '32px'
              }}>F</span>
              <span style={{ 
                color: '#937B37',
                fontSize: '32px'
              }}>F</span>
              <span style={{ 
                color: '#937B37',
                fontSize: '32px'
              }}>S</span>
            </div>
            <div style={{
              marginLeft: '8px',
              fontSize: '10px',
              color: '#6b7280',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              FINDING THE INVESTMENT
            </div>
          </div>
          
          {/* Call Button - Styled to match reference */}
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            backgroundColor: '#37405E',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(55, 64, 94, 0.2)',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#2d3548'
            e.currentTarget.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#37405E'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
          >
            <Phone size={16} />
            Call Us Now
          </button>
        </div>
      </div>
    </header>
  )
}

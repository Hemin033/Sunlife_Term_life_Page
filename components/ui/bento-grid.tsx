'use client'

import React from 'react'

interface BentoGridProps {
  className?: string
  children?: React.ReactNode
}

interface BentoGridItemProps {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
}

export function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1rem',
        padding: '0'
      }}
    >
      {children}
    </div>
  )
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
}: BentoGridItemProps) {
  return (
    <div
      className={className}
      style={{
        background: '#fff',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '320px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
    >
      {header && (
        <div style={{ marginBottom: '16px' }}>
          {header}
        </div>
      )}
      
      {icon && (
        <div style={{ marginBottom: '16px', fontSize: '24px' }}>
          {icon}
        </div>
      )}
      
      {title && (
        <div style={{
          fontSize: '20px',
          fontWeight: '700',
          color: '#1f2937',
          marginBottom: '8px',
          lineHeight: '1.3'
        }}>
          {title}
        </div>
      )}
      
      {description && (
        <div style={{
          fontSize: '16px',
          color: '#4a5568',
          lineHeight: '1.6',
          flex: '1'
        }}>
          {description}
        </div>
      )}
    </div>
  )
}

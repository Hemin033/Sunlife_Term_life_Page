import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Manulife Vitality - Life Insurance That Pays You Back',
  description: 'Free Apple Watch. Lower Premiums. Gift Cards. Life insurance that actually pays YOU back.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}


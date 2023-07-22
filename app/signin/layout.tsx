export const metadata = {
    title: 'Netflix-clone',
    description: 'Developed by dev franqqi',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className="font-roboto w-screen bg-black h-screen">{children}</body>
      </html>
    )
  }
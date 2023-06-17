import './globals.css'


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
      <body className="font-roboto">{children}</body>
    </html>
  )
}

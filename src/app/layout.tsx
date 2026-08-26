import './globals.css';
import { NavigationProvider } from '@/components/layout/NavigationContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning data-scroll-behavior="smooth">
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <NavigationProvider>
          {children}
        </NavigationProvider>
      </body>
    </html>
  );
}
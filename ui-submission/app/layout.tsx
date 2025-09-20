import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Action Flow Dashboard',
    description: 'Manage your action flows and influencer engagement systems',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="8vfmc5l">
            <head data-oid="cdp5hta">
                <link rel="preconnect" href="https://fonts.googleapis.com" data-oid=":6sk494" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                    data-oid="-kkve:k"
                />
            </head>
            <body className="antialiased" data-oid="-1a35.6">
                {children}
            </body>
        </html>
    );
}

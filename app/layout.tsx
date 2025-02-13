import type { Metadata } from "next";
import { Figtree } from 'next/font/google'
import "./globals.css";
import SideBar from '@/components/Sidebar';
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModelProvider from "@/providers/ModelProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserId from "@/actions/getSongsById";
import Player from "@/components/Player";



const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen your favourite music!",
};

export const revalidate = 0

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const userSongs = await getSongsByUserId()
  return (

    <html lang="en">
      <body
        className={font.className}
      >
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModelProvider />
            <SideBar songs={userSongs}>
              {children}

            </SideBar>
            <Player/>

          </UserProvider>


        </SupabaseProvider>



      </body>
    </html>
  );
}

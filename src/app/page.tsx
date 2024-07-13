'use client'
import Image from 'next/image'
import { V0Navigatior } from '@/components/v0-navigator'
import { HomeGallery } from '@/components/home-gallery'
export default function Home() {
  return (
    <>
      <div>
         <V0Navigatior />
      </div>
    
    <div>
      <HomeGallery/> 
    </div></>
  )
}

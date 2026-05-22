
import { V0Navigatior } from '@/components/v0-navigator'
import { Card } from '@/components/ui/card'
import PageDefault from '@/components/PageDefault'
import { Metadata } from 'next';

const pageTitle = 'About'

export const metadata: Metadata = {
    title: pageTitle,
    description: 'Email your inquiry!'
};


export default function About() {
  return (
<div>
    <V0Navigatior/>
    <PageDefault/>
    <Card>
 
  <div className='bg-white rounded-xl shadow-lg overflow-hidden text-wrap text-4xl font-bold text-white text-shadow-lg/50 shadow-cyan-400'>
     Currently focused on our current workflow and accepting inquiries from prospective clients. 
     Please email <a href="emailto:detailhabit562@gmail.com">detailhabit562@gmail.com
      </a>
      </div>
  </Card>

 </div>
  )
}
import PageDefault from '@/components/PageDefault';
import { Card } from '@/components/ui/card';
import { V0Navigatior } from '@/components/v0-navigator'
import { Metadata } from 'next';

export const metaData: Metadata = {
  title: 'pageTitle',
  description: 'Email us a Request for Proposal and Mock up for FREE!'
}


export default function MovileDev() {
  return (
<div>
    <V0Navigatior/>
  <PageDefault/>
    <h1>Contact </h1>
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

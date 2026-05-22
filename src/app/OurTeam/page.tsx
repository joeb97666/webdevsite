import { V0Navigatior } from '@/components/v0-navigator'
import CardHow from '@/components/CardHow'
import { Metadata } from 'next';


const pageTitle = 'Our Team';

export const metadata: Metadata = {
    title: 'pageTitle',
    description: 'A brief description of our team members.'
};



export default function OurTeam() {
  return (
<div>
    <V0Navigatior/>


    <CardHow title={pageTitle}/>

</div>

);
};
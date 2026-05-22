import { V0Navigatior } from '@/components/v0-navigator'
import CardHow from '@/components/CardHow'
import { Metadata } from 'next';

const pageTite = 'Our Story';

export const metadata: Metadata = {
    title: 'pageTitle',
    description: 'Where did we start? Where are we now? Where we are going.?'
};

export default function OurStory() {
  return (
<div>
    <V0Navigatior/>

    <h1>Our Story </h1>
    <CardHow title={pageTite}/>


</div>
  )
}
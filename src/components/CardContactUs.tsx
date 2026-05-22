import { Card, CardContent, CardTitle, CardDescription, CardHeader } from "./ui/card";
import Link from "next/link";
import Image from "next/legacy/image";


const CardContactUs = () => {
    return(
        <div>
            <Card className="ring-2 ring-blue-500/30">
            <CardTitle className='text-center'>dbMarketing</CardTitle>

                <CardHeader className="space-y-4">
                    Portfolio and Advert page under construction...
                </CardHeader>

                <div className='bg-white rounded-xl shadow-lg overflow-hidden text-wrap text-4xl font-bold text-white text-shadow-lg/50 shadow-cyan-400'>
                    For now all we can put here is:<br/>
                    Currently focused on our current workflow and accepting inquiries from prospective clients.
                    Please email <a href="emailto:detailhabit562@gmail.com">detailhabit562@gmail.com
                    </a>
                </div>
                    <Link href='/' className='flex-center'>
                        <Image src='/images/logo.png' 
                        width={300}
                        height={300}
                        alt={`${"DB-Marketing"} logo`}/>
                    </Link>
                    
        </Card> 
        </div>
         );    
            };


export default CardContactUs;

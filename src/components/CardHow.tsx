import { Card, CardContent, CardHeader } from "./ui/card";
import Link from "next/link";
import Image from "next/image";

type CardHowProps = {
    title: string;
};

// Set this to the logo path when the file exists, e.g. "/images/logo.png".
// While null, a text placeholder renders instead of a broken image.
const logoSrc: string | null = null;

const CardHow = ({ title }: CardHowProps) => {
    return (
        // NOTE: top spacing now comes from this wrapper / the parent above it.
        // If the card sits too low, trim the parent's top padding rather than adding a negative margin here.
        <div className="w-full max-w-lg mx-auto px-6 pb-16">
            <Card className="relative flex min-h-[640px] flex-col overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-900 pb-[20mm] text-slate-100 shadow-[0_0_45px_-5px_rgb(34_211_238_/_0.45)]">
                {/* decorative corner glow */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl"
                />

                <CardHeader className="relative mb-[10mm] space-y-3">
                    <div className="flex flex-col items-start gap-2">
                        <h2 className="text-3xl font-bold tracking-tight text-white">
                            {title}
                        </h2>
                        <span className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300 ring-1 ring-inset ring-cyan-400/30">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
                            </span>
                            More information coming soon
                        </span>
                    </div>
                    <p className="text-sm text-slate-400">How did you find this page?</p>
                </CardHeader>

                <CardContent className="relative flex flex-1 flex-col space-y-5">
                    <div className="space-y-1 text-slate-300">
                        <p>Currently focused on current workflow.</p>
                        <p>Accepting inquiries from prospective clients.</p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                        <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400/80">
                            For now
                        </p>
                        
                       <a href="mailto:detailhabit562@gmail.com"
                            className="mt-1 inline-block whitespace-nowrap text-amber-400 underline underline-offset-4 decoration-amber-500/40 transition duration-150
                                       [text-shadow:0_0_4px_rgb(251_191_36_/_0.35)]
                                       hover:text-cyan-300 hover:decoration-cyan-400
                                       hover:[text-shadow:0_0_12px_rgb(34_211_238_/_0.75)]">
                       
                            detailhabit562@gmail.com
                        </a>
                    </div>

                    {/* footer block — mt-auto pins it to the bottom, above the card's 20mm padding */}
                    <div className="mt-auto border-t border-white/10 pt-5">
                        <Link href="/" className="flex justify-center" aria-label="Go to home">
                            {logoSrc ? (
                                <Image
                                    src={logoSrc}
                                    width={300}
                                    height={300}
                                    alt="DB-Marketing logo"
                                    className="h-28 w-28 object-contain opacity-90 transition duration-150 hover:opacity-100"
                                />
                            ) : (
                                <span className="text-lg font-semibold tracking-tight text-slate-200 transition duration-150 hover:text-white">
                                    DB-Marketing
                                </span>
                            )}
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default CardHow;
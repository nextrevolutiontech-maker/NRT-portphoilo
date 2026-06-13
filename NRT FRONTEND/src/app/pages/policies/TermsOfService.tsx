import { Helmet } from "react-helmet-async";

export function TermsOfService() {
    return (
        <div className="pt-40 pb-24 bg-[#F2F2F2] min-h-screen text-slate-900">
            <Helmet>
                <title>Terms of Service | Next Revolution Tech</title>
            </Helmet>

            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 bg-white p-16 rounded-[2.5rem] shadow-sm">
                <h1 className="text-6xl font-black mb-8 tracking-tighter">Terms of <span className="text-orange-600">Service</span></h1>
                <p className="text-muted-foreground font-bold mb-12">Last Updated: January 2026</p>

                <div className="space-y-12 font-bold leading-relaxed">
                    <section>
                        <h2 className="text-3xl font-black mb-6 tracking-tighter">1. Terms</h2>
                        <p className="mb-4">
                            By accessing the website at nextrevolutiontech.tech, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black mb-6 tracking-tighter">2. Use License</h2>
                        <p className="mb-4">
                            Permission is granted to temporarily download one copy of the materials (information or software) on Next Revolution Tech's website for personal, non-commercial transitory viewing only.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black mb-6 tracking-tighter">3. Disclaimer</h2>
                        <p className="mb-4">
                            The materials on Next Revolution Tech's website are provided on an 'as is' basis. Next Revolution Tech makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black mb-6 tracking-tighter">4. Limitations</h2>
                        <p className="mb-4">
                            In no event shall Next Revolution Tech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Next Revolution Tech's website.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

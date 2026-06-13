import { Helmet } from "react-helmet-async";

export function GDPRCompliance() {
    return (
        <div className="pt-40 pb-24 bg-[#F2F2F2] min-h-screen text-slate-900">
            <Helmet>
                <title>GDPR Compliance | Next Revolution Tech</title>
            </Helmet>

            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 bg-white p-16 rounded-[2.5rem] shadow-sm">
                <h1 className="text-6xl font-black mb-8 tracking-tighter">GDPR <span className="text-orange-600">Compliance</span></h1>
                <p className="text-muted-foreground font-bold mb-12">Last Updated: January 2026</p>

                <div className="space-y-12 font-bold leading-relaxed">
                    <section>
                        <h2 className="text-3xl font-black mb-6 tracking-tighter">1. Data Protection</h2>
                        <p className="mb-4">
                            We are committed to ensuring the security and protection of the personal information that we process, and to provide a compliant and consistent approach to data protection.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black mb-6 tracking-tighter">2. Your Rights</h2>
                        <p className="mb-4">Under GDPR, you have the following rights:</p>
                        <ul className="list-disc pl-6 space-y-4 mb-4 text-muted-foreground">
                            <li>The right to be informed</li>
                            <li>The right of access</li>
                            <li>The right to rectification</li>
                            <li>The right to erasure</li>
                            <li>The right to restrict processing</li>
                            <li>The right to data portability</li>
                            <li>The right to object</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black mb-6 tracking-tighter">3. Data Retention</h2>
                        <p className="mb-4">
                            We only retain personal data for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

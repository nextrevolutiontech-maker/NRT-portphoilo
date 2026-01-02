import { Helmet } from "react-helmet-async";

export function GDPRCompliance() {
    return (
        <div className="pt-32 pb-20 bg-background min-h-screen">
            <Helmet>
                <title>GDPR Compliance - Next Revolution Tech</title>
                <meta name="description" content="GDPR Compliance Statement for Next Revolution Tech. We are committed to protecting data privacy." />
            </Helmet>

            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold mb-8 text-primary">GDPR Compliance</h1>
                <p className="text-muted-foreground mb-8">Last Updated: January 2026</p>

                <div className="space-y-8 text-foreground">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
                        <p className="mb-4">
                            Next Revolution Tech is committed to compliance with the General Data Protection Regulation (GDPR). We recognize the importance of protecting the personal data of our European Union clients and users.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Your Rights Under GDPR</h2>
                        <p className="mb-4">If you are a resident of the European Economic Area (EEA), you have the following data protection rights:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li><strong>Right to Access:</strong> You have the right to request copies of your personal data.</li>
                            <li><strong>Right to Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
                            <li><strong>Right to Erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                            <li><strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data.</li>
                            <li><strong>Right to Object to Processing:</strong> You have the right to object to our processing of your personal data.</li>
                            <li><strong>Right to Data Portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Data Processing</h2>
                        <p className="mb-4">
                            We process personal data only when we have a legal basis to do so, such as fulfillment of a contract, consent, or legitimate interest. We do not sell your personal data to third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Contact for Data Protection</h2>
                        <p className="mb-4">
                            If you wish to encourage any of these rights or have questions about our data practices, please contact us via our Contact page.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

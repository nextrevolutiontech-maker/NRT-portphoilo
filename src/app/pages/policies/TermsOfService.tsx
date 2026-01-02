import { Helmet } from "react-helmet-async";

export function TermsOfService() {
    return (
        <div className="pt-32 pb-20 bg-background min-h-screen">
            <Helmet>
                <title>Terms of Service - Next Revolution Tech</title>
                <meta name="description" content="Terms of Service for Next Revolution Tech. Read our terms and conditions for using our services." />
            </Helmet>

            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold mb-8 text-primary">Terms of Service</h1>
                <p className="text-muted-foreground mb-8">Last Updated: January 2026</p>

                <div className="space-y-8 text-foreground">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                        <p className="mb-4">
                            By accessing or using the website and services of Next Revolution Tech, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
                        <p className="mb-4">
                            Next Revolution Tech provides software development, consulting, and design services. Specific services and deliverables are defined in individual statements of work or contracts.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
                        <p className="mb-4">
                            Unless otherwise stated in a specific contract, all code, designs, and materials created by us remain our intellectual property until full payment is received and rights are transferred.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
                        <p className="mb-4">
                            To the fullest extent permitted by law, Next Revolution Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">5. Governing Law</h2>
                        <p className="mb-4">
                            These Terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

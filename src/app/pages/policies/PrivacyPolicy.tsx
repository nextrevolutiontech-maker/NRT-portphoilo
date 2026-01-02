import { Helmet } from "react-helmet-async";

export function PrivacyPolicy() {
    return (
        <div className="pt-32 pb-20 bg-background min-h-screen">
            <Helmet>
                <title>Privacy Policy - Next Revolution Tech</title>
                <meta name="description" content="Privacy Policy for Next Revolution Tech. Learn how we collect, use, and protect your data." />
            </Helmet>

            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold mb-8 text-primary">Privacy Policy</h1>
                <p className="text-muted-foreground mb-8">Last Updated: January 2026</p>

                <div className="space-y-8 text-foreground">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                        <p className="mb-4">
                            Next Revolution Tech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                        <p className="mb-4">We collect information that you provide directly to us, including:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Contact information (name, email address, phone number) provided via our contact forms.</li>
                            <li>Project details and requirements you share with us.</li>
                            <li>Communications you send to us.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                        <p className="mb-4">We use the information we collect to:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Provide, maintain, and improve our services.</li>
                            <li>Respond to your comments, questions, and requests.</li>
                            <li>Communicate with you about services, offers, and events.</li>
                            <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                        <p className="mb-4">
                            We implement reasonable security measures to protect your information. However, no security system is impenetrable and we cannot guarantee the security of our systems 100%.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions about this Privacy Policy, please contact us via our Contact form.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

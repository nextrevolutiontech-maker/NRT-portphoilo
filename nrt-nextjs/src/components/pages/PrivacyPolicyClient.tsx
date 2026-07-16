"use client";
import Image from "next/image";


export function PrivacyPolicyClient() {
    return (
        <div className="pt-40 pb-24 bg-[#F2F2F2] min-h-screen text-slate-900">
            

            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 bg-white p-16 rounded-[2.5rem] shadow-sm">
                <h1 className="text-6xl font-black mb-8 tracking-tighter">Privacy <span className="text-orange-600">Policy</span></h1>
                <p className="text-muted-foreground font-bold mb-12">Last Updated: January 2026</p>

                <div className="space-y-12 font-bold leading-relaxed">
                    <section>
                        <h2 className="text-3xl font-black mb-6 tracking-tighter">1. Introduction</h2>
                        <p className="mb-4">
                            Next Revolution Tech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black mb-6 tracking-tighter">2. Information We Collect</h2>
                        <p className="mb-4">We collect information that you provide directly to us, including:</p>
                        <ul className="list-disc pl-6 space-y-4 mb-4 text-muted-foreground">
                            <li>Contact information (name, email address, phone number) provided via our contact forms.</li>
                            <li>Project details and requirements you share with us.</li>
                            <li>Communications you send to us.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black mb-6 tracking-tighter">3. How We Use Your Information</h2>
                        <p className="mb-4">We use the information we collect to:</p>
                        <ul className="list-disc pl-6 space-y-4 mb-4 text-muted-foreground">
                            <li>Provide, maintain, and improve our services.</li>
                            <li>Respond to your comments, questions, and requests.</li>
                            <li>Communicate with you about services, offers, and events.</li>
                            <li>Monitor and analyze trends, usage, and activities.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black mb-6 tracking-tighter">4. Data Security</h2>
                        <p className="mb-4">
                            We implement reasonable security measures to protect your information. However, no security system is impenetrable and we cannot guarantee the security of our systems 100%.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black mb-6 tracking-tighter">5. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions about this Privacy Policy, please contact us via our Contact form or email at support@nextrevolutiontech.tech.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

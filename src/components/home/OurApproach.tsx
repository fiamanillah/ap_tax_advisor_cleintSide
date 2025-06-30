// components/OurApproach.tsx
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const steps = [
    {
        step: 'Step 1',
        title: 'Get in touch',
        icon: '/icons/Step1.svg',
        description:
            'Send us your query and we’ll get back to you within 24–48 hours to understand your needs and kick things off.',
    },
    {
        step: 'Step 2',
        title: 'We analyse your tax affairs',
        icon: '/icons/Step2.svg',
        description:
            'We take a detailed look at your situation and goals, then advise on the best approach to maximise reliefs and avoid risks.',
    },
    {
        step: 'Step 3',
        title: 'Agree your plan',
        icon: '/icons/Step3.svg',
        description:
            'You’ll receive a clear proposal with transparent pricing. Once approved, we’ll get you fully onboarded with minimal admin.',
    },
    {
        step: 'Step 4',
        title: 'We deliver and support you year-round',
        icon: '/icons/Step4.svg',
        description:
            'From filings to ongoing advice, we handle it all and stay by your side – proactive, responsive, and always looking ahead.',
    },
];

export default function OurApproach() {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">Our Approach</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <Card
                            key={index}
                            className="h-full shadow-md hover:shadow-lg transition-all px-6"
                        >
                            <CardContent className="p-6 flex flex-col items-start space-y-4">
                                <div className="border border-yellow-500/20 rounded-full p-3 self-center">
                                    <div className="border border-yellow-500/50 rounded-full p-3">
                                        <div className="border border-yellow-500 rounded-full p-3">
                                            <Image
                                                src={step.icon}
                                                alt={`${step.title} icon`}
                                                width={40}
                                                height={40}
                                                className="w-20 h-20 p-1"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-lg  text-yellow-500">{step.step}</div>
                                <h3 className="text-xl font-medium">{step.title}</h3>
                                <p className="text-sm text-muted-foreground">{step.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

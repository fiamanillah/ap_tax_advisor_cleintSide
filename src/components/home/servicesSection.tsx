import Image from 'next/image';
import { Card } from '../ui/card';
// data/services-data.ts
export const services = [
    {
        title: '👤 Personal Tax (Self-Assessment)',
        align: 'left',
        items: [
            'UK-based ACCA accredited accountant works on your taxes',
            'Full calculation of your tax bill for approval',
            'Filing with HMRC on your behalf',
            'Review of tax reliefs and tax planning opportunities',
            'Reviewing eligibility for expense claims',
            'Assistance with late filing penalties and interests',
            'Submitted overpayment relief claims',
            'Tax payment reminders',
            'Changes in the tax landscape that may impact you',
        ],
        image: '/assets/taxAdvisor.png',
        imageTitle: 'Tax Advisor',
        verifyLogo: '/icons/verifiedBlue.svg',
    },
    {
        title: '🏢 Corporate Accountant',
        align: 'right',
        items: [
            'Corporation tax return (CT600)',
            'Annual accounts',
            'Bookkeeping',
            'VAT',
            'Payroll',
            'Filing with HMRC and Companies House',
            'Advice on allowable expenses and profit extraction',
            'Support with VAT, payroll, and bookkeeping',
            'Confirmation statement filing',
            'Registered office service',
        ],
        image: '/assets/chartedAccountant.png',
        imageTitle: 'Charted Accountant',
        verifyLogo: '/icons/verifiedGreen.svg',
    },
    {
        title: '📊 Tax Advice',
        align: 'left',
        items: [
            'Personal or business tax strategy review',
            'Guidance on structure; see broker vs. limited company',
            'Advice on future tax planning and liabilities',
            'Support with HMRC letters, queries, and disputes',
            'Recommendations tailored to your financial goals',
            'Ongoing updates on relevant tax law or changes',
        ],
        image: '/assets/customerSupport.png',
        imageTitle: 'Customer Support',
        verifyLogo: '/icons/verifiedYellow.svg',
    },
];

export default function ServicesSection() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">What&apos;s Included</h1>
            <div className="flex flex-col gap-20">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`flex flex-col w-full ${
                            service.align === 'left' ? 'items-start' : 'items-end'
                        }`}
                    >
                        {service.items && (
                            <div
                                className={`w-full flex items-center gap-8 justify-between ${
                                    service.align === 'right' ? 'flex-row-reverse' : ''
                                }`}
                            >
                                <div>
                                    <h1 className="text-2xl mb-5 font-medium">{service.title}</h1>
                                    <ul className="space-y-2">
                                        {service.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <Image
                                                    src="/icons/check.svg"
                                                    alt="Check"
                                                    width={24}
                                                    height={24}
                                                />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Card className="p-4 flex flex-col items-center relative">
                                    <Image
                                        src={service.image}
                                        alt="Separator"
                                        width={150}
                                        height={150}
                                    />
                                    <h1 className="text-center text-2xl font-medium w-1/2">
                                        {service.imageTitle}
                                    </h1>
                                    <Image
                                        src={service.verifyLogo}
                                        alt="Separator"
                                        width={50}
                                        height={50}
                                        className="absolute -top-5 -right-5"
                                    />
                                </Card>
                            </div>
                        )}

                        {/* {index < services.length - 2 && <Separator className="my-8" />} */}
                    </div>
                ))}
            </div>
        </div>
    );
}

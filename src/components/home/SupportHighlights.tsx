// components/SupportHighlights.tsx
export default function SupportHighlights() {
    const highlights = [
        {
            title: 'All-Year-Round Support',
            points: [
                'Regular check-ins',
                'Deadline alerts',
                'Answers to your questions — big or small',
                'Updates on tax changes that actually affect you',
                'Support dealing with HMRC any time of year',
            ],
            description:
                'We don’t disappear once your return is filed. With us, you get year-round access to proactive support, helpful reminders, and personalised advice whenever you need it.',
        },
        {
            title: "Relax! We've got it covered",
            points: [
                'Personal, one-to-one support',
                'Clear communication every step of the way',
                'Deadlines, documents, HMRC — all handled',
                'Filed accurately, on time, with nothing overlooked',
            ],
            description:
                'Tax doesn’t have to come with stress, confusion, or last-minute panic. We make the process smooth, simple, and sorted — so you can get on with your life. Peace of mind, from start to finish.',
        },
        {
            title: 'Peace of mind',
            points: ['Fair, transparent pricing', 'No hidden costs', 'Only pay for what you need'],
            description:
                'No one-size-fits-all fees here. We’ll give you a personalised quote based on your specific circumstances — nothing more, nothing less.',
        },
    ];

    return (
        <section className="py-16 bg-[#fdf1e6]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {highlights.map((item, index) => (
                        <div key={index}>
                            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                            <p className="text-sm text-gray-700 mb-4">{item.description}</p>
                            <ul className="list-none space-y-1 text-sm text-gray-900">
                                {item.points.map((point, idx) => (
                                    <li key={idx}>✓ {point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

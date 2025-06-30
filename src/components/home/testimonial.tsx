'use client';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
type Testimonial = {
    name: string;
    location: string;
    avatar: string;
    rating: number;
    feedback: string;
};

const testimonials: Testimonial[] = [
    {
        name: 'Mehedi Hasan',
        location: 'Dhaka, Bangladesh',
        avatar: '/avatars/avatar-1.jpg',
        rating: 4,
        feedback:
            'Mauris ac tempor augue milan magna magna. Velit lobortis eget consequat nunc. Nisi sed pellentesque semper in. Integer dignissim, mauris a convallis laoreet, metus orci viverra lacus, at fermentum metus nunc nec justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
        name: 'Anhoniya',
        location: 'London, UK',
        avatar: '/avatars/avatar-2.jpg',
        rating: 5,
        feedback:
            'Mauris ac tempor augue milan adipiscing senectus leo magna magna. Velit lobortis eget consequat bibendum odio neque nunc. Fusce vulputate eros at ante sollicitudin, a facilisis libero tempor. Vivamus lobortis sapien nec velit elementum, at sodales nunc pulvinar. Nulla facilisi.',
    },
    {
        name: 'Rezwan Sekhor',
        location: 'Toronto, Canada',
        avatar: '/avatars/avatar-3.jpg',
        rating: 4,
        feedback:
            'Lorem ipsum dolor sit amet consectetur adipiscing senectus leo magna magna. Velit lobortis eget consequat. Morbi at pulvinar arcu. Sed consequat mi nec quam aliquam, sit amet pretium sem tincidunt. Duis vel erat quis sapien egestas varius in vel ligula.',
    },
    {
        name: 'Afsana Khan',
        location: 'Sylhet, Bangladesh',
        avatar: '/avatars/avatar-4.jpg',
        rating: 5,
        feedback:
            'Dolor sit amet consectetur adipiscing elit. Etiam vel dapibus eros. Proin nec turpis vel orci vehicula. Nunc accumsan, magna a vulputate dapibus, turpis nunc posuere justo, nec rutrum risus magna sed mauris. Curabitur vel quam ac metus congue dignissim.',
    },
    {
        name: 'Nayeem Rahman',
        location: 'Chattogram, Bangladesh',
        avatar: '/avatars/avatar-5.jpg',
        rating: 5,
        feedback:
            'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    },
    {
        name: 'Sarah Johnson',
        location: 'New York, USA',
        avatar: '/avatars/avatar-6.jpg',
        rating: 4,
        feedback:
            'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    },
    {
        name: 'Hiroshi Tanaka',
        location: 'Tokyo, Japan',
        avatar: '/avatars/avatar-7.jpg',
        rating: 5,
        feedback:
            'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus. Nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    },
    {
        name: 'Elena Petrova',
        location: 'Moscow, Russia',
        avatar: '/avatars/avatar-8.jpg',
        rating: 4,
        feedback:
            'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. Et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.',
    },
];

export default function TestimonialsCarousel() {
    return (
        <section
            className="relative py-16   overflow-hidden bg-gray-50 bg-no-repeat bg-bottom bg-f"
            // style={{ backgroundImage: "url('/Wave.png')" }}
        >
            <div
                className="absolute bottom-0 left-0 w-full h-full bg-no-repeat bg-bottom bg-cover pointer-events-none z-0 "
                style={{ backgroundImage: "url('/Wave.png')" }}
            />
            <div className="relative z-10 mx-auto">
                {/* Wave background behind heading */}
                <h2 className="text-4xl font-bold text-center mb-12">What are people saying</h2>

                <Carousel opts={{ align: 'center', loop: true }} className="w-full">
                    <CarouselContent>
                        {testimonials.map((t, i) => (
                            <CarouselItem
                                key={i}
                                className="basis-[85%] md:basis-[50%] lg:basis-[28%] px-4 py-2"
                            >
                                <Card className="rounded-2xl shadow-md h-full bg-white/60 backdrop-blur-xs">
                                    <CardContent className="p-6 space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="font-semibold text-lg">{t.name}</h3>
                                                <p className="text-sm text-gray-500">
                                                    {t.location}
                                                </p>
                                            </div>
                                            <Avatar className="w-14 h-14">
                                                <AvatarImage src={t.avatar} alt={t.name} />
                                                <AvatarFallback className="bg-green-500">
                                                    {t.name.slice(0, 2)}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, index) => (
                                                    <Star
                                                        key={index}
                                                        className={`w-4 h-4 ${
                                                            index < t.rating
                                                                ? 'text-green-500'
                                                                : 'text-gray-300'
                                                        }`}
                                                        fill={
                                                            index < t.rating
                                                                ? 'currentColor'
                                                                : 'none'
                                                        }
                                                    />
                                                ))}
                                                <span className="ml-2 text-sm text-gray-500">
                                                    Rating
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-center text-muted-foreground leading-relaxed">
                                            {t.feedback}
                                        </p>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
}

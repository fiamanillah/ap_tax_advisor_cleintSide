import Testimonial from "@/components/tax-advice/Testimonial";

export default function TestimonialSection() {
  return (
    <section>
      <div className="container mx-auto px-4 py-8 lg:max-w-6xl">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          What are people saying
        </h2>

        <Testimonial />
      </div>
    </section>
  );
}

import { Button } from "../ui/button";

export default function GetStarted() {
  return (
    <section>
      <div className="container mx-auto px-4 py-8 lg:max-w-6xl flex flex-col items-center">
        {/* New Call to Action Section */}
        <div className="w-full bg-[#A4F5D3] rounded-md p-6 md:p-10 flex flex-col items-center justify-center text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Let&apos;s get your Self Assessment sorted today
          </h2>
          <p className="text-black mb-6">Taxes as they should be done</p>
          <Button>Get started</Button>
        </div>
      </div>
    </section>
  );
}

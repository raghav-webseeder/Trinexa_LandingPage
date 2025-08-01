'use client';

export default function BenefitsSection() {
    return (
        <section className="py-16 px-4 bg-white max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* Image */}
            <div className="flex-shrink-0 w-full md:w-1/3 max-w-xs h-72 md:h-72 rounded-lg overflow-hidden shadow-md">
                <img
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
                    alt="Happy diverse team smiling"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-2/3">
                <h2 className="text-4xl font-serif font-semibold text-black mb-6">
                    Make a real difference with affordable employee benefits.
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    Supporting your team is more important than ever. With Gusto as your
                    broker, health insurance administration comes at no extra cost. Move
                    an existing plan or let our licensed advisors help you find the right
                    coverage.
                </p>
                <a
                    href="#"
                    className="text-teal-700 font-semibold hover:underline"
                >
                    Learn more about benefits
                </a>
            </div>
        </section>
    );
}

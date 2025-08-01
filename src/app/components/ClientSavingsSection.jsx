'use client';

export default function ClientSavingsSection() {
    return (
        <section className="bg-[#f5fbff] py-20 px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A6EBF] max-w-3xl mx-auto mb-12">
                Trinexa Global customers save hundreds of hours and reduce HR costs by 40%
            </h2>

            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto text-[#1A1A1A] mb-12">
                {/* Card 1 */}
                <div className="space-y-4">
                    <p>
                        <strong>Saved $20,000</strong> annually and <strong>20 hours</strong> a week
                        with Trinexa Payroll Automation.
                    </p>
                    <div className="h-10 flex items-center justify-center">
                        <span className="text-[#1A6EBF] font-bold text-sm uppercase">ROCKFORD</span>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="space-y-4 border-x border-gray-200 px-6">
                    <p>
                        <strong>Saved $40,000</strong> annually and <strong>hundreds of hours</strong>{' '}
                        with Trinexa Performance Management.
                    </p>
                    <div className="h-10 flex items-center justify-center">
                        <span className="text-[#F7941D] font-bold text-sm uppercase">ISTS</span>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="space-y-4">
                    <p>
                        <strong>Shortened a 3-week</strong> admin process into <strong>just 2 days</strong>{' '}
                        with Trinexa Benefits Administration.
                    </p>
                    <div className="h-10 flex items-center justify-center">
                        <span className="text-black font-bold text-sm uppercase">MMA Design</span>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-6">
                <button className="bg-[#F7941D] text-white px-6 py-3 rounded-full font-medium shadow hover:bg-[#cc7515] transition">
                    Get a Demo
                </button>
                <button className="border border-[#F7941D] text-[#F7941D] px-6 py-3 rounded-full font-medium hover:bg-[#fff3e5] transition">
                    See Case Studies
                </button>
            </div>
        </section>
    );
}

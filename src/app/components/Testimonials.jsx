'use client';

export default function Testimonials() {
    const testimonials = [
        {
            name: 'Anita Sharma',
            role: 'HR Manager, Vortex Systems',
            image: 'https://randomuser.me/api/portraits/women/44.jpg',
            message:
                'Trinexa Global transformed our payroll processing. What used to take days is now done in hours—with better accuracy!',
        },
        {
            name: 'David Lee',
            role: 'CTO, NextBridge Solutions',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            message:
                'With Trinexa, we streamlined employee onboarding and improved performance tracking across teams. Total game-changer.',
        },
        {
            name: 'Sara Ahmed',
            role: 'Director, Bright Future Schools',
            image: 'https://randomuser.me/api/portraits/women/65.jpg',
            message:
                'Our benefits admin process is now effortless thanks to Trinexa’s smart automation. Highly recommended!',
        },
        {
            name: 'Manoj Verma',
            role: 'Founder, SkillBridge Pvt Ltd',
            image: 'https://randomuser.me/api/portraits/men/45.jpg',
            message:
                'From compensation planning to advanced reporting—Trinexa’s platform gives us full control over HR ops in one place.',
        },
        {
            name: 'Elena Roberts',
            role: 'People Ops, ZenCraft Technologies',
            image: 'https://randomuser.me/api/portraits/women/21.jpg',
            message:
                'The onboarding experience has become smoother and more engaging for our remote teams—Trinexa nailed it.',
        },
        {
            name: 'Akash Mehta',
            role: 'Finance Head, QuantumLabs',
            image: 'https://randomuser.me/api/portraits/men/78.jpg',
            message:
                'We’ve reduced errors and saved thousands using Trinexa’s global payroll system. Truly reliable and scalable.',
        },
    ];

    return (
        <section className="bg-white py-20 px-6" id="testimonials">
            <h2 className="text-3xl font-bold text-[#1A6EBF] text-center mb-12">
                What Our Clients Say
            </h2>

            <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#f5fbff] rounded-lg shadow-md p-6 text-center border-t-4 border-[#F7941D] hover:shadow-lg transition duration-300"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 mx-auto rounded-full mb-4 object-cover border-2 border-[#1A6EBF]"
                        />
                        <p className="text-gray-700 text-sm italic mb-4">"{item.message}"</p>
                        <hr className="my-4 border-gray-200" />
                        <h4 className="text-[#1A6EBF] font-semibold">{item.name}</h4>
                        <p className="text-gray-500 text-sm">{item.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

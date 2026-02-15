import React, { useState, useEffect } from "react";
import hero_1 from '../assets/hero/hero_1.jpeg';
import hero_2 from '../assets/hero/hero_2.jpeg';
import hero_3 from '../assets/hero/hero_3.jpeg';

const Location = () => {
  const data = {
    name: "RC HOMES",
    type: "PG FOR GIRLS",
    tagline: "Your Home Away From Home",
    address: "Durgapura, Jaipur",
    phone: "6377964494",
    roomsLeft: 3,
    amenities: [
      {
        id: 1,
        title: "Attached Washroom",
        desc: "Private bathroom with 24/7 hot water facility.",
        features: ["100% Privacy", "Hot Water", "Ventilation", "Geyser"],
      },
      {
        id: 2,
        title: "24/7 Security",
        desc: "CCTV & security guard for complete safety.",
        features: ["CCTV", "Security Guard", "Entry Log", "Secure Gate"],
      },
      {
        id: 3,
        title: "High-Speed WiFi",
        desc: "Unlimited fast internet access.",
        features: ["100 Mbps", "Unlimited", "5GHz", "No FUP"],
      },
    ],
  };

  // const images = [
  //   "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop",
  //   "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  //   "https://images.unsplash.com/photo-1576675785091-d1db22fbaee8?q=80&w=2070&auto=format&fit=crop",
  //   "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop",
  // ];

    // Hero images
    const images = [
      hero_1,
      hero_2,
      hero_3
    ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, []);

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${data.phone}?text=Hi! I'm interested in RC HOMES PG.`,
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = `tel:${data.phone}`;
  };

  return (
    <div className="bg-gradient-to-b from-rose-50 via-white to-purple-50 font-sans">

      {/* HERO SECTION WITH SLIDER */}
      <section className="relative h-[90vh] flex items-center justify-center text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={images[currentImage]}
            alt="PG Room"
            className="w-full h-full object-cover transition-all duration-1000"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-purple-900/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {data.name} <span className="text-rose-300 block md:inline">{data.type}</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8">{data.tagline}</p>

          <div className="inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-sm font-medium mb-10 border border-white/30">
            Only {data.roomsLeft} Rooms Available
          </div>

          <div className="flex justify-center gap-6 flex-wrap">
            <button
              onClick={handleWhatsApp}
              className="bg-rose-500 hover:bg-rose-600 px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300"
            >
              Book via WhatsApp
            </button>

            <button
              onClick={handleCall}
              className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition duration-300"
            >
              Call Now
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* LOCATION SECTION */}
        <section className="mb-28">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-3">Our Location</h2>
            <p className="text-gray-600 text-lg">{data.address}</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-xl border border-purple-100">
            <div className="rounded-2xl overflow-hidden">
              <iframe
                title="RC Homes Location"
                src="https://maps.google.com/maps?q=RC%20HOMES%20PG%20FOR%20GIRLS%20Durgapura%20Jaipur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                className="w-full rounded-2xl"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FACILITIES SECTION */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-16">Our Facilities</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {data.amenities.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-xl border border-purple-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <div className="h-2 bg-gradient-to-r from-rose-500 to-purple-600"></div>
                <div className="p-8 flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-purple-700 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{item.desc}</p>
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    {item.features.map((feature, i) => (
                      <div
                        key={i}
                        className="bg-purple-50 text-purple-700 text-sm py-2 px-3 rounded-lg text-center font-medium"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mt-28 bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-3xl p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-3">Ready to Move In?</h3>
              <p className="text-rose-100">Safe, Comfortable and Affordable Stay in Jaipur</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleWhatsApp}
                className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition"
              >
                Book via WhatsApp
              </button>
              <button
                onClick={handleCall}
                className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition"
              >
                Call Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Location;

import { useState } from "react";
import contactImg from "../../assets/contact-banner.jpg";
import mainImg from "../../assets/ocean.jpg";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Header */}
      <div
        className="relative h-[320px] md:h-[420px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${contactImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto font-light">
            Let’s get in touch — we’d love to hear from you.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <section
        className="flex flex-col md:flex-row justify-center items-start min-h-screen px-4 py-12 gap-10"
        style={{
          backgroundImage: `url(${mainImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-6 backdrop-blur-md bg-gray-900/80 text-white 
          rounded-xl shadow-lg transition-all duration-300 p-8 w-full max-w-2xl border border-white/10"
        >
          {["name", "email"].map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block mb-1 text-sm font-semibold uppercase tracking-wide"
              >
                {field === "name" ? "Your Name" : "Your Email"}
              </label>
              <input
                id={field}
                name={field}
                type={field === "email" ? "email" : "text"}
                value={form[field]}
                onChange={handleChange}
                placeholder={`Enter your ${field}`}
                className="w-full bg-transparent border-b border-gray-400 focus:border-blue-500 focus:outline-none 
                py-2 text-white placeholder-gray-400 transition-colors font-light"
                autoFocus={field === "name"}
              />
            </div>
          ))}

          <div>
            <label
              htmlFor="message"
              className="block mb-1 text-sm font-semibold uppercase tracking-wide"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message"
              className="w-full bg-transparent border-b border-gray-400 focus:border-blue-500 focus:outline-none 
              py-2 text-white placeholder-gray-400 resize-none transition-colors font-light"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 transition-all duration-200 text-white py-2 px-6 rounded-md mt-2 self-start shadow-md hover:shadow-lg font-semibold"
          >
            Submit
          </button>

          {submitted && (
            <p className="text-green-400 text-sm mt-2">
              ✅ Message sent! We’ll get back to you soon.
            </p>
          )}
        </form>

        {/* Address Card */}
        <div
          className="flex-1 backdrop-blur-md bg-gray-900/80 text-white 
          rounded-xl shadow-lg transition-all duration-300 p-8 w-full max-w-md border border-white/10"
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold uppercase tracking-wide">
                Our Address
              </h2>
              <p className="text-gray-300 mt-1 font-light leading-relaxed">
                00100, Nairobi <br />
                Nairobi, Kenya
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold uppercase tracking-wide">
                Contact
              </h2>
              <p className="text-gray-300 mt-1 font-light leading-relaxed">
                Mobile:{" "}
                <a
                  href="tel:+254716152699"
                  className="text-blue-400 hover:underline"
                >
                  +254 716 152 699
                </a>
                <br />
                Mail:{" "}
                <a
                  href="mailto:info@lapa.africa"
                  className="text-blue-400 hover:underline"
                >
                  info@lapa.africa
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

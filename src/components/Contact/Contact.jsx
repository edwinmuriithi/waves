import { useState } from "react";

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

    // Reset form
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      {/* Header */}
      <div className="h-40 text-white p-4 font-sans flex justify-center flex-col items-center bg-green-950">
        <h1 className="font-medium text-4xl">Contact Us</h1>
        <p className="text-2xl font-serif">Let's get in touch</p>
      </div>

      {/* Main Section */}
      <section
        className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center px-4"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/08/b4/0c/08b40c4e6b025b2704df1ca8c202b519.jpg')",
        }}
      >
        <div className="flex flex-col md:flex-row gap-8 backdrop-blur-sm bg-gray-800/60 text-white rounded-lg shadow-2xl p-6 sm:p-8 w-full md:w-3/4 max-w-4xl">
          
          {/* Contact Info */}
          <div className="flex-1">
            <p>
              <strong>Our Address</strong> <br />
              00100, Nairobi <br />
              Nairobi, Kenya
            </p>
            <p className="mt-4">
              <strong>Contact</strong> <br />
              Mobile: +254716152699 <br />
              Mail: info@lapa.africa
            </p>
            <p className="mt-4">
              <strong>Working hours</strong> <br />
              Mon - Fri: 08:00 - 17:00 <br />
              Sat & Sun: 08:00 - 12:00
            </p>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col gap-6"
          >
            <div>
              <label htmlFor="name" className="block mb-1 text-sm">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-transparent border-b border-white focus:outline-none py-2 text-white placeholder-gray-300"
                autoFocus
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-transparent border-b border-white focus:outline-none py-2 text-white placeholder-gray-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 text-sm">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message"
                className="w-full bg-transparent border-b border-white focus:outline-none py-2 text-white placeholder-gray-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 transition-colors duration-200 text-white py-2 px-6 rounded mt-2 self-start"
            >
              Submit
            </button>

            {submitted && (
              <p className="text-green-400 text-sm mt-2">Message sent! We'll get back to you soon.</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

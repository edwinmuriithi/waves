import Typewriter from "typewriter-effect";

export default function TypewriterText() {
  return (
    <div className="text-5xl font-serif font-extrabold text-white leading-20">
      <span className="mr-4">Join the Movement</span>
      <Typewriter
        options={{
          strings: [
            " Protecting Marine Life...",
            " Fighting Plastic Pollution...",
            " Empowering Coastal Communities...",
          ],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 100,
        }}
      />
    </div>
  );
}

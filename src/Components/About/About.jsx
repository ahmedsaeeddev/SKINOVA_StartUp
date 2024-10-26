const About = () => {
  return (
    <section className="bg-[#FADA06] text-[#090909] p-8 md:p-12 lg:p-16">
      <div className="max-w-6xl mx-auto">
      <div className="p-2">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-6">
          Welcome to our startup, where we believe that every device deserves a unique touch!
          We specialize in providing high-quality, stylish skins for laptops and mobile devices,
          allowing you to express your individuality while protecting your tech.
        </p>
        <p className="text-lg mb-6">
          Our co-founders, Ahmed Saeed, a talented Web Developer, and Zaki, a creative Graphic Designer,
          combined their skills and passions to launch this venture. Together, they have crafted
          a diverse range of designs that cater to different tastes, ensuring that you find the
          perfect skin to reflect your personality.
        </p>
        </div>
        <div className="p-2">
        <h3 className="text-2xl font-semibold mb-4">Custom Skins Just for You</h3>
        <p className="text-lg mb-6">
          What sets us apart is our commitment to customization. We understand that everyone has
          a unique style, which is why we offer custom skin options. You can design your own skin
          using your favorite colors, patterns, or images, making your device truly one-of-a-kind.
          Our easy-to-use customization process allows you to upload your designs and see them come
          to life on your device.
        </p>
        </div>
        <div className="p-2">
        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
        <p className="text-lg mb-6">
          Our mission is to empower individuals to showcase their personality through their devices.
          We aim to provide high-quality products that not only enhance the aesthetic appeal of your
          tech but also offer protection against scratches and daily wear and tear.
        </p>
        </div>
        <div className="p-2">
          <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
          <ul className="list-disc list-inside text-lg">
            <p className="list"> Creativity: We celebrate unique designs and innovative ideas.</p>
            <p className="list"> Quality: Our skins are made from durable materials to ensure long-lasting protection.</p>
            <p className="list"> Customer Focus: We prioritize our customers&apos; needs and feedback to continuously improve.</p>
            <p className="list"> Collaboration: We believe in teamwork and the power of combining diverse skills.</p>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

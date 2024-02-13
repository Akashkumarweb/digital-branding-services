import Layout from '../components/Layout'; // Adjust the import path as needed

const SocialMediaManagement = () => {
  return (
    <Layout title="Social Media Management">
      <div className="hero-section bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Social Media Management</h1>
          <p className="mt-4 max-w-xl mx-auto">
            Elevate your brands presence across all social media platforms with our comprehensive management services.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Why Social Media Management?</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            In todays digital age, maintaining a strong social media presence is crucial for brand visibility and engagement. Our expert team helps you navigate the complexities of social media, ensuring your brand stands out.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Our Services Include</h2>
          <ul className="list-disc pl-5 text-lg">
            <li>Strategy Development</li>
            <li>Content Creation and Curation</li>
            <li>Community Management</li>
            <li>Analytics and Reporting</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Social Media?</h2>
          <a href="/contact" className="bg-blue-600 text-white py-3 px-6 rounded-lg">Contact Us</a>
        </section>
      </div>
    </Layout>
  );
};

export default SocialMediaManagement;

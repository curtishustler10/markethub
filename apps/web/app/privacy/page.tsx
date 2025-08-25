import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for MarketHub platform',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information you provide directly to us, such as when you create an account, update your profile, or contact us for support.
            </p>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">Personal Information</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Name and contact information (email, phone number)</li>
              <li>Business information (business name, address, ABN)</li>
              <li>Profile information (description, categories, preferences)</li>
              <li>Communication records and support requests</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">Automatically Collected Information</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Device and browser information</li>
              <li>IP address and location data</li>
              <li>Usage patterns and interaction data</li>
              <li>Cookies and similar technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Connect market organizers with vendors</li>
              <li>Process applications and facilitate communications</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Monitor and analyze trends and usage patterns</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may share your information in the following situations:
            </p>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">With Your Consent</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We share information with your explicit consent, such as when you apply to a market and we share your vendor profile with the market organizer.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mb-3">Service Providers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may share your information with third-party service providers who perform services on our behalf, such as hosting, data analysis, customer service, and email delivery.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mb-3">Legal Requirements</h3>
            <p className="text-gray-700 leading-relaxed">
              We may disclose your information if required to do so by law or in response to valid requests by public authorities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication requirements</li>
              <li>Employee training on data protection practices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights and Choices</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar technologies to collect information about your use of our services. You can control cookies through your browser settings, but disabling cookies may affect the functionality of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information during such transfers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-4 text-gray-700">
              <p>Email: privacy@markethub.com.au</p>
              <p>Address: MarketHub Privacy Officer, [Your Address], Australia</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

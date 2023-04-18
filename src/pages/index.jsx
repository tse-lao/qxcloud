import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>QX - Quote for Experience</title>
        <meta
          name="description"
          content="We are a Salesforce Consulting agency. We focus on Salesforce CPQ, Billing and full B2B Customer Journeys."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}

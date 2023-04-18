import Image from 'next/future/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is Revenue Cloud?',
      answer:
        'Revenue Cloud is a cloud-based software solution that streamlines the sales processes of a company. It automates pricing, quoting, and contracting, and helps sales reps to generate accurate quotes and proposals quickly and efficiently.',
    },
    {
      question: 'How can QXcloud help my company with Revenue Cloud?',
      answer: 'QXcloud can help your company with Revenue Cloud by providing consulting services to assess your current sales processes and develop a customized Revenue Cloud solution that fits your specific needs. They can also provide implementation, training, and support services to ensure the successful adoption and usage of Revenue Cloud.',
    },
    {
      question: 'What are the benefits of working with QXcloud?',
      answer:
        'The benefits of working with QXcloud include their expertise and experience in Revenue Cloud, their ability to provide customized solutions, their focus on customer success, and their commitment to delivering high-quality services.',
    },
  ],
  [
    {
      question: 'What industries does QXcloud specialize in?',
      answer:
        'QXcloud specializes in a range of industries including manufacturing, technology, telecommunications, and healthcare, as well as other industries that have complex products or sales processes.',
    },
    {
      question:
        'How long does it take to implement Revenue Cloud with QXcloud?',
      answer:
        'The implementation time of Revenue Cloud with QXcloud can vary depending on the complexity of your sales processes and the level of customization required. On average, it can take between 2-6 months to implement Revenue Cloud.',
    },
    {
      question:
        'What training and support are available from QXcloud?',
      answer:
        'QXcloud offers a range of training and support options including online training courses, in-person training sessions, and ongoing support to ensure the successful adoption and usage of Revenue Cloud.',
    },
  ],
  [
    {
      question: 'What is the cost of QXcloud services?',
      answer:
        'he cost of QXcloud services can vary depending on the scope of the project, the level of customization required, and other factors. They offer competitive pricing and work with their clients to develop a customized pricing plan that fits their specific needs and budget.',
    },
    {
      question: 'Can QXcloud provide ongoing support and maintenance for Revenue Cloud?',
      answer: 'Yes, QXcloud can provide ongoing support and maintenance for Revenue Cloud to ensure that it continues to meet your companys evolving needs and requirements.',
    },
    {
      question: 'How can I get started working with QXcloud?',
      answer:
        'You can get started working with QXcloud by contacting them to schedule a consultation to discuss your company Revenue Cloud needs and how they can help you achieve your goals.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

import Image from 'next/future/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

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
        'The cost of QXcloud services can vary depending on the scope of the project, the level of customization required, and other factors. They offer competitive pricing and work with their clients to develop a customized pricing plan that fits their specific needs and budget.',
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



export default function Faqs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

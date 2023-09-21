import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpeg'
import imageDaanSchuite from '@/images/team/daanschuite.jpeg'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-sky-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our mission"
        title="Drive growth, enhance efficiency, and elevate customer experiences."
        invert
      >
        <p>
        by delivering innovative solutions with our core centric values
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Reliable" invert>
          we believe that by being consistently honest, trustworthy, and transparent, we offer you not just a service, but a partnership you can count on.
          </GridListItem>
          <GridListItem title="Team-driven customer success" invert>
            We believe that by investing in our employees and putting them first, 
            we are better equipped to serve you, our valued customer, with excellence, dedication, and consistency.
          </GridListItem>
          <GridListItem title="Customer Centric" invert>
          It is not just about reacting; it is about anticipating, innovating, and sometimes making challenging decisions, all with the goal of delivering the best possible experience and outcomes for you.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Team',
    people: [
      {
        name: 'Daan',
        role: 'Co-Founder / CEO',
        image: { src: imageDaanSchuite },
      },
      {
        name: 'Joel',
        role: 'Co-Founder / CTO',
        image: { src: imageLeslieAlexander },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-sky-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-sky-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadMDXMetadata('blog')).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="We are" title="QX Cloud">
        <p>
          A young and dynamic company that specializes in full B2B customer journeys.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
        <p>
        We focus on optimizing the entire quote-to-cash process. QX Cloud boasts extensive experience in guiding and implementing B2B customer journeys, with a strong emphasis on our clients' customers.         
        </p>
        <p>
        We provide guidance and recommendations to our clients on how to most efficiently approach their customers or how to enable sales teams to quote to customers more rapidly and accurately.
          Drawing upon our many years of experience in implementing CPQ (Configure, Price, Quote) solutions, we are well-equipped to offer sound advice to our clients in making the right choices.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="10+" label="Years of experience" />
          <StatListItem value=">25" label="Delivered projects" />
        </StatList>
      </Container>

      <Culture />
      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Stay ahead with the latest news, benefit from expert consultations, and learn from success stories to steer your business towards success."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-sky-300 before:content-['/_'] after:text-sky-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-sky-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Crawl() {
  return (
    <Section title="Crawl" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-sky-600">
        <p>Get the Basic CPQ system up and running</p>
        <h3 className="mt-12 font-display text-base font-semibold text-sky-950">
          Activities
        </h3>
        <List className="mt-8">
          <ListItem title="">Initial setup and configuration.</ListItem>
          <ListItem>Introduction of standard products/services.</ListItem>
          <ListItem>Basic pricing rules and discounting.</ListItem>
          <ListItem>Training for end-users on fundamental features.</ListItem>
        </List>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-sky-950">
        Outcomes
      </h3>
      <TagList className="mt-4">
        <TagListItem>Faster quote generation</TagListItem>
        <TagListItem>Reduced manual error</TagListItem>
        <TagListItem>Basic automation</TagListItem>
      </TagList>
    </Section>
  )
}

function Walk() {
  return (
    <Section title="Walk" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-sky-600">
        <p>Goal: Expand the systems capabilities and integrate with other systems.</p>
        <h3 className="mt-12 font-display text-base font-semibold text-sky-950">
          Activities
        </h3>
        <List className="mt-8">
          <ListItem title="">
            Advanced product configuration options.
          </ListItem>
          <ListItem>Introduction of bundled products or services.</ListItem>
          <ListItem>More complex pricing rules and promotional offers.</ListItem>
          <ListItem>
            Integration with CRM (Customer Relationship Management) systems.
          </ListItem>
          <ListItem>
          Enhanced reporting and analytics.
</ListItem>
        </List>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-sky-950">
        Outcomes
      </h3>
      <TagList className="mt-4">
        <TagListItem>More tailored offerings</TagListItem>
        <TagListItem>Enhanced visibility</TagListItem>
        <TagListItem>Reduction in sales cycle time</TagListItem>
      </TagList>
    </Section>
  )
}

function Run() {
  return (
    <Section title="Run" image={{ src: imageMeeting, shape: 2 }}>
    <div className="space-y-6 text-base text-sky-600">
    <p>Goal: Fully leverage the CPQ systems capabilities for business optimization.</p>
    <h3 className="mt-12 font-display text-base font-semibold text-sky-950">
      Activities
    </h3>
    <List className="mt-8">
      <ListItem title="">
        Further integration with ERP (Enterprise Resource Planning) or other back-end systems.
      </ListItem>
      <ListItem>
        Utilizing AI-driven analytics and insights.
      </ListItem>
      <ListItem>
      Advanced approval workflows.
      </ListItem>
      <ListItem>
        Implementing dynamic pricing strategies based on market conditions or inventory levels.
      </ListItem>
    </List>
  </div>

  <h3 className="mt-12 font-display text-base font-semibold text-sky-950">
    Outcomes
  </h3>
  <TagList className="mt-4">
    <TagListItem>Dynamic sales process based on real-time conditions</TagListItem>
    <TagListItem>Predictive insights on sales trends</TagListItem>
    <TagListItem>Maximum automation</TagListItem>
    <TagListItem>Reducing need of manual interventions</TagListItem>
  </TagList>
</Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-sky-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-sky-100 stroke-sky-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            The first part of any partnership is getting our designer to put
            your logo in our template. The second step is getting them to do the
            colors.
          </GridListItem>
          <GridListItem title="Efficient">
            We pride ourselves on never missing a deadline which is easy because
            most of the work was done years ago.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every business has unique needs and our greatest challenge is
            shoe-horning those needs into something we already built.
          </GridListItem>
          <GridListItem title="Honest">
            We are transparent about all of our processes, banking on the simple
            fact our clients never actually read anything.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients that go beyond
            just delivering a product, allowing us to invoice them for decades.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new open source projects to clone.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Crawl />
        <Walk />
        <Run />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
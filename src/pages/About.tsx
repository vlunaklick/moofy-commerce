import Sections from '../components/layouts/Sections'
import TitleHome from '../components/sites/home/TitleHome'
import BannerAbout from '../components/sites/about/BannerAbout'
import FormNewsletterAbout from '../components/sites/about/FormNewsletterAbout'
import FormAbout from '../components/sites/about/FormAbout'

const About = () => {
  return (
    <>
      <Sections>
        <TitleHome title="About" />
        <BannerAbout />
        <p className="text-zinc-700 text-sm md:text-base">
          Welcome to our brand, created by gamers for gamers! As avid gamers
          ourselves, we understand the challenges of finding and purchasing the
          right technology. That's why we've made it our mission to make it
          easier for you to build the perfect gaming PC from scratch. Our
          selection of high-quality components is carefully curated to provide
          the best possible gaming experience. If you're in need of a new PC,
          you've come to the right place! Browse our selection today and start
          building your dream gaming PC.
        </p>
      </Sections>
      <Sections>
        <TitleHome title="Contact" />
        <FormAbout />
      </Sections>
      <Sections>
        <TitleHome title="Newsletter" />
        <FormNewsletterAbout placeholder={'Email'} />
      </Sections>
    </>
  )
}

export default About

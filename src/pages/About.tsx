import Main from '../components/layouts/Main'
import Sections from '../components/layouts/Sections'
import TitleHome from '../components/sites/home/TitleHome'
import BannerAbout from '../components/sites/about/BannerAbout'

type Props = {}

const About = (props: Props) => {
  return (
    <Main>
      <div className="md:max-w-[750px] flex flex-col gap-6">
        <Sections>
          <TitleHome title="About" />
          <BannerAbout />
          <p className="text-zinc-700 text-sm md:text-base font-medium">
            We are a ew brand created by gamers for gamers. Since we were kids
            buying technology was very hard an now we are here to solve that. If
            you need to build a new PC from scratch, you are in the correct
            place.
          </p>
        </Sections>
      </div>
    </Main>
  )
}

export default About

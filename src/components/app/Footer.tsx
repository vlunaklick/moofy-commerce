import { CgFacebook, CgTwitter } from 'react-icons/cg'
import { RiLinkedinFill } from 'react-icons/ri'

type Props = {}

function Footer({}: Props) {
  return (
    <footer className="w-full py-4 flex flex-col gap-4">
      <span className="w-full border border-zinc-100"></span>
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <div className="md:max-w-[317px]">
          <h3 className="font-bold text-xl">Moofy</h3>
          <p className="text-zinc-700 text-xs">
            We are gaming store that sells all kind of products around the
            world. Due to our wide range of products and sales, we are the
            company that you are searching to improve your setup
          </p>
        </div>
        <div className="w-full flex md:flex-col justify-center md:justify-start md:max-w-[150px]">
          <h3 className="font-bold text-xl hidden md:block">About</h3>
          <ul className="text-zinc-700 text-xs underline flex flex-row gap-3 md:flex-col md:gap-1">
            <li className="hover:text-zinc-900 cursor-pointer">
              Return policy
            </li>
            <li className="hover:text-zinc-900 cursor-pointer">
              Terms and conditions
            </li>
            <li className="hover:text-zinc-900 cursor-pointer">
              Privacy policy
            </li>
          </ul>
        </div>
        <div className="w-full flex md:flex-col justify-center md:justify-start md:max-w-[150px]">
          <h3 className="font-bold text-xl hidden md:block">Socials</h3>
          <ul className="text-zinc-700 text-xs underline flex flex-row gap-3 md:flex-col md:gap-1">
            <li className="hidden md:block hover:text-zinc-900 cursor-pointer">
              LinekdIn
            </li>
            <li className="hidden md:block hover:text-zinc-900 cursor-pointer">
              Twitter
            </li>
            <li className="hidden md:block hover:text-zinc-900 cursor-pointer">
              Facebook
            </li>
            <li className="md:hidden block hover:text-zinc-900 cursor-pointer">
              <RiLinkedinFill className="text-2xl" />
            </li>
            <li className="md:hidden block hover:text-zinc-900 cursor-pointer">
              <CgTwitter className="text-2xl" />
            </li>
            <li className="md:hidden block hover:text-zinc-900 cursor-pointer">
              <CgFacebook className="text-2xl" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

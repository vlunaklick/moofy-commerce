import { LinkedIn, Facebook, Twitter } from '../icons/socials'

function Footer() {
  return (
    <footer className="w-full py-8 flex flex-col gap-4">
      <span className="w-full border border-zinc-100"></span>
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <div className="md:max-w-[317px] flex flex-col gap-1">
          <p className="font-bold text-xl">Moofy</p>
          <p className="text-zinc-700 text-xs">
            Upgrade your gaming setup with us! We're a top gaming store with a
            wide range of products and a proven track record of success. Shop
            with us today and take your gaming to the next level.
          </p>
        </div>
        <div className="w-full flex md:flex-col justify-center md:justify-start md:max-w-[150px] gap-1">
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
        <div className="w-full flex md:flex-col justify-center md:justify-start md:max-w-[150px] gap-1">
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
            <li className="md:hidden block hover:fill-zinc-900 fill-zinc-700 cursor-pointer">
              <LinkedIn className="h-4" />
            </li>
            <li className="md:hidden block hover:fill-zinc-900 fill-zinc-700 cursor-pointer">
              <Twitter className="h-4" />
            </li>
            <li className="md:hidden block hover:fill-zinc-900 fill-zinc-700 cursor-pointer">
              <Facebook className="h-4" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

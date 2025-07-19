import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, HeartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Button from './Button'
import { Link, useLocation } from 'react-router-dom'

const navigation = [
  { name: 'Home', href: '/', withLinks: false },
  {
    name: 'About Us',
    href: '/about',
    withLinks: true,
    links: [
      { name: 'Our Programs', href: '/our-programs' },
      { name: 'Our Approach', href: '/our-approach' },
      { name: 'Our Team', href: '/our-team' },
    ],
  },
  { name: 'Take Action', href: '/take-action', withLinks: false },
  { name: 'Get Involved', href: '/get-involved', withLinks: false },
  { name: 'Contact Us', href: '/contact', withLinks: false },
]

export default function PageHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useLocation().pathname

  return (
    <header className="inset-x-0 top-0 z-50 border-b border-blue-200 sticky bg-white">
      <nav
        className="flex items-center justify-between p-2 lg:px-6"
        aria-label="Global"
      >
        <Link to="/" className="flex lg:flex-1 gap-x-2 items-center">
          {/* <img className="h-14 w-auto" src="/logo.png" alt="Logo" /> */}
          <p className="font-semibold hidden md:block leading-6 uppercase text-gray-950">
            Wildlife Advocates for Vital Ecosystems and Species
          </p>
          <p className="font-semibold md:hidden leading-6 uppercase text-gray-950">
            WAVES
          </p>
        </Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-900"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex lg:gap-x-8 relative">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                to={item.href}
                title={item.name}
                aria-label={item.name}
                className={`leading-6 ${
                  router === item.href
                    ? 'text-blue-400 underline'
                    : 'text-gray-950'
                } text-light font-light hover:text-blue-600`}
              >
                {item.name}
              </Link>

              {item.withLinks && item.links?.length > 0 && (
                <ul className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-200 z-50">
                  {item.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-3">
          <Button
            onClick={() => (window.location.href = '#donate')}
            className="rounded-full"
            size={'lg'}
          >
            <HeartIcon className="h-5 w-5 text-white mr-2" />
            Donate to our cause &rarr;
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-blue-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">WAVES</span>
              {/* <img className="h-14 w-auto" src="/logo.png" alt="Logo" /> */}
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      title={item.name}
                      aria-label={item.name}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-orange-600"
                    >
                      {item.name}
                    </Link>
                    {item.withLinks && item.links?.length > 0 && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.links.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            className="block text-sm text-white px-3 py-1 hover:bg-orange-700 rounded"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#donate"
                  className="inline-flex justify-center items-center py-2.5 px-3 rounded-full text-base font-medium text-center text-white hover:bg-orange-900 focus:ring-4 focus:ring-gray-400 bg-orange-600"
                >
                  Donate &rarr;
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

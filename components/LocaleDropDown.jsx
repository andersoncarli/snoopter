import { useRouter } from 'next/router'

export default function LocaleDropDown() {
  const router = useRouter()
  // console.log(router.pathname)
  // console.log(router)
  // path = router.pathname

  const { t } = useTranslation()
  const [lang, country] = router.locale.toLowerCase().split('-')
  // console.log(router.locale, lang, country)
  return (<>
    <ul className="navbar-nav" key="4">
      <li className="nav-item" key="5">
        <a key="6" className="nav-link dropdown-toggle"
          href="#" id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false">

          <span className={"fi fi-" + (country || 'us')}></span>
        </a>
        <ul className="dropdown-menu dropdown-menu-end" style={{ margin: 0 }}>
          {
            router.locales.map((locale, index) => {
              const [lang, country] = locale.toLowerCase().split('-')
              console.log(locale, index, router.asPath)
              return (<li key={index}>
                <Link className="dropdown-item"
                  // as={Link}
                  // active={router.pathname == path}
                  style={{ display: 'flex', gap: '10px' }}
                  href={router.asPath}
                  locale={locale}
                  styles={{ display: 'flex', justifyContent: 'flex-end' }}
                >

                  <span className={"fi fi-" + country}></span>
                  <span className='mx-2 '>{t(locale)}</span>
                </Link>
              </li>)
            })
          }
        </ul>
      </li>
    </ul >
  </>)
}
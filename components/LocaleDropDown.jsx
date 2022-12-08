import { useRouter } from 'next/router'

export default function LocaleDropDown() {
  const router = useRouter()
  // console.log(router.pathname)
  // console.log(router)

  const { t } = useTranslation()
  const [lang, country] = router.locale.toLowerCase().split('-')
  // console.log(router.locale, lang, country)
  return (<>
    <ul className="navbar-nav" >
      <li className="nav-item" >
        <a className="nav-link dropdown-toggle"
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
              // console.log(locale, index, router.asPath)

              return (<li key={index}>
                <Link className="dropdown-item"
                  // as={Link}
                  // active={router.pathname == path}
                  style={{ display: 'flex', gap: '10px' }}
                  href={router.asPath}
                  locale={locale}>
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
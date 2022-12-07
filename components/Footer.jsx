import { useRouter } from 'next/router'
import useTranslation from "next-translate/useTranslation";
import "/node_modules/flag-icons/css/flag-icons.min.css";

function Footer({ children }) {
  let router = useRouter();
  let { t } = useTranslation();

  let flags = {
    "en-US": 'us',
    "pt-BR": 'br'
  }

  return (
    <footer style={{ display: 'flex', justifyContent: 'space-between' }}>
      <ul style={{ display: 'flex', gap: '10px' }}>
        {router.locales.map((locale) => (
          <li key={locale} style={{ display: 'flex', gap: '10px' }}>
            <Link href={router.asPath} locale={locale}>
              <div className={`fi fi-${flags[locale]} mx-1` }></div>
              {/* {locale} */}
            </Link>
          </li>
        ))}
      </ul>
      <div className={`mx-1` }>{t("lang")}</div>
      <div className={`mx-1` }>© 2020</div>
    </footer >
  )

}

export default Footer
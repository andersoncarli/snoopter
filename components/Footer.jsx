import { useRouter } from 'next/router'
import useTranslation from "next-translate/useTranslation";

function Footer({ children }) {
  let router = useRouter();
  let { t } = useTranslation();
  return (<>
    <hr />
    <footer style={{ display: 'flex', justifyContent: 'space-between' }}>
      <ul style={{ display: 'flex', gap: '10px' }}>
        {router.locales.map((locale) => (
          <li key={locale} style={{ display: 'inline-block' }}>
            <Link href={router.asPath} locale={locale}>
              {locale}
            </Link>
          </li>
        ))}
      </ul>
      <p>{t("lang")}</p>
      <p>© 2020</p>
    </footer >
  </>
  )

}

export default Footer
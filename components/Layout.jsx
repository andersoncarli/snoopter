// https://www.youtube.com/watch?v=RR2IMAwNxVU
import Link from 'next/link';
global.Link = Link

import { useRouter } from 'next/router'
global.useRouter = useRouter

import useTranslation from "next-translate/useTranslation";
global.useTranslation = useTranslation;

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {

  let router = useRouter();

  // console.log('LOCALES:', router.locales)

  let { t } = useTranslation();
  return (<>
    <main>
      <Header>Hello</Header>

      {children}

      <Footer>
        {t("common:greeting")}
      </Footer>
    </main>
  </>)
}
const About = () => {
  let { t } = useTranslation();
  return (
    <div className="bg-light p-5 rounded-lg m-3">

      <h1>{t("about-title")}</h1>

      <p className="lead">
        {t("about-introduction", {
          name: "Snoopter",
          year: 2022,
        })}
      </p>

      <hr className="my-4" />
      <Link href="/"><button className="btn btn-primary m-3">Home</button></Link>
      {/* <Link to="/" className="btn btn-primary btn-lg justify-content-end">Home</Link> */}
    </div>
  );
}

export default About;
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
      {/* <Link to="/" className="btn btn-primary btn-lg justify-content-end" role="button">OK</Link> */}
    </div>
  );
}

export default About;
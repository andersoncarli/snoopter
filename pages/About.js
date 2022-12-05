const About = () => {
  let { t } = useTranslation();
  return (
    <div className="bg-light p-5 rounded-lg m-3">

      <h1>{t("about:title")}</h1>

      <p className="lead">
        {t("about:introduction", {
          name: "Patrick",
          age: 27,
        })}
      </p>

      <hr class="my-4"/>
      <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
  );
}

export default About;
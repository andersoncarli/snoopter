function Tempo(props: any) {
  const dynDateString = (new Date()).toUTCString()

  return <>
    <div>{dynDateString} (dinâmico) </div>
    <div>{props.staticDate} (estático) </div>
  </>
}
export function getStaticProps() {
  const date = new Date()
  const staticDate = (new Date()).toUTCString()
  return {
    props: { staticDate }
  }
}
export default Tempo
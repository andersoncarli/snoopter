// https://www.youtube.com/watch?v=RR2IMAwNxVU
import Header from "./Header";

export default function Layout({ children }) {
  return (<>
    <main>
      <Header></Header>
      {children}
    </main>
  </>)
}
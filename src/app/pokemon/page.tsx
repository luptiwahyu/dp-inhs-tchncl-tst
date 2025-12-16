import Header from "./components/header/header";
import List from "./components/list/list";
import Title from "./components/title/title";

export default function Pokemon() {
  return (
    <div>
      <Header />
      <main className="px-4 md:px-8 py-6">
        <Title />
        <List />
      </main>
    </div>
  )
}

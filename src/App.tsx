import {
  About,
  Contact,
  Header,
  Hero,
  PageLayout,
  Projects,
} from "./components";

const App: React.FC = () => {
  return (
    <PageLayout>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </PageLayout>
  );
};

export default App;

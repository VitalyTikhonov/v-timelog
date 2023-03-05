import "./index.scss";
import { withProviders } from "./providers";
import { Routing } from "3_pages";
import Header from "4_widgets/Header";

function App() {
  return (
    <div className="app">
      <Header />
    </div>
  );
}

export default withProviders(App);

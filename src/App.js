import "./App.css";
import { Header } from "./components/header/header";
import { Page1 } from "./components/pageBox/page1/page";
import { Page2 } from "./components/pageBox/page2/page2";
import { Page3 } from "./components/pageBox/page3/page3";
import { Page4 } from "./components/pageBox/page4/page4";
import { Page5 } from "./components/pageBox/page5/page5";
import { Routes, Route} from "react-router-dom";
import { Page6 } from "./components/pageBox/page6/page6";
import { Page7 } from "./components/pageBox/page7/page7";
import { Footer } from "./components/footer/footer";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit,reset } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/Home"
          element={
            <div>
              <Page1 />
              <Page2 />
            </div>
          }
        />
        <Route
          path="/About me"
          element={
            <div>
              <Page3 />
              <Page4 />
            </div>
          }
        />
        <Route
          path="/Products"
          element={
            <div>
              <Page5 />
              <Page6 />
            </div>
          }
        />
        <Route
          path="/Contact me"
          element={
            <div>
              <Page7
                register={register}
                onSubmit={onSubmit}
                handleSubmit={handleSubmit}
              />
              <Footer/>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

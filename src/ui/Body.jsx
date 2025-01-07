import Blog from "./Blog";
import FAQ from "./FAQ";
import Features1 from "./Features1";
import Feedback from "./Feedback";
import Signup from "./Signup";
import Trial from "./Trial";

function Body() {
  return (
    <div className=" max-w-[1440px] mx-auto">
      <Signup />
      <Features1 />
      <Feedback />
      <FAQ />
      <Blog />
      <Trial />
    </div>
  );
}

export default Body;

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <div className="flex-center h-screen w-full">
      <div className=" text-red-400 text-3xl bg-yellow-500">App</div>
    </div>
  );
};

export default App;

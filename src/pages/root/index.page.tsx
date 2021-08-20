import type { CustomNextPage } from "next";
import { FluidLayout } from "src/layout";

const Root: CustomNextPage = () => {
  const handleClick = () => {
    window.alert("Hello, World!");
  };

  return (
    <div>
      <h2>Root</h2>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

Root.getLayout = FluidLayout;

export default Root;

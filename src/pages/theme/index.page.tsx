import type { CustomNextPage } from "next";
import { ThemeChanger } from "src/component/ThemeChanger";
import { FixedLayout } from "src/layout";

const About: CustomNextPage = () => {
  return (
    <div>
      <h2>About</h2>
      <ThemeChanger />
    </div>
  );
};

About.getLayout = FixedLayout;

export default About;

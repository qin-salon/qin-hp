import type { CustomNextPage } from "next";
import { FixedLayout } from "src/layout";
import { styled } from "src/style";

const About: CustomNextPage = () => {
  return (
    <div>
      <Button>ボタン</Button>
      <Button color="blue">ボタン</Button>
      <Button color="pink">ボタン</Button>
    </div>
  );
};

const Button = styled("button", {
  padding: "10px",
  backgroundColor: "red",
  color: "white",

  variants: {
    color: {
      blue: {
        backgroundColor: "blue",
      },
      pink: {
        backgroundColor: "pink",
      },
    },
  },

  compoundVariants: [
    {
      color: "blue",
    },
  ],
});

About.getLayout = FixedLayout;

export default About;

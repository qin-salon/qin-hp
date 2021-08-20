import type { CustomNextPage } from "next";
import { FixedLayout } from "src/layout";
import { styled } from "src/style";

const Root: CustomNextPage = () => {
  return (
    <Container>
      <div>
        <H2>ABOUT</H2>
        <Paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nisi exercitationem, est eligendi nobis ex
          praesentium reiciendis ratione fuga! Eum aspernatur culpa suscipit. Cupiditate in quaerat architecto
          reiciendis, ad magni.
        </Paragraph>
      </div>
      <div>
        <H2>PRODUCT</H2>
        <Paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nisi exercitationem, est eligendi nobis ex
          praesentium reiciendis ratione fuga! Eum aspernatur culpa suscipit. Cupiditate in quaerat architecto
          reiciendis, ad magni.
        </Paragraph>
      </div>
      <div>
        <H2>COMPANY</H2>
        <Paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nisi exercitationem, est eligendi nobis ex
          praesentium reiciendis ratione fuga! Eum aspernatur culpa suscipit. Cupiditate in quaerat architecto
          reiciendis, ad magni.
        </Paragraph>
      </div>
    </Container>
  );
};

const Container = styled("div", {
  display: "grid",
  gap: "2rem",
});

const H2 = styled("h2", {
  fontSize: "4rem",
});

const Paragraph = styled("p", {
  fontSize: "2rem",
});

Root.getLayout = FixedLayout;

export default Root;

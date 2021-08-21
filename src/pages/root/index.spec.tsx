import renderer from "react-test-renderer";

import Root from "./index.page";

describe("Root page", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Root />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

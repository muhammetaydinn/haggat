import { render } from "@testing-library/react";
import Page from "../components/showmustgooon";

it("renders homepage unchanged", () => {
  const { container } = render(<Page />);
  expect(container).toMatchSnapshot();
});

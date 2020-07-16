import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { shallow } from "enzyme";

it("should contain bye", () => {
  const wrapper = shallow(<App />);
  const footer = wrapper.find("footer");
  const result = footer.text();

  expect(result).toBe("bye");
});

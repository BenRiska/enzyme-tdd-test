import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";

it("should contain bye", () => {
  const wrapper = shallow(<App />);
  const footer = wrapper.find("footer");
  const result = footer.text();

  expect(result).toBe("bye");
});

describe("p should say hi", () => {
  it("p should say hi", () => {
    const wrapper = shallow(<App />);
    const p = wrapper.find("p");
    const result = p.text();

    expect(result).toBe("Hi");
  });
});

describe("snapshot", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("shallow and mount", () => {
  it("differences", () => {
    const shallowWrapper = shallow(<App />);
    const mountWrapper = mount(<App />);

    console.log("shallow html", shallowWrapper.debug());
    console.log("mount html", mountWrapper.debug());
  });
});

/* 

--- api testing
--- use the fetch-mock api on github to fetch dummy data for the test
import fetchMock from "fetch-mock"

describe("api", () => {
  it("fetches data", async () => {
    const dummyUser = {
      name: "Ben",
      age: 24
    }
    const url = "url"
    fetchMock.getOnce(url, {
      status: 200,
      body: dummyUser
    })
    const wrapper = shallow(<Component id={1})
    expect(wrapper.find('p').text()).toEqual('Loading!')

    await nextTick(wrapper.find('h4').text()).toEqual(dummyUser.name)
  })
})





*/

/*  
 
 -- user interaction (click) test

 button = wrapper.find(button)
 button.simulate("click")
 
 const p = wrapper.find("p");
    const result = p.text();

 expect(result).toBe("whatever the click result is");
 
 
 */

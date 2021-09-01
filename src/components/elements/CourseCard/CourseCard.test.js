import CourseCard from ".";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure, shallow } from "enzyme";

configure({ adapter: new Adapter() });

describe("Course Card", () => {
  let cardProps = {
    porcentage: 0.3,
    title: "test",
    id: 1,
  };

  let cardPropsComplete = {
    porcentage: 1,
    title: "test complete",
    id: 1,
  };

  test("card shows correct information", () => {
    const component = shallow(<CourseCard {...cardProps} />);

    expect(component.find("#title").text()).toEqual(cardProps.title);
    expect(component.find("#progress").text()).toEqual(
      `${cardProps.porcentage * 100}%`
    );
    expect(component.find("#indicator").prop("src")).toEqual("/next.svg");
  });

  test("complete card shows correct information", () => {
    const component = shallow(<CourseCard {...cardPropsComplete} />);

    expect(component.find("#title").text()).toEqual(cardPropsComplete.title);
    expect(component.find("#progress").text()).toEqual(
      `${cardPropsComplete.porcentage * 100}%`
    );
    expect(component.find("#indicator").prop("src")).toEqual("/done.svg");
  });

  test("card doesn't show incorrect information", () => {
    const component = shallow(<CourseCard {...cardProps} />);

    expect(component.find("#title").text()).not.toEqual("abababa");
    expect(component.find("#progress").text()).not.toEqual(`0%`);
    expect(component.find("#indicator").prop("src")).not.toEqual("/done.svg");
  });
});

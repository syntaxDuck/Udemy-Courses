import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MainPage from "../MainPage";

beforeEach(() => {
  render(<MainPage />);
});

test("Verify: Main Page Default State", async () => {
  //verify about us component is rendered
  expect(
    screen.getByRole("heading", { name: /welcome to chrono delivery/i })
  ).toBeDefined();
  expect(screen.getByRole("img", { name: /drone/i })).toBeDefined();

  //verify menu component is rendered
  expect(screen.getByRole("button", { name: /add to cart/i })).toBeDefined();
  expect(screen.getByRole("button", { name: /clear/i })).toBeDefined();
  expect(screen.getByRole("list", { name: "" })).toBeDefined();

  //verify location component is rnedered
  expect(
    screen.getByRole("heading", { name: /Were to Find Us/i })
  ).toBeDefined();

  //verify cart is not displayed
  expect(screen.queryByRole("heading", { name: /cart is empty/i })).toBeNull();

  //verify cart is empty
  userEvent.click(screen.getByRole("button", { name: /cart/i }));
  await waitForElementToBeRemoved(
    screen.getByRole("heading", { name: /cart is empty/i })
  );

  expect(screen.getByRole("heading", { name: /cart is empty/i })).toBeDefined();
});

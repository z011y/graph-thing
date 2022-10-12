import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ThemeToggle from "../ThemeToggle.vue";

describe("ThemeToggle", () => {
  it("renders properly", () => {
    const wrapper = mount(ThemeToggle);
    console.log(wrapper);
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});

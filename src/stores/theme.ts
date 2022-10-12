import { ref, computed } from "vue";
import { defineStore, setActivePinia, createPinia } from "pinia";

export const useThemeStore = defineStore("theme", () => {
  const defaultTheme = computed(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );
  const theme = ref(defaultTheme.value);
  function toggleTheme() {
    if (theme.value === "light") {
      theme.value = "dark";
      document.documentElement.classList.add("dark");
      console.log(theme.value);
    } else if (theme.value === "dark") {
      theme.value = "light";
      document.documentElement.classList.remove("dark");
      console.log(theme.value);
    } else {
      console.log("Unknown theme", theme.value);
    }
    localStorage.setItem("theme", theme.value);
  }

  return { defaultTheme, theme, toggleTheme };
});

if (import.meta.vitest) {
  const { beforeEach, it, expect } = import.meta.vitest;

  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("toggleTheme", () => {
    const store = useThemeStore();
    store.theme = "light";

    store.toggleTheme();
    expect(store.theme).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem("theme")).toBe("dark");

    store.toggleTheme();
    expect(store.theme).toBe("light");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(localStorage.getItem("theme")).toBe("light");
  });
}

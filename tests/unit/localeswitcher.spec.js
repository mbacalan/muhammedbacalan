import { shallowMount, config } from "@vue/test-utils";
import i18n from "@/i18n";
import App from "@/App";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import TR from "@/locales/tr.json";
import EN from "@/locales/en.json";

config.stubs = ["font-awesome-icon"];

describe("LocaleSwitcher", () => {
  const localeSwitcher = shallowMount(LocaleSwitcher, { i18n });
  const app = shallowMount(App, { i18n });

  it("has a toggle button", () => {
    expect(localeSwitcher.contains("input.toggle")).toBe(true);
  });

  it("is in TR locale by default", () => {
    expect(app.find(".title").text()).toEqual(TR.hello);
  });

  it("toggles locale between TR and EN", async () => {
    localeSwitcher.find(".toggle").trigger("click");
    await app.vm.$nextTick();
    expect(app.find(".title").text()).toEqual(EN.hello);

    localeSwitcher.find(".toggle").trigger("click");
    await app.vm.$nextTick();
    expect(app.find(".title").text()).toEqual(TR.hello);
  });
});

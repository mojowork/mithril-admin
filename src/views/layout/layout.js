import "./layout.less";
import { menuList } from "../../config/map";

const Layout = {
  view: vnode =>
    m(
      "div",
      { class: "layout-container" },
      m(
        "header",
        { class: "layout-header" },
        m("section", { class: "layout-brand etched-text" }, "ADMIN"),
        m(
          "section",
          { class: "layout-tools" },
          m(
            "span",
            { class: "layout-tools-item" },
            m("i", { class: "icon icon-2x icon-search" })
          ),
          m(
            "span",
            { class: "layout-tools-item badge", "data-badge": 1 },
            m("i", { class: "icon icon-2x icon-mail" })
          ),
          m(
            "span",
            { class: "layout-tools-item" },
            m(
              "figure",
              { class: "avatar avatar-lg" },
              m("img", { src: require("../../assets/avatar-1.png") })
            )
          )
        )
      ),
      m(
        "section",
        { class: "layout-body" },
        m(
          "aside",
          { class: "layout-aside" },
          m(
            "ul",
            { class: "menu" },
            menuList.map(item =>
              m(
                "li",
                {
                  class: "menu-item",
                  style:{textAlign: 'left'}
                },
                m(
                  "a",
                  { href: "#" },
                  m("i", {
                    class: `icon ${item.icon}`,
                    style: { margin: '0 10px'}
                  }),
                  item.name
                )
              )
            )
          )
        ),
        m("main", { class: "layout-main" }, vnode.children)
      )
    )
};

export default Layout;

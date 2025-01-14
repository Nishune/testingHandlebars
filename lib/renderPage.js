const MENU = [
  {
    label: "Home Page",
    id: "index",
    link: "/",
  },
  {
    label: "About us",
    id: "about",
    link: "/about",
  },
  {
    label: "Contact us",
    id: "contact",
    link: "/contact",
  },
  {
    label: "Our Content",
    id: "content",
    link: "/content",
  },
];

const FOOTERMENU = [
  {
    label: "© 2025 Min Webbplats",
    id: "index",
    link: "/",
  },
];

export default async function renderPage(response, page) {
  response.render(page, {
    menuItems: MENU.map((item) => {
      return {
        label: item.label,
        link: item.link,
        active: item.id === page,
      };
    }),
    footerItems: FOOTERMENU.map((item) => {
      return {
        label: item.label,
        link: item.link,
        active: item.id === page,
      };
    }),
  });
}

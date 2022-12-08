const mainMenu = [
  { title: "Home", path: '/' },
  { title: "New Post", path: '/add-post' },
  { title: "About", path: '/About' },
  // {
  //   title: 'English', id: 2, icon: "fi fi-us", subMenu: [
  //     { title: "English", path: '/en-US', icon: "fi fi-us" },
  //     // { divider:true },
  //     { title: "Português", path: '/pt-BR', icon: "fi fi-br" },
  //   ]
  // },
]

const site = {
  title: 'Snoopter',
  subtitle: "A data analysis tool for bigdata"
}

export { mainMenu, site }
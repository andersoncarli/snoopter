const mainMenu = [
  { title: "Home", path: '/' },
  { title: "About", path: '/About' },
  {
    title: 'Dropdown Menu', id: 1, path: '', subMenu: [
      { title: "Home", path: '/' },
      { divider: true },
      { title: "About", path: '/About' },
    ]
  }]

const site = {
  title: 'Snoopter',
  subtitle: "A data analysis tool for bigdata"
}

export { mainMenu, site }
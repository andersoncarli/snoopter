const mainMenu = [
  { title: "Home", path: '/' },
  { title: "New Post", path: '/add-post' },
  {
    title: 'English', id: 2, path: '', subMenu: [
      { title: "English", path: '/' },
      { title: "Português", path: '/pt-BR              ' },
    ]
  },
  { title: "About", path: '/About' },
]

const site = {
  title: 'Snoopter',
  subtitle: "A data analysis tool for bigdata"
}

export { mainMenu, site }
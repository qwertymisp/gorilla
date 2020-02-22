module.exports = {
  base: '/gorilla/',
  dest: 'docs',
  locales: {
    '/': {
      lang: 'ja',
      title: '異世界ゴリラシリーズ',
      description: '異世界ゴリラシリーズ',
    }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/assets/img/favicon.ico' }],
    ['link', { rel: 'stylesheet', type: 'text/css', href: '/assets/css/style.css' }],
    ['meta', { name: "author", content: "perpouh" }]
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'ゴリラと行く異世界魔王討伐',
        path: '/part1/',
        children: [
          ['/part1/chapter1', '【悲報】うちの先祖、ゴリラだった。'],
          ['/part1/chapter2', '異世界ゴリラはビームを吐く'],
          ['/part1/chapter3', '魔法も万能ではない'],
          ['/part1/chapter4', '死闘、市街地にて'],
          ['/part1/chapter5', '道は前にしか無い'],
          ['/part1/chapter6', '伝説の勇者カズキ'],
          ['/part1/chapter8', '帰還']
        ]
      },
      {
        title: '【幕間】うる星ゴリラ',
        path: '/part1.5/'
      },
      {
        title: '【番外】うちのゴリラ知りませんか？',
        path: '/ex-part/'
      },
      {
        title: 'ゴリラと行く異世界王女奪還',
        path: '/part2/',
        children: [
          ['/part2/chapter1', '天高く馬肥ゆる'],
          ['/part2/chapter2', '墜落'],
          ['/part2/chapter3', '異世界観光'],
          ['/part2/chapter4', '郷に入りては郷に従え'],
          ['/part2/chapter5', 'VS.ゴリラ'],
          ['/part2/chapter6', '再決起'],
          ['/part2/chapter7', '絨毯ぐるぐる巻き×3'],
          ['/part2/chapter8', 'エピローグ']
        ]
      },
      {
        title: '【幕間】花の名',
        path: '/part2.5/',
        children: [
          ['/part2.5/chapter1', '第一話'],
          ['/part2.5/chapter2', '第二話'],
          ['/part2.5/chapter3', '第三話'],
          ['/part2.5/chapter4', '第四話']
        ]
      }
    ],
    sidebarDepth: 2
  },
	markdown: {
		config: md => {
			md.set({
				breaks: true
			});
		}
	}
}
module.exports = {
    title: 'Sardinary\'s Blog',
    description: ' ',
    theme: 'reco',
    themeConfig: {
        logo: "/avatar.jpg",
        authorAvatar: "/avatar.jpg",
        subSidebar: "auto",
        type: "blog",
        author: "Sardinary Chen",
        nav: [
            { text: "🏠", link: "/" },
            {
                text: "Sardinary 🎈",
                items: [
                    { text: "Github", link: "https://github.com/Xiangyinfly" }
                ]
            }
        ],
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: "Category", // 默认文案 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认4
                text: "Tag", // 默认文案 “标签”
            },
        },
        locales: {
            "/": {
                lang: "zh-CN",
            },
        },
    },
    plugins: [
        [
            "sakura",
            {
                num: 20, // 默认数量
                show: true, //  是否显示
                zIndex: 0, // 层级
                img: {
                    replace: false, // false 默认图 true 换图 需要填写httpUrl地址
                },
            },
        ],
        [
            "cursor-effects",
            {
                size: 4, // size of the particle, default: 2
                shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
                zIndex: 999999999, // z-index property of the canvas, default: 999999999
            },
        ],
    ]
}
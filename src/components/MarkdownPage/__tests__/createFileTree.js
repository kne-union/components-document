import createFileTree from '../createFileTree';

test("解析文件树", () => {
    const tree = createFileTree([{
        id: '1', path: '/前端团队周报/张三/一月/脚手架搭建.md',
    }, {
        id: '2', path: '/前端团队周报/张三/一月/前端框架搭建.md'
    }, {
        id: '3', path: '/前端团队周报/张三/二月/完成客户模块.md'
    }, {
        id: '4', path: '/前端团队周报/张三/代码心得.md'
    }]);

    console.log(JSON.stringify(tree));

    expect(tree.length).toBe(1);
    expect(tree[0].children.length).toBe(1);
    expect(tree[0].children[0].children.length).toBe(3);
    expect(tree[0].children[0].children[0].children.length).toBe(2);
});

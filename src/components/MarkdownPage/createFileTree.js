import uniqueId from "lodash/uniqueId";

const createFileTree = (paths, baseUrl = '') => {
    const tree = [];
    for (const item of paths) {
        const segments = item.path.split('/').filter((name) => !!name);

        let node = tree;
        segments.forEach((segment, index) => {
            let nextNode = node.find((item) => item.label === segment);
            if (!nextNode) {
                nextNode = Object.assign({}, {
                    key: uniqueId('menu-'), label: segment, children: []
                }, index === segments.length - 1 ? {
                    key: item.id, path: `${baseUrl}?id=${item.id}`, label: segment.replace(/\..*$/, '').split('-')[0]
                } : {
                    iconType: 'icon-wenjianjia'
                });
                node.push(nextNode);
            }
            node = nextNode.children;
        });
    }
    return tree;
}

export default createFileTree;

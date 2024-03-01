
# MarkdownRender


### 概述

将markdown显示为html


### 示例

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _MarkdownRender(@components/MarkdownRender),remoteLoader(@kne/remote-loader),doc(@components/MarkdownRender/doc/example.md)

```jsx
const {default: MarkdownRender} = _MarkdownRender;
const {default: content} = doc;
const {getPublicPath} = remoteLoader;

const BaseExample = () => {
    return <MarkdownRender content={content} assetsPath={getPublicPath('components-document') + '/assets'}/>;
};

render(<BaseExample/>);

```


### API

| 属性名        | 说明                 | 类型     | 默认值 |
|------------|--------------------|--------|-----|
| content    | 内容，为md格式           | string | -   |
| assetsPath | 外部资源地址，会自动替换掉对应的地址 | string | -   |


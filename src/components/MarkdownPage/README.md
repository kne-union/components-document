
# MarkdownPage


### 概述

用于创建markdown文档系统


### 示例

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _MarkdownPage(@components/MarkdownPage),router(react-router-dom),remoteLoader(@kne/remote-loader)

```jsx
const {default: MarkdownPage} = _MarkdownPage;
const {createWithRemoteLoader} = remoteLoader;
const {useLocation} = router;

const BaseExample = createWithRemoteLoader({
    modules: ['components-core:Layout', 'components-core:Global@PureGlobal']
})(({remoteModules}) => {
    const [Layout, PureGlobal] = remoteModules;
    const location = useLocation();
    const list = location.pathname.split('/');
    const baseUrl = list.slice(0, list.indexOf('MarkdownPage') + 1).join('/');

    return <PureGlobal>
        <Layout navigation={{isFixed: false}}>
            <MarkdownPage name="blog" baseUrl={baseUrl} menuFixed={false}/>
        </Layout>
    </PureGlobal>;
});

render(<BaseExample/>);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |


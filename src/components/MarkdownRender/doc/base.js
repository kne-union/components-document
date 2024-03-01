const {default: MarkdownRender} = _MarkdownRender;
const {default: content} = doc;
const {getPublicPath} = remoteLoader;

const BaseExample = () => {
    return <MarkdownRender content={content} assetsPath={getPublicPath('components-document') + '/assets'}/>;
};

render(<BaseExample/>);

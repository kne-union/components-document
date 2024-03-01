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

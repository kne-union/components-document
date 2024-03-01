import {useMemo} from 'react';
import {createWithRemoteLoader} from '@kne/remote-loader';
import MarkdownRender from '@components/MarkdownRender';
import {useSearchParams, Navigate} from 'react-router-dom';
import Fetch from '@kne/react-fetch';
import {Empty} from "antd";
import createFileTree from './createFileTree';
import last from 'lodash/last';

const transformResponse = (response) => {
    return {
        data: {
            code: 200, results: response.data
        }
    };
}

const MarkdownPageInner = createWithRemoteLoader({
    modules: ["components-core:Layout@Page", "components-core:Menu"]
})(({remoteModules, baseUrl, url, name, data, assetsPath, ...props}) => {
    const [Page, Menu] = remoteModules;
    const contentMap = useMemo(() => {
        return new Map(data.map((item) => {
            return [item.id, item];
        }));
    }, [data]);

    const menuItems = useMemo(() => {
        return createFileTree(data, baseUrl);
    }, [data, baseUrl]);

    if (!(data && data.length > 0)) {
        return <Empty description={'暂时没有内容发布'}/>;
    }

    const [search] = useSearchParams();
    const id = search.get('id');

    if (!(id && contentMap.get(id))) {
        const item = contentMap.values().next().value;
        return <Navigate to={`${baseUrl}?id=${item.id}`} replace/>
    }

    const item = contentMap.get(id);

    const [title, author] = last(item.path.split('/')).replace(/\..*$/, '').split('-');

    return <Page {...props} name={name} title={title} titleExtra={author ? `作者:${author}` : null}
                 menu={<Menu items={menuItems} allowCollapsed={false}/>}>
        <Fetch url={(url || `/${name}`) + item.path} transformResponse={transformResponse} render={({data}) => {
            return <MarkdownRender content={data} assetsPath={assetsPath}/>;
        }}/>
    </Page>
});

MarkdownPageInner.defaultProps = {
    baseUrl: '', assetsPath: '/assets'
};

const MarkdownPage = ({name, url, ...props}) => {
    return <Fetch url={(url || `/${name}`) + '/manifest.json'} transformResponse={transformResponse}
                  render={({data}) => {
                      return <MarkdownPageInner {...props} url={url} name={name} data={data}/>
                  }}/>
};

export default MarkdownPage;

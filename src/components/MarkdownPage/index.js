import {useMemo} from 'react';
import {createWithRemoteLoader} from '@kne/remote-loader';
import MarkdownRender from '@components/MarkdownRender';
import {useSearchParams, Navigate} from 'react-router-dom';
import Fetch from '@kne/react-fetch';
import {Empty, Space} from "antd";
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
})(({remoteModules, baseUrl, url, name, data, assetsPath, contentClassName, transformMenuData, ...props}) => {
    const [Page, Menu] = remoteModules;
    const contentMap = useMemo(() => {
        return new Map(data.map((item) => {
            return [item.id, item];
        }));
    }, [data]);

    const menuItems = useMemo(() => {
        return createFileTree(typeof transformMenuData === 'function' ? transformMenuData(data) : data, baseUrl);
    }, [data, baseUrl, transformMenuData]);

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

    const title = last(item.path.split('/'));

    return <Page {...props} name={name} title={item.title || title}
                 titleExtra={<Space>
                     <span>{item.author ? `作者:${item.author}` : null}</span>
                     <span>{item.time ? `发布日期:${item.time}` : null}</span>
                 </Space>}
                 menu={<Menu currentKey={id} items={menuItems} allowCollapsed={false}/>}>
        <Fetch url={(url || `/${name}`) + item.path} transformResponse={transformResponse} render={({data}) => {
            return <MarkdownRender className={contentClassName} content={data} assetsPath={assetsPath}/>;
        }}/>
    </Page>
});

MarkdownPageInner.defaultProps = {
    baseUrl: '', assetsPath: '/assets'
};

const MarkdownPage = ({name, url, transformResponse: transformResponseProps, params, ...props}) => {
    return <Fetch url={(url || `/${name}`) + '/manifest.json'} params={params}
                  transformResponse={transformResponseProps || transformResponse}
                  render={({data}) => {
                      return <MarkdownPageInner {...props} url={url} name={name} data={data}/>
                  }}/>
};

export default MarkdownPage;

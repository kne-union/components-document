import markdown from 'markdown-it';
import taskLists from 'markdown-it-task-lists';
import mathjax from 'markdown-it-mathjax';
import textualUml from 'markdown-it-textual-uml';
import replaceLink from 'markdown-it-replace-link';
import classnames from 'classnames';
import mermaid from 'mermaid';
import {useEffect, useRef, useMemo} from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import style from './style.module.scss';

const createMD = (options) => {
    const {assetsPath} = Object.assign({}, options);
    const md = markdown({
        xhtmlOut: true, html: true, highlight: (str, lang) => {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return '<pre class="hljs"><code>' + hljs.highlight(str, {
                        language: lang, ignoreIllegals: true
                    }).value + '</code></pre>';
                } catch (e) {
                    console.error(e);
                }
            }

            return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
        }
    }).use(taskLists).use(mathjax).use(textualUml);
    typeof assetsPath === 'string' && md.use(replaceLink, {
        processHTML: true, replaceLink: function (link) {
            if (/^http/.test(link)) {
                return link;
            }
            return assetsPath + decodeURIComponent(link).replace(/.*assets/, '').replace(/\\/g, '/');
        }
    });

    return md;
};

const MarkdownRender = ({content, assetsPath}) => {
    const ref = useRef();
    const md = useMemo(() => {
        return createMD({assetsPath});
    }, [assetsPath]);
    useEffect(() => {
        mermaid.initialize({});
        mermaid.contentLoaded();
    }, [content]);
    return <div ref={ref} className={classnames('mark-down-html', style['mark-down-html'])}
                dangerouslySetInnerHTML={{__html: md.render(typeof content !== 'string' ? '' : content)}}/>;
};

export default MarkdownRender;

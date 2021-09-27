var e,
  t,
  r = Object.defineProperty,
  l = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  o = (e, t, l) =>
    t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (e[t] = l),
  i = (e, t) => {
    for (var r in t || (t = {})) n.call(t, r) && o(e, r, t[r]);
    if (l) for (var r of l(t)) a.call(t, r) && o(e, r, t[r]);
    return e;
  },
  c =
    ('undefined' != typeof require && require,
    (e, t) => {
      var r = {};
      for (var o in e) n.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
      if (null != e && l)
        for (var o of l(e)) t.indexOf(o) < 0 && a.call(e, o) && (r[o] = e[o]);
      return r;
    });
import {
  e as s,
  t as m,
  R as d,
  C as p,
  B as f,
  a as h,
  F as u,
  L as b,
  S as x,
  b as E,
  r as w,
  W as g,
  c as v,
  H as C,
  I as y,
  d as D,
} from './vendor.a5f2cd1f.js';
!(function () {
  const e = document.createElement('link').relList;
  if (!(e && e.supports && e.supports('modulepreload'))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      t(e);
    new MutationObserver((e) => {
      for (const r of e)
        if ('childList' === r.type)
          for (const e of r.addedNodes)
            'LINK' === e.tagName && 'modulepreload' === e.rel && t(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = (function (e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
        'use-credentials' === e.crossorigin
          ? (t.credentials = 'include')
          : 'anonymous' === e.crossorigin
          ? (t.credentials = 'omit')
          : (t.credentials = 'same-origin'),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})();
const I = s({
    fonts: {
      heading: `'IBM Plex Sans', ${null == (e = m.fonts) ? void 0 : e.heading}`,
      body: `'IBM Plex Sans',  ${null == (t = m.fonts) ? void 0 : t.body}`,
      code: '',
    },
    colors: {
      brand: {
        100: '#EFEFEF',
        200: '#DDDDDD',
        300: '#C2C2C2',
        400: '#838383',
        500: '#343434',
        600: '#121212',
        700: '#008DFF',
        800: '#A3D6FF',
      },
    },
    components: {
      Input: { defaultProps: { focusBorderColor: 'brand.700' } },
      Button: {
        baseStyle: { borderRadius: '4px' },
        variants: {
          outlineWhite: {
            color: 'white',
            background: 'transparent',
            borderWidth: '1px',
            borderColor: 'white',
            _hover: { background: 'white', color: 'brand.700' },
          },
        },
      },
    },
    styles: { global: () => ({ body: { color: 'brand.400' } }) },
  }),
  W = ({ children: e }) => d.createElement(p, { theme: I }, e),
  F = ({ children: e }) =>
    d.createElement('div', null, d.createElement(W, null, e)),
  R = (e) => {
    var t = e,
      { variation: r = '' } = t,
      l = c(t, ['variation']);
    return 'small' === r
      ? d.createElement(
          f,
          i(
            {
              as: 'svg',
              width: '25',
              height: '25',
              viewBox: '0 0 25 25',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            l,
          ),
          d.createElement('rect', {
            x: '12.0208',
            width: '17',
            height: '17',
            rx: '2',
            transform: 'rotate(45 12.0208 0)',
            fill: '#FFFFFF',
          }),
          d.createElement('circle', {
            cx: '12.0208',
            cy: '12',
            r: '3',
            fill: '#008DFF',
          }),
        )
      : d.createElement(
          f,
          i(
            {
              as: 'svg',
              width: '25',
              height: '25',
              viewBox: '0 0 25 25',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            l,
          ),
          d.createElement('rect', {
            x: '12.0208',
            width: '17',
            height: '17',
            rx: '2',
            transform: 'rotate(45 12.0208 0)',
            fill: '#C4C4C4',
          }),
          d.createElement('circle', {
            cx: '12.0208',
            cy: '12',
            r: '3',
            fill: '#121212',
          }),
        );
  },
  S = (e) => {
    var t = c(e, []);
    return d.createElement(
      f,
      i(
        {
          as: 'svg',
          width: '18',
          height: '18',
          viewBox: '0 0 18 18',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        t,
      ),
      d.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M9 0C4.02762 0 0 4.13031 0 9.22946C0 13.3088 2.58011 16.7649 6.1547 17.9887C6.60221 18.0737 6.76796 17.7904 6.76796 17.5411C6.76796 17.3201 6.76243 16.7422 6.75691 15.9717C4.25414 16.5269 3.72376 14.7365 3.72376 14.7365C3.31492 13.6714 2.72376 13.3824 2.72376 13.3824C1.90608 12.8102 2.78453 12.8215 2.78453 12.8215C3.68508 12.8895 4.16575 13.7734 4.16575 13.7734C4.96685 15.1841 6.27072 14.7762 6.78453 14.5382C6.8674 13.9433 7.09945 13.5354 7.35359 13.3031C5.35912 13.0765 3.25967 12.2833 3.25967 8.74788C3.25967 7.73938 3.60773 6.91785 4.18785 6.27195C4.09392 6.03399 3.78453 5.09915 4.27072 3.83003C4.27072 3.83003 5.02762 3.58074 6.74586 4.7762C7.46409 4.57224 8.23204 4.47025 9 4.46459C9.76243 4.47025 10.5359 4.57224 11.2541 4.7762C12.9724 3.58074 13.7293 3.83003 13.7293 3.83003C14.221 5.09915 13.9116 6.03966 13.8177 6.27195C14.3923 6.91785 14.7403 7.73938 14.7403 8.74788C14.7403 12.2946 12.6354 13.0708 10.6298 13.3031C10.9503 13.5864 11.2431 14.153 11.2431 15.0142C11.2431 16.2493 11.232 17.2408 11.232 17.5467C11.232 17.796 11.3923 18.0793 11.8508 17.9887C15.4254 16.7649 18 13.3088 18 9.23513C18 4.13031 13.9724 0 9 0Z',
        fill: 'white',
      }),
    );
  },
  O = (e) => {
    var t = c(e, []);
    return d.createElement(
      f,
      i(
        {
          as: 'svg',
          width: '10',
          height: '10',
          viewBox: '0 0 11 11',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        t,
      ),
      d.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M4.19484 7.34096C5.93239 7.34096 7.34096 5.93239 7.34096 4.19484C7.34096 2.45728 5.93239 1.04871 4.19484 1.04871C2.45728 1.04871 1.04871 2.45728 1.04871 4.19484C1.04871 5.93239 2.45728 7.34096 4.19484 7.34096ZM4.19484 8.38967C6.51158 8.38967 8.38967 6.51158 8.38967 4.19484C8.38967 1.87809 6.51158 0 4.19484 0C1.87809 0 0 1.87809 0 4.19484C0 6.51158 1.87809 8.38967 4.19484 8.38967Z',
        fill: '#838383',
      }),
      d.createElement('rect', {
        x: '7.31622',
        y: '6.57463',
        width: '3.80987',
        height: '1.04871',
        transform: 'rotate(45 7.31622 6.57463)',
        fill: '#838383',
      }),
    );
  },
  j = { base: '15px', md: '20px', lg: '30px' },
  B = { base: '30px' },
  k = () =>
    d.createElement(
      'nav',
      null,
      d.createElement(
        h,
        { maxW: 'full', px: j, height: '60px', bg: 'brand.600' },
        d.createElement(
          u,
          { alignItems: 'center', height: '60px' },
          d.createElement(
            b,
            {
              href: `${window.PREFIX}/`,
              title: 'Developer DAO Rare',
              color: 'brand.400',
              fontWeight: '600',
              display: 'flex',
              _hover: { textDecoration: 'none' },
            },
            d.createElement(R, { mr: '5px', w: '24px' }),
            'DevDao',
            d.createElement(f, { as: 'span', color: 'white' }, 'Rare'),
          ),
          d.createElement(x, null),
          d.createElement(
            b,
            {
              title: 'GitHub Repository',
              href: 'https://github.com/codingwithmanny/devdaorare',
              target: '_blank',
            },
            d.createElement(S, { h: '21px', w: '21px' }),
          ),
        ),
      ),
    ),
  z = () =>
    d.createElement(
      'footer',
      null,
      d.createElement(
        h,
        { bg: 'brand.700', maxW: 'full', px: j, py: B, color: 'brand.800' },
        d.createElement(
          u,
          { flexWrap: 'wrap' },
          d.createElement(
            u,
            {
              w: { base: '100%', md: '50%' },
              h: 'auto',
              flexDirection: 'column',
              justifyContent: 'space-between',
            },
            d.createElement(
              u,
              { alignItems: 'center' },
              d.createElement(R, {
                variation: 'small',
                w: '14px',
                h: '14px',
                mr: '5px',
              }),
              d.createElement(
                f,
                { as: 'p', fontSize: 'xs', fontWeight: '500' },
                'Project Created By ',
                d.createElement(b, { color: 'white' }, '@person'),
                ' &',
                ' ',
                d.createElement(b, { color: 'white' }, '@otherperson'),
              ),
            ),
            d.createElement(
              f,
              {
                my: { base: '20px', md: '0px' },
                as: 'p',
                fontSize: 'xs',
                fontWeight: '500',
              },
              'LICENSE: MIT',
            ),
          ),
          d.createElement(
            u,
            {
              w: { base: '100%', md: '50%' },
              justifyContent: 'flex-end',
              alignItems: { base: 'flex-start', md: 'flex-end' },
              flexDirection: 'column',
            },
            d.createElement(
              b,
              {
                href: 'https://developerdao.com',
                target: '_blank',
                fontSize: 'xs',
                mb: '10px',
                _hover: { color: 'white' },
              },
              'Developer DAO',
            ),
            d.createElement(
              b,
              {
                onClick: (e) => {
                  e.preventDefault();
                },
                fontSize: 'xs',
                mb: '20px',
                _hover: { color: 'white' },
              },
              'How is ranking calculated?',
            ),
            d.createElement(
              E,
              {
                onClick: () => {
                  window.location.href = 'data-2021-09-22.zip';
                },
                variant: 'outlineWhite',
              },
              'Download Data',
            ),
          ),
        ),
      ),
    ),
  P = () => (
    w.exports.useEffect(() => {
      (async () => {
        void 0 !== window.ethereum && console.log('Ethereum enabled!');
      })();
    }, []),
    d.createElement(
      'div',
      { className: 'App' },
      d.createElement(k, null),
      d.createElement(
        f,
        { as: 'main', bg: 'white' },
        d.createElement(
          h,
          { maxW: 'full', px: '0px' },
          d.createElement(
            g,
            { spacing: '0px' },
            d.createElement(
              v,
              {
                w: { base: '100%', md: '50%', xl: '33.33%' },
                borderRight: { base: 'none', md: '1px' },
                borderBottom: { base: '1px', md: 'none' },
                color: 'brand.100',
              },
              d.createElement(
                h,
                { px: j, py: B, m: '0', w: 'full', maxW: 'full' },
                d.createElement(
                  u,
                  {
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: j,
                  },
                  d.createElement(
                    C,
                    {
                      as: 'h1',
                      size: 'sm',
                      fontWeight: '600',
                      color: 'brand.600',
                    },
                    'DevDAO ID',
                  ),
                  d.createElement(
                    f,
                    { as: 'div', position: 'relative' },
                    d.createElement(y, {
                      pl: '30px',
                      borderRadius: '32px',
                      borderWidth: '1px',
                      _placeholder: { color: 'brand.300' },
                      fontSize: 'sm',
                      borderColor: 'brand.100',
                      color: 'red.500',
                      type: 'search',
                      placeholder: 'Search DevDAO Id',
                    }),
                    d.createElement(O, {
                      h: '11px',
                      w: '11px',
                      position: 'absolute',
                      top: '0',
                      bottom: '0',
                      left: '14px',
                      my: 'auto',
                      opacity: '0.6',
                    }),
                  ),
                ),
                d.createElement(
                  f,
                  { bg: 'brand.600', w: 'full', p: j, rounded: '6px' },
                  d.createElement(
                    u,
                    {
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mb: j,
                    },
                    d.createElement(
                      C,
                      {
                        as: 'h3',
                        size: 'sm',
                        fontWeight: '600',
                        color: 'white',
                      },
                      'Developer',
                    ),
                  ),
                  d.createElement(
                    f,
                    { as: 'div', bg: 'white', borderRadius: '4px' },
                    d.createElement(f, {
                      as: 'img',
                      src: `${window.PREFIX}/blank.png`,
                      w: '100%',
                    }),
                  ),
                ),
              ),
            ),
            d.createElement(
              v,
              { w: { base: '100%', md: '50%', xl: '33.33%' } },
              d.createElement(
                h,
                { px: j, py: B, m: '0', w: 'full', maxW: 'full' },
                d.createElement(
                  u,
                  {
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: j,
                  },
                  d.createElement(
                    C,
                    {
                      as: 'h1',
                      size: 'sm',
                      fontWeight: '600',
                      color: 'brand.600',
                    },
                    'Details',
                  ),
                ),
              ),
            ),
            d.createElement(
              v,
              {
                w: { base: '100%', md: '100%', xl: '33.33%' },
                bg: 'brand.600',
              },
              d.createElement(
                h,
                { px: j, py: B, m: '0', w: 'full', maxW: 'full' },
                d.createElement(
                  u,
                  {
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: j,
                  },
                  d.createElement(
                    C,
                    { as: 'h1', size: 'sm', fontWeight: '600', color: 'white' },
                    'Ranking Table',
                  ),
                  d.createElement(
                    f,
                    { as: 'div', position: 'relative' },
                    d.createElement(y, {
                      pl: '30px',
                      borderRadius: '32px',
                      _placeholder: { color: 'brand.300' },
                      fontSize: 'sm',
                      borderColor: 'brand.100',
                      color: 'red.500',
                      type: 'search',
                      placeholder: 'Search DevDAO Id',
                    }),
                    d.createElement(O, {
                      h: '11px',
                      w: '11px',
                      position: 'absolute',
                      top: '0',
                      bottom: '0',
                      left: '14px',
                      my: 'auto',
                      opacity: '0.6',
                    }),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
      d.createElement(z, null),
    )
  );
D.render(
  d.createElement(
    d.StrictMode,
    null,
    d.createElement(F, null, d.createElement(P, null)),
  ),
  document.getElementById('root'),
);

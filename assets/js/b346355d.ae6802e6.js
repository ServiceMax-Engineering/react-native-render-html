(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5791],{8690:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var r=a(2784),n=a(6785),l=a(77);function i(e){var t=e.name,a=e.member,i=e.full,c=void 0!==i&&i,o=a?"#"+a.toLowerCase():"";return r.createElement(n.Z,{url:(0,l.Z)("/api/"+t.toLowerCase()+o),name:a&&t&&c?t+"."+a:a||t,full:c,type:"api-def"})}},9350:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var r=a(2784),n=a(8928);function l(e){var t=e.className;return r.createElement(n.Z,{className:t,name:"React Native Blog",projectUrl:"https://expo.io/@jsamr/react-native-blog",imagePath:"/img/blog-expo-qr.png"})}},6115:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var r=a(2784),n="device-iphone-x_3RRi",l="device-frame_iHOx",i="device-content_2DVK",c="device-header_1Vm7",o="device-sensors_3zFL",s="device-btns_Wi9z",m="device-power_a6Po";function p(e){var t=e.children,a=e.scale,p=void 0===a?1:a,u=e.style;return r.createElement("div",{style:Object.assign({"--scale-factor":p},u),className:n},r.createElement("div",{className:l},r.cloneElement(t,Object.assign({},t.props,{className:i}))),r.createElement("div",{className:c}),r.createElement("div",{className:o}),r.createElement("div",{className:s}),r.createElement("div",{className:m}))}},798:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var r=a(2784),n=a(6115),l=a(77);function i(e){var t=e.scale,a=e.url,i=e.style;return r.createElement("div",{style:i},r.createElement(n.Z,{scale:t},r.createElement("img",{src:(0,l.Z)(a)})))}},8928:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var r=a(2784),n=a(6277),l="expoBox_kc_g",i="expoBox__logo_3yMr",c="expoBox__qr_3YAa",o="img_17FI",s=a(77),m=function(e){var t=e.size;return r.createElement("svg",{width:"24",height:"26",viewBox:"0 0 24 26",style:{width:t,height:t},fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M22.069 10.075a2.273 2.273 0 00-.887-.74 2.296 2.296 0 00-2.237.16 2.265 2.265 0 00-.77.859 2.016 2.016 0 00.392 2.274 3.342 3.342 0 002.23-.63 3.289 3.289 0 001.271-1.923zM15.3 1.3l-1.45-.788-6.31 3.481.503.27.957.498 1.732-.954 4.569-2.523-.001.016zm.584-.24a.225.225 0 01.16.15l2.114 6.182a.205.205 0 01-.1.269 4.063 4.063 0 00-1.798 1.974 4.017 4.017 0 00-.175 2.655 4.283 4.283 0 001.755 2.332c.842.55 1.852.79 2.854.68a.269.269 0 01.262.16l2.184 6.345a.256.256 0 01-.101.278l-6.712 3.89a.253.253 0 01-.101.02.27.27 0 01-.181-.03L13.69 24.5a.234.234 0 01-.1-.1l-4.6-10.483-7.005 3.95a.327.327 0 01-.272.01l-1.592-.898a.23.23 0 01-.1-.299l6.805-12.8a.243.243 0 01.11-.099L13.721.03a.259.259 0 01.241 0l1.923 1.03zM7.47 4.499L7.14 4.33.58 16.71l1.197.668 5.657-7.335a.275.275 0 01.231-.1.282.282 0 01.201.149l6.16 14.066 1.646 1.007L9.06 6.005l-.281-.798-1.318-.718.01.01zm10.145 7.382a2.51 2.51 0 01.12-1.663 2.54 2.54 0 011.138-1.23 2.798 2.798 0 013.261.4 2.513 2.513 0 01.073 3.568l-.073.073a2.77 2.77 0 01-3.788.01 2.719 2.719 0 01-.731-1.158z",fill:"var(--ifm-font-color-base)"}))};function p(e){var t=e.className,a=e.projectUrl,p=e.name,u=e.imagePath,d=(0,s.Z)(u);return r.createElement("div",{className:(0,n.Z)(l,t)},r.createElement("div",{className:i},r.createElement(m,{size:48})),r.createElement("a",{target:"_blank",rel:"noopener",href:a},r.createElement("strong",null,"Try Out The ",p," App on Expo!")),r.createElement("div",{className:c},r.createElement("img",{className:o,alt:"QR code to scan the "+p+" App in Expo Go",src:d})))}},4831:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var r=a(7560),n=a(8283),l=(a(2784),a(9037)),i=(a(798),a(8690),a(9350),["components"]),c={title:"Create A WebView-free Blog App with React Native Render HTML, Part II",author:"Jules Sam. Randolph",author_title:"Developer of React Native Render HTML v6",author_url:"https://github.com/jsamr/",author_image_url:"https://avatars.githubusercontent.com/u/3646758?v=4",tags:["foundry","Blog","Article"],description:"A step-by-step guide to render a Blog Article with table of content and scroll-to-section feature in React Native.",image:"img/article-create-webviewfree-blog-app.png",hide_table_of_contents:!1},o=void 0,s={permalink:"/react-native-render-html/blog/2021/06/28/create-blog-app-rnrh-II",source:"@site/blog/2021-06-28-create-blog-app-rnrh-II.mdx",title:"Create A WebView-free Blog App with React Native Render HTML, Part II",description:"A step-by-step guide to render a Blog Article with table of content and scroll-to-section feature in React Native.",date:"2021-06-28T00:00:00.000Z",formattedDate:"June 28, 2021",tags:[{label:"foundry",permalink:"/react-native-render-html/blog/tags/foundry"},{label:"Blog",permalink:"/react-native-render-html/blog/tags/blog"},{label:"Article",permalink:"/react-native-render-html/blog/tags/article"}],readingTime:13,truncated:!0,prevItem:{title:"Create A WebView-free Blog App with React Native Render HTML, Part III",permalink:"/react-native-render-html/blog/2021/06/29/create-blog-app-rnrh-III"},nextItem:{title:"Create A WebView-free Blog App with React Native Render HTML, Part I",permalink:"/react-native-render-html/blog/2021/06/27/create-blog-app-rnrh-I"}},m=[],p={toc:m};function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This article is the part II of the ",(0,l.kt)("em",{parentName:"p"},"Create a  WebView-free Blog App with React Native Render HTML")," serie.\nSee also ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/blog/2021/06/27/create-blog-app-rnrh-I"},"Part I")," and ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/blog/2021/06/29/create-blog-app-rnrh-III"},"Part III"),"."))}u.isMDXComponent=!0}}]);
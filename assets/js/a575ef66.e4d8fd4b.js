(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9620],{8690:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(2784),a=t(6785),o=t(77);function i(e){var n=e.name,t=e.member,i=e.full,l=void 0!==i&&i,s=t?"#"+t.toLowerCase():"";return r.createElement(a.Z,{url:(0,o.Z)("/api/"+n.toLowerCase()+s),name:t&&n&&l?n+"."+t:t||n,full:l,type:"api-def"})}},9350:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(2784),a=t(8928);function o(e){var n=e.className;return r.createElement(a.Z,{className:n,name:"React Native Blog",projectUrl:"https://expo.io/@jsamr/react-native-blog",imagePath:"/img/blog-expo-qr.png"})}},6115:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(2784),a="device-iphone-x_3RRi",o="device-frame_iHOx",i="device-content_2DVK",l="device-header_1Vm7",s="device-sensors_3zFL",c="device-btns_Wi9z",d="device-power_a6Po";function p(e){var n=e.children,t=e.scale,p=void 0===t?1:t,m=e.style;return r.createElement("div",{style:Object.assign({"--scale-factor":p},m),className:a},r.createElement("div",{className:o},r.cloneElement(n,Object.assign({},n.props,{className:i}))),r.createElement("div",{className:l}),r.createElement("div",{className:s}),r.createElement("div",{className:c}),r.createElement("div",{className:d}))}},798:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(2784),a=t(6115),o=t(77);function i(e){var n=e.scale,t=e.url,i=e.style;return r.createElement("div",{style:i},r.createElement(a.Z,{scale:n},r.createElement("img",{src:(0,o.Z)(t)})))}},8928:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(2784),a=t(6277),o="expoBox_kc_g",i="expoBox__logo_3yMr",l="expoBox__qr_3YAa",s="img_17FI",c=t(77),d=function(e){var n=e.size;return r.createElement("svg",{width:"24",height:"26",viewBox:"0 0 24 26",style:{width:n,height:n},fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M22.069 10.075a2.273 2.273 0 00-.887-.74 2.296 2.296 0 00-2.237.16 2.265 2.265 0 00-.77.859 2.016 2.016 0 00.392 2.274 3.342 3.342 0 002.23-.63 3.289 3.289 0 001.271-1.923zM15.3 1.3l-1.45-.788-6.31 3.481.503.27.957.498 1.732-.954 4.569-2.523-.001.016zm.584-.24a.225.225 0 01.16.15l2.114 6.182a.205.205 0 01-.1.269 4.063 4.063 0 00-1.798 1.974 4.017 4.017 0 00-.175 2.655 4.283 4.283 0 001.755 2.332c.842.55 1.852.79 2.854.68a.269.269 0 01.262.16l2.184 6.345a.256.256 0 01-.101.278l-6.712 3.89a.253.253 0 01-.101.02.27.27 0 01-.181-.03L13.69 24.5a.234.234 0 01-.1-.1l-4.6-10.483-7.005 3.95a.327.327 0 01-.272.01l-1.592-.898a.23.23 0 01-.1-.299l6.805-12.8a.243.243 0 01.11-.099L13.721.03a.259.259 0 01.241 0l1.923 1.03zM7.47 4.499L7.14 4.33.58 16.71l1.197.668 5.657-7.335a.275.275 0 01.231-.1.282.282 0 01.201.149l6.16 14.066 1.646 1.007L9.06 6.005l-.281-.798-1.318-.718.01.01zm10.145 7.382a2.51 2.51 0 01.12-1.663 2.54 2.54 0 011.138-1.23 2.798 2.798 0 013.261.4 2.513 2.513 0 01.073 3.568l-.073.073a2.77 2.77 0 01-3.788.01 2.719 2.719 0 01-.731-1.158z",fill:"var(--ifm-font-color-base)"}))};function p(e){var n=e.className,t=e.projectUrl,p=e.name,m=e.imagePath,h=(0,c.Z)(m);return r.createElement("div",{className:(0,a.Z)(o,n)},r.createElement("div",{className:i},r.createElement(d,{size:48})),r.createElement("a",{target:"_blank",rel:"noopener",href:t},r.createElement("strong",null,"Try Out The ",p," App on Expo!")),r.createElement("div",{className:l},r.createElement("img",{className:s,alt:"QR code to scan the "+p+" App in Expo Go",src:h})))}},1011:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return h},default:function(){return g}});var r=t(7560),a=t(8283),o=(t(2784),t(9037)),i=t(798),l=t(8690),s=t(9350),c=["components"],d={title:"Create A WebView-free Blog App with React Native Render HTML, Part III",author:"Jules Sam. Randolph",author_title:"Developer of React Native Render HTML v6",author_url:"https://github.com/jsamr/",author_image_url:"https://avatars.githubusercontent.com/u/3646758?v=4",tags:["foundry","Blog","Article"],description:"A step-by-step guide to render a Blog Article with table of content and scroll-to-section feature in React Native.",image:"img/article-create-webviewfree-blog-app.png",hide_table_of_contents:!1},p=void 0,m={permalink:"/react-native-render-html/blog/2021/06/29/create-blog-app-rnrh-III",source:"@site/blog/2021-06-29-create-blog-app-rnrh-III.mdx",title:"Create A WebView-free Blog App with React Native Render HTML, Part III",description:"A step-by-step guide to render a Blog Article with table of content and scroll-to-section feature in React Native.",date:"2021-06-29T00:00:00.000Z",formattedDate:"June 29, 2021",tags:[{label:"foundry",permalink:"/react-native-render-html/blog/tags/foundry"},{label:"Blog",permalink:"/react-native-render-html/blog/tags/blog"},{label:"Article",permalink:"/react-native-render-html/blog/tags/article"}],readingTime:12.285,truncated:!0,nextItem:{title:"Create A WebView-free Blog App with React Native Render HTML, Part II",permalink:"/react-native-render-html/blog/2021/06/28/create-blog-app-rnrh-II"}},h=[{value:"Tap To Scroll Feature",id:"tap-to-scroll-feature",children:[{value:"The <code>Scroller</code> Class",id:"the-scroller-class",children:[]},{value:"Sharing the <code>Scroller</code> in a React Context",id:"sharing-the-scroller-in-a-react-context",children:[]},{value:"Listening to Entry Changes in <code>TOC</code>",id:"listening-to-entry-changes-in-toc",children:[]},{value:"Register Headings Layouts",id:"register-headings-layouts",children:[]}]},{value:"Styling Refinements",id:"styling-refinements",children:[{value:"Fixing the Avatar",id:"fixing-the-avatar",children:[]},{value:"Fixing Paragraphs in <code>&lt;li&gt;</code> Elements",id:"fixing-paragraphs-in-li-elements",children:[]},{value:"Discard <code>#</code> anchors appended to Headings by Docusaurus",id:"discard--anchors-appended-to-headings-by-docusaurus",children:[]},{value:"Fixing Code Samples",id:"fixing-code-samples",children:[]},{value:"Final Touch",id:"final-touch",children:[]}]},{value:"Epilogue",id:"epilogue",children:[{value:"Frustrating React Native Text Limitations",id:"frustrating-react-native-text-limitations",children:[]},{value:"Going Further",id:"going-further",children:[]}]}],u={toc:h};function g(e){var n=e.components,d=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},u,d,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article is the part III of the ",(0,o.kt)("em",{parentName:"p"},"Create a  WebView-free Blog App with React Native Render HTML")," serie.\nSee also ",(0,o.kt)("a",{parentName:"p",href:"/react-native-render-html/blog/2021/06/27/create-blog-app-rnrh-I"},"Part I")," and ",(0,o.kt)("a",{parentName:"p",href:"/react-native-render-html/blog/2021/06/28/create-blog-app-rnrh-II"},"Part II"),"."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The source code of this case study is available in the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch of this\nrepo: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jsamr/rnrh-blog"},(0,o.kt)("inlineCode",{parentName:"a"},"jsamr/rnrh-blog")),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"enhanced"),"\nbranch contains a few more features beyond this tutorial, such as a refined UI,\ndark mode, caching with ",(0,o.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/"},"react-queries"),"...\netc. You can try out the ",(0,o.kt)("strong",{parentName:"p"},"enhanced")," version right now with expo, see ",(0,o.kt)("a",{parentName:"p",href:"https://expo.io/@jsamr/react-native-blog"},"the\nproject page")," for instructions."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you have any question or remarks regarding this tutorial, ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/dbEMMJM"},"you're welcome in our Discord channel"),"."))),(0,o.kt)(s.Z,{mdxType:"ExpoBlogCard"}),(0,o.kt)("h2",{id:"tap-to-scroll-feature"},"Tap To Scroll Feature"),(0,o.kt)("h3",{id:"the-scroller-class"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"Scroller")," Class"),(0,o.kt)("p",null,"We'll put all the scrolling logic in a ",(0,o.kt)("inlineCode",{parentName:"p"},"Scroller")," class that we'll later use with hooks.\nCreate this new file: ",(0,o.kt)("inlineCode",{parentName:"p"},"utils/Scroller.ts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="utils/Scroller.ts"',title:'"utils/Scroller.ts"'},'import { MutableRefObject } from "react";\nimport { LayoutChangeEvent, Platform, ScrollViewProps } from "react-native";\nimport { ScrollView } from "react-native-gesture-handler";\nimport { EventEmitter } from "events";\n\n// This is the min distance from the top edge of the scroll view\n// to select a heading\nconst MIN_DIST_FROM_TOP_EDG = 15;\n\nexport default class Scroller {\n  private ref: MutableRefObject<ScrollView | null>;\n  private entriesMap: Record<string, number> = {};\n  private entriesCoordinates: Array<[string, number]> = [];\n  private eventEmitter = new EventEmitter();\n  private lastEntryName = "";\n  private offset = 0;\n\n  constructor(ref: MutableRefObject<ScrollView | null>) {\n    this.ref = ref;\n  }\n\n  handlers: ScrollViewProps = {\n    onContentSizeChange: () => {\n      this.entriesCoordinates = Object.entries(this.entriesMap).sort(\n        (a, b) => a[1] - b[1]\n      );\n    },\n    onScroll: ({ nativeEvent }) => {\n      const offsetY =\n        nativeEvent.contentOffset.y - this.offset + MIN_DIST_FROM_TOP_EDG;\n      const layoutHeight = nativeEvent.layoutMeasurement.height;\n      // We use a conditional to avoid overheading the JS thread on Android.\n      // On iOS, scrollEventThrottle will do the work.\n      if (Platform.OS !== "android" || Math.abs(nativeEvent.velocity!.y) < 1) {\n        for (let i = 0; i < this.entriesCoordinates.length; i++) {\n          const [entryName, lowerBound] = this.entriesCoordinates[i];\n          const upperBound =\n            i < this.entriesCoordinates.length - 1\n              ? this.entriesCoordinates[i + 1][1]\n              : lowerBound + layoutHeight;\n          if (offsetY >= lowerBound && offsetY < upperBound) {\n            if (entryName !== this.lastEntryName) {\n              this.eventEmitter.emit("select-entry", entryName);\n              this.lastEntryName = entryName;\n            }\n            break;\n          }\n        }\n      }\n    },\n  };\n\n  setOffset(offset: number) {\n    this.offset = offset;\n  }\n\n  addSelectedEntryListener(listener: (entryName: string) => void) {\n    this.eventEmitter.addListener("select-entry", listener);\n  }\n\n  removeSelectedEntryListener(listener: (entryName: string) => void) {\n    this.eventEmitter.removeListener("select-entry", listener);\n  }\n\n  registerScrollEntry(name: string, layout: LayoutChangeEvent) {\n    this.entriesMap[name] = layout.nativeEvent.layout.y;\n  }\n\n  scrollToEntry(entryName: string) {\n    if (entryName in this.entriesMap) {\n      this.ref.current?.scrollTo({\n        y: this.entriesMap[entryName] + this.offset - MIN_DIST_FROM_TOP_EDG,\n        animated: true,\n      });\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Below is a summary of each member in this class."),(0,o.kt)("dl",null,(0,o.kt)("dt",null,(0,o.kt)("p",null,"  ",(0,o.kt)("inlineCode",{parentName:"p"},"constructor"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"  The constructor takes a ",(0,o.kt)("inlineCode",{parentName:"p"},"ScrollView")," ref to enable the ",(0,o.kt)("inlineCode",{parentName:"p"},"scrollToEntry")," method.")),(0,o.kt)("dt",null,(0,o.kt)("p",null,"  ",(0,o.kt)("inlineCode",{parentName:"p"},"addSelectedEntryListener"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"  A method to listen to selected entry changes. This will be useful\nin the table of content drawer to update the active entry on scroll.")),(0,o.kt)("dt",null,(0,o.kt)("p",null,"  ",(0,o.kt)("inlineCode",{parentName:"p"},"removeSelectedEntryListener"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"  A method to free a listener to selected entry changes.")),(0,o.kt)("dt",null,(0,o.kt)("p",null,"  ",(0,o.kt)("inlineCode",{parentName:"p"},"registerScrollEntry"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"  A method to be used with ",(0,o.kt)("inlineCode",{parentName:"p"},"onLayout")," in order to store the coordinates\nof each entry in the body of the article.")),(0,o.kt)("dt",null,(0,o.kt)("p",null,"  ",(0,o.kt)("inlineCode",{parentName:"p"},"handlers"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"  Event handlers to be passed to a ",(0,o.kt)("inlineCode",{parentName:"p"},"ScrollView")," component. The ",(0,o.kt)("inlineCode",{parentName:"p"},"onScroll")," handler\nwill be used to update the selected entry in the table of content drawer.")),(0,o.kt)("dt",null,(0,o.kt)("p",null,"  ",(0,o.kt)("inlineCode",{parentName:"p"},"setOffset"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"  A method to set the offset of the ",(0,o.kt)("inlineCode",{parentName:"p"},"headings")," container. Because of the DOM\nstructure offered by Docusaurus wich looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<article>\n  <header>...</header>\n  <div class="markdown">\n    <h2>...</h2>\n    <h3>...</h3>\n  </div>\n</article>\n')),(0,o.kt)("p",null,"  the computed headings tags coordinates will be relative to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<div>")," rather\nthen relative to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ScrollView")," content, and we need to adjust to that.")),(0,o.kt)("dt",null,(0,o.kt)("p",null,"  ",(0,o.kt)("inlineCode",{parentName:"p"},"scrollToEntry"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"  A method to imperatively scroll to the given entry name."))),(0,o.kt)("h3",{id:"sharing-the-scroller-in-a-react-context"},"Sharing the ",(0,o.kt)("inlineCode",{parentName:"h3"},"Scroller")," in a React Context"),(0,o.kt)("p",null,"Let's start by creating a scroller context and export the relevant hook and\nprovider:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="utils/scroller.tsx"',title:'"utils/scroller.tsx"'},"import React, { createContext, PropsWithChildren, useContext } from \"react\";\nimport Scroller from './Scroller';\n\nconst scrollerContext = createContext<Scroller>(null as any);\n\nexport function useScroller(): Scroller {\n  return useContext(scrollerContext);\n}\n\nexport function ScrollerProvider({\n  children,\n  scroller\n}: PropsWithChildren<{ scroller: Scroller }>) {\n  return (\n    <scrollerContext.Provider value={scroller}>\n      {children}\n    </scrollerContext.Provider>\n  );\n}\n")),(0,o.kt)("p",null,"Then we can provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"scroller")," instance from the ",(0,o.kt)("inlineCode",{parentName:"p"},"ArticleScreen")," component,\nand scroll to the targeted entry on menu entry press."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{1,3-4,8-15,22-26,34,41,49} title="screens/ArticleScreen.tsx"',"{1,3-4,8-15,22-26,34,41,49}":!0,title:'"screens/ArticleScreen.tsx"'},'import React, { useCallback, useEffect, useRef, useMemo } from "react";\n// ... other imports\nimport Scroller from "../utils/Scroller";\nimport { ScrollerProvider } from "../utils/scroller";\n\n// other hooks\n\nfunction useScrollFeature(scrollerDep: any) {\n  const scrollViewRef = useRef<null | ScrollView>(null);\n  const scroller = useMemo(() => new Scroller(scrollViewRef), [scrollerDep]);\n  return {\n    scroller,\n    scrollViewRef,\n  };\n}\n\nexport default function ArticleScreen(props: ArticleScreenProps) {\n  useSetTitleEffect(props);\n  const url = props.route.params.url;\n  const { dom, headings } = useArticleDom(url);\n  const { drawerRef, openDrawer, closeDrawer } = useDrawer();\n  const { scrollViewRef, scroller } = useScrollFeature(url);\n  const onPressEntry = useCallback((entry: string) => {\n    closeDrawer();\n    scroller.scrollToEntry(entry);\n  }, [scroller]);\n  const renderToc = useCallback(\n    function renderToc() {\n      return <TOC headings={headings} onPressEntry={onPressEntry} />;\n    },\n    [headings]\n  );\n  return (\n    <ScrollerProvider scroller={scroller}>\n      <DrawerLayout\n        drawerPosition="right"\n        drawerWidth={300}\n        renderNavigationView={renderToc}\n        ref={drawerRef}\n      >\n        <ArticleBody scrollViewRef={scrollViewRef} dom={dom} />\n        <FAB\n          style={styles.fab}\n          color="#61dafb"\n          icon="format-list-bulleted-square"\n          onPress={openDrawer}\n        />\n      </DrawerLayout>\n    </ScrollerProvider>\n  );\n}\n\n// styles\n')),(0,o.kt)("p",null,"Finally, we must consume the ",(0,o.kt)("inlineCode",{parentName:"p"},"scrollViewRef")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ArticleBody")," component,\nand pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"Scroller.handlers")," event handlers to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ScrollView")," component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{3,9,12,16,19} title="components/ArticleBody.tsx"',"{3,9,12,16,19}":!0,title:'"components/ArticleBody.tsx"'},'import React, { useCallback } from "react";\n// ... other imports\nimport { useScroller } from "../utils/scroller";\n\n// other definitions\n\nexport default function ArticleBody({\n  dom,\n  scrollViewRef\n}: {\n  dom: Document | null;\n  scrollViewRef: any;\n}) {\n  const { width } = useWindowDimensions();\n  const availableWidth = Math.min(width, 500);\n  const scroller = useScroller();\n  return (\n    <ScrollView\n      {...scroller.handlers}\n      style={styles.container}\n      ref={scrollViewRef}\n      scrollEventThrottle={100}\n      // other props\n    >\n      {/* ... */}\n    </ScrollView>\n  );\n}\n')),(0,o.kt)("p",null,"Great! Nevertheless we have yet two unaddressed issues:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Update selected entry on scroll in the ",(0,o.kt)("inlineCode",{parentName:"li"},"TOC"),";"),(0,o.kt)("li",{parentName:"ul"},"Register headings layouts. We will use a custom renderer for that purpose.")),(0,o.kt)("h3",{id:"listening-to-entry-changes-in-toc"},"Listening to Entry Changes in ",(0,o.kt)("inlineCode",{parentName:"h3"},"TOC")),(0,o.kt)("p",null,"First of all, I propose to factor the logic of adding a listener to\nselected entry changes in a separate hook (",(0,o.kt)("inlineCode",{parentName:"p"},"hooks/useOnEntryChangeEffect.ts"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="hooks/useOnEntryChangeEffect.ts"',title:'"hooks/useOnEntryChangeEffect.ts"'},'import { useEffect } from "react";\nimport { useScroller } from "../utils/scroller";\n\nexport default function useOnEntryChangeEffect(\n  onEntryChange: (entryName: string) => void\n) {\n  const scroller = useScroller();\n  useEffect(\n    function updateActiveTargetOnScroll() {\n      scroller.addSelectedEntryListener(onEntryChange);\n      return () => scroller.removeSelectedEntryListener(onEntryChange);\n    },\n    [scroller, onEntryChange]\n  );\n}\n')),(0,o.kt)("p",null,"Then, we just need to consume this hook from the ",(0,o.kt)("inlineCode",{parentName:"p"},"TOC")," component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{2,14} title="components/TOC.tsx"',"{2,14}":!0,title:'"components/TOC.tsx"'},'// ...other imports\nimport useOnEntryChangeEffect from "../hooks/useOnEntryChangeEffect";\n\nexport default function TOC({\n  headings,\n  onPressEntry,\n}: {\n  headings: Element[];\n  onPressEntry?: (name: string) => void;\n}) {\n  const [activeEntry, setActiveEntry] = useState(\n    headings.length ? textContent(headings[0]) : ""\n  );\n  useOnEntryChangeEffect(setActiveEntry);\n  // ...\n}\n')),(0,o.kt)("h3",{id:"register-headings-layouts"},"Register Headings Layouts"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Scroller")," is still missing the coordinates of each heading to be able to\nproperly ",(0,o.kt)("inlineCode",{parentName:"p"},"scrollToEntry"),". For this purpose, we are going to create a ",(0,o.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/guides/custom-renderers#component-based-custom-rendering"},"custom\nrenderer"),"\nfor ",(0,o.kt)("inlineCode",{parentName:"p"},"<h2>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<h3>")," tags. We will also need to register a ",(0,o.kt)("inlineCode",{parentName:"p"},"<header>")," renderer\nto store the header height. If you remember well, the DOM has a structure like\nbelow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<article>\n  \x3c!-- We need to account for the header height --\x3e\n  <header>...</header>\n  <div class="markdown">\n    <h2>...</h2>\n    <h3>...</h3>\n  </div>\n</article>\n')),(0,o.kt)("p",null,"Let's get back to ",(0,o.kt)("inlineCode",{parentName:"p"},"components/WebEngine.tsx")," and register both renderers here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{1,3-4,9,10,11,13-45,50,61} title="components/WebEngine.tsx"',"{1,3-4,9,10,11,13-45,50,61}":!0,title:'"components/WebEngine.tsx"'},'import React, { useCallback } from "react";\nimport {\n  CustomBlockRenderer,\n  CustomTagRendererRecord,\n  RenderHTMLConfigProvider,\n  TRenderEngineProvider,\n  TRenderEngineConfig,\n} from "react-native-render-html";\nimport { findOne, textContent } from "domutils";\nimport { useScroller } from "../utils/scroller";\nimport { LayoutChangeEvent } from "react-native";\n\nconst HeadingRenderer: CustomBlockRenderer = function HeaderRenderer({\n  TDefaultRenderer,\n  ...props\n}) {\n  const scroller = useScroller();\n  const onLayout = useCallback(\n    (e: LayoutChangeEvent) => {\n      scroller.registerScrollEntry(textContent(props.tnode.domNode!), e);\n    },\n    [scroller]\n  );\n  return <TDefaultRenderer {...props} viewProps={{ onLayout }} />;\n};\n\nconst HeaderRenderer: CustomBlockRenderer = function HeaderRenderer({\n  TDefaultRenderer,\n  ...props\n}) {\n  const scroller = useScroller();\n  const onLayout = useCallback(\n    (e: LayoutChangeEvent) => {\n      scroller.setOffset(e.nativeEvent.layout.y + e.nativeEvent.layout.height);\n    },\n    [scroller]\n  );\n  return <TDefaultRenderer {...props} viewProps={{ onLayout }} />;\n};\n\nconst renderers: CustomTagRendererRecord = {\n  h2: HeadingRenderer,\n  h3: HeadingRenderer,\n  header: HeaderRenderer,\n};\n\nconst selectDomRoot: TRenderEngineConfig["selectDomRoot"] = (node) =>\n  findOne((e) => e.name === "article", node.children, true);\n\nconst ignoredDomTags = ["button", "footer"];\n\nexport default function WebEngine({ children }: React.PropsWithChildren<{}>) {\n  // Every prop is defined outside of the function component.\n  // This is important to prevent extraneous rebuilts of the engine.\n  return (\n    <TRenderEngineProvider\n      ignoredDomTags={ignoredDomTags}\n      selectDomRoot={selectDomRoot}\n    >\n      <RenderHTMLConfigProvider\n        renderers={renderers}\n        enableExperimentalMarginCollapsing\n      >\n        {children}\n      </RenderHTMLConfigProvider>\n    </TRenderEngineProvider>\n  );\n}\n')),(0,o.kt)("p",null,"Because the ",(0,o.kt)("inlineCode",{parentName:"p"},"<h2>"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<h3>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<header>")," tags have a content model set to\n",(0,o.kt)("strong",{parentName:"p"},"block"),", they will be rendered in a ",(0,o.kt)("inlineCode",{parentName:"p"},"View"),", so we can pass ",(0,o.kt)("inlineCode",{parentName:"p"},"onLayout")," in\n","\u200b",(0,o.kt)(l.Z,{name:"TDefaultRendererProps",member:"viewProps",mdxType:"APIReference"})," prop."),(0,o.kt)("p",null,"Hence we're done with the tap-to-scroll feature! But the ",(0,o.kt)("inlineCode",{parentName:"p"},"ArticleBody")," is still\npretty ugly, so we'll use some styles and fixes to prettify it!"),(0,o.kt)("h2",{id:"styling-refinements"},"Styling Refinements"),(0,o.kt)("h3",{id:"fixing-the-avatar"},"Fixing the Avatar"),(0,o.kt)("p",null,"The avatar should be 50x50 and its container displayed in row. We are going to fix it in two steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"By targeting the container class with styles to display in row;"),(0,o.kt)("li",{parentName:"ol"},"By setting a custom ",(0,o.kt)("inlineCode",{parentName:"li"},"<img>")," renderer to fix the size.")),(0,o.kt)("p",null,"So let's edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"components/WebEngine")," to apply those fixes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{5,9,15-21,26,31-63,70} title="components/WebEngine"',"{5,9,15-21,26,31-63,70}":!0,title:'"components/WebEngine"'},'import React, { useCallback } from "react";\nimport {\n  CustomBlockRenderer,\n  CustomTagRendererRecord,\n  MixedStyleRecord,\n  RenderHTMLConfigProvider,\n  TRenderEngineProvider,\n  TRenderEngineConfig,\n  useInternalRenderer,\n} from "react-native-render-html";\n// ... other imports\n\n// HeaderRenderer\n\nconst ImageRenderer: CustomBlockRenderer = function ImageRenderer(props) {\n  const { Renderer, rendererProps } = useInternalRenderer("img", props);\n  if ((props.tnode.parent?.classes.indexOf("avatar__photo") || -1) > -1) {\n    return <Renderer {...rendererProps} width={50} height={50} />;\n  }\n  return <Renderer {...rendererProps} />;\n};\n\nconst renderers: CustomTagRendererRecord = {\n  h2: HeadingRenderer,\n  h3: HeadingRenderer,\n  img: ImageRenderer\n};\n\n// ... other definitions\n\nconst classesStyles: MixedStyleRecord = {\n  avatar: {\n    marginTop: 10,\n    flexDirection: "row",\n    alignItems: "center",\n    flexWrap: "nowrap",\n  },\n  avatar__photo: {\n    width: 50,\n    height: 50,\n    borderRadius: 25,\n    overflow: "hidden",\n  },\n  avatar__intro: {\n    flexShrink: 1,\n    alignItems: "flex-start",\n  },\n  avatar__name: {\n    fontWeight: "bold",\n    flexGrow: 0,\n    marginBottom: 10,\n  },\n  avatar__subtitle: {\n    color: "rgb(118, 118, 118)",\n    fontWeight: "bold",\n    lineHeight: 16,\n  },\n  "avatar__photo-link": {\n    borderRadius: 25,\n    marginRight: 10,\n    overflow: "hidden",\n  },\n}\n\nexport default function WebEngine({ children }: React.PropsWithChildren<{}>) {\n  return (\n    <TRenderEngineProvider\n      ignoredDomTags={ignoredDomTags}\n      selectDomRoot={selectDomRoot}\n      classesStyles={classesStyles}\n      // other props\n    >\n    {/*...*/}\n    </TRenderEngineProvider>\n  );\n}\n')),(0,o.kt)("h3",{id:"fixing-paragraphs-in-li-elements"},"Fixing Paragraphs in ",(0,o.kt)("inlineCode",{parentName:"h3"},"<li>")," Elements"),(0,o.kt)("p",null,"Paragraphs nested in ",(0,o.kt)("inlineCode",{parentName:"p"},"<li>")," elements have top and bottom margins, which is undesirable.\nTo fix the issue, we're going to add a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"<p>")," renderer like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/WebEngine.tsx"',title:'"components/WebEngine.tsx"'},"// renderers and imports\n\nconst ParagraphRenderer: CustomBlockRenderer = function ParagraphRenderer({\n  TDefaultRenderer,\n  tnode,\n  ...props\n}) {\n  const marginsFix =\n    tnode.markers.olNestLevel > -1 || tnode.markers.ulNestLevel > -1\n      ? { marginTop: 0, marginBottom: 0 }\n      : null;\n  return (\n    <TDefaultRenderer\n      {...props}\n      tnode={tnode}\n      style={[props.style, marginsFix]}\n    />\n  );\n};\n\nconst renderers: CustomTagRendererRecord = {\n  // ... other renderers\n  p: ParagraphRenderer\n};\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We are using ",(0,o.kt)("inlineCode",{parentName:"p"},"markers")," which contain the current nest level of ",(0,o.kt)("inlineCode",{parentName:"p"},"ol")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ul"),"\nelements to assess if we are rendering inside a list. See ",(0,o.kt)(l.Z,{name:"Markers",mdxType:"APIReference"}),"."))),(0,o.kt)("h3",{id:"discard--anchors-appended-to-headings-by-docusaurus"},"Discard ",(0,o.kt)("inlineCode",{parentName:"h3"},"#")," anchors appended to Headings by Docusaurus"),(0,o.kt)("p",null,"These elements have a ",(0,o.kt)("inlineCode",{parentName:"p"},'"hash-link"')," class, so we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"ignoreDomNode")," to discard them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{5,15-16,25} title="components/WebEngine.tsx"',"{5,15-16,25}":!0,title:'"components/WebEngine.tsx"'},'import React, { useCallback } from "react";\nimport {\n  CustomBlockRenderer,\n  CustomTagRendererRecord,\n  isDomElement,\n  MixedStyleRecord,\n  RenderHTMLConfigProvider,\n  TRenderEngineProvider,\n  TRenderEngineConfig,\n  useInternalRenderer,\n} from "react-native-render-html";\n\n// ...\n\nconst ignoreDomNode: TRenderEngineConfig["ignoreDomNode"] = (node) =>\n  isDomElement(node) && !!node.attribs.class?.match(/hash-link/);\n\nexport default function WebEngine({ children }: React.PropsWithChildren<{}>) {\n  // Every prop is defined outside of the function component.\n  // This is important to prevent extraneous rebuilts of the engine.\n  return (\n    <TRenderEngineProvider\n      ignoredDomTags={ignoredDomTags}\n      selectDomRoot={selectDomRoot}\n      ignoreDomNode={ignoreDomNode}\n      // ...\n    >\n      {/*...*/}\n    </TRenderEngineProvider>\n  );\n}\n')),(0,o.kt)("p",null,"Great! Now the ",(0,o.kt)("inlineCode",{parentName:"p"},"#")," characters have been removed:"),(0,o.kt)(i.Z,{url:"/img/blog-article-body-code-issue.png",scale:.85,mdxType:"Screenshot"}),(0,o.kt)("p",null,"However, code samples look pretty ugly:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"They're missing padding;"),(0,o.kt)("li",{parentName:"ul"},"They should be horizontally scrollable and lines should not wrap;"),(0,o.kt)("li",{parentName:"ul"},"A monospace font should be used;"),(0,o.kt)("li",{parentName:"ul"},"Whitespaces should be preserved.")),(0,o.kt)("p",null,"So, let's fix it!"),(0,o.kt)("h3",{id:"fixing-code-samples"},"Fixing Code Samples"),(0,o.kt)("p",null,"Code samples are rendered by Docusaurus in a ",(0,o.kt)("inlineCode",{parentName:"p"},'<div class="prism-code">')," tag. I propose we define a custom renderer\nfor div tags, which renders inside a ",(0,o.kt)("inlineCode",{parentName:"p"},"ScrollView")," when matching the ",(0,o.kt)("inlineCode",{parentName:"p"},'"prism-code"')," class. Furthermore, we can\ndefine styles for this class to fix the aforementioned issues:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/WebEngine.tsx"',title:'"components/WebEngine.tsx"'},'// ...other imports\nimport { ScrollView } from \'react-native-gesture-handler\';\n\n// ...\n\nconst DivRenderer: CustomBlockRenderer = function DivRenderer({\n  TDefaultRenderer,\n  ...props\n}) {\n  if (props.tnode.classes.indexOf("prism-code") > -1) {\n    return (\n      <ScrollView horizontal style={props.style}>\n        <TDefaultRenderer\n          {...props}\n          style={[{ flexGrow: 1, flexShrink: 1, padding: 10 }]}\n        />\n      </ScrollView>\n    );\n  }\n\n  return <TDefaultRenderer {...props} />;\n};\n\nconst renderers: CustomTagRendererRecord = {\n  // ... other renderers\n  div: DivRenderer,\n};\n\nconst classesStyles: MixedStyleRecord = {\n  // ... other classes styles\n  "token-line": {\n    whiteSpace: "pre",\n    lineHeight: 12 * 1.4,\n  },\n  "prism-code": {\n    backgroundColor: "#282c34",\n    fontFamily: "monospace",\n    borderRadius: 10,\n    fontSize: 12,\n    flexShrink: 0,\n  },\n};\n')),(0,o.kt)(i.Z,{url:"/img/blog-article-body-code-fixed.png",scale:.85,mdxType:"Screenshot"}),(0,o.kt)("p",null,"That's looking much better. We're almost done!"),(0,o.kt)("h3",{id:"final-touch"},"Final Touch"),(0,o.kt)("p",null,"We could add a few more styles to match the React Native blog styles:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/WebEngine.tsx"',title:'"components/WebEngine.tsx"'},'import {\n  // ...\n  MixedStyleDeclaration,\n  // ...\n} from "react-native-render-html";\n\n// other imports and declarations\n\nconst tagsStyles: MixedStyleRecord = {\n  a: {\n    color: "#1c1e21",\n    backgroundColor: "rgba(187, 239, 253, 0.3)",\n  },\n  li: {\n    marginBottom: 10,\n  },\n  img: {\n    alignSelf: "center",\n  },\n  h4: {\n    marginBottom: 0,\n    marginTop: 0,\n  },\n  code: {\n    backgroundColor: "rgba(0, 0, 0, 0.06)",\n    fontSize: 14,\n  },\n  blockquote: {\n    marginLeft: 0,\n    marginRight: 0,\n    paddingLeft: 20,\n    paddingRight: 20,\n    backgroundColor: "#fff8d8",\n    borderLeftWidth: 10,\n    borderLeftColor: "#ffe564",\n  },\n};\n\nconst baseStyle: MixedStyleDeclaration = {\n  color: "#1c1e21",\n  fontSize: 16,\n  lineHeight: 16 * 1.8,\n};\n\nexport default function WebEngine({ children }: React.PropsWithChildren<{}>) {\n  return (\n    <TRenderEngineProvider\n      // ...\n      tagsStyles={tagsStyles}\n      baseStyle={baseStyle}>\n      {/*...*/}\n    </TRenderEngineProvider>\n  );\n}\n')),(0,o.kt)(i.Z,{url:"/img/blog-article-body-refined.png",scale:.85,mdxType:"Screenshot"}),(0,o.kt)("h2",{id:"epilogue"},"Epilogue"),(0,o.kt)("h3",{id:"frustrating-react-native-text-limitations"},"Frustrating React Native Text Limitations"),(0,o.kt)("p",null,"As a final note, I'd like to mention a few frustrating limitations in React\nNative that prevented me from replicating more accurately the official blog styles:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"backgroundColor")," spans to the full line-box of text elements, whereas in\nCSS, it only spans to the text content-area. Below is a diagram explaining the difference:\n",(0,o.kt)("img",{parentName:"li",src:"https://iamvdo.me/content/01-blog/30-css-avance-metriques-des-fontes-line-height-et-vertical-align/line-height.png",alt:null})," See a complete explanation ",(0,o.kt)("a",{parentName:"li",href:"https://iamvdo.me/en/blog/css-font-metrics-line-height-and-vertical-align"},"in this excellent article on CSS text styling"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"padding")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"border")," are ignored in nested text elements.")),(0,o.kt)("p",null,"All these features are required to get the official blog appealing anchors styles: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(4833).Z})),(0,o.kt)("p",null,"Instead we have backgrounds overlapping each other, which becomes weird when there is a high density of anchors:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(4445).Z})),(0,o.kt)("p",null,"This is because, as stated before, the ",(0,o.kt)("inlineCode",{parentName:"p"},"backgroundColor")," spans to the entire\nheight of the line box, instead of spanning to the content area."),(0,o.kt)("h3",{id:"going-further"},"Going Further"),(0,o.kt)("p",null,"You can take a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jsamr/rnrh-blog/tree/enhanced"},(0,o.kt)("inlineCode",{parentName:"a"},"enhanced")," branch of the project")," and see how the\nbelow features have been implemented:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cached queries with ",(0,o.kt)("inlineCode",{parentName:"li"},"react-queries"),";"),(0,o.kt)("li",{parentName:"ul"},"Dark mode (follows system mode);"),(0,o.kt)("li",{parentName:"ul"},"Progressive rendering for fast time to first contentful paint via ",(0,o.kt)("inlineCode",{parentName:"li"},"FlatList"),";"),(0,o.kt)("li",{parentName:"ul"},"Collapsible header with ",(0,o.kt)("inlineCode",{parentName:"li"},"react-native-reanimated")," (v2);"),(0,o.kt)("li",{parentName:"ul"},"Video support with ",(0,o.kt)("inlineCode",{parentName:"li"},"expo-av"),".")),(0,o.kt)("p",null,"That's all for this tutorial! Don't forget to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/meliorence/react-native-render-html"},"give us a star")," if you enjoy this library.\nYou can also ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/jsamrn"},"follow me on Twitter"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://openbase.com/js/react-native-render-html?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge"},"rate this library on Open Base"),"."))}g.isMDXComponent=!0},4445:function(e,n,t){"use strict";n.Z=t.p+"assets/images/appaling-react-native-text-bg-e65ef8d26129b235780532740f9d9c7c.png"},4833:function(e,n,t){"use strict";n.Z=t.p+"assets/images/react-native-blog-anchors-b5270605cd5857d21a8ce013cdb1f890.png"}}]);
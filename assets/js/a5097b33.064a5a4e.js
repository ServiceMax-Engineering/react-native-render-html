(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4034],{8690:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(2784),r=a(6785),i=a(77);function o(e){var t=e.name,a=e.member,o=e.full,l=void 0!==o&&o,s=a?"#"+a.toLowerCase():"";return n.createElement(r.Z,{url:(0,i.Z)("/api/"+t.toLowerCase()+s),name:a&&t&&l?t+"."+a:a||t,full:l,type:"api-def"})}},9350:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var n=a(2784),r=a(8928);function i(e){var t=e.className;return n.createElement(r.Z,{className:t,name:"React Native Blog",projectUrl:"https://expo.io/@jsamr/react-native-blog",imagePath:"/img/blog-expo-qr.png"})}},6115:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var n=a(2784),r="device-iphone-x_3RRi",i="device-frame_iHOx",o="device-content_2DVK",l="device-header_1Vm7",s="device-sensors_3zFL",c="device-btns_Wi9z",p="device-power_a6Po";function m(e){var t=e.children,a=e.scale,m=void 0===a?1:a,d=e.style;return n.createElement("div",{style:Object.assign({"--scale-factor":m},d),className:r},n.createElement("div",{className:i},n.cloneElement(t,Object.assign({},t.props,{className:o}))),n.createElement("div",{className:l}),n.createElement("div",{className:s}),n.createElement("div",{className:c}),n.createElement("div",{className:p}))}},798:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(2784),r=a(6115),i=a(77);function o(e){var t=e.scale,a=e.url,o=e.style;return n.createElement("div",{style:o},n.createElement(r.Z,{scale:t},n.createElement("img",{src:(0,i.Z)(a)})))}},8928:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var n=a(2784),r=a(6277),i="expoBox_kc_g",o="expoBox__logo_3yMr",l="expoBox__qr_3YAa",s="img_17FI",c=a(77),p=function(e){var t=e.size;return n.createElement("svg",{width:"24",height:"26",viewBox:"0 0 24 26",style:{width:t,height:t},fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M22.069 10.075a2.273 2.273 0 00-.887-.74 2.296 2.296 0 00-2.237.16 2.265 2.265 0 00-.77.859 2.016 2.016 0 00.392 2.274 3.342 3.342 0 002.23-.63 3.289 3.289 0 001.271-1.923zM15.3 1.3l-1.45-.788-6.31 3.481.503.27.957.498 1.732-.954 4.569-2.523-.001.016zm.584-.24a.225.225 0 01.16.15l2.114 6.182a.205.205 0 01-.1.269 4.063 4.063 0 00-1.798 1.974 4.017 4.017 0 00-.175 2.655 4.283 4.283 0 001.755 2.332c.842.55 1.852.79 2.854.68a.269.269 0 01.262.16l2.184 6.345a.256.256 0 01-.101.278l-6.712 3.89a.253.253 0 01-.101.02.27.27 0 01-.181-.03L13.69 24.5a.234.234 0 01-.1-.1l-4.6-10.483-7.005 3.95a.327.327 0 01-.272.01l-1.592-.898a.23.23 0 01-.1-.299l6.805-12.8a.243.243 0 01.11-.099L13.721.03a.259.259 0 01.241 0l1.923 1.03zM7.47 4.499L7.14 4.33.58 16.71l1.197.668 5.657-7.335a.275.275 0 01.231-.1.282.282 0 01.201.149l6.16 14.066 1.646 1.007L9.06 6.005l-.281-.798-1.318-.718.01.01zm10.145 7.382a2.51 2.51 0 01.12-1.663 2.54 2.54 0 011.138-1.23 2.798 2.798 0 013.261.4 2.513 2.513 0 01.073 3.568l-.073.073a2.77 2.77 0 01-3.788.01 2.719 2.719 0 01-.731-1.158z",fill:"var(--ifm-font-color-base)"}))};function m(e){var t=e.className,a=e.projectUrl,m=e.name,d=e.imagePath,h=(0,c.Z)(d);return n.createElement("div",{className:(0,r.Z)(i,t)},n.createElement("div",{className:o},n.createElement(p,{size:48})),n.createElement("a",{target:"_blank",rel:"noopener",href:a},n.createElement("strong",null,"Try Out The ",m," App on Expo!")),n.createElement("div",{className:l},n.createElement("img",{className:s,alt:"QR code to scan the "+m+" App in Expo Go",src:h})))}},1503:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var n=a(7560),r=a(8283),i=(a(2784),a(9037)),o=a(798),l=(a(8690),a(9350)),s=["components"],c={title:"Create A WebView-free Blog App with React Native Render HTML, Part I",author:"Jules Sam. Randolph",author_title:"Developer of React Native Render HTML v6",author_url:"https://github.com/jsamr/",author_image_url:"https://avatars.githubusercontent.com/u/3646758?v=4",tags:["foundry","Blog","Article"],description:"A step-by-step guide to render a Blog Article with table of content and scroll-to-section feature in React Native.",image:"img/article-create-webviewfree-blog-app.png",hide_table_of_contents:!1},p=void 0,m={permalink:"/react-native-render-html/blog/2021/06/27/create-blog-app-rnrh-I",source:"@site/blog/2021-06-27-create-blog-app-rnrh-I.mdx",title:"Create A WebView-free Blog App with React Native Render HTML, Part I",description:"A step-by-step guide to render a Blog Article with table of content and scroll-to-section feature in React Native.",date:"2021-06-27T00:00:00.000Z",formattedDate:"June 27, 2021",tags:[{label:"foundry",permalink:"/react-native-render-html/blog/tags/foundry"},{label:"Blog",permalink:"/react-native-render-html/blog/tags/blog"},{label:"Article",permalink:"/react-native-render-html/blog/tags/article"}],readingTime:4.405,truncated:!0,prevItem:{title:"Create A WebView-free Blog App with React Native Render HTML, Part II",permalink:"/react-native-render-html/blog/2021/06/28/create-blog-app-rnrh-II"},nextItem:{title:"Announcing the Beta Foundry Release",permalink:"/react-native-render-html/blog/2021/06/07/foundry-announcement"}},d=[{value:"Introduction",id:"introduction",children:[{value:"Gallery",id:"gallery",children:[]}]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Setting Up Navigation",id:"setting-up-navigation",children:[{value:"Declare the Routes in TypeScript",id:"declare-the-routes-in-typescript",children:[]},{value:"Create the Routes Components",id:"create-the-routes-components",children:[]},{value:"Create the Root Navigator",id:"create-the-root-navigator",children:[]}]}],h={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{style:{float:"right",marginLeft:10},url:"/img/article-body-dark.png",scale:.75,mdxType:"Screenshot"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/blog/2021/06/07/foundry-announcement"},"Foundry Release beta is out"),", and I wanted to show you its powerful\ncapabilities with a very common use-case: rendering an article from a Blog. For\nthis case study, we will use the official React Native blog, which is build on\n",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),". The App will feature:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A list of articles fetched from an RSS Feed;"),(0,i.kt)("li",{parentName:"ul"},"An aside table of content displayed in a drawer layout;"),(0,i.kt)("li",{parentName:"ul"},"A scroll-to-section feature when pressing a TOC entry.")),(0,i.kt)("p",null,"This study will be a good opportunity to learn or revisit important techniques\nto master this library. Also note that the implementation, especially targeted\nCSS classes are inherently tied to how the website is structured. Since the\nReact Native blog is built on Docusaurus, the implementation should be very\neasy to transpose in other docusaurus-based blogs."),(0,i.kt)("p",null,"Now, let's get to the heart of it \u2764\ufe0f"),(0,i.kt)("div",{style:{clear:"right"}}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The source code of this case study is available in the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch of this\nrepo: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jsamr/rnrh-blog"},(0,i.kt)("inlineCode",{parentName:"a"},"jsamr/rnrh-blog")),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"enhanced"),"\nbranch contains a few more features beyond this tutorial, such as a refined UI,\ndark mode, caching with ",(0,i.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/"},"react-queries"),"...\netc. You can try out the ",(0,i.kt)("strong",{parentName:"p"},"enhanced")," version right now with expo, see ",(0,i.kt)("a",{parentName:"p",href:"https://expo.io/@jsamr/react-native-blog"},"the\nproject page")," for instructions."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you have any question or remarks regarding this tutorial, ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/dbEMMJM"},"you're welcome in our Discord channel"),"."))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"I propose starting with the end-result, and then explain how we got there. The App has two screens:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The Home screen, displaying a list of articles fetched from a RSS feed."),(0,i.kt)("li",{parentName:"ol"},"The Article screen, displaying the body of the article and a side-menu to navigate into sections.")),(0,i.kt)("p",null,"The navigation is handled by ",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/"},"React Navigation")," library, and most of the\ncomponents come from ",(0,i.kt)("a",{parentName:"p",href:"https://reactnativepaper.com/"},"React Native Paper"),"."),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The steps laid out in this tutorial won't cover the ",(0,i.kt)("strong",{parentName:"p"},"enhanced")," implementation such as\nseen in below gallery. We will focus on simplicity and won't spend much time on\ntheming. But you can always check out the enhanced implementation here:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jsamr/rnrh-blog/tree/enhanced"},(0,i.kt)("inlineCode",{parentName:"a"},"jsamr/rnrh-blog")," (enhanced branch)")))),(0,i.kt)("h3",{id:"gallery"},"Gallery"),(0,i.kt)("div",{style:{display:"flex",gap:20,justifyContent:"center"}},(0,i.kt)(o.Z,{url:"/img/home-dark.png",scale:.5,mdxType:"Screenshot"}),(0,i.kt)(o.Z,{url:"/img/article-body-dark.png",scale:.5,mdxType:"Screenshot"}),(0,i.kt)(o.Z,{url:"/img/article-side-dark.png",scale:.5,mdxType:"Screenshot"})),(0,i.kt)("div",{style:{display:"flex",gap:20,justifyContent:"center"}},(0,i.kt)(o.Z,{url:"/img/home-light.png",scale:.5,mdxType:"Screenshot"}),(0,i.kt)(o.Z,{url:"/img/article-body-light.png",scale:.5,mdxType:"Screenshot"}),(0,i.kt)(o.Z,{url:"/img/article-side-light.png",scale:.5,mdxType:"Screenshot"})),(0,i.kt)(l.Z,{mdxType:"ExpoBlogCard"}),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"We will use Expo cli to initiate the project. If you don't have it installed yet, install the cli globally:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g expo-cli\n")),(0,i.kt)("p",null,"After which, create the project. We will use TypeScript and yarn, but of course\nyou're free to set a plain JavaScript project instead."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"expo init rnrh-blog -t expo-template-blank-typescript --name Blog --yarn\n")),(0,i.kt)("p",null,"Then we need to install dependencies required for this project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd rnrh-blog\nexpo install @react-navigation/native@^5 @react-navigation/stack@^5 \\\n     react-native-screens react-native-safe-area-context \\\n     react-native-rss-parser@^1 react-native-render-html@next \\\n     react-native-paper@^4 react-native-gesture-handler events\n")),(0,i.kt)("p",null,"Now, run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn android\n")),(0,i.kt)("p",null,"to launch the App in an android emulator."),(0,i.kt)("h2",{id:"setting-up-navigation"},"Setting Up Navigation"),(0,i.kt)("h3",{id:"declare-the-routes-in-typescript"},"Declare the Routes in TypeScript"),(0,i.kt)("p",null,"Create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"shared-types.ts")," file in the root of your project with the following definitions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="shared-types.ts"',title:'"shared-types.ts"'},"export type RootStackParamList = {\n  Home: undefined;\n  Article: ArticleParams;\n};\n\nexport interface ArticleParams {\n  url: string;\n  title: string;\n}\n")),(0,i.kt)("p",null,"These types define the names of the routes supported by our stack navigator,\nand the types of their params. Notice that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Article")," route takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"url"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," for display."),(0,i.kt)("h3",{id:"create-the-routes-components"},"Create the Routes Components"),(0,i.kt)("p",null,"Add two files, ",(0,i.kt)("inlineCode",{parentName:"p"},"screens/HomeScreen.tsx")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"screens/ArticleScreen.tsx"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="screens/HomeScreen.tsx"',title:'"screens/HomeScreen.tsx"'},"import React from 'react';\nimport { Text } from 'react-native';\nimport { SafeAreaView } from 'react-native-safe-area-context';\n\nexport default function HomeScreen() {\n  return (\n    <SafeAreaView>\n      <Text>Welcome to the React Native Blog!</Text>\n    </SafeAreaView>\n  );\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="screens/ArticleScreen.tsx"',title:'"screens/ArticleScreen.tsx"'},"import React, { useEffect } from 'react';\nimport { StackScreenProps } from '@react-navigation/stack';\nimport { RootStackParamList } from '../shared-types';\n\ntype ArticleScreenProps = StackScreenProps<RootStackParamList, 'Article'>;\n\nfunction useSetTitleEffect({ route, navigation }: ArticleScreenProps) {\n  useEffect(\n    function setTitle() {\n      navigation.setOptions({ title: route.params.title });\n    },\n    [route.params.title, navigation]\n  );\n}\n\nexport default function ArticleScreen(props: ArticleScreenProps) {\n  useSetTitleEffect(props);\n  return null;\n}\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Remarks")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"ArticleScreen")," component, we define an effect to set the screen title\ndisplayed in the header based on a route parameter. The logic is internal\nto the ",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/"},"React Navigation")," library."))),(0,i.kt)("h3",{id:"create-the-root-navigator"},"Create the Root Navigator"),(0,i.kt)("p",null,"Replace the current ",(0,i.kt)("inlineCode",{parentName:"p"},"App.tsx")," with the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},"import { createStackNavigator } from '@react-navigation/stack';\nimport { SafeAreaProvider } from 'react-native-safe-area-context';\nimport React from 'react';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { RootStackParamList } from './shared-types';\nimport HomeScreen from './screens/HomeScreen';\nimport ArticleScreen from './screens/ArticleScreen';\n\nconst Stack = createStackNavigator<RootStackParamList>();\n\nexport default function App() {\n  return (\n    <SafeAreaProvider>\n      <NavigationContainer>\n        <Stack.Navigator\n          screenOptions={{\n            headerShown: false\n          }}>\n          <Stack.Screen\n            name=\"Home\"\n            options={{ title: 'Blog' }}\n            component={HomeScreen}\n          />\n          <Stack.Screen\n            name=\"Article\"\n            options={{ headerShown: true }}\n            component={ArticleScreen}\n          />\n        </Stack.Navigator>\n      </NavigationContainer>\n    </SafeAreaProvider>\n  );\n}\n")),(0,i.kt)("p",null,'You should finally see a screen displaying "Welcome to the React Native Blog"!\nGreat, the structure is ready: from now on, we can implement each of those\nscreens.'),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you are not familiar with React Navigation, you could benefit from reading\nits ",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/stack-navigator"},"Stack Navigator\ndocumentation")," before going further."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Now, we're ready to implement the RSS feed list. Let's jump to ",(0,i.kt)("a",{parentName:"strong",href:"/react-native-render-html/blog/2021/06/28/create-blog-app-rnrh-II"},"Part II")),"."))}u.isMDXComponent=!0}}]);
import{e as n,o as e,y as t}from"./vendor.1904cf4f.js";const o={class:"markdown-body"},u=[t('<h1>国际化（3.0开发中）</h1><p>NutUI 3.0 以上版本支持多语言。组件默认使用中文，支持加载其他语言包来实现多语言切换功能。除了组件本身的语言切换以外，用户还可以调用相关的语言转换方法来支持其他功能的国际化。具体使用方法如下：</p><h2>使用方法</h2><h3>引用整个组件库</h3><pre><code class="language-javascript">import Vue from &#39;vue&#39;;\nimport NutUI from &#39;@nutui/nutui&#39;;\n\nimport enUS from &#39;@nutui/nutui/dist/locales/lang/en-US&#39;;\n\nVue.use(NutUI, {\n  locale: &#39;en-US&#39;,\n  lang: enUS\n});\n</code></pre><h3>按需引用组件</h3><p>通过 <strong><a href="https://www.npmjs.com/package/@nutui/babel-plugin-separate-import">@nutui/babel-plugin-separate-import</a></strong> 插件，我们可以根据项目需要引用 NutUI 的组件，最终只打包引用的组件，减少引入代码的体积。国际化功能同样支持按需引用的方式。</p><pre><code class="language-javascript">import Vue from &#39;vue&#39;;\nimport {locale} from &#39;@nutui/nutui&#39;;\n\nimport enUS from &#39;@nutui/nutui/dist/locales/lang/en-US&#39;;\n\nlocale(&#39;en-US&#39;, enUS);\n</code></pre><blockquote><p>请注意：通过该插件进行按需引用组件时默认引用的是构建后的文件，此时并不支持国际化的功能。如需使用组件库的国际化功能，需要在 babel 的配置文件（如.babelrc）中将 <strong>@nutui/babel-plugin-separate-import</strong> 插件的 <strong>sourceCode</strong> 参数值设为 <strong>true</strong> 。这样插件将引用未经构建的源文件，同时引用的组件也不再具有 <code>install</code> 方法，请使用 <code>Vue.component</code> 对组件进行注册。</p></blockquote><pre><code class="language-bash">{\n  &quot;plugins&quot;: [\n    [&quot;@nutui/babel-plugin-separate-import&quot;, {\n      &quot;sourceCode&quot;: true,\n      &quot;style&quot;: &quot;css&quot;\n    }]\n  ]\n}\n</code></pre><h2>兼容 vue-i18n</h2><pre><code class="language-javascript">import VueI18n from &#39;vue-i18n&#39;;\nimport enUS from &#39;@nutui/nutui/dist/locales/lang/en-US&#39;;\n\nVue.use(VueI18n);\n\nVue.locale = () =&gt; {};\nconst i18n = new VueI18n({\n  locale: &#39;en-US&#39;,\n  messages: {\n    &#39;en-US&#39;: enUS\n  }\n});\n\n\nconst app = new Vue({\n  el: &#39;#app&#39;,\n  i18n\n})\n\n</code></pre><h2>语言切换</h2><p>使用 <strong>vue-i18n</strong> 时，可以通过调用 <strong>$t</strong> 方法来对某个位置做国际化支持的语言切换。我们也可以调用 NutUI 内置的语言切换方法 <strong>nutTranslate</strong> 来实现相同功能，而且还支持非常灵活的模板化传参方式。我们可以通过 <strong>mixin</strong> 将该语言切换方法混入到每个组件的 <strong>methods</strong>，方便直接调用。</p><pre><code class="language-javascript">import Vue from &#39;vue&#39;;\nimport {i18n} from &#39;@nutui/nutui&#39;;\n\nVue.mixin({\n    methods: {\n        nutTranslate() {\n            return i18n.apply(this, arguments);\n        }\n    }\n});\n\n\n// 使用 nutTranslate\n// params 参数支持默认值、对象、数组、函数等格式\n&lt;nut-cell :title=&quot;nutTranslate(&#39;demo.cell.title&#39;, params)&quot; /&gt;\n</code></pre><p>一般来说，要实现全面的国际化，我们还需要将用户自己的语言包与组件库的语言包进行合并。</p><pre><code class="language-javascript">import Vue from &#39;vue&#39;;\nimport {locale} from &#39;@nutui/nutui&#39;;\nimport enUS from &#39;@nutui/nutui/dist/locales/lang/en-US&#39;;\nimport myEnUS from &#39;./path/to/lang/en-US&#39;;\n\nObject.assign(enUS, myEnUS);\n\nlocale(&#39;en-US&#39;, enUS);\n</code></pre>',17)],a={setup:t=>(t,a)=>(e(),n("div",o,u))};export{a as default};

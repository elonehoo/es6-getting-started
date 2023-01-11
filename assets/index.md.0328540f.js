import{_ as a,c as t,o as e,a as r}from"./app.85ffccae.js";const h='{"title":"\u7B80\u4ECB","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. ECMAScript \u548C JavaScript \u7684\u5173\u7CFB","slug":"_1-ecmascript-\u548C-javascript-\u7684\u5173\u7CFB"},{"level":2,"title":"2. ES6 \u4E0E ECMAScript 2015 \u7684\u5173\u7CFB","slug":"_2-es6-\u4E0E-ecmascript-2015-\u7684\u5173\u7CFB"},{"level":2,"title":"3. \u8BED\u6CD5\u63D0\u6848\u7684\u6279\u51C6\u6D41\u7A0B","slug":"_3-\u8BED\u6CD5\u63D0\u6848\u7684\u6279\u51C6\u6D41\u7A0B"}],"relativePath":"index.md"}',i={},p=r('<h1 id="\u7B80\u4ECB" tabindex="-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a></h1><p>ECMAScript 6.0\uFF08\u4EE5\u4E0B\u7B80\u79F0 ES6\uFF09\u662F JavaScript \u8BED\u8A00\u7684\u4E0B\u4E00\u4EE3\u6807\u51C6\uFF0C\u5DF2\u7ECF\u5728 2015 \u5E74 6 \u6708\u6B63\u5F0F\u53D1\u5E03\u4E86\u3002\u5B83\u7684\u76EE\u6807\uFF0C\u662F\u4F7F\u5F97 JavaScript \u8BED\u8A00\u53EF\u4EE5\u7528\u6765\u7F16\u5199\u590D\u6742\u7684\u5927\u578B\u5E94\u7528\u7A0B\u5E8F\uFF0C\u6210\u4E3A\u4F01\u4E1A\u7EA7\u5F00\u53D1\u8BED\u8A00\u3002</p><h2 id="_1-ecmascript-\u548C-javascript-\u7684\u5173\u7CFB" tabindex="-1">1. ECMAScript \u548C JavaScript \u7684\u5173\u7CFB <a class="header-anchor" href="#_1-ecmascript-\u548C-javascript-\u7684\u5173\u7CFB" aria-hidden="true">#</a></h2><p>\u4E00\u4E2A\u5E38\u89C1\u7684\u95EE\u9898\u662F\uFF0CECMAScript \u548C JavaScript \u5230\u5E95\u662F\u4EC0\u4E48\u5173\u7CFB\uFF1F</p><p>\u8981\u8BB2\u6E05\u695A\u8FD9\u4E2A\u95EE\u9898\uFF0C\u9700\u8981\u56DE\u987E\u5386\u53F2\u30021996 \u5E74 11 \u6708\uFF0CJavaScript \u7684\u521B\u9020\u8005 Netscape \u516C\u53F8\uFF0C\u51B3\u5B9A\u5C06 JavaScript \u63D0\u4EA4\u7ED9\u6807\u51C6\u5316\u7EC4\u7EC7 ECMA\uFF0C\u5E0C\u671B\u8FD9\u79CD\u8BED\u8A00\u80FD\u591F\u6210\u4E3A\u56FD\u9645\u6807\u51C6\u3002\u6B21\u5E74\uFF0CECMA \u53D1\u5E03 262 \u53F7\u6807\u51C6\u6587\u4EF6\uFF08ECMA-262\uFF09\u7684\u7B2C\u4E00\u7248\uFF0C\u89C4\u5B9A\u4E86\u6D4F\u89C8\u5668\u811A\u672C\u8BED\u8A00\u7684\u6807\u51C6\uFF0C\u5E76\u5C06\u8FD9\u79CD\u8BED\u8A00\u79F0\u4E3A ECMAScript\uFF0C\u8FD9\u4E2A\u7248\u672C\u5C31\u662F 1.0 \u7248\u3002</p><p>\u8BE5\u6807\u51C6\u4ECE\u4E00\u5F00\u59CB\u5C31\u662F\u9488\u5BF9 JavaScript \u8BED\u8A00\u5236\u5B9A\u7684\uFF0C\u4F46\u662F\u4E4B\u6240\u4EE5\u4E0D\u53EB JavaScript\uFF0C\u6709\u4E24\u4E2A\u539F\u56E0\u3002\u4E00\u662F\u5546\u6807\uFF0CJava \u662F Sun \u516C\u53F8\u7684\u5546\u6807\uFF0C\u6839\u636E\u6388\u6743\u534F\u8BAE\uFF0C\u53EA\u6709 Netscape \u516C\u53F8\u53EF\u4EE5\u5408\u6CD5\u5730\u4F7F\u7528 JavaScript \u8FD9\u4E2A\u540D\u5B57\uFF0C\u4E14 JavaScript \u672C\u8EAB\u4E5F\u5DF2\u7ECF\u88AB Netscape \u516C\u53F8\u6CE8\u518C\u4E3A\u5546\u6807\u3002\u4E8C\u662F\u60F3\u4F53\u73B0\u8FD9\u95E8\u8BED\u8A00\u7684\u5236\u5B9A\u8005\u662F ECMA\uFF0C\u4E0D\u662F Netscape\uFF0C\u8FD9\u6837\u6709\u5229\u4E8E\u4FDD\u8BC1\u8FD9\u95E8\u8BED\u8A00\u7684\u5F00\u653E\u6027\u548C\u4E2D\u7ACB\u6027\u3002</p><p>\u56E0\u6B64\uFF0CECMAScript \u548C JavaScript \u7684\u5173\u7CFB\u662F\uFF0C\u524D\u8005\u662F\u540E\u8005\u7684\u89C4\u683C\uFF0C\u540E\u8005\u662F\u524D\u8005\u7684\u4E00\u79CD\u5B9E\u73B0\uFF08\u53E6\u5916\u7684 ECMAScript \u65B9\u8A00\u8FD8\u6709 JScript \u548C ActionScript\uFF09\u3002\u65E5\u5E38\u573A\u5408\uFF0C\u8FD9\u4E24\u4E2A\u8BCD\u662F\u53EF\u4EE5\u4E92\u6362\u7684\u3002</p><h2 id="_2-es6-\u4E0E-ecmascript-2015-\u7684\u5173\u7CFB" tabindex="-1">2. ES6 \u4E0E ECMAScript 2015 \u7684\u5173\u7CFB <a class="header-anchor" href="#_2-es6-\u4E0E-ecmascript-2015-\u7684\u5173\u7CFB" aria-hidden="true">#</a></h2><p>ECMAScript 2015\uFF08\u7B80\u79F0 ES2015\uFF09\u8FD9\u4E2A\u8BCD\uFF0C\u4E5F\u662F\u7ECF\u5E38\u53EF\u4EE5\u770B\u5230\u7684\u3002\u5B83\u4E0E ES6 \u662F\u4EC0\u4E48\u5173\u7CFB\u5462\uFF1F</p><p>2011 \u5E74\uFF0CECMAScript 5.1 \u7248\u53D1\u5E03\u540E\uFF0C\u5C31\u5F00\u59CB\u5236\u5B9A 6.0 \u7248\u4E86\u3002\u56E0\u6B64\uFF0CES6 \u8FD9\u4E2A\u8BCD\u7684\u539F\u610F\uFF0C\u5C31\u662F\u6307 JavaScript \u8BED\u8A00\u7684\u4E0B\u4E00\u4E2A\u7248\u672C\u3002</p><p>\u4F46\u662F\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u7248\u672C\u5F15\u5165\u7684\u8BED\u6CD5\u529F\u80FD\u592A\u591A\uFF0C\u800C\u4E14\u5236\u5B9A\u8FC7\u7A0B\u5F53\u4E2D\uFF0C\u8FD8\u6709\u5F88\u591A\u7EC4\u7EC7\u548C\u4E2A\u4EBA\u4E0D\u65AD\u63D0\u4EA4\u65B0\u529F\u80FD\u3002\u4E8B\u60C5\u5F88\u5FEB\u5C31\u53D8\u5F97\u6E05\u695A\u4E86\uFF0C\u4E0D\u53EF\u80FD\u5728\u4E00\u4E2A\u7248\u672C\u91CC\u9762\u5305\u62EC\u6240\u6709\u5C06\u8981\u5F15\u5165\u7684\u529F\u80FD\u3002\u5E38\u89C4\u7684\u505A\u6CD5\u662F\u5148\u53D1\u5E03 6.0 \u7248\uFF0C\u8FC7\u4E00\u6BB5\u65F6\u95F4\u518D\u53D1 6.1 \u7248\uFF0C\u7136\u540E\u662F 6.2 \u7248\u30016.3 \u7248\u7B49\u7B49\u3002</p><p>\u4F46\u662F\uFF0C\u6807\u51C6\u7684\u5236\u5B9A\u8005\u4E0D\u60F3\u8FD9\u6837\u505A\u3002\u4ED6\u4EEC\u60F3\u8BA9\u6807\u51C6\u7684\u5347\u7EA7\u6210\u4E3A\u5E38\u89C4\u6D41\u7A0B\uFF1A\u4EFB\u4F55\u4EBA\u5728\u4EFB\u4F55\u65F6\u5019\uFF0C\u90FD\u53EF\u4EE5\u5411\u6807\u51C6\u59D4\u5458\u4F1A\u63D0\u4EA4\u65B0\u8BED\u6CD5\u7684\u63D0\u6848\uFF0C\u7136\u540E\u6807\u51C6\u59D4\u5458\u4F1A\u6BCF\u4E2A\u6708\u5F00\u4E00\u6B21\u4F1A\uFF0C\u8BC4\u4F30\u8FD9\u4E9B\u63D0\u6848\u662F\u5426\u53EF\u4EE5\u63A5\u53D7\uFF0C\u9700\u8981\u54EA\u4E9B\u6539\u8FDB\u3002\u5982\u679C\u7ECF\u8FC7\u591A\u6B21\u4F1A\u8BAE\u4EE5\u540E\uFF0C\u4E00\u4E2A\u63D0\u6848\u8DB3\u591F\u6210\u719F\u4E86\uFF0C\u5C31\u53EF\u4EE5\u6B63\u5F0F\u8FDB\u5165\u6807\u51C6\u4E86\u3002\u8FD9\u5C31\u662F\u8BF4\uFF0C\u6807\u51C6\u7684\u7248\u672C\u5347\u7EA7\u6210\u4E3A\u4E86\u4E00\u4E2A\u4E0D\u65AD\u6EDA\u52A8\u7684\u6D41\u7A0B\uFF0C\u6BCF\u4E2A\u6708\u90FD\u4F1A\u6709\u53D8\u52A8\u3002</p><p>\u6807\u51C6\u59D4\u5458\u4F1A\u6700\u7EC8\u51B3\u5B9A\uFF0C\u6807\u51C6\u5728\u6BCF\u5E74\u7684 6 \u6708\u4EFD\u6B63\u5F0F\u53D1\u5E03\u4E00\u6B21\uFF0C\u4F5C\u4E3A\u5F53\u5E74\u7684\u6B63\u5F0F\u7248\u672C\u3002\u63A5\u4E0B\u6765\u7684\u65F6\u95F4\uFF0C\u5C31\u5728\u8FD9\u4E2A\u7248\u672C\u7684\u57FA\u7840\u4E0A\u505A\u6539\u52A8\uFF0C\u76F4\u5230\u4E0B\u4E00\u5E74\u7684 6 \u6708\u4EFD\uFF0C\u8349\u6848\u5C31\u81EA\u7136\u53D8\u6210\u4E86\u65B0\u4E00\u5E74\u7684\u7248\u672C\u3002\u8FD9\u6837\u4E00\u6765\uFF0C\u5C31\u4E0D\u9700\u8981\u4EE5\u524D\u7684\u7248\u672C\u53F7\u4E86\uFF0C\u53EA\u8981\u7528\u5E74\u4EFD\u6807\u8BB0\u5C31\u53EF\u4EE5\u4E86\u3002</p><p>ES6 \u7684\u7B2C\u4E00\u4E2A\u7248\u672C\uFF0C\u5C31\u8FD9\u6837\u5728 2015 \u5E74 6 \u6708\u53D1\u5E03\u4E86\uFF0C\u6B63\u5F0F\u540D\u79F0\u5C31\u662F\u300AECMAScript 2015 \u6807\u51C6\u300B\uFF08\u7B80\u79F0 ES2015\uFF09\u30022016 \u5E74 6 \u6708\uFF0C\u5C0F\u5E45\u4FEE\u8BA2\u7684\u300AECMAScript 2016 \u6807\u51C6\u300B\uFF08\u7B80\u79F0 ES2016\uFF09\u5982\u671F\u53D1\u5E03\uFF0C\u8FD9\u4E2A\u7248\u672C\u53EF\u4EE5\u770B\u4F5C\u662F ES6.1 \u7248\uFF0C\u56E0\u4E3A\u4E24\u8005\u7684\u5DEE\u5F02\u975E\u5E38\u5C0F\uFF08\u53EA\u65B0\u589E\u4E86\u6570\u7EC4\u5B9E\u4F8B\u7684 <code>includes</code> \u65B9\u6CD5\u548C\u6307\u6570\u8FD0\u7B97\u7B26\uFF09\uFF0C\u57FA\u672C\u4E0A\u662F\u540C\u4E00\u4E2A\u6807\u51C6\u3002\u6839\u636E\u8BA1\u5212\uFF0C2017 \u5E74 6 \u6708\u53D1\u5E03 ES2017 \u6807\u51C6\u3002</p><p>\u56E0\u6B64\uFF0CES6 \u65E2\u662F\u4E00\u4E2A\u5386\u53F2\u540D\u8BCD\uFF0C\u4E5F\u662F\u4E00\u4E2A\u6CDB\u6307\uFF0C\u542B\u4E49\u662F 5.1 \u7248\u4EE5\u540E\u7684 JavaScript \u7684\u4E0B\u4E00\u4EE3\u6807\u51C6\uFF0C\u6DB5\u76D6\u4E86 ES2015\u3001ES2016\u3001ES2017 \u7B49\u7B49\uFF0C\u800C ES2015 \u5219\u662F\u6B63\u5F0F\u540D\u79F0\uFF0C\u7279\u6307\u8BE5\u5E74\u53D1\u5E03\u7684\u6B63\u5F0F\u7248\u672C\u7684\u8BED\u8A00\u6807\u51C6\u3002</p><h2 id="_3-\u8BED\u6CD5\u63D0\u6848\u7684\u6279\u51C6\u6D41\u7A0B" tabindex="-1">3. \u8BED\u6CD5\u63D0\u6848\u7684\u6279\u51C6\u6D41\u7A0B <a class="header-anchor" href="#_3-\u8BED\u6CD5\u63D0\u6848\u7684\u6279\u51C6\u6D41\u7A0B" aria-hidden="true">#</a></h2><p>\u4EFB\u4F55\u4EBA\u90FD\u53EF\u4EE5\u5411\u6807\u51C6\u59D4\u5458\u4F1A\uFF08\u53C8\u79F0 TC39 \u59D4\u5458\u4F1A\uFF09\u63D0\u6848\uFF0C\u8981\u6C42\u4FEE\u6539\u8BED\u8A00\u6807\u51C6\u3002</p><p>\u4E00\u79CD\u65B0\u7684\u8BED\u6CD5\u4ECE\u63D0\u6848\u5230\u53D8\u6210\u6B63\u5F0F\u6807\u51C6\uFF0C\u9700\u8981\u7ECF\u5386\u4E94\u4E2A\u9636\u6BB5\u3002\u6BCF\u4E2A\u9636\u6BB5\u7684\u53D8\u52A8\u90FD\u9700\u8981\u7531 TC39 \u59D4\u5458\u4F1A\u6279\u51C6\u3002</p><ul><li>Stage 0 - Strawman\uFF08\u5C55\u793A\u9636\u6BB5\uFF09</li><li>Stage 1 - Proposal\uFF08\u5F81\u6C42\u610F\u89C1\u9636\u6BB5\uFF09</li><li>Stage 2 - Draft\uFF08\u8349\u6848\u9636\u6BB5\uFF09</li><li>Stage 3 - Candidate\uFF08\u5019\u9009\u4EBA\u9636\u6BB5\uFF09</li><li>Stage 4 - Finished\uFF08\u5B9A\u6848\u9636\u6BB5\uFF09</li></ul><p>\u4E00\u4E2A\u63D0\u6848\u53EA\u8981\u80FD\u8FDB\u5165 Stage 2\uFF0C\u5C31\u5DEE\u4E0D\u591A\u80AF\u5B9A\u4F1A\u5305\u62EC\u5728\u4EE5\u540E\u7684\u6B63\u5F0F\u6807\u51C6\u91CC\u9762\u3002ECMAScript \u5F53\u524D\u7684\u6240\u6709\u63D0\u6848\uFF0C\u53EF\u4EE5\u5728 TC39 \u7684\u5B98\u65B9\u7F51\u7AD9 <a href="https://github.com/tc39/ecma262" target="_blank" rel="noopener noreferrer">ecma262</a> \u67E5\u770B\u3002</p>',20),c=[p];function S(s,l,n,d,_,E){return e(),t("div",null,c)}var v=a(i,[["render",S]]);export{h as __pageData,v as default};

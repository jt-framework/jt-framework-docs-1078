import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,a as n}from"./app-5LVKShiE.js";const t={},c=n(`<h1 id="sub-package" tabindex="-1"><a class="header-anchor" href="#sub-package"><span>sub-package</span></a></h1><div class="hint-container info"><p class="hint-container-title">提示</p><p>该章节介绍的是 <code>分包消息</code> 相关的配置。</p></div><h2 id="request-sub-package-storage" tabindex="-1"><a class="header-anchor" href="#request-sub-package-storage"><span>request-sub-package-storage</span></a></h2><p>请求分包消息暂存器相关配置。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">jt808</span><span class="token punctuation">:</span>
  <span class="token key atrule">request-sub-package-combiner</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> caffeine
    <span class="token comment"># 当且仅当 jt1078.request-sub-package-combiner.type = Caffeine 时候有效</span>
    <span class="token key atrule">caffeine</span><span class="token punctuation">:</span>
      <span class="token comment"># 最多缓存多少条消息</span>
      <span class="token key atrule">maximum-size</span><span class="token punctuation">:</span> <span class="token number">1024</span>
      <span class="token comment"># 最大缓存时间</span>
      <span class="token key atrule">ttl</span><span class="token punctuation">:</span> 30s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),i=[c];function l(p,o){return s(),e("div",null,i)}const d=a(t,[["render",l],["__file","sub-package.html.vue"]]);export{d as default};

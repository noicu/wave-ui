<template lang="pug">
div
  title-link(h2) 基本
  example
    w-split-view(style="height: 200px;")
      w-card
        p {{ text }}
      w-card
        p {{ text }}
      w-card
        p {{ text }}
    template(#pug).
      w-split-view(style="height: 200px;")
        w-card
          p {{ text }}
        w-card
          p {{ text }}
        w-card
          p {{ text }}
    template(#html).
      &lt;w-split-view style="height: 200px;"&gt;
        &lt;w-card&gt;
          &lt;p&gt;{{ text }}&lt;/p&gt;
        &lt;/w-card&gt;
        &lt;w-card&gt;
          &lt;p&gt;{{ text }}&lt;/p&gt;
        &lt;/w-card&gt;
        &lt;w-card&gt;
          &lt;p&gt;{{ text }}&lt;/p&gt;
        &lt;/w-card&gt;
      &lt;/w-split-view&gt;

  title-link(h2) column
  example
    w-split-view(direction="column" style="height: 200px;")
      w-card
        p {{ text }}
      w-card
        p {{ text }}
      w-card
        p {{ text }}
    template(#pug).
      w-split-view(direction="column" style="height: 200px;")
        w-card
          p {{ text }}
        w-card
          p {{ text }}
        w-card
          p {{ text }}
    template(#html).
      &lt;w-split-view direction="column" style="height: 300px;"&gt;
        &lt;w-card&gt;
          &lt;p&gt;{{ text }}&lt;/p&gt;
        &lt;/w-card&gt;
        &lt;w-card&gt;
          &lt;p&gt;{{ text }}&lt;/p&gt;
        &lt;/w-card&gt;
        &lt;w-card&gt;
          &lt;p&gt;{{ text }}&lt;/p&gt;
        &lt;/w-card&gt;
      &lt;/w-split-view&gt;

  title-link(h2) 组合
  example
    w-split-view(style="height: 300px;")
      w-card(style="minHeight: 24px;maxHeight: 35%;")
        p {{ text }}
      w-card(style="minHeight: 24px;")
        p {{ text }}
      w-split-view(direction="column" style="height: 200px;")
        w-card
          p {{ text }}
        w-card
          p {{ text }}
    template(#pug).
      w-split-view(style="height: 300px;")
        w-card(style="minHeight: 24px;maxHeight: 35%;")
          p {{ text }}
        w-card(style="minHeight: 24px;")
          p {{ text }}
        w-split-view(direction="column" style="height: 200px;")
          w-card
            p {{ text }}
          w-card
            p {{ text }}
    template(#html).
      &lt;w-split-view style="height: 300px;"&gt;
        &lt;w-card style="minHeight: 24px;maxHeight: 35%;"&gt;
          &lt;p&gt;{{ text }}&lt;/p&gt;
        &lt;/w-card&gt;
        &lt;w-card style="minHeight: 24px;"&gt;
          &lt;p&gt;{{ text }}&lt;/p&gt;
        &lt;/w-card&gt;
        &lt;w-split-view direction="column" style="height: 200px;"&gt;
          &lt;w-card&gt;
            &lt;p&gt;{{ text }}&lt;/p&gt;
          &lt;/w-card&gt;
          &lt;w-card&gt;
            &lt;p&gt;{{ text }}&lt;/p&gt;
          &lt;/w-card&gt;
        &lt;/w-split-view&gt;
      &lt;/w-split-view&gt;

  title-link(h2) vscode 风格
  example
    w-split-view(style="height: 400px;")
      w-split-view(direction="column" style="width:210px;")
        w-card(style="minHeight: 24px;")
          p {{ text }}
        w-card(style="minHeight: 24px;maxHeight: 35%;")
          p {{ text }}
        w-card(style="minHeight: 24px;maxHeight: 35%;")
          p {{ text }}
        w-card(style="minHeight: 24px;")
          p {{ text }}
      w-split-view(direction="column")
        w-card
          p {{ text }}
        w-card(style="maxHeight: 40%;minHeight: 24px;height: 25%;")
          p {{ text }}
    template(#pug).
      w-split-view(style="height: 300px;")
        w-card
          p {{ text }}
        w-card
          p {{ text }}
        w-card
          p {{ text }}
    template(#html).
      &lt;w-split-view style="height: 300px;"&gt;
        &lt;w-card&gt;
          &lt;p&gt;{{ text }}&lt;/p&gt;
        &lt;/w-card&gt;
        &lt;w-card&gt;
          &lt;p&gt;{{ text }}&lt;/p&gt;
        &lt;/w-card&gt;
        &lt;w-card&gt;
          &lt;p&gt;{{ text }}&lt;/p&gt;
        &lt;/w-card&gt;
      &lt;/w-split-view&gt;
</template>

<script>
export default {
  data: () => ({
    baseUrl: import.meta.env.BASE_URL,
    text: '吾生也有涯，而知也无涯，以有涯随无涯，殆矣。——《庄子》'
  })
}
</script>

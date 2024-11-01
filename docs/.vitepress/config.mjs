import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Transformations with OpenGL - Basic Theory",
  description: "Transformations with OpenGL basic theory article",
  base: "/transformations_with_opengl_basic_theory/",
  markdown: {
    math: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sagedemage/transformations_with_opengl_basic_theory' }
    ]
  }
})

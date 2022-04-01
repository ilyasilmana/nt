module.exports = {
  mode: "jit",
  content: [
    "./pages/**/!(*.stories|*.spec).{ts,tsx}",
    "./src/components/**/!(*.stories|*.spec).{ts,tsx}",
    "./src/layout/**/!(*.stories|*.spec).{ts,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ],
}

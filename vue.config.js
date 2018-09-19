module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        ws: true,
        changeOrigin: true
      }
    }
  },
  lintOnSave: process.env.NODE_ENV !== 'production'
}

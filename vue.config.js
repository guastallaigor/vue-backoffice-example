module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api/v1/backoffice',
        ws: true,
        changeOrigin: true
      }
    }
  },
  lintOnSave: process.env.NODE_ENV !== 'production'
}

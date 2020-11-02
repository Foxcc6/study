module.exports = {
    css: {
      loaderOptions: {
        less: {
          // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
          modifyVars: {
            // 直接覆盖变量
            'text-color': '#111',
            'border-color': '#eee',
            'button-primary-background-color':'red'
          },
        },
      },
    },
  };
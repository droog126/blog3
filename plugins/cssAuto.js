const { extname } = require('path');
const CSS_FILE_EXTENSIONS = ['.css', '.scss', '.sass', '.less'];

module.exports = () => {
  return {
    visitor: {
      ImportDeclaration(path) {
        const { specifiers, source } = path.node;
        const { value } = source;
        // console.log('plugin', value, specifiers);
        if (CSS_FILE_EXTENSIONS.includes(extname(value))) {
          // console.log('plugin', value, specifiers);
          if (specifiers.length > 0) {
            source.value = `${value}?css_modules`;
          }
        }
      },
    },
  };
};

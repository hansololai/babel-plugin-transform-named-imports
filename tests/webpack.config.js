const path = require('path');

module.exports = {
    resolve: {
        modules: [
            path.resolve(__dirname),
        ],
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ]
    },
};

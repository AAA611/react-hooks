var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var merge = require("webpack-merge").default;
var common = require("../../webpack.common.js");
var path = require("path");
var commonConfig = merge(common, {
    entry: "./src/index",
    output: {
        filename: "react-hooks.js",
        library: {
            type: "module",
        },
        path: path.resolve(__dirname, "./dist"),
    },
    devtool: false,
    resolve: {
        extensions: [".ts", ".js"],
    },
    experiments: {
        outputModule: true,
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
});
module.exports = function () {
    var buildEnv = process.env.BUILD_ENV;
    var isESM = buildEnv === "esm";
    console.log(isESM);
    var dynamicConfig = {
        mode: 'development',
        output: {
            filename: "react-hooks.".concat(buildEnv, ".js"),
            path: path.resolve(__dirname, "./dist"),
            library: {
                type: isESM ? "module" : "commonjs2",
            },
        },
        experiments: {
            outputModule: isESM,
        },
    };
    return __assign(__assign({}, commonConfig), dynamicConfig);
};
//# sourceMappingURL=webpack.config.js.map
module.exports = {
    // output: {
    //   libraryTarget: "umd",
    //   globalObject: "this",
    // },
    mode: "production",
    resolve: {
        extensions: [".json", ".js"],
    },
    externals: [
        {
            react: "react",
        },
    ],
};
//# sourceMappingURL=webpack.common.js.map
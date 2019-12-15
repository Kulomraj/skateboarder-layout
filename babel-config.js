const presets = [
[
    "@babel/env",
    {
    targets: {
        internetExplorer: "11",
    },
    useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };
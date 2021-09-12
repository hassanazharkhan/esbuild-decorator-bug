const path = require('path')
const { buildSync } = require('esbuild')

buildSync({
    bundle: true,
    entryPoints: [path.resolve(__dirname, "src", "index.ts")],
    outfile: path.join(__dirname, "build", "index.js"),
    platform: "node",
    keepNames: true,
    minify: true,
    sourcemap: true,
    target: "node14.2",
});


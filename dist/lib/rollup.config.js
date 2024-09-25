"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rollup_plugin_node_resolve_1 = require("rollup-plugin-node-resolve");
const rollup_plugin_commonjs_1 = require("rollup-plugin-commonjs");
const rollup_plugin_sourcemaps_1 = require("rollup-plugin-sourcemaps");
const lodash_camelcase_1 = require("lodash.camelcase");
const rollup_plugin_typescript2_1 = require("rollup-plugin-typescript2");
const rollup_plugin_json_1 = require("rollup-plugin-json");
const pkg = require('./package.json');
const libraryName = 'flight-log-parser';
exports.default = {
    input: `src/${libraryName}.ts`,
    output: [
        { file: pkg.main, name: (0, lodash_camelcase_1.default)(libraryName), format: 'umd', sourcemap: true },
        { file: pkg.module, format: 'es', sourcemap: true },
    ],
    // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
    external: [],
    watch: {
        include: 'src/**',
    },
    plugins: [
        // Allow json resolution
        (0, rollup_plugin_json_1.default)(),
        // Compile TypeScript files
        (0, rollup_plugin_typescript2_1.default)({ useTsconfigDeclarationDir: true }),
        // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
        (0, rollup_plugin_commonjs_1.default)(),
        // Allow node_modules resolution, so you can use 'external' to control
        // which external modules to include in the bundle
        // https://github.com/rollup/rollup-plugin-node-resolve#usage
        (0, rollup_plugin_node_resolve_1.default)(),
        // Resolve source maps to the original source
        (0, rollup_plugin_sourcemaps_1.default)(),
    ],
};
//# sourceMappingURL=rollup.config.js.map
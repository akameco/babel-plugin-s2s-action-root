// @flow
import path from 'path'
import pluginTester from 'babel-plugin-tester'
import plugin from '.'

const filename = path.resolve(process.cwd(), 'src', 'types', 'actions.js')

pluginTester({
  plugin,
  snapshot: true,
  babelOptions: { filename },
  pluginOptions: { input: 'src/__fixtures__/**/*.js' },
  tests: [
    {
      title: 'options',
      code: `// @flow`,
    },
  ],
})

pluginTester({
  plugin,
  babelOptions: { filename },
  tests: [
    {
      title: 'error',
      code: `// throw error`,
      error: /require input option/,
    },
  ],
})

pluginTester({
  plugin,
  babelOptions: { filename },
  snapshot: true,
  pluginOptions: {
    input: '**/actionTypes.js',
    globOptions: { cwd: __dirname },
  },
  tests: [
    {
      title: 'glob options',
      code: `// show options`,
    },
  ],
})

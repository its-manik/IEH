import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: './APIspecs.yml',
  apiFile: './src/store/emptyApi.ts',
  apiImport: 'emptySplitApi',
  outputFile: './src/store/APIs.ts',
  exportName: 'APIs',
  hooks: true,
}

export default config
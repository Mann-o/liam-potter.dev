import {
  build,
  head,
  loading,
  modules,
  plugins,
} from './config'

export default {
  build: Object.assign({
    watch: [
      'config',
    ],
  }, build),
  head,
  loading,
  modules,
  plugins,
}

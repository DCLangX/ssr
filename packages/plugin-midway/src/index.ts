import { start } from './start'
import { build } from './build'
import { deploy } from './deploy'

export function serverPlugin() {
  return {
    name: 'plugin-midway',
    start,
    build,
    deploy,
  }
}

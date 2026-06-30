export interface IPackageManifest {
  version: string
  description: string
  author?: {
    name?: string
    url?: string
  }
  homepage?: string
}

export interface IJetBrainsPaths {
  buildDir: string
  jarContentDir: string
  jarPath: string
  pluginDir: string
  rootDir: string
  zipPath: string
}

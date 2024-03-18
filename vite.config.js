// vite plugins
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper'

// utils
import { defineConfig } from 'vite'
import { resolve } from 'node:path'

const cwd = process.cwd()

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        plugins: [
            ViteSvgSpriteWrapper({
                icons: 'src/icons/**.svg',
                outputDir: 'public/icons'
            })
        ],
        resolve: {
            alias: {
                '@': resolve(cwd, 'src')
            }
        },
        build: {
            rollupOptions: {
                output: {
                    assetFileNames(chunkInfo) {
                        const ext = chunkInfo.name?.split('.').at(-1)
                        let type = ext

                        if (ext) {
                            if (/png|jpe?g|svg/i.test(ext)) {
                                type = 'images'
                            }

                            if (/css/i.test(ext)) {
                                type = 'styles'
                            }
                        }

                        return `${type}/[name][extname]`
                    },
                    chunkFileNames: 'scripts/[name].js',
                    entryFileNames: 'scripts/[name].js'
                }
            }
        }
    }
})

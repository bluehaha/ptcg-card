const startSrc = ''
const endSrc = ''

let imgs = [...document.getElementsByTagName('img')]

let startIndex = imgs.findIndex(img => img.src === startSrc)
let endIndex = imgs.findIndex(img => img.src === endSrc)

imgs = imgs.filter((img, i) => i >= startIndex && i <= endIndex).map(img => {
  return {
    src: img.src,
    price: 20
  }
})

JSON.stringify(imgs)

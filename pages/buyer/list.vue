<template>
  <b-container fluid>
    <h1 class="text-center">收牌</h1>
    <b-row v-for="images in chunkedImages" class="mb-2" :key="images[0].src">
      <b-col v-for="image in images" :key="image.src">
         <div class="position-relative">
           <b-img :src="image.src" fluid alt="Responsive image"></b-img>
           <div class="position-absolute card-text px-2">
             <span>{{ image.price }}</span><br>
             <span>{{ image.des }}</span>
           </div>
         </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
export default {
  data() {
    return {
      chunkSize: 6,
      images: [
        {
          "src": "https://i.imgur.com/XmNeZYa.jpg",
          "price": 20
        },
        {
          "src": "https://i.imgur.com/SRMnG7x.jpg",
          "price": 20
        },
        {
          "src": "https://i.imgur.com/Lek6YZb.jpg",
          "price": 20
        },
        {
          "src": "https://i.imgur.com/YMkcj8w.jpg",
          "price": 20
        },
        // 沙奈 AR 太貴，先等等
        // {
        //   "src": "https://i.imgur.com/ZFyDMbm.jpg",
        //   "price": 20
        // },
        // {
        //   "src": "https://i.imgur.com/LC0OAkQ.jpg",
        //   "price": 20
        // },
        {
          "src": "https://i.imgur.com/nnPTpoH.jpg",
          "price": 20
        },
        {
          "src": "https://i.imgur.com/lgigEOF.jpg",
          "price": 20
        },
        {
          "src": "https://i.imgur.com/LcKcWHi.jpg",
          "price": 20
        },
        {
          "src": "https://i.imgur.com/8MNiNjd.jpg",
          "price": 20
        },
        {
          "src": "https://i.imgur.com/FhVMWGO.jpg",
          "price": 20
        },
        {
          "src": "https://i.imgur.com/bFGpO6p.jpg",
          "price": 80
        },
        // 沙奈 sr
        // {
        //   "src": "https://i.imgur.com/MnA2Gnj.jpg",
        //   "price": 100
        // },
        {
          "src": "https://i.imgur.com/WZMvgfU.jpg",
          "price": 50
        },
        {
          "src": "https://i.imgur.com/QvD3Kzr.jpg",
          "price": 40
        },
        // 沙奈 sar
        // {
        //   "src": "https://i.imgur.com/nsZFz1x.jpg",
        //   "price": 1200
        // },
        {
          "src": "https://i.imgur.com/LJ8hUgk.jpg",
          "price":  150
        },
        {
          "src": "https://i.imgur.com/OJLHEnO.jpg",
          "price": 300
        },
        {
          "src": "https://i.imgur.com/xDZXyBr.jpg",
          "price": 20
        },
        {
          "src": "https://i.imgur.com/hJGMIt5.jpg",
          "price": 20
        },
        {
          "src": "https://i.imgur.com/iTLW1LL.jpg",
          "price": 20
        },
        {
          "src": "https://i.imgur.com/8lrB5DV.jpg",
          "price": 20
        },
        {
          "src": "https://i.imgur.com/9Api1ay.jpg",
          "price": 20
        },
        {
          "src": "https://i.imgur.com/wvPDPOb.jpg",
          "price": 20
        },
        {
          "src": "https://i.imgur.com/j3Gl6Tt.jpg",
          "price": 20
        },
        {
          "src": "https://i.imgur.com/ObYWfsM.jpg",
          "price": 20
        },
        {
          "src": "https://i.imgur.com/L2dlYbO.jpg",
          "price": 80
        },
        {
          "src": "https://i.imgur.com/GWg6miO.jpg",
          "price": 50
        },
        {
          "src": "https://i.imgur.com/eKINdDj.jpg",
          "price": 100
        },
        {
          "src": "https://i.imgur.com/spqId54.jpg",
          "price": 50
        },
        {
          "src": "https://i.imgur.com/YN8MyVn.jpg",
          "price": 50
        },
        // 密樂頓 異圖
        // {
        //   "src": "https://i.imgur.com/mOOQMiL.jpg",
        //   "price": 400
        // },
        {
          "src": "https://i.imgur.com/LqIEdUr.jpg",
          "price": 150
        },
        // 朱紫 SR
        {
          src: 'https://i.imgur.com/0huWqWB.jpg',
          price: 50,
        },
        {
          src: 'https://i.imgur.com/bFGpO6p.jpg',
          price: 50,
        },
        {
          src: 'https://i.imgur.com/GMrzPwc.jpg',
          price: 50,
        },
        {
          src: 'https://i.imgur.com/Ryaus0y.jpg',
          price: 50,
        },
        // 朱紫 AR
        // 沙奈朵 ex
        // {
        //   src: "https://i.imgur.com/05ggiN5.jpg",
        //   price: 150,
        //   des: "收二",
        // },
        // 天地萬物
        // 噴火龍, 超夢 vstar
        {
          src: "https://i.imgur.com/qe2C0oJ.jpg",
          price: 550,
        },
        {
          src: "https://i.imgur.com/q1ejeja.jpg",
          price: 350,
        },
        {
          src: "https://i.imgur.com/EzDbMAS.jpg",
          price: 200,
        },
        {
          src: "https://i.imgur.com/yfstC6l.jpg",
          price: 150,
        },
        {
          src: "https://i.imgur.com/w6Is75p.jpg",
          price: 100,
        },
        // hr eevee
        {
          src: 'https://i.imgur.com/dBQsr4L.jpg',
          price: 200,
        },
        // pikachu chr
        {
          src: 'https://i.imgur.com/MAyMtGr.jpg',
          price: 80,
          des: '無限收'
        },
        {
          src: 'https://i.imgur.com/9CZBK11.jpg',
          price: 20,
        },
        {
          src: 'https://i.imgur.com/B684hea.jpg',
          price: 20,
        },
        {
          src: 'https://i.imgur.com/mUMahnm.jpg',
          price: 20,
        },
        // v-union
        {
          src: 'https://i.imgur.com/OSaCXx3.jpg',
          price: 100,
        },
        // 廢 sr, hr
        {
          src: 'https://i.imgur.com/tDTDxSd.jpg',
          price: 100,
        },
        {
          src: 'https://i.imgur.com/34zpHNr.jpg',
          price: 50,
        },
        {
          src: 'https://i.imgur.com/3hfISm0.jpg',
          price: 80,
        },
        {
          src: 'https://i.imgur.com/xW2T1pe.jpg',
          price: 200,
        },
        {
          src: 'https://i.imgur.com/qT4iHeL.jpg',
          price: 600,
        },
        {
          src: 'https://i.imgur.com/4xbUpzw.jpg',
          price: 800,
        },
        // 三神 sr, hr
        {
          src: 'https://i.imgur.com/mlegs3C.jpg',
          price: 100,
        },
        // {
        //   src: 'https://i.imgur.com/Ny2smLB.jpg',
        //   price: 150,
        // },
        // {
        //   src: 'https://i.imgur.com/2wPw88q.jpg',
        //   price: 200,
        // },
        {
          src: 'https://i.imgur.com/tX3OW5z.jpg',
          price: 100,
        },
        {
          src: 'https://i.imgur.com/wh5L3YX.jpg',
          price: 150,
        },
        {
          src: 'https://i.imgur.com/KiGpGYQ.jpg',
          price: 200,
        },
        {
          src: 'https://i.imgur.com/voMzKdo.jpg',
          price: 150,
        },
        {
          src: 'https://i.imgur.com/QFR7s5S.jpg',
          price: 200,
        },
        // 洛奇亞、鬼龍 sr, hr, ur
        // {
        //   src: 'https://i.imgur.com/bkIBkco.jpg',
        //   price: 100,
        // },
        // {
        //   src: 'https://i.imgur.com/SoHwqwl.jpg',
        //   price: 150,
        // },
        // {
        //   src: 'https://i.imgur.com/lKWfsEO.jpg',
        //   price: 200,
        // },
        // {
        //   src: 'https://i.imgur.com/yDPxfSj.jpg',
        //   price: 100,
        // },
        // {
        //   src: 'https://i.imgur.com/FBA2PQP.jpg',
        //   price: 150,
        // },
        // {
        //   src: 'https://i.imgur.com/esPRzbH.jpg',
        //   price: 200,
        // },
        // 劍盾異圖們
        {
          src: 'https://i.imgur.com/g0feN2i.jpg',
          price: 400,
        },
        {
          src: 'https://i.imgur.com/0D44ilp.jpg',
          price: 300,
        },
        {
          src: 'https://i.imgur.com/kfXOu35.jpg',
          price: 200,
        },
        {
          src: 'https://i.imgur.com/G1fzkkv.jpg',
          price: 200,
        },
        {
          src: 'https://i.imgur.com/bPzgsYr.jpg',
          price: 200,
        },
        // 有點不對胃口，還在想要不要收
        // {
        //   src: 'https://i.imgur.com/LgfWZF1.jpg',
        //   price: 100,
        // },
        // {
        //   src: 'https://i.imgur.com/VrybXk6.jpg',
        //   price: 100,
        // },
        // {
        //   src: 'https://i.imgur.com/ulC5A5N.jpg',
        //   price: 100,
        // },
        // {
        //   src: 'https://i.imgur.com/JS5sFQf.jpg',
        //   price: 100,
        // },
        // {
        //   src: 'https://i.imgur.com/H3jT0uF.jpg',
        //   price: 100,
        // },
        // {
        //   src: 'https://i.imgur.com/irpUIll.jpg',
        //   price: 100,
        // },
        // 烈空
        {
          src: 'https://i.imgur.com/QtxexQo.jpg',
          price: 1200,
        },
        // 迷紅魚
        // {
        //   src: 'https://i.imgur.com/AED7Fo1.jpg',
        //   price: 100,
        // },
        // 啊爾三神系列
        {
          src: 'https://i.imgur.com/bVvo8ex.jpg',
          price: 400,
        },
        {
          src: 'https://i.imgur.com/3G2LE0X.jpg',
          price: 400,
        },
        // {
        //   src: 'https://i.imgur.com/lBG9YTk.jpg',
        //   price: 200,
        // },
        // {
        //   src: 'https://i.imgur.com/mPoSyoA.jpg',
        //   price: 200,
        // },
        // pr 伊布
        {
          src: 'https://i.imgur.com/zUhQc2x.jpg',
          price: 50,
        },
        {
          src: 'https://i.imgur.com/W4mJL5G.jpg',
          price: 50,
        },
        {
          src: 'https://i.imgur.com/s2FGeKn.jpg',
          price: 50,
        },
        {
          src: 'https://i.imgur.com/b9l9i0J.jpg',
          price: 5500,
          des: '拆封可'
        },
        {
          src: 'https://i.imgur.com/3PdFGuq.jpg',
          price: 5500,
          des: '拆封可'
        },
        {
          src: 'https://i.imgur.com/snilUXI.jpg',
          price: 6500,
          des: '拆封可'
        },
        // 覺群小色違
        {
          src: 'https://i.imgur.com/QSZqs9b.jpg',
          price: 40,
        },
        {
          src: 'https://i.imgur.com/70BNXR8.jpg',
          price: 40,
        },
        {
          src: 'https://i.imgur.com/oCqKRcr.jpg',
          price: 40,
        },
        // 光輝
        {
          src: 'https://i.imgur.com/bpsUgIl.jpg',
          price: 50,
        },
        {
          src: 'https://i.imgur.com/ptPg5g5.jpg',
          price: 150,
        },
        // 覺群
        {
          src: 'https://i.imgur.com/PNdZ3jl.jpg',
          price: 500,
        },
        {
          src: 'https://i.imgur.com/0Hr9DZY.jpg',
          price: 500,
        },
        {
          src: 'https://i.imgur.com/b1cxplH.jpg',
          price: 100,
        },
        {
          src: 'https://i.imgur.com/gFEWaUB.jpg',
          price: 100,
        },
        {
          src: 'https://i.imgur.com/OrHJ2tA.jpg',
          price: 100,
        },
        {
          src: 'https://i.imgur.com/EJUr0HV.jpg',
          price: 250,
        },
        {
          src: 'https://i.imgur.com/VLf1oB5.jpg',
          price: 500,
        },
        {
          src: 'https://i.imgur.com/eByoOSv.jpg',
          price: 250,
        },
        {
          src: 'https://i.imgur.com/fZXXG6H.jpg',
          price: 250,
        },
        // 貴貴der vmax
        // {
        //   src: 'https://i.imgur.com/bHbxfDX.jpg',
        //   price: 1000,
        // },
        // {
        //   src: 'https://i.imgur.com/juRSTwI.jpg',
        //   price: 1000,
        // },
        // {
        //   src: 'https://i.imgur.com/N0pLLfN.jpg',
        //   price: 2000,
        // },
        // {
        //   src: 'https://i.imgur.com/8fLPy1f.jpg',
        //   price: 2000,
        // },
        // {
        //   src: 'https://i.imgur.com/KEUFfxJ.jpg',
        //   price: 2000,
        // },
      ]
    }
  },
  computed: {
    chunkedImages() {
      let chunkedImages = []
      for (let i = 0; i < this.images.length; i+= this.chunkSize) {
        const chunk = this.images.slice(i, i+this.chunkSize)
        chunkedImages.push(chunk)
      }
      return chunkedImages
    }
  }
}
</script>

<style scoped lang="scss">
.card-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: rgba(204, 204, 204, 0.5);
  font-size: 2rem;
  font-weight: bold;
  color: red;
  white-space: nowrap;

  z-index: 1;
}
</style>

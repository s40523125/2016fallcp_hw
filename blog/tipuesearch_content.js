var tipuesearch = {"pages":[{"url":"./pages/about/","title":"About","text":"2016Fall 計算機程式課程網誌 本課程主要教導機械設計工程系大一學生下列內容: 如何利用 Github 管理電腦檔案. 如何利用 Python3 與 Brython 程式處理檔案資料. 如何利用 Brython 程式進行網際靜態與動態繪製. 課程倉儲: http://github.com/mdecourse/2016fallcp 課程投影片: http://mdecourse.github.io/2016fallcp 課程網誌: http://mdecourse.github.io/2016fallcp/blog","tags":"misc"},{"url":"./w10-brython-hui-tu-fan-li.html","title":"W10 Brython 繪圖範例","text":"繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math canvas = doc[\"guitarchord\"] ctx = canvas.getContext(\"2d\") ctx.beginPath() ctx.lineWidth = 1 inc = 10 for i in range(50): ctx.moveTo(100+i*inc, 100) ctx.lineTo(100+i*inc, 200) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath()","tags":"Course"}]};
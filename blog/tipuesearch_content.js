var tipuesearch = {"pages":[{"text":"2016Fall 計算機程式課程網誌 本課程主要教導機械設計工程系大一學生下列內容: 如何利用 Github 管理電腦檔案. 如何利用 Python3 與 Brython 程式處理檔案資料. 如何利用 Brython 程式進行網際靜態與動態繪製. 課程倉儲: http://github.com/mdecourse/2016fallcp 課程投影片: http://mdecourse.github.io/2016fallcp 課程網誌: http://mdecourse.github.io/2016fallcp/blog","title":"About","url":"./pages/about/","tags":"misc"},{"text":"window.onload=function(){ brython(1); } from browser import document as doc from browser import html container = doc[container] mystring = \"\" num = input(\"輸入\") for i in range(1,in(num)+1): mystring +=str(i) + \":hello mde\" +html.BR() container <= mystring from browser import document as doc from browser import html container = doc[temperature] mystring = \"\" cdegree = input(\"\") fdegree = float(cdegree)*9/5 + 32 output_string = \"攝氏\" + str(cdegree) + \"度=華氏\" + str(fdegree)+ \"度\" container <= output_string","title":"W13 Brython 練習","url":"./w13-brython-lian-xi.html","tags":"Course"},{"text":"繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math canvas = doc[\"guitarchord\"] ctx = canvas.getContext(\"2d\") ctx.beginPath() ctx.lineWidth = 1 inc = 25 for i in range(6): ctx.moveTo(100+i*inc, 100) ctx.lineTo(100+i*inc, 250) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() ctx.beginPath() ctx.lineWidth = 7 ctx.moveTo(99, 100) ctx.lineTo(226, 100) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() ctx.beginPath() ctx.lineWidth = 1 inc = 30 for i in range(5): ctx.moveTo(100, 130+i*inc) ctx.lineTo(225, 130+i*inc) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() def background(x, y, xinc, yinc, xnum, ynum, ctx): # 水平線 for i in range(ynum+1): ctx.beginPath() if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(x-1, y+i*yinc) ctx.lineTo(x+xnum*xinc+1, y+i*yinc) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直線 for i in range(xnum+1): ctx.beginPath() ctx.lineWidth = 1 ctx.moveTo(x+i*xinc, y) ctx.lineTo(x+i*xinc, y+ynum*yinc) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() w = 25 h = 30 background(300, 100, w, h, 5, 5, ctx)","title":"W12 Brython 繪圖練習","url":"./w12-brython-hui-tu-lian-xi.html","tags":"Course"}]};
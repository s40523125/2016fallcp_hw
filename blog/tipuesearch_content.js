var tipuesearch = {"pages":[{"text":"2016Fall 計算機程式課程網誌 本課程主要教導機械設計工程系大一學生下列內容: 如何利用 Github 管理電腦檔案. 如何利用 Python3 與 Brython 程式處理檔案資料. 如何利用 Brython 程式進行網際靜態與動態繪製. 課程倉儲: http://github.com/mdecourse/2016fallcp 課程投影片: http://mdecourse.github.io/2016fallcp 課程網誌: http://mdecourse.github.io/2016fallcp/blog","tags":"misc","url":"./pages/about/","title":"About"},{"text":"上課不能玩手機 window.onload=function(){ brython(1); } from browser import document from browser import alert def get_input(ev): the_input= input(\"請輸入\") alert(\"輸入為:\"+str(the_input)) document['ch01'].bind('click',get_input) 40523127 window.onload=function(){ brython(1); } from browser import document from browser import alert def get_input(ev): the_input= input(\"請輸入\") alert(\"輸入為:\"+str(the_input)) document['ch01'].bind('click',get_input) 40523127","tags":"Course","url":"./cp-w14-brython-lian-xi.html","title":"CP W14 Brython 練習"},{"text":"將 http://mde.tw/2016fallcp/course/Python3Programs.txt 整理成brython window.onload=function(){ brython(1); } from browser import document as doc from browser import html container = doc['container'] mystring = \"\" num = input(\"請輸入重複執行次數:\") #for i in range(1,11): for i in range(1,int(num)+1): mystring += str(i)+ \":hallo mde\" +html.BR() container <= mystring 開始進行範例分配 接受使用者輸入 利用aler()顯示結果 直接列印結果 上述的程式碼: 將 http://mde.tw/2016fallcp/course/Python3Programs.txt 整理成brython window.onload=function(){ brython(1); } from browser import document as doc from browser import html container = doc['container'] mystring = \"\" num = input(\"請輸入重複執行次數:\") #for i in range(1,11): for i in range(1,int(num)+1): mystring += str(i)+ \":hallo mde\" +html.BR() container <= mystring 將 http://mde.tw/2016fallcp/course/Python3Programs.txt 整理成brython 練習:編寫一個可以將適用者輸入的攝氏溫度,轉為華氏溫度 window.onload=function(){ brython(1); } from browser import document as doc from browser import html container = doc['temperature'] mystring = \"\" cdegree = input(\"請輸入攝氏溫度:\") fdegree = float(cdegree)*9/5+32 output_string = \"攝氏\" +str(cdegree) + \"度=華氏\" +str(fdegree) + \"度\" container <= output_string 開始進行範例分配 接受使用者輸入 利用aler()顯示結果 直接列印結果 上述的程式碼: 將 http://mde.tw/2016fallcp/course/Python3Programs.txt 整理成brython 練習:編寫一個可以將適用者輸入的攝氏溫度,轉為華氏溫度 window.onload=function(){ brython(1); } from browser import document as doc from browser import html container = doc['temperature'] mystring = \"\" cdegree = input(\"請輸入攝氏溫度:\") fdegree = float(cdegree)*9/5+32 output_string = \"攝氏\" +str(cdegree) + \"度=華氏\" +str(fdegree) + \"度\" container <= output_string","tags":"Course","url":"./cp-w13-brython-lian-xi.html","title":"CP W13 Brython 練習"},{"text":"Brython 繪圖 繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖. 以下利用函式定義進行和弦底稿繪圖: window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"chord1\"] ctx = canvas.getContext(\"2d\") def background(x, y, xinc, yinc, xnum, ynum, ctx): # 水平線 for i in range(ynum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(x-1, y+i*yinc) ctx.lineTo(x+xnum*xinc+1, y+i*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直線 for i in range(xnum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 ctx.moveTo(x+i*xinc, y) ctx.lineTo(x+i*xinc, y+ynum*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() w = 20 h = 30 background(100, 100, w, h, 5, 5, ctx) 上述繪圖的程式碼: window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"chord1\"] ctx = canvas.getContext(\"2d\") def background(x, y, xinc, yinc, xnum, ynum, ctx): # 水平線 for i in range(ynum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(x-1, y+i*yinc) ctx.lineTo(x+xnum*xinc+1, y+i*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直線 for i in range(xnum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 ctx.moveTo(x+i*xinc, y) ctx.lineTo(x+i*xinc, y+ynum*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() w = 20 h = 30 background(100, 100, w, h, 5, 5, ctx)","tags":"Course","url":"./w12-brython-hui-tu-lian-xi.html","title":"W12 Brython 繪圖練習"},{"text":"Brython 繪圖 繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag1\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 inc = 5 for i in range(100): ctx.moveTo(100+i*inc,100) ctx.lineTo(100+i*inc,200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() 以下為程式碼: window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag1\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 inc = 5 for i in range(100): ctx.moveTo(100+i*inc,100) ctx.lineTo(100+i*inc,200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath()","tags":"Course","url":"./w10-brython-hui-tu-fan-li.html","title":"W10 Brython 繪圖範例"}]};
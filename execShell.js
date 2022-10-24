var exec = require('child_process').exec; 


exec(`find ./src "(" -name "*.html" -or -name "*.js" -or -name "*.css" -or -name "*.vue" ")" -print | xargs wc -l
`,function(err,out){ // 包含空行
  console.log(out);
})


// find . "(" -name "*.html" -or -name "*.js" -or -name "*.css" -or -name "*.vue" ")" -print | xargs grep -v "^$" | wc -l  不包括空行



// 首先，find、xargs、wc、都是linux下的命令。

// 设置了find命令的搜索路径：将find的顶层目录设置为当前目录，即从当前目录开始搜索

// -name ".html"：-name使得find根据指定的名称寻找文件。".html"即匹配所有后缀名为html的文件。

// -or是find命令的一个操作符，“或”。

// -print将寻找到的文件的名称打印出来。

// |：管道，大体作用就是把前面命令的输出，作为后面命令的输入。

// xargs命令：将管道的标准输入转换为下个命令的参数。由于wc命令是对文件的信息进行统计，

// 需要文件名作为参数，因此需要将find命令找到的文件名，使用xargs作为参数传递给wc命令。

// wc命令：统计文件的行数、字节数等信息。

// -l参数：只显示行数。在同时对多个文件的行数进行统计时，会计算出它们的和。

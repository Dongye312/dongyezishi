// js这门语言中还专门提供了一块能力，用于和html 中的元素进行交互

// 1.监听翻译按钮的点击事件
let translateBtn = document.getElementById('translate');
translateBtn.addEventListener('click', function () {
    // 2.获取用户输入的文本
    let inputText = document.getElementById('source-text').value;
    let targetLang = document.getElementById('tgt').value;
    document.getElementById('placeholder').textContent = '翻译中...';
    // 将inputText 传给ollama中的 deepseek-r1（如何用代码链接ollama）
    // 在JS中发送http请求给：http://localhost:11434/api/chat
    fetch('http://localhost:11434/api/chat',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            model:'deepseek-r1:1.5b',
            messages:[
                {role: 'system',content: `你是一个专业的翻译，擅长将一种语言翻译成${targetLang}，只返回最简单的翻译结果，不带任何解释`},
                {role: 'user',content: inputText},
            ],
            stream: false // 是否开启流式输出
        })
    })
    .then(res => res.json())// 将响应体转换为json格式
    .then((data) => {
        console.log(data.message.content);
        // 将译文显示在页面上
        document.getElementById('placeholder').value = data.message.content.replace(/\n/g, '<br>');
    })
    });





// function foo(){}
// var foo = function(){}
// let foo = () => {}
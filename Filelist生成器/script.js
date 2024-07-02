// 音效播放模組
function playButtonSound() {
    new Audio('button_click.mp3').play();
}

function playArrowSound() {
    new Audio('arrow_click.mp3').play();
}

// 調整數字模組
function adjustNumber(id, delta) {
    const input = document.getElementById(id);
    input.value = parseInt(input.value || 0) + delta;
    generateFileList();
    playArrowSound();
}

// 生成文件列表模組
function generateFileList() {
    const start = parseInt(document.getElementById('start').value) || 0;
    const end = parseInt(document.getElementById('end').value) || 0;
    const format = document.getElementById('customFormat').value || 'video@.ts';
    
    // 擴展文件名格式功能，處理固定長度和保留前置零
    const result = Array.from({ length: end - start + 1 }, (_, i) => {
        let formattedNumber = (start + i).toString().padStart(format.match(/@+/)[0].length, '0');
        return `file '${format.replace(/@+/, formattedNumber)}'`;
    }).join('\n');
    
    document.getElementById('result').value = result;
}


// 複製到剪貼簿模組
function copyToClipboard() {
    const resultText = document.getElementById('result');
    resultText.select();
    resultText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    buttonFeedback('copyButton');
}

// 清除內容模組
function clearText() {
    document.getElementById('result').value = '';
    document.getElementById('start').value = '';
    document.getElementById('end').value = '';
    document.getElementById('customFormat').value = '';
    buttonFeedback('clearButton');
}

// 下載文件模組
function downloadFile() {
    const resultText = document.getElementById('result').value;
    const blob = new Blob([resultText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'filelist.txt';
    link.click();
    buttonFeedback('downloadButton');
}

// 按鈕反色提示模組
function buttonFeedback(buttonId) {
    playButtonSound();
    const button = document.getElementById(buttonId);
    button.classList.add('active');
    setTimeout(() => button.classList.remove('active'), 150);
}

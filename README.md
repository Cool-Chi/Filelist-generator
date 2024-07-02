# 文件清單生成器 (File List Generator)

這是一個簡單的工具，用於生成一個包含文件名稱列表的文件，例如 `file 'video0001.ts'`、`file 'video0002.ts'` 等。

This is a simple tool for generating a file list with filenames such as `file 'video0001.ts'`, `file 'video0002.ts'`, etc.

## 功能特點 (Features)

- 自定義字串格式（使用 `@` 作為數字的位置）
- 起始和結束數字輸入
- 輕鬆調整數字的箭頭按鈕
- 複製到剪貼簿功能
- 生成的文件可以下載
- 清除所有輸入內容
- 可處理帶有前導零的文件名

## 如何使用 (How to Use)

1. 在“自訂字串格式”欄位中輸入模板格式，例如 `video@.ts`。 `@` 將被替換為數字。
2. 在“起始數字”和“結束數字”欄位中輸入相應的數值。
3. 點擊左右箭頭可以調整數字。
4. 文件列表將自動生成並顯示在文本區域中。
5. 點擊“複製”按鈕將生成的文件列表複製到剪貼簿。
6. 點擊“下載”按鈕將生成的文件列表下載為 `filelist.txt` 文件。
7. 點擊“清除”按鈕清空所有輸入內容和生成的列表。

1. Enter the template format in the "Custom Format" field, e.g., `video@.ts`. The `@` will be replaced by numbers.
2. Enter the starting and ending numbers in the respective fields.
3. Use the left and right arrow buttons to adjust the numbers.
4. The file list will be automatically generated and displayed in the text area.
5. Click the "Copy" button to copy the generated file list to the clipboard.
6. Click the "Download" button to download the generated file list as a `filelist.txt` file.
7. Click the "Clear" button to clear all inputs and the generated list.

## 例子 (Examples)

- 模板格式： `video@.ts`
- 起始數字： `1`
- 結束數字： `10`

生成的列表如下：
file 'video1.ts'
file 'video2.ts'
file 'video3.ts'
file 'video4.ts'
file 'video5.ts'
file 'video6.ts'
file 'video7.ts'
file 'video8.ts'
file 'video9.ts'
file 'video10.ts'

- Template format: `video@.ts`
- Starting number: `1`
- Ending number: `10`

The generated list will be:
file 'video1.ts'
file 'video2.ts'
file 'video3.ts'
file 'video4.ts'
file 'video5.ts'
file 'video6.ts'
file 'video7.ts'
file 'video8.ts'
file 'video9.ts'
file 'video10.ts'

## 代碼結構 (Code Structure)

該項目由三個文件組成：

- `index.html`: 包含基本的HTML結構和內容
- `styles.css`: 包含所有的樣式
- `script.js`: 包含所有的JavaScript功能

The project consists of three files:

- `index.html`: Contains the basic HTML structure and content.
- `styles.css`: Contains all the styles.
- `script.js`: Contains all the JavaScript functionalities.

## 聯絡方式 (Contact)

如果您有任何問題或反饋，請隨時聯繫我。

If you have any questions or feedback, feel free to contact me.


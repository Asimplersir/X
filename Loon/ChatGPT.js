#!name=ChatGPTPlusCrack
#!desc=ChatGPTPlusCrack
#!icon=https://github.com/Toperlock/Quantumult/raw/main/icon/Doraemon/Doraemon-1044.png

[Script]

http-response ^https?:\/\/ios\.chat\.openai\.com\/backend-api\/(accounts\/check\/|models) script-path=https://raw.githubusercontent.com/yqc007/QuantumultX/master/ChatGPTPlusCrack.js, requires-body=true, timeout=60 ,tag=ChatGPTPlusCrack_1

[MITM]

hostname = ios.chat.openai.com

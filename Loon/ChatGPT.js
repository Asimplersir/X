#!name=ChatGPTPlusCrack
#!desc=ChatGPTPlusCrack
#!icon=https://raw.githubusercontent.com/mgxray/Quantumult_x_II/main/country/chatgpt.png
[Script]

http-response ^https?:\/\/ios\.chat\.openai\.com\/backend-api\/(accounts\/check\/|models) script-path=https://raw.githubusercontent.com/yqc007/QuantumultX/master/ChatGPTPlusCrack.js, requires-body=true, timeout=60 ,tag=ChatGPTPlusCrack_1

[MITM]

hostname = ios.chat.openai.com

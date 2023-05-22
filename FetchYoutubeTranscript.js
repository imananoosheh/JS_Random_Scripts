"use strict"

export function FetchYoutubeTranscript(){
    console.log('Fetching the transcript')
    const feedbackButton = document.querySelector('#button-shape>button')
    feedbackButton.click()
    const transcriptButton = document.querySelectorAll('tp-yt-paper-item.style-scope.ytd-menu-service-item-renderer')[1]
    transcriptButton.click()
    const transcript = document.querySelector('#segments-container').textContent.replaceAll('\n  \n  \n  ','\n').replaceAll('\n  \n\n\n  \n    \n      ','\n').replaceAll('\n    \n','\t').trim()
    const consoleStyle = "color: white; font-wight: bold; background-color: #7030a0; padding: 2px; font-size:1.2rem"
    console.log(`%c${transcript}`,consoleStyle)
}
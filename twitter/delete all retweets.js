setInterval(() => {
    for (const d of document.querySelectorAll('div[data-testid="unretweet"]')) {
        //select all unretweet buttons
        d.click()
        for (const d of document.querySelectorAll('div[data-testid="unretweetConfirm"]')) {
            //select unretweet confirm buttons(usually only one which is show by click unretweet )
            d.click()
        }
    }
    window.scrollTo(0, document.body.scrollHeight)
}, 1000)
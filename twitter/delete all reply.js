setInterval(() => {
    for (const d of document.querySelectorAll('div[data-testid="caret"]')) {
        //select all unretweet buttons
        d.click()
        for (const d of document.querySelectorAll('div[role="menuitem"]')) {
            //select unretweet confirm buttons(usually only one which is show by click caret)
            d.click()
            // confirmationSheetConfirm
            for (const d of document.querySelectorAll('div[data-testid="confirmationSheetConfirm"]')) {
                //select unretweet confirm buttons(usually only one which is show by click menuitem )
                d.click()
            }
        }
    }
    window.scrollTo(0, document.body.scrollHeight)
}, 1000)
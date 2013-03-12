# Pimp keynote
(Big time work in Progress)

When you export a Keynote presentation to HTML it provides a JS player
that is a bit clunky and hard to view/load on the mobile.

This project aims to process the exported images into a single page
presentation that then is responsive on mobiles and tablets.

## Use
This is very much work in progress

For now it's a simple Ruby script that is executable and refers to
directories relevant to that script

When in the exported keynote html directory simply run the script.

    ~/keynote-export $ ~/development/pimpkeynote/bin/pimpkeynote

This then creates a `pimped-index.html` which you can edit and then
replace the `index.html` before uploading to your http server.

## AngelList
To get the angelList follow button you need to know your company id,
which you can get out of the embed section on AngelList.

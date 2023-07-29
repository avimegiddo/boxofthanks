# Aquarium of Appreciation

This project began as a "Box of Thanks", transforming into an "Aquarium of Appreciation" during its design cycle. It is a Google Sheet template with attached scripts allowing for the virtual collection and display of messages of gratitude. It serves as a powerful tool for acknowledgment, recognition, and appreciation, promoting a culture of empathy and support.

Visit the [project webpage](https://www.avimegiddo.com/2023/07/11/box-of-thanks/) for more information.

Check out the [Google Sheet template preview](https://docs.google.com/spreadsheets/d/19qmJXAQR2eAp_HXem6TsXJtsh_2zNjjO_xWpFfaD-v0/template/preview) to see it in action.

## How it Works

Individuals can share their messages of gratitude by clicking on "Appreciate Someone", and can read previous notes of appreciation by clicking on the fish.

The 'Appreciate Someone' script-enabled button in the "Main Display" sheet allows users to add messages to the aquarium. When clicked, this button opens a modal dialog box with a form, enabling users to enter a name, recipient, and a message of thanks.

Each fish is assigned the same Google Apps Script function. Clicking on a fish triggers this function, which retrieves a random entry from the "Entries" sheet and displays it in a modal dialog.

All the data is stored in a hidden sheet but can be accessed by a user. This is because the script needs to update the entries on the user’s behalf, so it cannot be locked or protected in this implementation.

## Why a Virtual Box?

A virtual Box of Thanks or a suggestion box in Google Sheets offers significant practical advantages over a physical box. It ensures the submission process is convenient and readily available to everyone, provides efficient data management, and facilitates a more efficient and prompt response to the ideas, suggestions, or expressions of gratitude received.

For information on how this project handles user data, please see our [Privacy Policy](
https://docs.google.com/document/d/1qbzYB-t7FNheIpwDwrZKmwIt1qsUt3HyhDE_06xl5Xg).

## Demo
[![Box of Thanks Demo](http://img.youtube.com/vi/68hsd-4hr20/0.jpg)](http://www.youtube.com/watch?v=68hsd-4hr20)


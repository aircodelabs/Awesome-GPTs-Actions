# Setup Goole Account

To integrate Google applications into ChatGPT, you first need to configure your Google Cloud account.

## Quick Started

### Step 1: seting up your google account.

1. Create a project in your google cloud account, then open the project's console:

  -  Click the APIs & Services Card 

<img src="https://aircode-yvo.b-cdn.net/resource/1-87a6jcmyqhn.jpg" width="350">

2. Click the Credentials in APIs & Services Page

  - Click the `CREATE CREDENTIALS` button and create a `Service account`.
  - When the new credentials created, copy the email show in the service accounts.

<img src="https://aircode-yvo.b-cdn.net/resource/2-bc7bw4blawh.png" width="450">

3. Click the `Edit` button on the right side of the service account email.

  - At Service Edit Page, switch to the `KEYS` tab and click `ADD KEY`.

<img src="https://aircode-yvo.b-cdn.net/resource/3-z528pvdpqgb.png" width="450">

  - By default, use JSON key and click `CREATE` button. 

<img src="https://aircode-yvo.b-cdn.net/resource/7-o2elhv212vl.jpg" width="350">

  - When the `KEY` is created, the browser will automatically download a JSON file.

<img src="https://aircode-yvo.b-cdn.net/resource/8-brke2kbvpd.jpg" width="350">

 - You should save the json file content, and use it later in the AirCode project.

 Now you have the `private key` and the email of the service, you can share your google sheets or google calendar to the service email and use the `private key` in your aircode projects.
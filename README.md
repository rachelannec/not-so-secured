# Password-Protected Web App

This is a simple web application that requires users to enter a key or password before they can access the content. Please note that this implementation is **very unsecured**, so do not store or display any sensitive information using this app.

## Features

-   Prompt users to enter a password to access content
    
-   Different passwords can redirect users to different content pages
    
-   Basic session handling to remember authentication status
    

## How It Works

1.  **Login Page (index.html)**:
    
    -   Users are prompted to enter a password.
        
    -   The password is checked against predefined values.
        
    -   If the password matches, the user is redirected to the corresponding content page, and their authentication status is stored in session storage.
        
2.  **Content Pages (content-1.html, content-2.html)**:
    
    -   Each content page checks the user's authentication status stored in session storage.
        
    -   If the user is not authenticated, they are redirected back to the login page.
        

## Installation

1.  Clone the repository:
    
bash

```
git clone https://github.com/rachelannec/not-so-secured.git
cd not-so-secured

```

2.  Open the `index.html` file in a web browser.
    

## Usage

1.  Open `index.html` in your browser.
    
2.  Enter the password to access the content.
    
3.  If the password is correct, you will be redirected to the corresponding content page.
    
4.  **Note**: There is no logout functionality, so once authenticated, the session will persist until the browser is closed.
    
5.  You can choose to make the forked repository private or delete it after the person you sent it to has seen the content. This ensures privacy and prevents unauthorized access.
    

### Fun Use Case

-   This app can be a quirky way to confess your feelings to your non-CS/IT crush 😭😆. Just set a message or confession on the content page and give them the password to access it. Remember, it's all in good fun and not for serious or sensitive information!
    

## Note

This implementation is very unsecured and should not be used for protecting sensitive information. It is intended for demonstration purposes only.

## Contributing

Feel free to fork this repository and make improvements. Pull requests are welcome!
<br>
###### Additional Tools Used

-- [CSSGradient](https://cssgradient.io/)
-- [In-Browser Mardown Editor](https://stackedit.io/app#)
-- Copilot

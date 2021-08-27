Storing Next.js Env Vars In macOS Keychain Access
=================================================

This is an example showing how to pull credentails
from macOS Keychain Access in a next.js app so you 
don't have to store them in cleartext. 

The process uses a `.env.development` file as 
a switch so Keychain Access is used locally and
environmental variables stored on your host 
(e.g. netlify) are used in produciton. 



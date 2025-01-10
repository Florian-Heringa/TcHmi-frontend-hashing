## Password hashing and storage in the TwinCAT HMI frontend

Using the [WebCryptoAPI](https://www.w3.org/TR/WebCryptoAPI/#SubtleCrypto-method-digest) digest method. It is quite easy to do frontend password hashing. The hash is stored as a Server Symbol and can easily be compared to a newly entered password. This can be used for front end validation without the need for complete user management.

Since this is done in javascript, the hashing logic is completely exposed in the browser. So this may lead to security issues. Only use in environments where the rest of the system is already locked down (for example with windows user management and kiosk mode) or when the security of the application is not critical.

#### Resources
- [Medium - Using SHA-256 in Javascript](https://remarkablemark.medium.com/how-to-generate-a-sha-256-hash-with-javascript-d3b2696382fd)
- [WebCryptoAPI](https://www.w3.org/TR/WebCryptoAPI/)
- [Beckhoff - TF2000 Server samples - CustomUSerManagement](https://github.com/Beckhoff/TF2000_Server_Samples/tree/master/Extensions/CustomUserManagement)
    - A more secure example where the password hashing is done in the server. Includes actual user management.
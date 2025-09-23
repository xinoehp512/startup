# CS 260 Notes

## GitHub
In this assignment, I learned how to create a repository from a template. I also practiced pushing and pulling from GitHub to a local repository.

## AWS Web Server
In this assignment, I created a web server using AWS. I also assigned an elastic IP address: 54.175.244.41.  
Command to ssh in:   
```
ssh -i 260-super-important-server-password.pem ubuntu@54.175.244.41
```

### Route 53
I acquired the domain name ryanrichards.click.

### Caddy
I updated the Caddy file so that LetsEncrypt would certify my website.

### HTML
`<a href="">` and `<img alt="" src="">`
The `form` element sends to the server the input from each contained input element, labeled with the input element's id.
`<input type="">` and `<select><option></option></select`

Command to deploy:
```
./deployFiles.sh -k ~/OneDrive/Documents/Ryan/.ssh/260-super-important-server-password.pem -h ryanrichards.click -s startup
```

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)


server_name divyamwebsite.work.gd www.divyamwebsite.work.gd;

    location / {
        proxy_pass http://localhost:8001; 
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }




    

server {
    listen 80;
    server_name divyamwebsite.work.gd www.divyamwebsite.work.gd;

    location / {
        proxy_pass http://localhost:3000; # Change 3000 to your Node.js app's port
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    error_log /var/log/nginx/your-domain_error.log;
    access_log /var/log/nginx/your-domain_access.log;
}


server {
    listen 80;
    server_name divyam.publicvm.com www.divyam.publicvm.com;

    location / {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    error_log /var/log/nginx/another-domain_error.log;
    access_log /var/log/nginx/another-domain_access.log;
}



server {
    listen 443 ssl;
    server_name divyam.publicvm.com www.divyam.publicvm.com;

    ssl_certificate /etc/letsencrypt/live/divyam.publicvm.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/divyam.publicvm.com/privkey.pem;

    location / {
        proxy_pass http://localhost:4000; # Change to your Node.js app
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}


const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, I am Divyam Patel and this is my new domain name\n');
});

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

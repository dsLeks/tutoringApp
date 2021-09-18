# Credentials Folder

Server URL: 184.169.234.47
Server Key: alekhyaKey.pem

To view application in Browser; IP Address is: 184.169.234.47:3001

To SSH into Server:

    cd into the application
    cd into credentials
    Run the following command in the folder with ‘alekhyaKey.pem’ present:
    ssh -i "alekhyaKey.pem" ubuntu@184.169.234.47

<strong>Database Credentials</strong>

    Hostname / URL: sfsu-swe-db1.cxmkfkhrgxty.us-west-1.rds.amazonaws.com
    Username: admin
    Password: boltDog4$
    Port: 3306
    Database Name: sfsu-swe-db1

Note: Connection through database can be done through WorkBench. So far, no tables have been created, but database has been connected to receive requests form node server.

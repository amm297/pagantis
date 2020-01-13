FROM mongo

ADD ./*.json /

CMD mongoimport --host mongodb --db pagaCoin --collection users --type json --file /users.json


#!/bin/bash

'''
    Uses the API to write 5 articles to the database for testing.

'''

counter=1
while [ $counter -le 5 ]
do
    IMG=$(base64 testImages/testImg$counter.JPG)
    curl -X 'POST' \
    'http://localhost:5220/article' \
    -H 'accept: */*' \
    -H 'Content-Type: application/json' \
    -d "@-" \
    <<<'{
    "title": "Test Title",
    "body": "Test body",
    "thumbnail": "'$IMG'",
    "seriesID": 0,
    "summary": "Test summary",
    "seriesOrder": 0
    }'
    ((counter++))
done
echo All done

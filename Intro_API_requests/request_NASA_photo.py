# This API request uses NASA API to retrieve a photo from the NASA database

import requests

# create an API request
endpoint = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos'
api_key = 'DEMO_KEY'
query_param = {'api_key': api_key, 'earth_date': '2020-01-01'}
response = requests.get(endpoint, params=query_param)
print(response.json())

# to get a specific photo
photos = response.json()['photos']
print('\n')
print(f'There are {len(photos)} photos')

# click this link!
print(photos[4]['img_src'])
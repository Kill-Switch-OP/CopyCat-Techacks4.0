import os
import hashlib
import io
from flask import Flask, request, jsonify
from flask_cors import CORS
from shazamio import Shazam
import asyncio
import requests

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000", "http://localhost:1234"])

async def recognize_song(file_content):
    shazam = Shazam()
    try:
        # Create a file-like object from the file content
        file_like = io.BytesIO(file_content)

        # Run Shazam recognition
        out = await shazam.recognize_song(file_like)
        return out['track']['key']
    except Exception as e:
        print("Error fetching key for the song")
        print(str(e))
        return str(e)

def compute_sha256_hash(file_content):
    sha256_hash = hashlib.sha256(file_content).hexdigest()
    return sha256_hash

@app.route('/recognize', methods=['POST'])
def recognize_endpoint():
    print("We got a request ")
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    # Read file content into a variable
    file_content = file.read()

    result_key = asyncio.run(recognize_song(file_content))

    result_key_hash = compute_sha256_hash(file_content)
    print("Result Key fetched: " + result_key_hash)

    upload_url = 'http://localhost:1234/artist/upload'

    # Create a new file-like object from the file content
    file_like = io.BytesIO(file_content)

    # Manually build the multipart/form-data request
    files = {'file': ('temp_audio_file.mp3', file_like, 'application/octet-stream')}

    data = {'result_key': result_key_hash}

    if 'owner' in request.form:
        data['owner'] = request.form['owner']

    if 'title' in request.form:
        data['trackTitle'] = request.form['title']

    # Make the POST request with the manually built request
    final_res = requests.post(upload_url, files=files, data=data)

    if final_res.status_code == 200:
        response = jsonify(
            {'result_key': result_key, 'result_key_hash': result_key_hash, 'upload_response': final_res.json()})
    elif final_res.status_code == 403:
        response = jsonify({"data": final_res.json()})
    else:
        response = jsonify({'error': 'Failed to upload to the other API'})

    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/testroute', methods=['POST'])
def test_route():
    return jsonify({'message': 'This is a test route. Your Flask server is up and running!'})

if __name__ == '__main__':
    app.run(debug=True)

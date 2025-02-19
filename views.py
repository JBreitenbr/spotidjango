#from django.shortcuts import render

# Create your views here.from django.shortcuts import render, redirect
from rest_framework.decorators import api_view
from django.template.response import TemplateResponse
from spotipy.oauth2 import SpotifyOAuth, SpotifyClientCredentials
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect

#import credentials
client_ID=''       # Fill in with the value from the Spotify Developer Dashboard
client_SECRET=''   # Fill in with the value from the Spotify Developer Dashboard
redirect_URI="https://juliascodingeckle.pythonanywhere.com/spoti/callback"  # Fill in with the port you want to use -- MUST be one of the
                                                                   # redirect urls as in Spotify Developer Dashboard
#username=''      # Fill in with Spotify username you want to use
scope = "user-read-private playlist-read-private playlist-modify-public user-top-read"  # Set the scope(s)
from django.shortcuts import render
import spotipy


def login(request):
    # Create a SpotifyOAuth object
    sp_oauth = SpotifyOAuth(client_id=client_ID, client_secret=client_SECRET, redirect_uri=redirect_URI, scope = scope)

    # Print the sp_oauth object to the console
    print("\n\nSP_OAuth Object:" ,sp_oauth, "\n\n")

    # Redirect the user to the Spotify login page
    # Get the authorization URL
    url = sp_oauth.get_authorize_url()
    # Print the authorization url to the console
    print(url)

    # Redirect the user to the Spotify login page
    return HttpResponseRedirect(url)

def callback(request):
    # Create a SpotifyOAuth object
    sp_oauth = SpotifyOAuth(client_id=client_ID, client_secret=client_SECRET, redirect_uri=redirect_URI,scope=scope)

    # Get the authorization code from the query parameters
    code = request.GET.get("code")

    # Request an access token using the authorization code
    token_info = sp_oauth.get_access_token(code)

    # Extract the access token
    access_token = token_info["access_token"]

    # Store the access token in a secure way (e.g. in a session or database)
    request.session["access_token"] = access_token

    # Redirect the user to the top tracks page
    return HttpResponseRedirect("/spoti/top-tracks/")


@api_view(['GET'])
def get_top_tracks(request):
    if request.method == 'GET':
         # Get the access token from the session
        access_token = request.session.get("access_token")
        print('\n\n ACCESS TOKEN: ', access_token, '\n\n')

        # Create a Spotipy client using the access token
        sp = spotipy.Spotify(auth=access_token)

        # Make a request to the Spotify API to retrieve the user's profile information
        response = sp.me()

        # Check if the request was successful
        if response is not None:
            # The access token is valid
            print("The access token is valid.\n\n")
        else:
            # The access token is invalid or has expired
            print("The access token is invalid or has expired.\n\n")

        # Set the username
        #username = username

        # Make the HTTP GET request to the Spotify API
        response = sp.current_user_top_tracks(limit=50, offset=3, time_range="short_term")

        # Extract the top tracks from the response
        top_tracks = response["items"]

         # Create a list of dictionaries representing the top tracks
        tracks = []
        for track in top_tracks:
            track_id=sp.search(q='artist:'+track["artists"][0]["name"]+' track:'+track["name"], type='track',market='DE')
            if len(track_id["tracks"]["items"]):
                bildschen=track_id["tracks"]["items"][0]["album"]["images"][1]["url"]
            else:
                bildschen="https://www.dropbox.com/scl/fi/8qgc1tjhc65pwwur8dm5q/cute_skunk.jpeg?rlkey=v14nylcvxgmp83n2hwcqyhqag&st=92s5uok8&raw=1"
            track_info = {
                "name": track["name"],
                "artist": track["artists"][0]["name"],
                "album": track["album"]["name"],
                #"image": track_id["tracks"]["items"][0]["album"]["images"][1]["url"]
                #"image":"https://www.dropbox.com/scl/fi/8qgc1tjhc65pwwur8dm5q/cute_skunk.jpeg?rlkey=v14nylcvxgmp83n2hwcqyhqag&st=92s5uok8&raw=1"
                "image":bildschen
            }
            tracks.append(track_info)
        trackObj={}
        trackObj["tracks"]=tracks
        #tracks.append(access_token)
        # print tracks list to console
        print("\n\n\n\nLIST OF TRACKS:",tracks)

        # Return a JSON response containing the top tracks
        #return JsonResponse(trackObj, safe=False)
        return render(request,'tracks.html',{"tracks":trackObj})
    else:
        error = "An error has occurred"
        return error


@api_view(['POST'])
# Renders the form for creating a playlist
def create_playlist_form(request):
    if request.method == 'POST':
        # Render the create-playlist template
        return TemplateResponse(request, "create-playlist.html")
    else:
        # Return an error message
        return HttpResponse("Method Not Allowed", status=405)


def create_playlist_view(request):
    if request.method == 'POST':
        # Create a SpotifyOAuth object
        sp_oauth = SpotifyOAuth(client_id=credentials.client_ID, client_secret=credentials.client_SECRET, redirect_uri='http://127.0.0.1:5050/music/callback/', scope=credentials.scope)

        # Get the authorization code from the query parameters
        code = request.GET.get("code")

        # Request an access token using the authorization code
        token_info = sp_oauth.get_access_token(code)

        # Extract the access token
        access_token = token_info["access_token"]

        # Store the access token in a secure way (e.g. in a session or database)
        request.session["access_token"] = access_token

        # Get the access token from the session
        access_token = request.session.get("access_token")
        print('\n\n ACCESS TOKEN: ', access_token, '\n\n')

        # Create a Spotipy client using the access token
        sp = spotipy.Spotify(auth=access_token)

        response = sp.me()

        # Check if the request was successful
        if response is not None:
            # The access token is valid
            print("The access token is valid.\n\n")
        else:
            # The access token is invalid or has expired
            print("The access token is invalid or has expired.\n\n")

        # Get the form data from the request
        playlist_name = request.POST.get('playlist_name')
        playlist_description = request.POST.get('playlist_description')

        print("\nPlaylist name: ", playlist_name)
        print("Playlist description:" , playlist_description)
        print("\n")

        print(request.user.username)

        # Create the playlist
        playlist = sp.user_playlist_create(

            #user=request.user.username,
            user=credentials.username, # changed var from user_id
            #user=request.user.username,
            name=playlist_name,
            description=playlist_description
        )

        # Render a template to show the results of the POST request
        return render(request, 'create_playlist_result.html', {
        'playlist_name': playlist_name,
        'playlist_description': playlist_description,
        'playlist_id': playlist['id'],
        })
    else:
        # Render a form template for GET requests
        return TemplateResponse(request, 'create_playlist.html')

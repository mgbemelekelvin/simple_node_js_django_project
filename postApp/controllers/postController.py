import random
from django.shortcuts import render
from ..views import (homeView)
from ..models.postModels import Post
from ..utils import call_service


def home(request):
    return homeView(request)


def getPost(request):
    try:
        # Make sure the post is generated from the click of the button
        if not request.GET:
            # return homeView(request)
            return render(request, 'home.html', {'failed': True, 'pageTitle': 'Welcome to Plaude'})

        # Randomize number in the range 1:100
        number = random.randint(1, 100)

        # Check if data exists in the database already before making the API call
        existing_post = Post.objects.filter(theID=number).first()
        if not existing_post:
            # Send an API call to https://jsonplaceholder.typicode.com/todos/number
            api_url = f'https://jsonplaceholder.typicode.com/todos/{number}'
            res_status, res_data = call_service(url=api_url, method='get')

            if res_status != 200:
                return render(request, 'error.html', {'message': 'Failed to get data'})

            # Save in the database
            data = {
                'theID': res_data['id'],
                'userID': res_data['userId'],
                'title': res_data['title'],
                'completed': res_data['completed'],
            }
            existing_post = Post.objects.create(**data)

        # Call the successful view
        return render(request, 'post.html', {
            'post': existing_post,
            'pageTitle': existing_post.title,
        })
    except Exception as e:
        print(e)
        # Handle other errors if needed
        return render(request, 'error.html', {'message': 'Internal server error'})



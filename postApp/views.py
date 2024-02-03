from django.shortcuts import render


def homeView(request):
    return render(request, 'home.html', {'pageTitle': "Welcome to Plaude"})


def getPostView(request):
    return render(request, 'post.html', {})

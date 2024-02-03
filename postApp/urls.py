from django.urls import path
from . import views
from .controllers.postController import (getPost,home)

urlpatterns = [
    path('', home, name="home"),
    path('getPost', getPost, name="getPost"),
]

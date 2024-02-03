from django.db import models
from django.contrib.auth.admin import User


class Post(models.Model):

    objects = models.Manager()

    theID = models.IntegerField()
    userID = models.IntegerField()
    title = models.CharField(max_length=255)
    completed = models.BooleanField()

    def __str__(self):
        return str(self.theID) + ' | ' + str(self.title)

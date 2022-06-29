from django.urls import path
from .views import ping

app_name = 'baserow.contrib.personal_accounting.api'

urlpatterns = [
  path('ping/', ping),
]

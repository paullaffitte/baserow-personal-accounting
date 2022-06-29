from django.urls import path
from .views import monthly_reports

app_name = 'baserow.contrib.personal_accounting.api'

urlpatterns = [
  path('monthly-reports/', monthly_reports),
]

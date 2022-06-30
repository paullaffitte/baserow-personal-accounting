FROM baserow_backend_dev:latest as dev

COPY ./src ./src/baserow/contrib/personal_accounting

# Override env variables and initial cmd to start up in dev mode.
ENV DJANGO_SETTINGS_MODULE='baserow.config.settings.dev'
CMD ["django-dev"]

from django.apps import AppConfig
from baserow.core.registries import plugin_registry
from .plugins import PersonalAccountingPlugin

class PersonalAccountingConfig(AppConfig):
  name = 'baserow.contrib.personal_accounting'

  def ready(self):
    plugin_registry.register(PersonalAccountingPlugin())

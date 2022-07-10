from django.apps import AppConfig
from .plugins import PersonalAccountingPlugin
from baserow.core.registries import plugin_registry, application_type_registry

class PersonalAccountingConfig(AppConfig):
  name = 'baserow.contrib.personal_accounting'

  def ready(self):
    from .application_types import AccountingReportApplicationType
    plugin_registry.register(PersonalAccountingPlugin())
    application_type_registry.register(AccountingReportApplicationType())

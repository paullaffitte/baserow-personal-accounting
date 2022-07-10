from baserow.core.registries import ApplicationType

from .models import AccountingReport

class AccountingReportApplicationType(ApplicationType):
  type = 'accounting_report'
  model_class = AccountingReport

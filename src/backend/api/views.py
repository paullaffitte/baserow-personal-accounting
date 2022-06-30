from django.http import JsonResponse
from datetime import datetime

def monthly_reports(request):
  from baserow.contrib.database.table.models import Table
  transactions_table = Table.objects.get(pk=253)
  transactions_model = transactions_table.get_model(attribute_names=True)

  month = {
    'debit': 0,
    'credit': 0,
    'flow': 0,
    'cumsum': 0,
    'accountingDate': None,
  }
  monthly_reports = []
  current_month = -1
  for transaction in transactions_model.objects.order_by('accountingdate').all():
    if current_month != transaction.accountingdate.month:
      current_month = transaction.accountingdate.month
      monthly_reports.append(month.copy())
      month['debit'], month['credit'] = 0, 0

    month['debit'] = month['debit'] + transaction.debit
    month['credit'] = month['credit'] + transaction.credit
    month['flow'] = month['credit'] - month['debit']
    month['cumsum'] = month['cumsum'] + transaction.credit - transaction.debit
    month['accountingDate'] = transaction.accountingdate

  return JsonResponse({ 'data': monthly_reports })

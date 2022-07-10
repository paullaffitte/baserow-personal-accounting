import { AccountingReportApplicationType } from '@personal-accounting/applicationTypes'
import { PersonalAccountingPlugin } from '@personal-accounting/plugins'

export default (context) => {
  const { app } = context
  app.$registry.register('plugin', new PersonalAccountingPlugin(context))
  app.$registry.register('application', new AccountingReportApplicationType(context))
}

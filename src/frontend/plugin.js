import dashboardStore from '@personal-accounting/store/dashboard'
import { AccountingReportApplicationType } from '@personal-accounting/applicationTypes'
import { PersonalAccountingPlugin } from '@personal-accounting/plugins'

export default (context) => {
  const { store, app } = context;

  store.registerModule('dashboard', dashboardStore)

  app.$registry.register('plugin', new PersonalAccountingPlugin(context))
  app.$registry.register('application', new AccountingReportApplicationType(context))
}

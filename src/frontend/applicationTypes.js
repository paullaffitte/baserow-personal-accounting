import { ApplicationType } from '@baserow/modules/core/applicationTypes'

import Sidebar from './components/Sidebar'

export class AccountingReportApplicationType extends ApplicationType {
  static getType() {
    return 'accounting_report'
  }

  getIconClass() {
    return 'chart-line'
  }

  getName() {
    return 'Accounting report'
  }

  select(application, { $router, $store }) {
    $store.dispatch('application/select', application)
    $router.push({
      name: 'accounting-dashboard',
      params: {},
    });
    return true
  }

  getSidebarComponent() {
    return Sidebar
  }
}

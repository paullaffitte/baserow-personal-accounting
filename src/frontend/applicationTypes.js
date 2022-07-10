import { ApplicationType } from '@baserow/modules/core/applicationTypes'

import Sidebar from './components/sidebar/Sidebar'

export class AccountingReportApplicationType extends ApplicationType {
  static getType() {
    return 'accounting_report'
  }

  getIconClass() {
    return 'file-alt'
  }

  getName() {
    return 'Accounting report'
  }

  select(application, { $router }) {
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

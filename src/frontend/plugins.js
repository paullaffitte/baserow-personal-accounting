import { BaserowPlugin } from '@baserow/modules/core/plugins'

export class PersonalAccountingPlugin extends BaserowPlugin {
  static getType() {
    return 'personal-accounting'
  }
}

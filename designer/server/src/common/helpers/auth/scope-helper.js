import Boom from '@hapi/boom'

import { hasAdminRole } from '~/src/common/helpers/auth/get-user-session.js'
import config from '~/src/config.js'

/**
 * Pre-handler to check if user management features are available
 */
export const checkUserManagementAccess = {
  method: /** @param { Request | Request<{ Payload: ManageUser }> } request */ (
    request
  ) => {
    if (!config.featureFlagUseEntitlementApi) {
      throw Boom.forbidden('User management is not available')
    }
    const { credentials } = request.auth
    if (!hasAdminRole(credentials.user)) {
      throw Boom.forbidden('Admin access required')
    }
    return true
  }
}

/**
 * @import { Request } from '@hapi/hapi'
 * @import { ManageUser } from '@defra/forms-model'
 */

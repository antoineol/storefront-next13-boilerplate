import { BoilerplateIntegrationContext } from '@vue-storefront/integration-boilerplate-api';
import dotenv from 'dotenv';

dotenv.config();

const config = {
  integrations: {
    /* VSF integration config */
    boilerplate: {
      // location: './packages/prestashop-api/server',
      // location: '../../integrations/prestashop/packages/api-client/server',
      location: '@vue-storefront/integration-boilerplate-api',
      configuration: {},
    },
  },
};

export default config;

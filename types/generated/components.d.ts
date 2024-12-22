import type { Schema, Struct } from '@strapi/strapi';

export interface NavigationRoute extends Struct.ComponentSchema {
  collectionName: 'components_navigation_routes';
  info: {
    description: '';
    displayName: 'route';
    icon: 'bulletList';
  };
  attributes: {
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'navigation.route': NavigationRoute;
    }
  }
}

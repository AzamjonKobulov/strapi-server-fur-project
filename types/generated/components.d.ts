import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksStatBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_stat_blocks';
  info: {
    displayName: 'Stats';
  };
  attributes: {
    stats: Schema.Attribute.Component<'items.stat-item', true>;
  };
}

export interface ItemsStatItem extends Struct.ComponentSchema {
  collectionName: 'components_items_stat_items';
  info: {
    displayName: 'StatItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.stat-block': BlocksStatBlock;
      'items.stat-item': ItemsStatItem;
    }
  }
}

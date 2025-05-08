import { AssetSource, definePlugin } from 'sanity';
import BouOptimizer from './optimizer';
import BouOptimizerIcon from './icon';

export const assetSource: AssetSource = {
  icon: BouOptimizerIcon,
  name: 'bouOptimizer',
  title: 'Bou Image & PDF Optimizer',
  component: BouOptimizer,
};

export const bouOptimizer = definePlugin({
  name: 'bouOptimizer',
  form: {
    file: {
      assetSources: (prev) => {
        return [...prev, assetSource];
      },
    },
    image: {
      assetSources: (prev) => {
        return [...prev, assetSource];
      },
    },
  },
});

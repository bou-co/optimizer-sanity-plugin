import { AssetSource, definePlugin } from 'sanity';
import BouOptimizer from './optimizer';
import BouOptimizerIcon from './icon';

export const imageAssetSource: AssetSource = {
  icon: BouOptimizerIcon,
  name: 'bouOptimizer',
  title: 'Bou Image Optimizer',
  component: BouOptimizer,
};

export const pdfAssetSource: AssetSource = {
  icon: BouOptimizerIcon,
  name: 'bouOptimizer',
  title: 'Bou PDF Optimizer',
  component: BouOptimizer,
};

export const bouOptimizer = definePlugin({
  name: 'bouOptimizer',
  form: {
    file: {
      assetSources: (prev) => {
        return [...prev, imageAssetSource];
      },
    },
    image: {
      assetSources: (prev) => {
        return [...prev, pdfAssetSource];
      },
    },
  },
});

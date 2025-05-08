import { useCallback, useEffect } from 'react';
import { Dialog } from '@sanity/ui';
import { AssetSourceComponentProps, File as SanityFile } from 'sanity';

const dialogStyles = {
  height: '800px',
};

const frameStyles = {
  minHeight: '650px',
  width: '100%',
  height: '100%',
  border: 'none',
};

interface Message {
  event: string;
  blob: Blob;
  filename: string;
}

const BouOptimizer = ({ onClose, onSelect }: AssetSourceComponentProps) => {
  const uploadListener = useCallback(
    (event: MessageEvent<Message>) => {
      if (event.data.event === 'optimized_file_upload') {
        const file = new File([event.data.blob], event.data.filename, {
          type: 'image/jpeg',
        }) as unknown as SanityFile;

        onSelect([
          {
            kind: 'file',
            value: file,
          },
        ]);
      }
    },
    [onSelect],
  );

  useEffect(() => {
    window.addEventListener('message', uploadListener);
    return () => window.removeEventListener('message', uploadListener);
  }, [uploadListener]);

  return (
    <Dialog style={dialogStyles} id="bou-optimizer" header="Bou Image Optimizer" onClose={onClose} width={2} open>
      <iframe style={frameStyles} src="https://optimizer.bou.app" title="uploader" />
    </Dialog>
  );
};

export default BouOptimizer;

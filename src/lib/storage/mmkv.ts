import {MMKV, Mode} from 'react-native-mmkv';

export const storage = new MMKV({
  id: `products-app-storage`,
  path: '/storage',
  encryptionKey: 'hunter2',
  mode: Mode.MULTI_PROCESS,
});

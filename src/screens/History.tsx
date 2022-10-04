import { VStack } from 'native-base';

import { HistoryCard } from '@components/HistoryCard';
import { ScreenHeader } from '@components/ScreenHeader';

export function History() {
  return (
    <VStack flex={1}>
      <ScreenHeader title='Histórico' />

      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
    </VStack>
  );
}
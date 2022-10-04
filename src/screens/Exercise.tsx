import { TouchableOpacity } from 'react-native';
import { Icon, VStack } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

export function Exercise() {

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={12}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon 
            as={Feather}
            name="arrow-left"
            color="green.500"
            size={6}
          />
        </TouchableOpacity>
      </VStack>
    </VStack>
  );
}
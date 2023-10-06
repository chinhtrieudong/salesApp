import React from 'react'
import { Box, Button, Heading, Image, Input, VStack, Pressable, Text } from 'native-base'
import Colors from '../Colors'
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const LoginScreen = () => {
  return (
    <>
    <Box flex={1} bg={Colors.black}>
      <Image flex={1} alt='Logo' 
        resizeMethod='cover'
        size={"lg"}
        w={"full"}
        source={require('../../assets/cover.png')}/>
    </Box>
    <Box w="full" 
      h="full" 
      position="absolute" 
      top="0" 
      px="6px" 
      justifyContent="center"
    >
      <Heading>LOGIN</Heading>
      <VStack space={8} pt="6">
        <Input 
          InputLeftElement={
            <MaterialIcons name="email" size={24} color={Colors.main} />
          }
          variant="underlined"
          placeholder='user@gmail.com'
          w="70%"
          pl={2}
          color={Colors.main}
          borderBottomColor={Colors.underline}
        />
        {/* PASSWORD */}
        <Input 
          InputLeftElement={
            <Ionicons name="eye" size={20} color={Colors.main} />          }
          variant="underlined"
          placeholder='********'
          w="70%"
          type='password'
          pl={2}
          color={Colors.main}
          borderBottomColor={Colors.underline}
        />

      </VStack> 
      <Button 
        _pressed={{
          bg: Colors.main,
        }}
        _text={{
          color: Colors.white,
        }}
        my={30} w="40%" rounded={50} bg={Colors.main}>
        LOGIN
      </Button>
      <Pressable mt={4}>
        <Text color={Colors.deepGray}>SIGN UP</Text>
      </Pressable>
    </Box>
    </>
  )
}

export default LoginScreen
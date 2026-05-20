import React, { useState } from "react";
import { Image } from "react-native";
import { useRouter } from "expo-router";

import {
  YStack,
  XStack,
  Text,
  Input,
  Button,
  Card,
} from "tamagui";

import {
  Eye,
  EyeOff,
} from "@tamagui/lucide-icons";

export default function TelaCadastro() {

  const router = useRouter();

  const [mostrarSenha, setMostrarSenha] = useState(false);

  const [mostrarConfirmar, setMostrarConfirmar] =
    useState(false);

  function cadastrar() {
    router.replace("/");
  }

  return (
    <YStack
      flex={1}
      backgroundColor="#A8C7D6"
      justifyContent="center"
      alignItems="center"
      padding="$4"
    >

      {/* Logo */}
      <XStack
        alignItems="center"
        marginBottom="$6"
      >
        <Text
          fontSize={60}
          fontWeight="bold"
          color="white"
        >
          +Saúde
        </Text>

        <Image
          source={require("@/assets/images/folha.png")}
          style={{
            width: 45,
            height: 45,
            marginLeft: 5,
          }}
        />
      </XStack>

      {/* Card */}
      <Card
        width="95%"
        backgroundColor="#ECECEC"
        borderRadius="$8"
        padding="$5"
        elevate
      >
        <YStack gap="$3">

          {/* Nome */}
          <Text
            fontSize={16}
            fontWeight="700"
            color="#666"
          >
            Nome:
          </Text>

          <Input
            size="$4"
            borderColor="black"
            backgroundColor="white"
          />

          {/* Email */}
          <Text
            fontSize={16}
            fontWeight="700"
            color="#666"
          >
            Email:
          </Text>

          <Input
            size="$4"
            borderColor="black"
            backgroundColor="white"
          />

          {/* CPF */}
          <Text
            fontSize={16}
            fontWeight="700"
            color="#666"
          >
            CPF:
          </Text>

          <Input
            size="$4"
            borderColor="black"
            backgroundColor="white"
          />

          {/* Senha */}
          <Text
            fontSize={16}
            fontWeight="700"
            color="#666"
          >
            Senha:
          </Text>

          <XStack
            alignItems="center"
            borderWidth={1}
            borderColor="black"
            borderRadius="$4"
            backgroundColor="white"
            paddingRight="$3"
          >
            <Input
              flex={1}
              borderWidth={0}
              secureTextEntry={!mostrarSenha}
            />

            <Text
              onPress={() =>
                setMostrarSenha(!mostrarSenha)
              }
            >
              {mostrarSenha ? (
                <EyeOff size={24} />
              ) : (
                <Eye size={24} />
              )}
            </Text>
          </XStack>

          {/* Confirmar senha */}
          <Text
            fontSize={16}
            fontWeight="700"
            color="#666"
          >
            Confirmar senha:
          </Text>

          <XStack
            alignItems="center"
            borderWidth={1}
            borderColor="black"
            borderRadius="$4"
            backgroundColor="white"
            paddingRight="$3"
          >
            <Input
              flex={1}
              borderWidth={0}
              secureTextEntry={!mostrarConfirmar}
            />

            <Text
              onPress={() =>
                setMostrarConfirmar(
                  !mostrarConfirmar
                )
              }
            >
              {mostrarConfirmar ? (
                <EyeOff size={24} />
              ) : (
                <Eye size={24} />
              )}
            </Text>
          </XStack>

          {/* Data */}
          <Text
            fontSize={16}
            fontWeight="700"
            color="#666"
          >
            Data nascimento:
          </Text>

          <Input
            width={180}
            placeholder="dd/mm/aaaa"
            size="$4"
            borderColor="black"
            backgroundColor="white"
          />

          {/* Botão */}
          <Button
            alignSelf="center"
            width={180}
            height={50}
            backgroundColor="#0A4A78"
            color="white"
            fontSize={24}
            fontWeight="700"
            marginTop="$4"
            onPress={cadastrar}
          >
            Cadastrar
          </Button>

        </YStack>
      </Card>

    </YStack>
  );
}
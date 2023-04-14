import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (name: string, value: any)=> {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(name, jsonValue);
  } catch (error) {
    console.error(error);
  }
}

export const retrieveData = async (name: string) : Promise<any> => {
  try {
    const jsonValue = await AsyncStorage.getItem(name);

    if (jsonValue !== null) {
      return JSON.parse(jsonValue)
    }

    return null
  } catch (error) {
    console.error(error);
  }
}
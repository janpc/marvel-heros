declare global {
  type RootStackParamList = {
    Login: undefined;
    HeroList: undefined;
    HeroDetails: { id: number };
  };
}

export interface RootStackParamList{};
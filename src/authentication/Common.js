export const snsPayloadParser = {
    NAVER: (payload) => ({
      id: payload.id,
      name: payload.nickname,
      email: payload.email+"_N",
      platform: 'naver',
    }),
    GOOGLE: (payload) => ({
      id: payload.profileObj.googleId,
      name: payload.profileObj.name,
      gender: false,
      email: payload.profileObj.email,
      platform: 'google',
    }),
    KAKAO: (payload) => ({
      id: payload.profile.id,
      name: payload.profile.properties.nickname,
      email: payload.profile.kakao_account.email+"_K",
      platform: 'kakao'
    }),
  };
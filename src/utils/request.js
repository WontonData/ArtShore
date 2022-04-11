
import qs from "qs";
export let login = (username, password) => {
  return uni.request({
    url: 'login',
    data: {
      username: username,
      password: password
    },
    method: 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  })
}
export let getUserInfo = async function () {
  return uni.request({
    url: 'userInfo',
    method: 'GET',
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  })
}
export let nftCreateItem = async function (nft, coverFile, files) {
  return uni.request({
    url: 'nft/createItem',
    data: qs.stringify({
      ...nft,
      coverFile: coverFile,
      nftFileList: files,
    },
    {arrayFormat: 'indies',allowDots: true}),
    method: 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  })
}
export let nftCreateBlindBox = async function (nft, coverFile, pillFile, files) {
  return uni.request({
    url: 'nft/createBlindBox',
    data: qs.stringify({
      ...nft,
      coverFile: coverFile,
      pillFile: pillFile,
      nftFileList: files,
    },
    {arrayFormat: 'indies',allowDots: true}),
    method: 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  })
}
// let getUserInfo = async function() {
//   return uni.request({
//     url: 'userInfo',
//     data: {
//       username: username,
//       password: password
//     },
//     method: 'GET',
//     header: {
//       'content-type': 'application/x-www-form-urlencoded'
//     }
//   })
// }
// export { getUserInfo}
// exports.getUserInfo = async function() {
//   return uni.request({
//     url: 'userInfo',
//     data: {
//       username: username,
//       password: password
//     },
//     method: 'GET',
//     header: {
//       'content-type': 'application/x-www-form-urlencoded'
//     }
//   })
// }